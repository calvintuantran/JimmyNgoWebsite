import React from "react";
import "../../App.css";

// MUI
import { Typography, CardMedia } from "@mui/material";

import DentalOffice3D from "../../videos/DentalOffice3D.mp4"; // Ensure the correct file extension

export default function Services() {
  return (
    <>
      <Typography className="title" variant="h4" align="center">
        Dental Services
      </Typography>
      <div className="underline" style={{ marginBottom: "20px" }} />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <CardMedia
          component="video"
          src={DentalOffice3D}
          autoPlay
          muted
          loop
          sx={{
            width: "50%",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
