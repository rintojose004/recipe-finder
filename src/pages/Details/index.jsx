import React, { useEffect, useState } from "react";
import { Box, Typography, Button, List, ListItemText, ListItem, Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";

export const Details = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        setRecipe(res.data.recipe);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);
  

  return (
    <Box
      sx={{ padding: 4, paddingTop: 10,
        backgroundColor: "#f9f9f9", borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}>
        {
            loading ? <Box sx={{display:"flex", justifyContent:"center"}} ><Loader /> </Box> :
            error ? <Typography color="error" sx={{textAlign:"center"}}>Failed to load data</Typography> : 
            <Grid container spacing={1}>
        <Grid container spacing={2} size={12}>
          <Grid size={{xs:12,sm:6}}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardMedia
                sx={{ cursor: "pointer", objectFit: "cover", height: "100%", borderRadius: 2 }}
                component="img"
                image={recipe?.image_url && recipe?.image_url}
                alt={recipe?.title} />
            </Card>
          </Grid>
          <Grid size={{xs:12,sm:6}} sx={{display:"flex",  flexDirection:"column", alignItems:"center", gap:"5px", pt:5}}>
            <Typography
              sx={{ fontWeight: 700, color: "#3f51b5", textAlign: "center", letterSpacing: 1, fontSize: "16px" }}>
              {recipe?.title ? recipe?.title : "-"}
            </Typography>
            <Box
              sx={{ marginBottom: 1, padding: 1,
                backgroundColor: "#ffffff", borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                display: "flex", alignItems: "center",}}>
              <Typography sx={{ fontSize: "12px", fontWeight: 500, color: "#333"}}>
                Published by:
              </Typography>
              <Button
                sx={{ color: "#ff3600", background:"rgba(255, 54, 0, 0.2)", fontWeight: 600, 
                    textTransform: "none", fontSize: "14px", padding:"5px", ml: .5,
                    // "&:hover": { backgroundColor: "rgba(255, 54, 0, 0.2)" },
                 }}
                onClick={() => window.open(recipe.publisher_url, "_blank")}>
                {recipe?.publisher ? recipe?.publisher : "-"}
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained" color="primary" size="small"
                sx={{
                  paddingX: 4, fontWeight: 600,
                  borderRadius: "30px", fontSize: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "box-shadow 0.3s ease",
                }}
                onClick={() => window.open(recipe.source_url, "_blank")}
              >
                View Full Recipe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid size={12}>
          <Box
            sx={{ 
              backgroundColor: "#ffffff",
              padding: 3, borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600,
                marginBottom: 1, color: "#3f51b5" }}>
              Ingredients
            </Typography>
            <List disablePadding>
              {recipe?.ingredients?.length>0 && recipe?.ingredients?.map((ingredient, index) => (
                <ListItem
                  key={index}
                  sx={{ paddingY: 1,
                    borderBottom: "1px solid #eee",
                    "&:last-child": {
                      borderBottom: "none",
                    },
                  }}
                >
                  <ListItemText
                    primary={ingredient}
                    sx={{ fontSize: "1rem", color: "#555" }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
        }
    </Box>
  );
};
