import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
// import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>

        <Routes>
          <Route path='' element={<Home />}/>
        </Routes>

    </div>
  );
}

export default App;
