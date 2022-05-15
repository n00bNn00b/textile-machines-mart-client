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
import UpdateItem from "./pages/UpdateItem/UpdateItem";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import RequireAuth from "./pages/authentication/RequireAuth/RequireAuth";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/updateItem/:id"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        />
        <Route path="/myItems" element={<MyItems />} />
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/full" element={<Full />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
