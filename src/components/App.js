import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Posts,
  Homepage,
  Beavertail,
  Arpana,
  Videos,
  PhillySkyline,
  Footer,
  Templates
} from "./Index";
import { getAPIHealth } from "../axios-services";

const App = () => {
  const [APIHealth, setAPIHealth] = useState('');

  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? 'api is up! :D' : 'api is down :/');
    };

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
    console.log(APIHealth, 'API HEALTH')
  }, []);


  return (
    <div className='wrapper'>
      <Navbar />
      <div id="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/posts' element={<Posts/>}/>
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/beavertail" element={<Beavertail />} />
          <Route path="/videos/arpana" element={<Arpana />} />
          <Route path="/videos/philly" element={<PhillySkyline />} />

          <Route path="/templates" element={<Templates />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
