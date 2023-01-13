import React from 'react'
import './Gallery.css'
import Image from './Image'
import img0 from './images/indian.jpeg'
import img1 from './images/mexican.webp'
import img2 from './images/chineese.webp'
import img3 from './images/italian.webp'
import img4 from './images/spanish.webp'
function Gallery() {
  return (
    <div className='container'>
      <Image image={img0}/>
      {/* <div className='image'><h1>GALLERY</h1></div> */}
      <Image content='GALLERY' />
      <Image image={img1} />
      <Image image={img2}/>
      <Image image={img3}/>
      <Image image={img4}/>
    </div>

  )
}

export default Gallery
