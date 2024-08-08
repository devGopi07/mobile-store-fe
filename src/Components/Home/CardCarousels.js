import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../../App";

export default function CardCarousels({ mode }) {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let [data, setData] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktopXL: {
      breakpoint: { max: 3000, min: 1501 },
      items: 6,
    },
    desktopL: {
      breakpoint: { max: 1500, min: 1250 },
      items: 5,
    },
    desktopM: {
      breakpoint: { max: 1249, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const getMobiles = async () => {
    try {
      let data = await axios.get(`${url}/mobiles`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
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
    <div className="CardCarousels">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10" style={{ border: "1px black" }}>
            <div className="heading-link ">
              <h4>Mobile Phones</h4>
              <div className="seeall-buttons">
                <a
                  onClick={() => navigate("/mobiles")}
                  className="Seeall"
                  style={{ color: mode ? "black" : "white", cursor: "pointer" }}
                >
                  See All
                </a>
              </div>
            </div>

            <Carousel responsive={responsive}>
              {data.map((data, idx) => {
                console.log(typeof data.discount);
                return (
                  <Card
                    key={idx}
                    style={{ width: "203px" }}
                    className="carouselcards"
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
                      className="carouselcardsbody"
                    >
                      <Card.Text className="cardtitle">{data.name}</Card.Text>
                      <Card.Text className="cardvarient">
                        {data.varient}
                      </Card.Text>

                      <Card.Text className="cardprice">₹ {data.price}</Card.Text>
                      <div className="oprice-per">
                        {data.price !== data.oprice ? (
                          <Card.Text className="cardoprice">
                            ₹ {data.oprice}
                          </Card.Text>
                        ) : (
                          ""
                        )}

                        {data.discount !== "null" ? (
                          <Card.Text className="main-cardpercent">
                            {data.discount}
                          </Card.Text>
                        ) : (
                          ""
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </Carousel>
          </div>

          <div
            className="col-md-2 samsung-poster"
            style={{ justifyContent: "center" }}
          >
            <Card style={{ border: "none" }}>
              <Card.Img
                style={{ height: "361px", width: "250px" }}
                variant="top"
                src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1000,height=1000,quality=75/pageimg/Samsung-Flip5-And-Fold5-Side-Banner.jpg"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
