import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Inventory from "./Inventory";

const ManageInventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setInventories(res.data));
  }, [inventories]);
  return (
    <Container className="pb-5">
      <div>
        <h2 className="text-center mt-5 pt-5">Manage Inventory</h2>
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory} />
        ))}
      </div>
    </Container>
  );
};

export default ManageInventory;
