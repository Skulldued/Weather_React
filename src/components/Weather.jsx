import React from 'react'
import useGeolocation from '../hooks/useGeolocation'

export default function Weather(){
    const {loading, error, data:geoData} = useGeolocation(); //Fetching data from here
 
    if(loading){
        return <p className='text-blue-500 text-lg text-center font-bold'>Loading...</p>
    }

    if(error){
        return(
            <p className='text-red-500 text-lg text-center font-bold'>Error : {error.message}</p>
        )
    }
  
     return(
        <div className='bg-gradient-to-b from-blue-500 to bg-indigo-500 shadow-lg rounded-lg p-7 mt-10'>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
               Your Co-Ordinates
            </h2>
            <p>
                <span className='text-black'>Latitudes:{geoData.latitude}</span>
            </p>
            <p>
                <span className='text-black'>Longitude:{geoData.longitude}</span>
            </p>
        </div>
     )
    
  
}


