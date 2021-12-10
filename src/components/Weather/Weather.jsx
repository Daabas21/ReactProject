import React from "react";
// import 'semantic-ui-css/semantic.min.css'
import "./Weather.css";
import { useState, useEffect } from "react";

// const api= {
//     key:"&appid=c1448ceb0be49d17608db2d827f8385d",
//     base:"https://api.openweathermap.org/data/2.5/weather?q="
// }

export default function Weather() {
  const [data, setData] = useState([]);


  useEffect(() => {
      async function fetchData() {
          const res = await fetch(
              "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=c1448ceb0be49d17608db2d827f8385d"
              );
              const data= await res.json();

      console.log(data);
      setData(data);
    }

    fetchData();
  }, []);

  console.log(data);

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className='weatherApp'>
      <main>
        {(typeof data.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{data.name}, {data.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(data.main.temp- 273.15)}°c
            </div>
            <div className="weather">{data.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}