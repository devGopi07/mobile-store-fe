import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../../App";

const mobileValidationSchema = yup.object({
  name: yup.string().required("Name field cant be empty"),

  phone: yup
    .number()
    .required("Phone field cant be empty")
    .min(10, "Try Something Bigger 👍"),

  address: yup
    .string()
    .required("Address field cant be empty")
    .min(10, "Try Something Bigger 👍"),

  district: yup.string().required("District field cant be empty"),

  state: yup.string().required("State field cant be empty"),
});

export default function Buypage({ mode, setMode }) {
  const navigate = useNavigate();
  const { id } = useParams();
  let [purchased, setPurchased] = useState(false);
  let [data, setData] = useState({});
  let [amount, setAmount] = useState("");

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        address: "",
        district: "",
        state: "",
      },
      validationSchema: mobileValidationSchema,

      onSubmit: (buy) => {
        console.log("Form Values Are", buy);
        console.log("AMT IS", amount);
        Razerpayy();
      },
    });

  const Razerpayy = () => {
    if (amount === "") {
      alert("please Enter amount");
    } else {
      var options = {
        key: "rzp_test_4wPpnyUnbWloWl",
        key_secret: "8HdM5o7ZfSPQ1GTF9TcpUH2j",
        amount: amount * 100,
        currency: "INR",
        name: "Boorv",
        description: "For Testing",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          setPurchased(!purchased);
          setTimeout(() => {
            navigate("/mobiles");
          }, 2000);
        },
        prefill: {
          name: "Gopinath",
          email: "madanshop8@gmail.com",
          contact: "9087324873",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "white",
        },
      };
      var pay = window.Razorpay(options);
      pay.open();
    }
  };

  const token = localStorage.getItem("token");

  const getMobiles = async () => {
    try {
        let data = await axios.get(`${url}/mobiles/getMobile/${id}`, { 
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
      toast.success(data.data.message);
      // setData(data.data.data[0]);
      console.log("AMOUNT", data.data.data[0].price);
      console.log(data.data.data[0].price.replaceAll(",", ""));
      setAmount(data.data.data[0].price.replaceAll(",", ""));
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data.message);
        // navigate("/signin");
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
        //   navigate("/signin");
      }
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data);
        //   navigate("/signin");
      }
    }
  }, []);

  //   const buy = async (newMovies) => {
  //     let { name, poster, rating, summary, trailer } = newMovies;
  //     let payload = { name, poster, rating, summary, trailer };
  //     console.log("this is PAYLOAD", payload);
  //     try {
  //       let res = await axios.post(`${url}/movies/addMovieReview`, payload);
  //       console.log(res);
  //       toast.success(res.data.message);
  //     } catch (err) {
  //       toast.error(err.response.data.message);
  //     }
  //   };

  return (
    <div className="Buypage">
      <Navbar mode={mode} setMode={setMode} />
      <div className="buy-div-outer">
        {purchased ? (
          <div className="buy-pur-div">
            <h3 className="buy-pur-title">
              Mobile Ordered Successfully 🎉✨ <br /> Redirecting To Mobiles
              Page
            </h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="buy-div">
            <h1 className="buy-title">Enter Your Address</h1>
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              value={values.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name ? errors.name : null}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Phone Number"
              variant="outlined"
              value={values.phone}
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && errors.phone}
              helperText={touched.phone && errors.phone ? errors.phone : null}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Address"
              variant="outlined"
              value={values.address}
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && errors.address}
              helperText={
                touched.address && errors.address ? errors.address : null
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Your District"
              variant="outlined"
              value={values.district}
              name="district"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.district && errors.district}
              helperText={
                touched.district && errors.district ? errors.district : null
              }
            />
            <TextField
              id="outlined-basic"
              label="Enter Your State"
              variant="outlined"
              value={values.state}
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.state && errors.state}
              helperText={touched.state && errors.state ? errors.state : null}
            />
            <Button
              className="buy-button"
              style={{ backgroundColor: mode ? "#ff9c07" : "White" }}
              variant="contained"
              type="submit"
            >
              Buy
            </Button>
          </form>
        )}
      </div>
      <Footer mode={mode} />
    </div>
  );
}

// {/* <div className="buy-div-outer">
// {purchased ? (
//   <div className="buy-pur-div">
//     <h3 className="buy-pur-title">Mobile Ordered Successfully 🎉✨ <br/> Redirecting To Mobiles Page</h3>
//   </div>
// ) : (
//   <form onSubmit={handleSubmit} className="buy-div">
//     <h1 className="buy-title">Enter Your Address</h1>
//     <TextField
//       id="outlined-basic"
//       label="Enter Your Name"
//       variant="outlined"
//       value={values.name}
//       name="name"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={touched.name && errors.name}
//       helperText={touched.name && errors.name ? errors.name : null}
//     />
//     <TextField
//       id="outlined-basic"
//       label="Enter Your Phone Number"
//       variant="outlined"
//       value={values.phone}
//       name="phone"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={touched.phone && errors.phone}
//       helperText={touched.phone && errors.phone ? errors.phone : null}
//     />
//     <TextField
//       id="outlined-basic"
//       label="Enter Your Address"
//       variant="outlined"
//       value={values.address}
//       name="address"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={touched.address && errors.address}
//       helperText={
//         touched.address && errors.address ? errors.address : null
//       }
//     />
//     <TextField
//       id="outlined-basic"
//       label="Enter Your District"
//       variant="outlined"
//       value={values.district}
//       name="district"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={touched.district && errors.district}
//       helperText={
//         touched.district && errors.district ? errors.district : null
//       }
//     />
//     <TextField
//       id="outlined-basic"
//       label="Enter Your State"
//       variant="outlined"
//       value={values.state}
//       name="state"
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={touched.state && errors.state}
//       helperText={touched.state && errors.state ? errors.state : null}
//     />
//     <Button
//       className="buy-button"
//       style={{ backgroundColor: mode ? "#ff9c07" : "White" }}
//       variant="contained"
//       onClick={() => navigate("/mobiles/buy")}
//       type="submit"
//     >
//       Buy
//     </Button>
//   </form>
// )}
// </div> */}
