import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

const userValidationSchema = yup.object({
  id : yup
  .number()
  .required(),
  name : yup
  .string()
  .required(),
  year : yup
  .number()
  .required(),
  rating : yup
  .number()
  .required(),
  summary : yup
  .string()
  .required(),
  pages : yup
  .number()
  .required(),
  stock : yup
  .number()
  .required(),
});

function AddBook() {
  const formik = useFormik({
    initialValues:{
      id:"",
      name:"",
      year:"",
      rating:"",
      summary:"",
      pages:"",
      stock:"",
    },
    validationSchema:userValidationSchema,
    onSubmit:(newUser) => {
      createUser(newUser);
    },
  })
  const navigate = useNavigate()
  const createUser = (newUser) => {
    fetch(`https://63ea487f811db3d7ef0b14c0.mockapi.io/library`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/books"));
  };
  return (
    <div>
    <form onSubmit={formik.handleSubmit} className="add-user">
    <TextField
        id="id"
        name="id"
        label="ID"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.id} />
    {formik.touched.id && formik.errors.id ? formik.errors.id : ""}

    <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name} />
     {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

    <TextField
        id="year"
        name="year"
        label="Year"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.year} />
    {formik.touched.year && formik.errors.year ? formik.errors.year : ""}

    <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating} />
    {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}

    <TextField
        id="summary"
        name="summary"
        label="Summary"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary} />
    {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}

    <TextField
        id="pages"
        name="pages"
        label="Pages"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pages} />
    {formik.touched.pages && formik.errors.pages ? formik.errors.pages : ""}

    <TextField
        id="stock"
        name="stock"
        label="Books Available"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.stock} />
    {formik.touched.stock && formik.errors.stock ? formik.errors.stock : ""}

        <Button 
        variant="contained" 
        onClick={createUser}
        type="submit">
        Add Book
        </Button>

      </form>
    </div>
  )
}

export default AddBook;