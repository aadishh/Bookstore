import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Books from "./components/Books/Books.page";
import HomePage from "./components/Home/HomePage";
import SingleBook from "./components/SingleBook/singleBook.page";
import Login from "./components/Login/loginPage";
import { useState } from "react";
import LoginHomePage from "./components/Home/LoginHomePage";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App bg-gray-100">
      {login ? (
        <div>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<Books />} />
            <Route path="/myBook" element={<SingleBook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
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
