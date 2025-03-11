import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ItemCard = ({ recipe }) => {
  const navigate = useNavigate();
  const handleDetailsNavigate = (recipe) => {
    navigate(`/${recipe.title}/${recipe.recipe_id}`);
  };

  return (
    <Card sx={{ width: 345, boxShadow: 3 }}>
      <CardMedia
        sx={{ cursor: "pointer" }}
        onClick={() => handleDetailsNavigate(recipe)}
        component="img"
        height="200"
        image={recipe.image_url}
        alt={recipe.title}
      />
      <CardContent>
        <Typography
          onClick={() => handleDetailsNavigate(recipe)}
          gutterBottom
          sx={{ fontSize: "13px", fontWeight: "bold", cursor: "pointer" }}
        >
          {recipe.title}
        </Typography>
        <Typography sx={{ fontSize: "11px" }}>
          <span>Publisher:</span>{" "}
          <span
            style={{
              color: "#ff3600",
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => window.open(recipe.publisher_url, "_blank")}
          >
            {recipe.publisher}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};
