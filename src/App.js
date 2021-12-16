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
import Register from "./Pages/Register";
import LogIn from "./Pages/LogIn";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/home" element={<HomePage />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/login" element={<LogIn />}>
          </Route>

          <Route path="/services" element={<ServicePage/>}>
          </Route>
          <Route path="/services/:serviceId" element={<PrivateRoute>
            <PlaceOrder/>
          </PrivateRoute>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
