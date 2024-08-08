import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { url as urll } from "../../App";
import { toast } from "react-toastify";

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

export function EditMobile({ mode, setMode }) {
  const { id } = useParams();


  const [mobile, setMobile] = useState(null);

  const getData = async () => {
    try {
      let res = await axios.get(`${urll}/mobiles/getMobile/${id}`);
      console.log(res.data.data[0]);
      setMobile(res.data.data[0]);
      toast.success(res.data.message);
      // navigate("/mobiles");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Buypage">
      <Navbar mode={mode} setMode={setMode} />
      {mobile ? <Updatepage mobile={mobile} mode={mode} setMode={setMode} /> : ""}
      <Footer mode={mode} />
    </div>
  );
}

export default function Updatepage({ mobile, mode, setMode }) {
  let [past, setPast] = useState(mobile);
  console.log("past", past.name);
  const { id } = useParams();


  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        url: past.url,
        name: past.name,
        varient: past.varient,
        price: past.price,
        oprice: past.oprice,
        discount: past.discount,
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
      let res = await axios.put(`${urll}/mobiles/updateMobile/${id}`, payload);
      console.log(res);
      toast.success(res.data.message);
      navigate("/mobiles");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="Buypage">
      <Navbar mode={mode} setMode={setMode} />
      <div className="buy-div-outer">
        <form onSubmit={handleSubmit} className="buy-div">
          <h1 className="buy-title">Update Mobile</h1>
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
            Update Mobile
          </Button>
        </form>
      </div>
      <Footer mode={mode} />
    </div>
  );
}
