import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Page from "./pages/Page";
import GetStart from "./pages/GetStart";
import WebFont from 'webfontloader';
import ScrollButton from './components/ScrollButton';
import { useState,useEffect, createContext} from "react";

export const LoggedIn = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
        WebFont.load({
          google: {
            families: ['Oswald', 'Chilanka']
          }
        });
       }, []);
  return (
    <LoggedIn.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GetStart" element={<GetStart/>} />
          <Route path=":slug" element={<Page/>}/>
        </Routes>
        <ScrollButton />
      </Layout>
    </div>
    </LoggedIn.Provider>
  );
}

export default App;
