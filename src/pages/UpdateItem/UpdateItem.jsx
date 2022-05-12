import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update/Update";

const UpdateItem = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    axios.get(url).then((res) => setSingleItem(res.data));
  }, []);
  // console.log(singleItem);
  return (
    <div>
      <Update key={singleItem._id} singleItem={singleItem} />
    </div>
  );
};

export default UpdateItem;
