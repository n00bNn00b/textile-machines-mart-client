import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update/Update";

const UpdateItem = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState([]);
  useEffect(() => {
    const url = `https://textile-machines-mart-server1.vercel.app/product/${id}`;
    axios.get(url).then((res) => setSingleItem(res.data));
  }, [id]);
  // console.log(singleItem);
  return (
    <div>
      <Update key={singleItem._id} singleItem={singleItem} />
    </div>
  );
};

export default UpdateItem;
