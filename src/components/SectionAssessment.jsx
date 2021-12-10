import React from "react";
import "./SectionAssessment.css";
import icon from "../images/assessment-icon.png";

export default function SectionAssessment() {
  return (
    <div className="section-assessment">
      <div className="containerr flex">
        <div className="max-w-2xl m-auto text-center flex flex-col justify-center items-center text-white">
          <img src={icon} alt="heading icon" className="heading-icon" />
          <h2 className="mb-2.5 text-3xl font-bold leading-tight">
            Get your fitness assessment
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            We will make sure to turn your life around
          </p>
        </div>
      </div>
      <div className="border-line"></div>
      <div className="flex justify-center mx-0 w-full px-4">
        <div className="px-2 position-line div-width">
          <div className="text-center -mt-2.5 text-white">
            <h5 className="block uppercase font-bold text-3xl mb-1 leading-tight">Step 1</h5>
            <h4 className="text-3xl font-bold uppercase mb-2 leading-tight mt-0"> Get Checked</h4>
            <p className="px-4 text-sm"> Get checked to determine your fitness age.</p>
          </div>
        </div>
        <div className="px-2 position-line div-width">
          <div className="text-center -mt-2.5 text-white">
            <h5 className="block uppercase font-bold text-3xl mb-1 leading-tight">Step 2</h5>
            <h4 className="text-3xl font-bold uppercase mb-2 leading-tight mt-0"> Get Trained</h4>
            <p className="px-4 text-sm "> Get a specific training related to you fitness age.</p>
          </div>
        </div>
        <div className="px-2 position-line div-width">
          <div className="text-center -mt-2.5 text-white">
            <h5 className="block uppercase font-bold text-3xl mb-1 leading-tight">Step 3</h5>
            <h4 className="text-3xl font-bold uppercase mb-2 leading-tight mt-0"> stay updated</h4>
            <p className="px-4 text-sm"> our trainers will keep you updated and notified</p>
          </div>
        </div>
        <div className="px-2 position-line div-width">
          <div className="text-center -mt-2.5 text-white">
            <h5 className="block uppercase font-bold text-3xl mb-1 leading-tight">Step 4</h5>
            <h4 className="text-3xl font-bold uppercase mb-2 leading-tight mt-0">Get follow up</h4>
            <p className="px-4 text-sm"> Get re-tested after a period of time to check you improvement</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
