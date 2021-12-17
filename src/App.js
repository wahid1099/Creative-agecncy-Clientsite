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
import ContactusPage from "./Pages/ContactusPage";
import AdminRoute from "./PrivateRoutes/AdminRoute";
import ManageOrders from "./Components/Admin/ManageOrders";
import AddService from "./Components/Admin/AddService";
import MakeAdmin from "./Components/Admin/MakeAdmin";
import ManageService from "./Components/Admin/ManageService";
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
          <Route path="/contactUs" element={<ContactusPage />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/login" element={<LogIn />}>
          </Route>
         {/*nested routing*/}
          <Route path="/dashboard" element={<DashBoard />}>
            {/*user private Routes*/}
            <Route exact path="/dashboard/myorders" element={<PrivateRoute><MyOrders/></PrivateRoute>}>
            </Route>

            <Route exact path="/dashboard/addreview" element={<PrivateRoute><AddReview/></PrivateRoute>}>
            </Route>
            <Route exact path="/dashboard/payment" element={<PrivateRoute><Payment/></PrivateRoute>}>
            </Route>

            {/*Admin Private Routes*/}
            <Route exact path="/dashboard/manageorder" element={<AdminRoute><ManageOrders/></AdminRoute>}>
            </Route>

            <Route exact path="/dashboard/addservice" element={<AdminRoute><AddService/></AdminRoute>}>
            </Route>

            <Route exact path="/dashboard/manageservice" element={<AdminRoute><ManageService/></AdminRoute>}>
            </Route>
            <Route exact path="/dashboard/makeadmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}>
            </Route>


          </Route>
          {/*nested routing*/}
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
