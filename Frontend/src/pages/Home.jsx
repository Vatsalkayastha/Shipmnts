import React from "react";
import logo from "../assets/google-forms.png";
import plus from "../assets/plus.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-100vh">
      <nav className="flex">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-5 my-3 mx-10" />
        <div className="flex my-5 text-3xl text-black">Google Forms</div>
      </nav>
      <div className="bg-gray-400 w-full h-48 flex">
        <Link to="/form">
          <div className="w-40 h-40 bg-white rounded-xl border mx-4 px-3 py-3 mt-3 justify-center items-center">
            <img
              src={plus}
              alt=""
              className="justify-center m-auto mt-5 cursor-pointer"
            />
            <div className="font-bold mx-auto px-5"> Create Form </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
