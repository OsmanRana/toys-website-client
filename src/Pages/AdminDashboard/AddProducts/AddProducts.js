import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h1>This is add products</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="addProductsForm">
        <TextField
          id="product-name"
          label="Product Name"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("name", { required: true })}
          className="addProductsFormInput"
          sx={{ my: 3 }}
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("description", { required: true })}
          className="addProductsFormInput"
          sx={{ my: 3 }}
        />
        <TextField
          id="age-bracket"
          label="Age Bracket"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("ageBracket", { required: true })}
          className="addProductsFormInput"
          sx={{ my: 3 }}
        />
        <TextField
          id="brand"
          label="Brand"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("brand", { required: true })}
          className="addProductsFormInput"
          sx={{ my: 3 }}
        />
        <TextField
          id="price"
          label="Price"
          variant="outlined"
          fullWidth
          width="100%"
          type="number"
          {...register("price", { required: true })}
          className="addProductsFormInput"
          sx={{ my: 3 }}
        />
        <TextField
          id="image-url"
          label="Image URL"
          variant="outlined"
          fullWidth
          width="100%"
          type="number"
          {...register("price", { required: true })}
          className="addProductsFormInput"
          sx={{ my: 3 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ maxWidth: 180 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddProducts;