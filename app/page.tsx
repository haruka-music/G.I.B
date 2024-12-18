"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import HomePage from "@/app/page/HomePage/Home";
import ContactPage from "@/app/page/ContactPage/contact";
import Sidebar from "./components/layouts/sidebar/Sidebar";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import ToolphotoPage from "./pages/ToolphotoPage/ToolphotoPage";
// import PlayerPage from "./pages/PlayerPage/PlayerPage";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          {/* <Route path="/Movies" element={<MoviesPage />} />
          <Route path="/Toolphoto" element={<ToolphotoPage />} />
          <Route path="/Player" element={<PlayerPage />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
