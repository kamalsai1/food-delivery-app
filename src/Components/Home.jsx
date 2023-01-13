import React,{useState,useEffect} from 'react'
import photo from "./images/img_main.jpg"
import './Home.css'
import Footer from './Footer'
import Gallery from './Gallery'
import Items from './Items'
function Home() {
  const [Data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3002/data?trending=true");
        const data = await response.json();
        return setData(data);
  }
  useEffect(() => {
  fetchData();
  },[])
  

  return (
    <div className='main'>
      <div className='home'>
        <div className='img'>
          <img src={photo} alt="loading..." />
        </div>
        <div className='caption'>
          <h1>Authentic food at your door step!</h1>
        </div>
      </div>
      <section id='Gallery'>
        <Gallery />
      </section>
      <section id='items'>
        <div className='items'>
          {Data.map((x)=>
          (
            <Items item={x} key={x.id}/>
          ))}
        </div>
        
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home
