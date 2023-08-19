import React ,{useEffect, useState} from 'react'

export default function ShowPopUP({imageId , enablePopUP}) {

// const [isVisible, setIsVisible] = useState(false)
//  const handlePopclick = () =>{
//     console.log('cliecke')
//     setIsVisible(false)

// const modal = document.querySelector('.modal')

//     console.log(isVisible)
//     if(!isVisible ){
//     console.log(modal)
//     modal.style.display = 'none'
// }
// else
// modal.style.display = 'block'
//  }


//  useEffect(() => { 
//     setIsVisible(true)
//     const modal = document.querySelector('.modal')
//     console.log(isVisible)
//     if(!isVisible ){
//     console.log(modal)
//     modal.style.display = 'none'
// }
// else
// modal.style.display = 'block'
//  } , [enablePopUP])
  return (
        <div className='modal'>
        <div className='modal-content'>
      <img src={`${process.env.PUBLIC_URL}/images/${imageId}.jpeg`} alt='work' />
      <div className='product-description'>
        <h2><b>Image Name</b></h2>
        <span class="close"  >&times;</span>
        <h3><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, temporibus</b></h3>
        <h3>Cost: <span className='item-cost'>$30</span></h3>
        <button className='add-to-cart-button'>Add to cart</button>
      </div>
        </div>
    </div>
    
  )
}
