import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { LoggedIn } from "../App";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";

export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedIn);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <header>
      <nav>
        <section className="flex justify-between bg-black text-white h-8  leading-6 text-xl font-bold">
          <div></div>
          <div className="flex items-center gap-10 ">
            <Link to="/" className="Header-btn">
              Home
            </Link>
            <button onClick={handleScroll} className="Header-btn">
              About
            </button>
            <Link to="/" className="Header-btn">
              Contact us
            </Link>
          </div>
          <div className="flex justify-center  gap-10 pl-4">
            <div className="pr-3 text-3xl">
              <button onClick={() => setIsLoggedIn((prev) => !prev)}>
                {isLoggedIn ? <FaUserCheck style={{color:"blue"}} /> : <FaUserTimes style={{color:"red"}} />}
              </button>
              {/* <FaUserCheck />
              login
            </div>
            <div>
              <FaUserTimes />
              logout */}
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
}
