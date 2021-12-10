import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SectionAssessment from "../components/SectionAssessment";
import FormInput from "../components/FormInput";
import signUp from "../images/signUp.jpg";
import { LoggedIn } from "../App";
import Weather from "../components/Weather/Weather";

export default function Home() {
  const { isLoggedIn } = useContext(LoggedIn);

  return (
    <div>
      <div className="Home text-center text-red-500">
        <div className="pt-40">
          <h1 className="text-3xl mt-10 font-bold uppercase lh">
            Never Get Bored
          </h1>
          <div className="btn-slanted">
            <Link to="/getstart" className="text-3xl btn">
              GET START TODAY
            </Link>
          </div>
        </div>
      </div>
      {/* Form section */}
      {!isLoggedIn && (
        <div className="flex py-20 px-7 ">
          {/* Sign up  */}
          <div className="text-3xl w-3/6">
            <FormInput />
          </div>

          {/* Image Container */}
          <div className="w-6/12 ">
            <img src={signUp} className="rounded-md" alt="First left" />
          </div>
        </div>
      )}
      <SectionAssessment />
      <Weather/>
    </div>
  );
}
