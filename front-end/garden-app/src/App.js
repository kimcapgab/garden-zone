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
    <div>
      <Layout loggedIn={loggedIn}>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn}  />} />
          <Route path="/zones/:id" element={<ZoneDetails />} />
          <Route path="/vegetables/:id" element={<VegDetails />} />
          <Route path="/user/login/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/logout" element={<LogOut setLoggedIn={setLoggedIn}  />} />
          <Route path="/user/signup/" element={<SignUp />} />
          <Route path="/vegetables/create" element={<CreateVeg setToggle={setToggle} />} />
          <Route path="/vegetables/edit/:id" element={<EditVeg/>} />
          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
