import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
  return (
    <Box
      sx={{
        backgroundImage: `url(/assets/homeBg.jpg)`, backgroundSize: "cover",
        backgroundPosition: "center", backgroundRepeat: "no-repeat",
        height: "100vh", position: "relative", 
      }}
    >
      <Box
        sx={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></Box>

      <Box
        sx={{
          position: "relative", display: "flex", flexDirection: "column", 
          justifyContent: "center", alignItems: "center", height: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "whitesmoke", letterSpacing: "10px", fontWeight: "800",
            textTransform: "uppercase", mb: 2, textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
          }}
        >
          Our Recipes
        </Typography>
        <Button
        onClick={()=>navigate("/recipes")}
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)", color: "whitesmoke",
            fontWeight: "bold", letterSpacing: "3px", borderRadius: "20px", padding: "5px 20px",
            backdropFilter: "blur(10px)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          Search Recipes
        </Button>
      </Box>
    </Box>
  );
};
