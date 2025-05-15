import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Books from "./components/Books/Books.page";
import HomePage from "./components/Home/HomePage";
import SingleBook from "./components/SingleBook/singleBook.page";
import Login from "./components/Login/loginPage";
import { useEffect, useState } from "react";
import LoginHomePage from "./components/Home/LoginHomePage";
import CustomToast from "./components/CustomToast";
import ProfilePage from "./components/Profile/ProfilePage";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(!!token);
  }, []);

  return (
    <div className="App bg-gray-100">
      <CustomToast />
      {login ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/myBook" element={<SingleBook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <div className="w-full h-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LoginHomePage />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
