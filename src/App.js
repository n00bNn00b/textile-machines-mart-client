import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/authentication/Login/Login";
import Register from "./pages/authentication/Register/Register";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./pages/authentication/ResetPassword/ResetPassword";
import Header from "./pages/SharedComponents/Header/Header";
import Footer from "./pages/SharedComponents/Footer/Footer";
import AddItem from "./pages/AddItem/AddItem";
import MyItems from "./pages/MyItems/MyItems";
import Full from "./pages/Full/Full";
import ManageInventory from "./pages/ManageInventory/ManageInventory";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/manageInventory/:id" element={<ManageInventory />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/full" element={<Full />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
