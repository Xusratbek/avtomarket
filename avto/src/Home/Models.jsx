import React from 'react'
import tahoe from '../Home/tahoe.png'
import damas from '../Home/damas.png'
import equinox from '../Home/equniox.png'
import nexia from '../Home/nexia 2.jpg'
import malibu from '../Home/mailuby.png'
const Models = () => {
    const cars = [
        { id: 1, name: "CHEVROLET TAHOE", price: "329 900 000", image: tahoe },
        { id: 2, name: "CHEVROLET DAMAS VAN", price: "329 900 000", image: damas },
        { id: 3, name: "CHEVROLET EQUINOX", price: "329 900 000", image: equinox },
        { id: 4, name: "CHEVROLET NEXIA", price: "329 900 000", image: nexia },
        { id: 5, name: "CHEVROLET MALIBU", price: "329 900 000", image: malibu },
        { id: 6, name: "CHEVROLET MALIBU", price: "329 900 000", image: malibu },
        { id: 7, name: "CHEVROLET MALIBU", price: "329 900 000", image: malibu },
        { id: 8, name: "CHEVROLET MALIBU", price: "329 900 000", image: malibu },
      ];
    
  return (
    <div className="p-6">
    <div className="text-gray-600 text-sm mb-4">
      <span>Bosh sahifa &gt; Modellari &gt; Chevrolet turlari</span>
    </div>

    <div className="flex justify-between mt-8">
    <h1 className="text-4xl font-bold mb-8">Modellar turlari</h1>

      <button className="bg-blue-500 text-white h-[50px] px-6 rounded-lg hover:bg-blue-600">
        Admin o'tish
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cars.map((car) => (
        <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={car.image} // Rasmlarni "public/images" papkasiga joylashtirish kerak
            alt={car.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-lg font-bold">{car.name}</h2>
            <p className="text-gray-700">Narxi: {car.price}</p>
          </div>
        </div>
      ))}
    </div>
    
  </div>
  )
}

export default Models