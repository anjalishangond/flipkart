import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import

const GenAI = () => {

    const [show, setShow] = useState('');
    const location = useLocation(); // Use the useLocation hook
    
    const queryParams = new URLSearchParams(location.search);
    const imageId = queryParams.get('imageId'); // Get the imageId from the URL parameter


    const itemsShow = (e) => {
        e.preventDefault();
        if (show === e.target.name) setShow('')
        else setShow(e.target.name);
    }
  return (
    <div>
        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-1 mt-12 mx-6 rounded'>
                <div className='bg-blue-100'>
                    <h1 className='p-2'>Hello</h1>
                    <h1 className='p-2'>Image ID: {imageId} </h1>
                </div>
                <h1 className='m-2'>Try:</h1>
                <br></br>
                <form className='flex flex-column flex-wrap bg-pink-50' >
                    <div>
                        <button className='w-full p-1 m-2 bg-blue-500 text-white rounded-lg' name='similarItems' onClick={itemsShow}>{show === 'similarItems' ? 'Hide Similar Items' : 'Find Similar Items'}</button>
                    </div>
                    <div>
                        <button className='p-1 m-2 bg-blue-500 text-white rounded-lg' name='custReviews' onClick={itemsShow}>{show === 'custReviews' ? 'Hide Customer Reviews' : 'Customer Reviews'}</button>
                    </div>
                    <div>
                        <button className='p-1 m-2 bg-blue-500 text-white rounded-lg' name='airec' onClick={itemsShow}>{show === 'airec' ? 'Hide AI Recommendations' : 'AI Recommendations'}</button>
                    </div>
                    

                </form>
            </div>
            <div className='col-span-3' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {show==='similarItems' ? 'Item is shown' : show==='custReviews'?'Customer':show==='airec'?'AI Recommendations':''}
            </div>
        </div>
    </div>
  )
}

export default GenAI