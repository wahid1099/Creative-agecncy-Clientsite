import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/home" element={<HomePage />}>
          </Route>
          <Route path="/services" element={<ServicePage/>}>
          </Route>
          <Route path="/services/:serviceId" element={<PlaceOrder/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
