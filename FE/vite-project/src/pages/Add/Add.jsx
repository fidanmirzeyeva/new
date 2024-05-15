import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function Add() {
  async function addAdmin(val) {
    const res = await fetch("http://localhost:5000/fa", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(val),
    });
    const data = await res.json();
    return data;
  }
  return (
    <>
      <Formik
        initialValues={{ name: "", price: "", image: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          price: Yup.number()
            .max(5)
            .required("Required"),
          image: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values)
          setTimeout(() => {
            addAdmin(values);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name"> Name</label>
            <input id="name" type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="price">Price</label>
            <input id="price" type="text" {...formik.getFieldProps("price")} />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}

            <label htmlFor="image">image </label>
            <input id="image" type="text" {...formik.getFieldProps("image")} />
            {formik.touched.image && formik.errors.image ? (
              <div style={{color:"red"}}>{formik.errors.image}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Add;
