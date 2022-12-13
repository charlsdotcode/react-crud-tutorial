import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  return (

    <div className="App">
      <h1 style={{"padding":"10px"}}> ReactJS CRUD Tutorial</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />} />
          <Route path='/employee' element={<EmpListing />} />
          <Route path='/employee/addnew' element={<EmpCreate/>} />
          <Route path='/employee/details/:employeeId' element={<EmpDetails/>} />
          <Route path='/employee/edit/:employeeId' element={<EmpEdit/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );  
}

export default App;
