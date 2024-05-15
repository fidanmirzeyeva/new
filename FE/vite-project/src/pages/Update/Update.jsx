import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup';

function Update() {
  const { id } = useParams();

  const [update, setUpdate] = useState(null);
  useEffect(() => {
    updateAdmin();
  }, []);

  async function updateAdmin(val) {
    const res = await fetch(`http://localhost:5000/fa/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(val)
    }
    );
    const data = await res.json();
    setUpdate(data);
  }
  return (
    <>
      {update && (
        <Formik
          initialValues={{
            name: update.name,
            price: update.price,
            image: update.image,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            price: Yup.number().max(5).required("Required"),
            image: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values);
            setTimeout(() => {
             updateAdmin(values);
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
              <input
                id="price"
                type="text"
                {...formik.getFieldProps("price")}
              />
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}

              <label htmlFor="image">image </label>
              <input
                id="image"
                type="text"
                {...formik.getFieldProps("image")}
              />
              {formik.touched.image && formik.errors.image ? (
                <div>{formik.errors.image}</div>
              ) : null}

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      )}
    </>
  );
}

export default Update;
