import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Shared/Navigation/Navbar";

const ToyDetails = () => {
  const [toy, setToy] = useState([]);
  const { toyId } = useParams();

  const { image, description, brand, ageBracket, price } = toy;

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${toyId}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [toyId]);

  console.log(toy.name);
  return (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default ToyDetails;
