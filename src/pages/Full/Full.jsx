import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../Product/Product";
import Loading from "../SharedComponents/Loading/Loading";

const Full = () => {
  const [products, setProducts] = useState([]);
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    const url = "http://localhost:5000/products";
    axios.get(url).then((res) => setProducts(res.data));
    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  }, []);
  // console.log(products);
  return (
    <Container className="mt-5">
      <h2 className="text-center pt-5">Full Item List</h2>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col my-3">
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Full;
