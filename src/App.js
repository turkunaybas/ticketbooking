import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import AddTravel from './pages/AddTravel';
import Login from './pages/Login';
import TicketDetail from './pages/TicketDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />}>
          <Route path=":from/:to/:date" element={<Ticket />} />
        </Route>
        <Route path="/addtravel" element={<AddTravel />}/>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/detail" element={<TicketDetail />}></Route>
       
      </Routes>
    </BrowserRouter>

  );
}

export default App;
