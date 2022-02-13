import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ShopByBrandToys = ({ brandToy }) => {
  const { _id, image, name, price } = brandToy;

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ display: { xs: "flex", justifyContent: "center" } }}
      >
        <Link to={`/allToys/${_id}`} style={{ textDecoration: "none" }}>
          <Card sx={{ maxWidth: 450, height: 560 }}>
            <CardActionArea>
              <CardMedia component="img" image={image} alt="Toy" />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#b00000" }}
                >
                  Details
                </Typography>

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#b00000" }}
                >
                  $ {price}.00
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default ShopByBrandToys;
