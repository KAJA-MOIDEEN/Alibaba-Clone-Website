import { useEffect, useState } from "react";
import './formDetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiMenu } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";

const FormDetails = () => {
  const [getUserDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonPop, setButtonPop] = useState(false);
  const [getViewDetails, setViewDetails] = useState({});

  useEffect(() => {
    AOS.init();
    const getFormDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/v1/form");
        setUserDetails(res.data.formDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getFormDetails();
  }, []);

  const handleEdit = () => {
    // Implement edit functionality here
  };

  const handleView = async (_id) => {
    try {
      const res = await axios.get(`http://localhost:5000/v1/form?_Id=${_id}`);
      setViewDetails(res.data.findDetails);
      setTimeout(() => {
        setButtonPop(true);  
      }, 100);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setButtonPop(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly items-center relative " >
      {buttonPop && (
        <div className="modal-overlay" onClick={handleClose} >
          <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in-down">
            <button className="modal-close" onClick={handleClose}>X</button>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Full Name</label>
              <p className="text-gray-800">{getViewDetails.fullName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email Address</label>
              <p className="text-gray-800">{getViewDetails.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <p className="text-gray-800">{getViewDetails.phone}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Company Name</label>
              <p className="text-gray-800">{getViewDetails.company}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <p className="text-gray-800">{getViewDetails.message}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Country/Region</label>
              <p className="text-gray-800">{getViewDetails.country}</p>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="lds-roller">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      ) : (
        <>
          <div className="w-full bg-gray-100 py-5">
            <div className="bg-white rounded-lg shadow-lg py-6 px-8 max-w-4xl mx-auto w-full">
              <h2 className="w-full text-2xl font-bold mb-6 text-gray-800 text-center">
                Your Contact Details
              </h2>
            </div>
          </div>
          <div className="w-full h-auto flex justify-center flex-wrap gap-2">
            {getUserDetails.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 m-4" data-aos="zoom-in-right">
                <div className="flex mb-2 justify-end gap-3">
                  <HiMenu onClick={() => handleView(value._id)} className="w-5 h-5 cursor-pointer text-black" />
                  <FaRegEdit onClick={handleEdit} className="w-5 h-5 cursor-pointer text-green-500" />
                  <RiDeleteBin6Fill className="w-5 h-5 cursor-pointer text-red-600" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <p className="text-gray-800">{value.fullName}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                  <p className="text-gray-800">{value.email}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <p className="text-gray-800">{value.phone}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Company Name</label>
                  <p className="text-gray-800">{value.company}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Message</label>
                  <p className="text-gray-800">{value.message}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Country/Region</label>
                  <p className="text-gray-800">{value.country}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FormDetails;
