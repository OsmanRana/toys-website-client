import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ShopByAgeCard = ({ age }) => {
  const { ageBracket, image } = age;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ display: { xs: "flex", justifyContent: "center", my: 4 } }}
    >
      <Link to={`/shopByAge/${ageBracket}`} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 450, my: 8 }}>
          <CardActionArea>
            <CardMedia component="img" image={image} alt="Toy" width="100%" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", color: "#b00000" }}
              >
                {ageBracket}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default ShopByAgeCard;
