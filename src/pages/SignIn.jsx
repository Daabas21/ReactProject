import { useContext } from "react";
import { LoggedIn } from "../App";
import './SignIn.css'

export default function SignIn() {
  const { setIsLoggedIn } = useContext(LoggedIn);
  return (
    <div  className="">
      <h1>OR</h1>
      <button className="SignIn-btn border-2 rounded-md px-4 mb-4" onClick={() => setIsLoggedIn(true)}>
        SignIn
      </button>
    </div>
  );
}