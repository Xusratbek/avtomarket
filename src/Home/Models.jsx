import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Models = () => {
  const [setCars, cars] = useState([])
  useEffect(() => {
    getCars()

  }, [])

  const getCars = () => {
    axios({
      url: "https://carsales-iysh.onrender.com/get_cars?category=lada",
      method: "get"
    }).then((res) => {
      console.log(res.data);

    })
  }


  return (
    <div></div>
    //   <div className="p-6">
    //   <div className="text-gray-600 text-sm mb-4">
    //     <span>Bosh sahifa &gt; Modellari &gt; Chevrolet turlari</span>
    //   </div>

    //   <div className="flex justify-between mt-8">
    //   <h1 className="text-4xl font-bold mb-8">Modellar turlari</h1>

    //     <button className="bg-blue-500 text-white h-[50px] px-6 rounded-lg hover:bg-blue-600">
    //       Admin o'tish
    //     </button>
    //   </div>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //     {cars.map((car) => (
    //       <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
    //         <img
    //           src={car.image} // Rasmlarni "public/images" papkasiga joylashtirish kerak
    //           alt={car.name}
    //           className="w-full h-48 object-cover"
    //         />
    //         <div className="p-4 text-center">
    //           <h2 className="text-lg font-bold">{car.name}</h2>
    //           <p className="text-gray-700">Narxi: {car.price}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    // </div>
  )
}

export default Models