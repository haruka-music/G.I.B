"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "@/app/components/layouts/header/Header";
import Footer from "@/app/components/layouts/footer/Footer";
import HomePage from "@/app/page/HomePage/Home";
import ContactPage from "@/app/page/ContactPage/contact";
import Sidebar from "@/app/components/layouts/sidebar/Sidebar";
import CollectionPage from "@/app/page/CollectionPage/collection";
import AccessPage from "@/app/page/AccessPage/access";
import BusinessPage from "@/app/page/BusinessPage/business";
import CasePage from "@/app/page/CasePage/case";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Collection" element={<CollectionPage />} />
          <Route path="/Access" element={<AccessPage />} />
          <Route path="/Business" element={<BusinessPage />} />
          <Route path="/Case" element={<CasePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
