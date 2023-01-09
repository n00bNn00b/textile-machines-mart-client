import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import Loading from "../SharedComponents/Loading/Loading";

const Full = () => {
  const [products, setProducts] = useState([]);
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    const url = "https://textile-machines-mart-server1.vercel.app/products";
    axios.get(url).then((res) => setProducts(res.data));
    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  }, []);
  // console.log(products);
  return (
    <Container className="mt-5 mb-5 pb-5 w-100">
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
      <Button
        style={{ backgroundColor: "rgb(70, 129, 104)" }}
        as={Link}
        to="/manageInventory"
        className="d-block mx-auto w-25 border-0 mb-5"
      >
        Manage Inventory
      </Button>
    </Container>
  );
};

export default Full;
