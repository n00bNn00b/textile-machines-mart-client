import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Inventory from "./Inventory";

const ManageInventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    axios
      .get("https://mysterious-badlands-44008.herokuapp.com/products")
      .then((res) => setInventories(res.data));
  }, [inventories]);

  return (
    <Container className="pb-5 mb-5">
      <div>
        <h2 className="text-center mt-5 pt-5">Manage Inventory</h2>
        <Button
          className="border-0 ms-3"
          style={{ backgroundColor: "rgb(70, 129, 104)" }}
          as={Link}
          to="/addItem"
        >
          {" "}
          Add New Item
        </Button>
        <div>
          {inventories.map((inventory) => (
            <Inventory key={inventory._id} inventory={inventory} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ManageInventory;
