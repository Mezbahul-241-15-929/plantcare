import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  //   console.log(data, id, news);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div className="w-11/12 mx-auto">
      <header className="mt-5">
        {/* <Header></Header> */}
        <Navbar></Navbar>
      </header>
      <main className=" py-10">
        <section className="">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>   
      </main>
      <Footer></Footer>
    </div>
  );
};

export default NewsDetails;
