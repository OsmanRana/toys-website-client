import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../../components/Shared/Navigation/Navbar";
import ShopBayAgeCollections from "./ShopBayAgeCollections";
import Box from "@mui/material/Box";
import SectionHeader from "../../../../components/Header/SectionHeader";

const ShopByAgeToys = () => {
  const [ageToys, setAgeToys] = useState([]);
  const { ageBracket } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/shopByAge/${ageBracket}`)
      .then((res) => res.json())
      .then((data) => setAgeToys(data));
  }, [ageBracket]);
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <SectionHeader
          text={`${ageBracket} (${ageToys.length})`}
        ></SectionHeader>
        <Box sx={{ flexGrow: 1, my: 16 }}>
          <Grid container spacing={2}>
            {ageToys?.map((ageToy) => (
              <ShopBayAgeCollections
                key={ageToy._id}
                ageToy={ageToy}
              ></ShopBayAgeCollections>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ShopByAgeToys;
