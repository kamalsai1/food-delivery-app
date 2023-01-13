import React from 'react'
import './Items.css'
import axios from 'axios'
import { useState } from 'react';
function Items(props) {
  const [quantity, setquantity] = useState([])
  let qty = 1;
  async function addtocart(a, b) {
    let isExisting = false;
    const result = await axios.get("http://localhost:3002/users");
    if (result.data.length === 0) {
      const orderitem = { name: a, price: b, qty: qty };
      setquantity(qty)
      axios.post("http://localhost:3002/users", orderitem);
    }
    else {
      result.data.map((orderitem) => {
        if (a === orderitem.name) {
          orderitem.qty += 1;
          setquantity(orderitem.qty)
          const order = {
            name: orderitem.name,
            price: b,
            qty: orderitem.qty,
          };
          axios.put(`http://localhost:3002/users/${orderitem.id}`, order);
          isExisting = true;
        }
      })
      if (isExisting === false) {

        const order = {
          name: a,
          price: b,
          qty: qty
        }
        setquantity(qty)
        axios.post("http://localhost:3002/users", order)
      }
    }
  }
  async function removecart(a) {
    let isExisting=false;
    const result = await axios.get("http://localhost:3002/users");
    if (result.data.length === 0) {
      alert('cart is already empty');
    }
    else {
      result.data.map((orderitem) => {
        if (a === orderitem.name) {
          if(orderitem.qty>1){
          orderitem.qty -= 1;
          setquantity(orderitem.qty)
          const order = {
            name: orderitem.name,
            price: orderitem.price,
            qty: orderitem.qty,
          };
          axios.put(`http://localhost:3002/users/${orderitem.id}`, order);
          isExisting=true
        }
        else if(orderitem.qty===1){
          axios.delete(`http://localhost:3002/users/${orderitem.id}`);
          setquantity(0)
          isExisting=true
        }
      }
      })
      if(isExisting===false){
        alert('Item quantity already 0')
      }
    }
  }

  return (
    <div className='itemBox'>
      <div className='imageg'><img src={require("" + props.item.img)} alt='licious..' /></div>
      <div className='hotel'><h2>{props.item.menu}</h2></div>
      <div className='cuisine'><h3>{props.item.cuisine}</h3></div>
      <div className='box1'>
        <div className='price'><p>₹{props.item.price}</p></div>
        <div className='time'><p>Delivery in {props.item.time} mins</p></div>
        <div className='rate'><p>Rate:☆{props.item.rate}</p></div>
      </div>
      <div className='box1'>
        <div><button onClick={() => removecart(props.item.menu)}><i class="bi bi-trash"></i></button></div>
        <div className='disp'>{quantity > 0 ? <p><i className="bi bi-cart4"></i> {quantity}</p> : <p>Add to cart</p>}</div>
        <div><button onClick={() => addtocart(props.item.menu, props.item.price)}>+</button></div>
      </div>
    </div>
  )
}

export default Items
