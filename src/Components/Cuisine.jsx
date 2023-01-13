import React from 'react'
import {useState,useEffect,useContext} from 'react'
import './Cuisine.css'
import Items from './Items'

function Cuisine() {

  const [Data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3002/data");
        const data = await response.json();
        return setData(data);
  }
  useEffect(() => {
  fetchData();
  },[])
  const [sort_feat,setSort] = useState("default")
    
  var render;
  if(sort_feat==="default"){
      render = 
      <div className='cuisine_box'>
          {
          Data.map(item_info => {
                  return(
                  <Items item = {item_info} />
                  )
              })
      }
          </div>
      
  }
  else if(sort_feat==="time"){
      render = 
      <div className='cuisine_box'>
              {
          Data.sort((a,b)=> {return(a.time-b.time)}).map(item_info => {
                  return(
                  <Items item = {item_info} />
                  )
              })
      }
          </div>
      
  }
  else if(sort_feat==="cost"){
      render = 
      <div className='cuisine_box'>
              {
         Data.sort((a,b)=> {return(a.price-b.price)}).map(item_info => {
                  return(
                  <Items item = {item_info} />
                  )
              })
      }
          </div>
      
  }
  else if(sort_feat==="cost_r"){
      render = 
          <div className='cuisine_box'>
              {
          Data.sort((a,b)=> {return(b.price-a.price)}).map(item_info => {
                  return(
                  <Items item = {item_info} />
                  )
              })
      }
          </div>
      
  }
  else if(sort_feat==="rating"){
      render =                         
      Data.sort((a,b)=> {return(a.rating-b.rating)}).map(item_info => {
                  return(
                  <Items item = {item_info} />
                  )
       })            
  }
  return(
    <div className='items'>
      <div class="sortBy">
        <div class="sort_opt" onClick={()=>setSort("time")}>Time</div>
        <div class="sort_opt" onClick={()=>setSort("rating")}>Rating</div>
        <div class="sort_opt" onClick={()=>setSort("cost")}>Cost:High to Low</div>
        <div class="sort_opt" onClick={()=>setSort("cost_r")}>Cost:Low to High</div>
      </div>
      
        {render}
      
    </div>
  )
}

export default Cuisine
