import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Appbr from './components/Appbr';
import Booking from './components/Booking';
import Movies from './components/Movies';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbr/>
     
      <Routes>
        <Route path='/' exact Component={Movies}
        />
       
     
        <Route path='search' exact Component={Search}  />
        <Route path='booking' exact Component={Booking}  />
      </Routes>
      </BrowserRouter>
    
  
    </div>
  );
}

export default App;
