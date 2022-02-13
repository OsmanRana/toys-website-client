import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://whispering-basin-27213.herokuapp.com/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Toy added");
          reset();
        }
        console.log(data);
      });
  };

  return (
    <Container>
      <h1>This is add products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="product-name"
          label="Product Name"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("name", { required: true })}
          sx={{ my: 3 }}
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("description", { required: true })}
          sx={{ my: 3 }}
        />
        <TextField
          id="age-bracket"
          label="Age Bracket"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("ageBracket", { required: true })}
          sx={{ my: 3 }}
        />
        <TextField
          id="brand"
          label="Brand"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("brand", { required: true })}
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
          sx={{ my: 3 }}
        />
        <TextField
          id="image-url"
          label="Image URL"
          variant="outlined"
          fullWidth
          width="100%"
          {...register("image", { required: true })}
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
