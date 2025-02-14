import React,{useState} from 'react'
import malibu2 from '../Home/malibu2.png'
import malibu from '../Home/malibu.png'
import update from '../Home/update.png'

const Outside = () => {
    const [view, setView] = useState("tashqi"); // Bosilgan checkboxni kuzatish uchun state

    const handleViewChange = (e) => {
      setView(e.target.value);
    };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">
            Bosh sahifa
          </a>{" "}
          &gt;{" "}
          <a href="/" className="hover:underline">
            Modellari
          </a>{" "}
          &gt; Chevrolet turlari
        </nav>

        <h1 className="text-3xl font-bold mb-8">Modellari</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Car Details Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">CHEVROLET MALIBU</h2>
            <p className="text-gray-700 text-lg mb-4">329 900 000 so‘m dan</p>
            <img
              src={malibu2}
              alt="Chevrolet Malibu"
              className="w-full h-48 object-cover mb-4"
            />
            <ul className="text-gray-700">
              <li><strong>Marka:</strong> CHEVROLET</li>
              <li><strong>Tanrovkasi:</strong> Yo‘q</li>
              <li><strong>Motor:</strong> 1.6</li>
              <li><strong>Year:</strong> 2016</li>
              <li><strong>Color:</strong> Oq</li>
              <li><strong>Distance:</strong> 3000 km</li>
              <li><strong>Gearbook:</strong> Avtomat karobka</li>
              <li><strong>Description:</strong> Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki juda ham akurato haydalgan.</li>
            </ul>
            <p className="text-lg font-semibold mt-4">
              Umumiy xarajat: 329 900 000 so‘m dan
            </p>
          </div>

          {/* Car Image and Options */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img
             src={view === "tashqi" ? malibu : update}
              alt="Car View"
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-gray-500 text-sm mb-6">
              Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
            </p>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="view"
                  value="tashqi"
                  checked={view === "tashqi"}
                  onChange={handleViewChange}
                  className="mr-2"
                />
                Tashqi
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="view"
                  value="ichki"
                  checked={view === "ichki"}
                  onChange={handleViewChange}
                  className="mr-2"
                />
                Ichki makon
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Outside