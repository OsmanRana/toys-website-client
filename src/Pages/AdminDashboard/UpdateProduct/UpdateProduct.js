import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { useForm } from "react-hook-form";

const formStyle = {
  width: "95%",
  lineHeight: 3,
  paddingLeft: "20px",
  margin: "20px 0",

  border: "1px solid lightgray",
  borderRadius: "5px",
};

const UpdateProduct = () => {
  const [toy, setToy] = useState([]);
  const { productId } = useParams();

  const { name, description, ageBracket, brand, image, price } = toy;
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${productId}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [productId]);

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/updateToys/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Container>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={name}
          {...register("name", { required: true })}
          style={formStyle}
        />
        <input
          defaultValue={description}
          {...register("description", { required: true })}
          style={formStyle}
        />
        <input
          defaultValue={ageBracket}
          {...register("ageBracket", { required: true })}
          style={formStyle}
        />
        <input
          defaultValue={brand}
          {...register("brand", { required: true })}
          style={formStyle}
        />
        <input
          defaultValue={price}
          type="number"
          {...register("price", { required: true })}
          style={formStyle}
        />
        <input
          defaultValue={image}
          {...register("image", { required: true })}
          style={formStyle}
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

export default UpdateProduct;
