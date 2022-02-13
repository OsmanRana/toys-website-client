import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Shared/Navigation/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toy from "./Toy/Toy";
import SectionHeader from "../../components/Header/SectionHeader";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <SectionHeader text="All Toys"></SectionHeader>
      <Container>
        <Box sx={{ flexGrow: 1, my: 16 }}>
          <Grid container spacing={2}>
            {toys?.map((toy) => (
              <Toy key={toy._id} toy={toy}></Toy>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AllToys;
