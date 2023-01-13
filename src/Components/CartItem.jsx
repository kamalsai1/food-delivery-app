import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function CartItem(props) {
  const qty=1;
  const[quantity,setquantity]=useState()
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
    <div className='box'>
        <div className='hotel'><h2>{props.item.name}</h2></div>
        <div className='price'><p>Quantity:{props.item.qty}</p></div>
        <div className='price'><p>₹{props.item.price * props.item.qty}</p></div>
        <div className='btn'>
          <div className='remove'><button onClick={()=>removecart()}>-</button></div>
          <div className='add'><button onClick={()=>addtocart(props.item.name,props.item.price)}>+</button></div>     
        </div>
    </div>
  )
}

export default CartItem