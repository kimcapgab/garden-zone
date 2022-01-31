import "./App.css";
import { Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./screens/Home/Home";
import Layout from "./components/Layout/Layout";
import ZoneDetails from "./screens/ZoneDetails/ZoneDetails";
import VegDetails from "./screens/VegDetails/VegDetails";
import Login from "./screens/Login/Login"
import SignUp from "./screens/SignUp/SignUp"
import LogOut from "./screens/LogOut/LogOut";
import CreateVeg from "./screens/CreateVeg/CreateVeg";
import EditVeg from "./screens/EditVeg/EditVeg";
import { verifyUser } from "./services/users";
import CreateZone from "./screens/CreateZone/CreateZone";
import EditZone from "./screens/EditZone/EditZone";




function App() {


  const [toggle, setToggle] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await verifyUser();
      res ? setLoggedIn(true) : setLoggedIn(false);
    };
    fetchUser();
  }, []);



  return (
    <div className="app"> 
      <Layout loggedIn={loggedIn}>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} toggle={toggle} setToggle={setToggle} />} />
          <Route path="/zones/:id" element={<ZoneDetails />} />
          <Route path="/vegetables/:id" element={<VegDetails />} />
          <Route path="/user/login/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/logout" element={<LogOut setLoggedIn={setLoggedIn}  />} />
          <Route path="/user/signup/" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/vegetables/create" element={<CreateVeg setToggle={setToggle} />} />
          <Route path="/vegetables/edit/:id" element={<EditVeg />} />
          <Route path="/zones/create" element={<CreateZone />} />
          <Route path="/zones/edit/:id" element={<EditZone/>} />
          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
