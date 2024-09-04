import { useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiMenu } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
const FormDetails = () => {
  const [getUserDetails, setUserDetails] = useState([]);

  useEffect(() => {
    AOS.init();
    const getFormDetails = async () => {
      try {
        const res = await axios.get("http://localhost:5000/v1/form");
        setUserDetails(res.data.formDetails);
        console.log(res.data.FormDetails)
      } catch (err) {
        console.log(err);
      }
    };
    getFormDetails();
  }, []);

  return (
    <>
      <div className="w-full bg-gray-100 py-5">
        <div className="bg-white rounded-lg shadow-lg py-6 px-8 max-w-4xl mx-auto w-full">
          <h2 className=" w-full text-2xl font-bold mb-6 text-gray-800 text-center">
            Your Contact Details
          </h2>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center flex-wrap gap-2">
        {getUserDetails.length > 0 ? (
          getUserDetails.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 m-4" data-aos="zoom-in-right">
              <div className="flex mb-2 justify-end gap-3">
            
              <Link to ="" > <HiMenu className=""/> </Link>
              <Link to ="" > <FaRegEdit className=""/> </Link>
              <Link to ="" > <RiDeleteBin6Fill className=""/> </Link>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Full Name
                </label>
                <p className="text-gray-800">{value.fullName}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email Address
                </label>
                <p className="text-gray-800">{value.email}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Phone Number
                </label>
                <p className="text-gray-800">{value.phone}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Company Name
                </label>
                <p className="text-gray-800">{value.company}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <p className="text-gray-800">{value.message}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Country/Region
                </label>
                <p className="text-gray-800">{value.country}</p>
              </div>
            </div>
          ))
        ) : (
        <>
        <div className="w-full">
        <NotFoundPage />
        </div>
        </>
        )}
      </div>
    </>
  );
};

export default FormDetails;
