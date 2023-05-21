import React from 'react';
// import axios from "axios";
import Navbar from './Navbar';

const ReportCrimeForm = () => {
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const type = formData.get('type');
    const location = formData.get('location');
    const detail = formData.get('detail');
    const phone = formData.get('phone');
    

  //   try {
  //     await axios.post('http://localhost:5000/crimereport/add', {
  //       type,
  //       location,
  //       detail,
  //       phone,
  //     });

  //     // navigate('/officer');
  //   } catch (error) {
  //     console.error(error);
  //   }
  };

  return (

    <>
    <Navbar/>
    <div className="flex justify-center items-center h-screen ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Report Crime</h2>
        

        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="type" className="font-bold">
              Crime Type
            </label>
            <input
              id="type"
              name="type"
              type="text"
              className="border-2 w-1/2 rounded-md border-gray-300 p-2"
              placeholder="Murder"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="location" className="font-bold">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="string"
              className="border-2 w-1/2 rounded-md border-gray-300 p-2"
              placeholder="Faizabad"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="detail" className="font-bold">
              Detail
            </label>
            <input
              id="detail"
              name="detail"
              type="string"
              className="border-2 w-1/2 rounded-md border-gray-300 p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="font-bold">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="border-2 rounded-md w-1/2  border-gray-300 p-2"
              placeholder="+923333007499"
              required
            />
          </div>
          <div className="flex justify-left">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
    
    </>
  );
};

export default ReportCrimeForm;
