import React   from 'react'; 
export default function Recommend({imageId}) {  
    const getImagePath =  (e) => {
        console.log('handle image function working')
       const imagePathArray = e.target.src.split('/')
       const imageName = imagePathArray[imagePathArray.length -1];
       console.log(imageName)
      }
  return (
    <div>
        <h2  >This are recommended indexes </h2>
   <div>
        this is dummy text
            <img src={`${process.env.PUBLIC_URL}/images/${imageId}.jpeg`} alt='work' onClick={getImagePath} />
       </div>
  </div>
  )
}
