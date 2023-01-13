import React from 'react'

function Image(props) {
  return (
    <div className='image'>
      {props.image && <img src={props.image} alt='Delicious food awaits'/>}
      <div className='content'><h3>{props.content}</h3></div>
    </div>
  )
}

export default Image
