import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import { Routes,Route } from 'react-router-dom';
import Khatian_search from './components/dashboard/Khatian_search';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <Dashboard></Dashboard> */}
      <Routes>
        <Route element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/khatian-search' element={<Khatian_search></Khatian_search>} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
