import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Carrosol from "../pages/Carrosol";
import Footer from "../components/Footer";
import NewPlant from "../components/HomeDesing/NewPlant";
import ExtraSection from "../components/HomeDesing/ExtraSection";
import ExtraSection2 from "../components/HomeDesing/ExtraSection2";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav className="w-11/12 mx-auto  my-5">
          <Navbar></Navbar>
        </nav>
      </header>
      {/* carrosol */}
      <section className="w-11/12 mx-auto mb-6">
        <Carrosol></Carrosol>
      </section>
      <section>
        <NewPlant></NewPlant>
        <ExtraSection></ExtraSection>
        <ExtraSection2></ExtraSection2>
      </section>
      <footer className="w-11/12 mx-auto">
          <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
