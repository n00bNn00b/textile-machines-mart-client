import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FeaturedItem from "./FeaturedItem/FeaturedItem";

const Featured = () => {
  const [featureds, setFeatureds] = useState([]);
  useEffect(() => {
    const url = "https://textile-machines-mart-server.onrender.com/products";
    axios(url).then((res) => setFeatureds(res.data));
  }, []);

  return (
    <div id="featured">
      <Container>
        <h2 className="text-center pt-3">Featured Items</h2>
        <div className="row">
          {featureds.slice(0, 6).map((featured) => (
            <div key={featured._id} className="col my-3">
              <FeaturedItem featured={featured} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
