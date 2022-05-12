import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Manage from "./Manage/Manage";

const ManageInventory = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    axios.get(url).then((res) => setSingleItem(res.data));
  }, []);
  // console.log(singleItem);
  return (
    <div>
      <Manage key={singleItem._id} singleItem={singleItem} />
    </div>
  );
};

export default ManageInventory;
