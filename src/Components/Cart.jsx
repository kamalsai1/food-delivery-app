import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Cart.css'
function Cart() {
  const [Cart, setcart] = useState([])
  const fetchData2 = async () => {
    const response = await fetch("http://localhost:3002/users");
    const data = await response.json();
    return setcart(data);
  }
  useEffect(() => {
    fetchData2();
  }, [])
  const [price, setprice] = useState(0);
  useEffect(() => {
    var ans = 0;
    Cart.forEach(element => {
      ans += (element.price * element.qty)
    });
    setprice(ans)
  }, [Cart])

  async function removecart(a) {
    await axios.delete(`http://localhost:3002/users/${a}`);
    fetchData2()
  }

  function check(){
    Cart.map((x)=>(alert(`item name:${x.name}, item price:₹${x.price * x.qty}, item quantity:${x.qty}`)))
  }

  return (
    <div className='cartMain'>
      <div className='cartitems'>
        {Cart.map((x) =>
        (
          <div key={x.id}>
            <div className='box'>
              <div className='hotel'><h2>{x.name}</h2></div>
              <div className='price'><p>Quantity:{x.qty}</p></div>
              <div className='price'><p>₹{x.price * x.qty}</p></div>
            </div>
            <div className='del'><button onClick={() => removecart(x.id)}><i className="bi bi-trash"></i></button></div>
          </div>
        ))}
      </div>
      <div><p>TOTAL CART VALUE : {price}</p></div>
      {Cart.length === 0 ? <div><p>Find delicious food at...<Link to="/Cuisine">find here</Link></p></div> : <div><p>Order now</p><button onClick={()=>check()}>Check out</button></div>}
    </div>

  )
}

export default Cart;
