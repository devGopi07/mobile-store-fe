import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"; 
import { toast } from "react-toastify";
import { url } from "../../App";
import axios from "axios";

export default function Buypage({ mode, setMode }) {
  const navigate = useNavigate();
  const {id}=useParams()
  let [data, setData] = useState({});

  const token = localStorage.getItem("token"); 

  const getMobiles = async () => {
    try {
    let data = await axios.get(`${url}/mobiles/getMobile/${id}`, { 
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
      toast.success(data.data.message);
      setData(data.data.data[0]);
      console.log("DATA",data.data.data[0]);
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data.message);
        navigate("/signin");
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(()=>{
    try {
        if (token) {
          getMobiles();
        } else {
          toast.error("Token Has been Expired Login Again");
        //   navigate("/signin");
        }
      } catch (error) {
        if (error.response.status > 399 || error.response.status < 500) {
          toast.error(error.response.data);
        //   navigate("/signin");
        }
      }
  },[])
  
  return (
    <div className="Buy-Main-Outer">
      <Navbar mode={mode} setMode={setMode} />
      <div className="Buy-Main-Page-Outer container">
        <div className="shadow Buy-Main-Page row">
          <div className="col-lg-4 buy-img-div">
            <img
              className="buy-img"
              src={data.url}
              alt=""
            />
          </div>
          <div className="buy-detail-div col-lg-6">
            <h1 className="buy-name">{data.name}</h1>
              {data.price? <p className="buy-price">₹ {data.price}</p>:""}
            <div className="buy-op-dis">
            
             {data.oprice===data.price ? "" : <p className="buy-oprice"> M.R.P : ₹ {data.oprice===data.price ? "" : <span> {data.oprice}</span>} </p>}
              {data.discount!=="null" ? <span className="buy-discount">{data.discount}</span>:""}
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: mode ? "#ff9c07" : "",
                borderColor: mode ? "#ff9c07" : "",
              }}
             onClick={()=> navigate(`/mobiles/buy/${id}`)}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <Footer mode={mode} />
    </div>
  );
}