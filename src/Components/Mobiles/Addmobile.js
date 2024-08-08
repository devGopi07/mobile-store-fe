import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Button, TextField } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import Apple_iphone_14_pro from "../../Images/phone images/Apple-iphone-14-pro-max-128gb-Deep-Purple-Front-Back-View.png";
import Samsung_galaxy_s23_ultra from "../../Images/phone images/Samsung-galaxy-s23-ultra-5g-green-512gb-12gb-ram-Front-Back.png";
import apple_iphone_14_yellow from "../../Images/phone images/apple-iphone-14-yellow-128gb-front-back-view.png";
import oneplus_nord from "../../Images/phone images/oneplus-nord-ce-3-5g-gray-shimmer-256gb-8gb-ram-front-view.png";
import Realme_11_pro from "../../Images/phone images/Realme-11-pro-plus-5g-astral-black-256gb-12gb-ram-Front-Back-View.png";
import Redmi_note_12_5g from "../../Images/phone images/Redmi-note-12-5g-frosted-green-128gb-6gb-ram-Front-Back-View.png";
import Samsung_galaxy_a54_5g from "../../Images/phone images/Samsung-galaxy-a54-5g-awesome-lime-128gb-8gb-ram-Front-Back.png";
import Vivo_y100a_5g_metal from "../../Images/phone images/Vivo-y100a-5g-metal-black-128gb-8gb-ram-Front-Back-View.png";
import oppo_reno_10_pro from "../../Images/phone images/oppo-reno-10-pro-plus-5g-glossy-purple-256gb-12gb-ram-front-and-back-view.png";
import tecno_camon_20_pro from "../../Images/phone images/tecno-camon-20-pro-5g-serenity-blue-128gb-8gb-ram-front-and-back-view.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import { url  as urll} from "../../App";


const mobileValidationSchema = yup.object({
  url: yup
    .string()
    .required("URL field cant be empty")
    .min(10, "Try Something Bigger 👍"),

  name: yup
    .string()
    .required("Mobile name field cant be empty")
    .min(10, "Try Something Bigger 👍"),

  varient: yup
    .string()
    .required("Varient field cant be empty")
    .min(10, "Try Something Bigger 👍"),

  price: yup.string().required("Price field cant be empty"),

  oprice: yup.string().required("Original price field cant be empty"),

  discount: yup.string().required("Discount price field cant be empty"),
});

export default function Addmobile({ mode, setMode }) {
  const navigate = useNavigate(); 

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        url: "",
        name: "",
        varient: "",
        price: "",
        oprice: "",
        discount: "",
      },
      validationSchema: mobileValidationSchema,
      onSubmit: (newMobile) => {
        console.log("Form Values Are", newMobile);
        addMobile(newMobile);
      },
    });

  const addMobile = async (newMovies) => {
    let { url, name, varient, price, oprice, discount } = newMovies;
    let payload = { url, name, varient, price, oprice, discount };
    console.log("this is PAYLOAD", payload);
    try {
      let res = await axios.post(`${urll}/mobiles/addMobile`, payload);
      console.log(res);
      toast.success(res.data.message);
      navigate("/mobiles");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="Addpage">
      <Navbar mode={mode} setMode={setMode} />
      <form onSubmit={handleSubmit} className="buy-div-outer">
        <div className="buy-div">
          <h1 className="buy-title">Add Mobile</h1>
          <TextField
            id="outlined-basic"
            label="Enter Mobile Photo Url"
            variant="outlined"
            value={values.url}
            name="url"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.url && errors.url}
            helperText={touched.url && errors.url ? errors.url : null}
          />
          <TextField
            id="outlined-basic"
            label="Enter Mobile Name"
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
            label="Enter Mobile varient"
            variant="outlined"
            value={values.varient}
            name="varient"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.varient && errors.varient}
            helperText={
              touched.varient && errors.varient ? errors.varient : null
            }
          />
          <TextField
            id="outlined-basic"
            label="Enter Mobile price"
            variant="outlined"
            value={values.price}
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.price && errors.price}
            helperText={touched.price && errors.price ? errors.price : null}
          />
          <TextField
            id="outlined-basic"
            label="Enter Mobile Original Price"
            variant="outlined"
            value={values.oprice}
            name="oprice"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.oprice && errors.oprice}
            helperText={touched.oprice && errors.oprice ? errors.oprice : null}
          />
          <TextField
            id="outlined-basic"
            label="Enter Mobile Price's Discount"
            variant="outlined"
            value={values.discount}
            name="discount"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.discount && errors.discount}
            helperText={
              touched.discount && errors.discount ? errors.discount : null
            }
          />
          <Button
            className="buy-button"
            style={{ backgroundColor: mode ? "#ff9c07" : "White" }}
            variant="contained"
            type="submit"
          >
            Add Mobile
          </Button>
        </div>
      </form>
      <Footer mode={mode} />
    </div>
  );
}
