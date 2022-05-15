import React, { useEffect, useState } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import Loading from "../SharedComponents/Loading/Loading";

const Home = () => {
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <Banner />
      <About />
      {loading ? <Loading loading={loading} /> : <Featured />}

      <ContactUs />
    </div>
  );
};

export default Home;
