import React, { useState } from "react";

const AdminPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);

  const openCarModal = () => setIsCarModalOpen(true);
  const closeCarModal = () => setIsCarModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-700">Admin Panel</h1>
        </div>
        <ul className="mt-4">
          <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
            <span className="mr-2">🏠</span> E'lonlar
          </li>
          <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
            <span className="mr-2">❓</span> Savollar
          </li>
        </ul>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <span>☀️</span>
          <span>🌙</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white border-b">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Asosiyga qaytish
          </button>
          <div className="flex items-center">
            <span className="mr-4">🔔</span>
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Table Section */}
        <div className="p-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Mashinalar</h2>
              <div className="flex space-x-4">
                <button
                  onClick={openModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Kategoriya qo'shish
                </button>
                <button onClick={openCarModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Mashina qo'shish
                </button>
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">#</th>
                  <th className="border-b p-2">Markasi</th>
                  <th className="border-b p-2">Gearbox</th>
                  <th className="border-b p-2">Tanirovkasi</th>
                  <th className="border-b p-2">Motor</th>
                  <th className="border-b p-2">Year</th>
                  <th className="border-b p-2">Color</th>
                  <th className="border-b p-2">Distance</th>
                  <th className="border-b p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <tr key={index}>
                      <td className="border-b p-2">{index + 1}</td>
                      <td className="border-b p-2">CHEVROLET</td>
                      <td className="border-b p-2">Avtomat karobka</td>
                      <td className="border-b p-2">Yo'q</td>
                      <td className="border-b p-2">1.6</td>
                      <td className="border-b p-2">2016</td>
                      <td className="border-b p-2">Oq</td>
                      <td className="border-b p-2">3000km</td>
                      <td className="border-b p-2 text-blue-500 cursor-pointer">
                        →
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4">
              <button className="px-4 py-2 border rounded-l hover:bg-gray-200">
                ←
              </button>
              <span className="px-4 py-2 border-t border-b">1</span>
              <button className="px-4 py-2 border rounded-r hover:bg-gray-200">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <>
    {/* Backdrop (orqa fon) */}
    <div className="fixed inset-0  bg-opacity-50 z-40"></div>

    {/* Modal */}
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h3 className="text-lg font-bold mb-4">Kategoriya qo‘shish</h3>
        <label className="block mb-2 font-medium">Nomi</label>
        <input
          type="text"
          placeholder="Kategoriya nomi"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Saqlash
          </button>
        </div>
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>
    </div>
  </>
)}

{isCarModalOpen && (
  <>
    <div className="fixed inset-0  bg-opacity-50 z-40"></div>
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
        <button
          onClick={closeCarModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
        >
          ×
        </button>
        <h3 className="text-lg font-bold mb-4">Mashina qo‘shish</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Model</label>
            <input
              type="text"
              placeholder="CHEVROLET"
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <div>
            <label className="block font-medium">Transmission</label>
            <input
              type="text"
              placeholder="Avtomat"
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <div>
            <label className="block font-medium">Turbo</label>
            <input
              type="text"
              placeholder="Yo'q"
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <div>
            <label className="block font-medium">Engine</label>
            <input
              type="text"
              placeholder="1.8"
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <div>
            <label className="block font-medium">Yili</label>
            <input
              type="text"
              placeholder="2016"
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <div>
            <label className="block font-medium">Rangi</label>
            <input
              type="text"
              placeholder="Oq"
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Description</label>
            <textarea
              placeholder="Mashina haqida ma'lumot"
              className="w-full p-2 border rounded mb-2"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={closeCarModal}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  </>
)}




    </div>
  );
};

export default AdminPanel;
