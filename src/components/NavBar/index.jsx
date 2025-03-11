import React from "react";
import { AppBar, Box,  Toolbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate()
  return (
      <Box>
        <AppBar position="fixed" sx={{background:"whitesmoke",overflow:"hidden"}}>
          <Toolbar variant="dense" sx={{display:"flex",justifyContent:"space-between", height: "60px"}}>
            <img onClick={()=>navigate("/")} src="/assets/logo.png" alt="logo" style={{
              height:"100px", width:"80px", objectFit:"contain", cursor:"pointer"
            }} />
            <Box sx={{display:"flex", gap:"20px"}} >
            <NavLink className={({isActive})=>isActive ? "activeLink" : "link"} to="/">Home</NavLink>
            <NavLink className={({isActive})=>isActive ? "activeLink" : "link"} to="/recipes">Recipes</NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
};
