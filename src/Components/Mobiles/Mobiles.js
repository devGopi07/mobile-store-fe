import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Mobiles.css";
import Card from "react-bootstrap/Card";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../../App";

export default function Mobiles({ mode, setMode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  let [data, setData] = useState([]);

  const getMobiles = async () => {
    try {
      let data = await axios.get(`${url}/mobiles`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(data);
      toast.success(data.data.message);
      setData(data.data.data);
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data.message);
        navigate("/signin");
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  // const UpdateMobile = async (id) => {
  //   console.log(id);

  //   let data = await axios.delete(`${url}/mobiles/updateMobile/${id}`);
  //   console.log(data);
  //   toast.error(data.data.message);
  //   getMobiles();
  // };

  const deleteMobile = async (id) => {
    console.log(id);

    let data = await axios.delete(`${url}/mobiles/deleteMobile/${id}`);
    console.log(data);
    toast.error(data.data.message);
    getMobiles();
  };

  useEffect(() => {
    try {
      if (token) {
        getMobiles();
      } else {
        toast.error("Token Has been Expired Login Again");
        navigate("/signin");
      }
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data);
        navigate("/signin");
      }
    }
  }, []);

  return (
    <div className="Mobiles">
      <Navbar mode={mode} setMode={setMode} />
      <div className="mobiles-outer">
        {data.map((data, idx) => {
          return (
            <Card
              key={idx}
              style={{ width: "203px" }}
              className="main-carouselcards"
            >
              <div style={{ textAlign: "center" }}>
                <Card.Img
                  style={{ width: "150px", height: "150px" }}
                  variant="top"
                  src={data.url}
                />
              </div>
              <Card.Body
                style={{ padding: "5px" }}
                className="main-carouselcardsbody"
              >
                <Card.Text className="main-cardtitle">{data.name}</Card.Text>
                <Card.Text className="main-cardvarient">
                  {data.varient}
                </Card.Text>

                <Card.Text className="main-cardprice">₹ {data.price}</Card.Text>
                <div className="main-oprice-per">
                  {data.price !== data.oprice ? (
                    <Card.Text className="main-cardoprice">
                      ₹ {data.oprice}
                    </Card.Text>
                  ) : (
                    ""
                  )}
                  {data.discount!=="null" ?<Card.Text className="main-cardpercent">
                    {data.discount}
                  </Card.Text> :""}
                </div>
                <div className="btns">
                  <Button
                    className="buy-btn"
                    style={{ backgroundColor: mode ? "#ff9c07" : "" }}
                    variant="contained"
                    onClick={() => navigate(`/mobiles/${data._id}`)}
                  >
                    Buy
                  </Button>
                  {role==="admin"?<Button
                    className="buy-btn"
                    style={{ backgroundColor: mode ? "red" : "" }}
                    variant="contained"
                    onClick={() => deleteMobile(data._id)}
                  >
                    Delete
                  </Button>:""}
                  {role==="admin" ? <Button
                    className="buy-btn"
                    style={{ backgroundColor: mode ? "#ff9c07" : "" }}
                    variant="contained"
                    onClick={() => navigate(`/update/${data._id}`)}
                  >
                    Update
                  </Button>:""}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Footer mode={mode} />
    </div>
  );
}
