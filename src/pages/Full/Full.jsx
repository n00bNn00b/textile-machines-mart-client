import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../Product/Product";

const Full = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";
    axios.get(url).then((res) => setProducts(res.data));
  }, []);
  // console.log(products);
  return (
    <Container className="mt-5">
      <h2 className="text-center pt-3">Full Item List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col my-3">
            <Product product={product} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Full;
