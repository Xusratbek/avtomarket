import React from 'react'
import nexia3 from '../Home/nexia3.png'
import lada from '../Home/lada.png'
import lomborghini from '../Home/lamborgini.png'
import ferrari from '../Home/ferrari.png'





const Home = () => {
  const models = [
    { name: "CHEVROLET", img: nexia3 },
    { name: "LADA", img: lada },
    { name: "LAMBORGHINI", img: lomborghini },
    { name: "FERRARI", img:  ferrari},
  ];
  return (                                   
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="mb-4 text-sm text-gray-600">
      <span className="mr-2">Bosh sahifa</span> &gt; <span className="ml-2">Modellari</span>
    </div>
    <h1 className="text-4xl font-bold mb-8">Modellari</h1>
    <div className="flex justify-end mb-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Admin o‘tish
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {models.map((model, index) => (
        <div key={index} className="text-center">
          <img src={model.img} alt={model.name} className="mx-auto mb-4 rounded-lg shadow-lg" />
          <p className="font-semibold text-lg">{model.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Home



