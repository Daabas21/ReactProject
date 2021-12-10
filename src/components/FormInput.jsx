import './FormInput.css';
import { useContext, useState } from 'react';
import { LoggedIn } from '../App';

function FormInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const countries=["Stockholm" , "Berlin" ,"Helsinki" , "Oslo"];

  const {setIsLoggedIn} = useContext(LoggedIn);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit} className='FormInput'>
      <h1>Create Account</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <label >
        <input className='checkbox'
          name="acceptedTerms"
          type="checkbox"
          value={"Stockholm"}
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button className='border-2 px-4 rounded-md bg-gray-400' >SignUp</button>
    </form>
  );
}

export default FormInput;