import React from "react";
import { useFormik } from "formik";
import validations from "./validations";

function Signup() {
  //const {handleSubmit, handleChange, values, errors, touched, handleBlur} =
  //bu şekilde yazarsam aşağıdaki "formik." lara ihtiyaç duymam
  const formik = useFormik({
    initialValues: {
      //   firstName: "",
      //   lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      //   gender: "male",
      //   hobies: [],
      //   country: "Turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validations,
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="firstName">First Name</label>
        <input name="firstName" onChange={formik.handleChange} />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" onChange={formik.handleChange} />
        <br />
        <br /> */}
        <label>Email</label>
        <input
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error">{formik.errors.email}</div>
        )}
        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error">{formik.errors.password}</div>
        )}
        <br />
        <br />
        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
          <div className="error">{formik.errors.passwordConfirm}</div>
        )}
        {/* <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={formik.handleChange}
          checked={formik.values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={formik.handleChange}
          checked={formik.values.gender === "female"}
        />
        <br />
        <br />
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={formik.handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={formik.handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={formik.handleChange}
          />
          Photography
        </div>
        <br />
        <br />
        <select
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        >
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select> */}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
