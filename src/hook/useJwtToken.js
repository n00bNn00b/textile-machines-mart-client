import axios from "axios";
import { useEffect, useState } from "react";

const useJwtToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getUserToken = async () => {
      const userEmail = user?.user?.email;
      if (userEmail) {
        const { data } = await axios.post(
          "https://mysterious-badlands-44008.herokuapp.com/login",
          {
            userEmail,
          }
        );
        setToken(data.accessToken);
        // console.log(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getUserToken();
  }, [user]);
  return [token];
};

export default useJwtToken;
