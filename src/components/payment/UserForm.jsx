import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { countrys } from "./Country";
import FormSelect from "./FormSelect";
import styles from "./styles/UserForm.module.css";

import FormInputs from "./FormInputs";

export default function ShippingForm({ next }) {
  const [fail, setFail] = useState(null);

  const navigate = useNavigate();
  const shippinOption = [
    { id: "1", value: "Free Shipping", label: "Free Shipping" },
    { id: "2", value: "Flat-rate", label: "Flat-rate" },
  ];
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      city: "",
      zipcode: "",
      country: "",
      shipping: "",
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .min(2, "Firstname is too short")
        .max(20, "Firstname is too long")
        .required("Firstname is required"),
      lastname: yup
        .string()
        .min(2, "Lastname is too short")
        .max(20, "Lastname is too long")
        .required("Lastname is required"),
      address: yup
        .string()
        .min(2, "Adress is too short")
        .max(100, "Adress is too long")
        .required("Adress is required"),
      email: yup
        .string()
        .email("Provide a valid email")
        .required("email is required"),
      city: yup
        .string()
        .min(2, "City is too short")
        .max(20, "City is too long")
        .required("City is required"),
      zipcode: yup
        .string()
        .min(2, "Zip Code is too short")
        .max(20, "Zip Code is too long")
        .required("Zip Code is required"),
      country: yup.string().required("Country is required"),
      shipping: yup.string().required("Shipping is required"),
    }),
    onSubmit: async (values) => {
      next();
    },
  });

  return (
    <>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        {fail && <p variant="warning">{fail.slice(10)}</p>}
        <FormInputs
          placeholder="firstname"
          type="text"
          name="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          feedback={
            formik.errors.firstname && formik.touched.firstname
              ? formik.errors.firstname
              : null
          }
        />
        <FormInputs
          placeholder="lastname"
          name="lastname"
          type="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          feedback={
            formik.errors.lastname && formik.touched.lastname
              ? formik.errors.lastname
              : null
          }
        />
        <FormInputs
          placeholder="address"
          name="address"
          type="text"
          value={formik.values.address}
          onChange={formik.handleChange}
          feedback={
            formik.errors.address && formik.touched.address
              ? formik.errors.address
              : null
          }
        />
        <FormInputs
          placeholder="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          feedback={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
        />

        <FormInputs
          placeholder="City"
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          feedback={
            formik.errors.city && formik.touched.city
              ? formik.errors.city
              : null
          }
        />
        <FormInputs
          placeholder="zip / postal code"
          type="number"
          name="zipcode"
          value={formik.values.zipcode}
          onChange={formik.handleChange}
          feedback={
            formik.errors.zipcode && formik.touched.zipcode
              ? formik.errors.zipcode
              : null
          }
        />

        <FormInputs
          placeholder="country"
          list="suggestions"
          name="country"
          type="text"
          value={formik.values.country}
          onChange={formik.handleChange}
          feedback={
            formik.errors.country && formik.touched.country
              ? formik.errors.country
              : null
          }
        />
        <datalist id="suggestions">
          {countrys.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>

        <FormSelect
          label="Shipping Fee"
          options={shippinOption}
          id="shipping"
          name="shipping"
          onBlur={() => {
            formik.handleBlur({ target: { name: "shipping" } });
          }}
          onChange={(option) => {
            formik.setFieldValue("shipping", option.id);
          }}
          error={formik.errors.shipping}
          touched={formik.touched.shipping}
        />
        <div className={styles.buttons}>
          <button
            onClick={() => {
              navigate("/cartitem");
            }}
            className="btn"
            type="button"
          >
            Back to cart
          </button>

          <button className="btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </>
  );
}
