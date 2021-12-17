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
import DashBoard from "./Components/DashBoard/DashBoard";
import MyOrders from "./Components/User/MyOrders";
import AddReview from "./Components/User/AddReview";
import Payment from "./Components/User/Payment";
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
         {/*nested routing*/}
          <Route path="/dashboard" element={<DashBoard />}>
            <Route exact path="/dashboard/myorders" element={<PrivateRoute><MyOrders/></PrivateRoute>}>
            </Route>

            <Route exact path="/dashboard/addreview" element={<PrivateRoute><AddReview/></PrivateRoute>}>
            </Route>
            <Route exact path="/dashboard/payment" element={<PrivateRoute><Payment/></PrivateRoute>}>
            </Route>

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
