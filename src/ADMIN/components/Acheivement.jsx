import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const TriangleImage = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImage = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Acheivement = () => {
  return (
    <Card sx={{ position: "relative",bgcolor:'#AE1438',color:'whitesmoke' }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          ShoppingMate
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>
        <Typography variant="h5" sx={{my:3.1}}>420.8k</Typography>
        <Button size="small" variant="contained" sx={{bgcolor:'#BDBDBD',color:'black'}}>View Sales</Button>
        <TriangleImage src=''></TriangleImage>
        <TrophyImage src="https://static.vecteezy.com/system/resources/previews/009/315/016/non_2x/winner-trophy-in-flat-style-free-png.png"></TrophyImage>
      </CardContent>
    </Card>
  );
};

export default Acheivement;
