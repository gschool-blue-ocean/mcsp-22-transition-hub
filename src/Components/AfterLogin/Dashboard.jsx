import { useEffect, useState } from "react";

//make sure to prop down setAuth from app.jsx or use context

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:4500/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });
      const parseData = await res.json();
      setName(parseData.userName);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();

    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout Successful");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return <p>{console.log("created dashboard")}</p>;
};
