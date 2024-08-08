import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Carousell from "./Carousels";
import CardCarousels from "./CardCarousels";
import CompanyCarousel from "./CompanyCarousel";
import Footer from "../Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Home({ mode, setMode }) {
  let navigate = useNavigate()
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");


  async function getData() {
    try {
      let res = await axios.get(`${url}/mobiles/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data.message);
        logout();
      } else {
        toast.error(error.response.data.message);
      }
    }
  }

  let logout = () => {
    navigate("/signin");
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data);
        logout();
      }
    }
  }, []);

  useEffect(() => {
    try {
      if (token) {
        getData();
      } else {
        toast.error("Session Expired Login Again");
        logout();
      }
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data);
        logout();
      }
    }
  }, []);
  return (
    <div>
      <Navbar mode={mode} setMode={setMode} />
      <Carousell mode={mode} />
      <CardCarousels mode={mode} />
      <CompanyCarousel />
      <Footer mode={mode} />
    </div>
  );
}
