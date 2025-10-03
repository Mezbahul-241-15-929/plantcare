import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";
import Carrosol from "../pages/Carrosol";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        {/* <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section> */}
        <nav className="w-11/12 mx-auto  my-5">
          <Navbar></Navbar>
        </nav>
      </header>
      {/* carrosol */}
      {/* <section className="w-11/12 mx-auto mb-6">
        <Carrosol></Carrosol>
      </section> */}
      {/* <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <aside className="col-span-12  md:col-span-3 md:sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-12  md:col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-12 sm:col-span-3 sticky top-0 h-fit">
          <RighAside></RighAside>
        </aside>
      </main> */}
      <footer className="w-11/12 mx-auto">
          <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
