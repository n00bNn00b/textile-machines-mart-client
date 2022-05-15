import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
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
      {loading ? <Loading loading={loading} /> : <Featured />}
    </div>
  );
};

export default Home;
