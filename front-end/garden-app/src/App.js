import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Layout from "./components/Layout/Layout";
import ZoneDetails from "./screens/ZoneDetails/ZoneDetails";
import VegDetails from "./screens/VegDetails/VegDetails";
import Login from "./screens/Login/Login"
import SignUp from "./screens/SignUp/SignUp"



function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zones/:id" element={<ZoneDetails />} />
          <Route path="/vegetables/:id" element={<VegDetails />} />
          <Route path="/user/login/" element={<Login />} />
          <Route path="/user/signup/" element={<SignUp />} />
          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
