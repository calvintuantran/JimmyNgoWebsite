import React from "react";
import "./Cards.css";

// Images
import StaffPicture from "../images/Staff_Picture.jpg";

// MUI
import { Typography } from "@mui/material";

function Cards() {
  return (
    <>
      <div className="cards">
        <div className="centeredContent">
          <Typography variant="h4" className="title">
            Welcome to Jimmy Vu Ngo D.D.S., Inc.
          </Typography>
          <div className="underline" />
          <div className="staff-picture-container">
            <img src={StaffPicture} alt="Main Staff" className="staff-picture" />
          </div>
          <Typography sx={{ margin: "1rem 0" }}>
            We are committed to providing exceptional orthodontic care for
            patients of all ages in a warm and relaxing environment. With over
            24 years of experience, Dr. Ngo believes in the transformative power
            of a beautiful smile and strives to help every patient "Smile With
            Confidence." His expertise in orthodontics has crafted countless
            stunning smiles, enhancing self-esteem and overall well-being.
          </Typography>
          <Typography sx={{ margin: "1rem 0" }}>
            At our practice, we deeply value the trust you place in us. Our
            dedicated and highly trained team works closely with Dr. Ngo to
            offer personalized care tailored to your unique needs. We are
            committed to making your orthodontic experience as comfortable and
            effective as possible, from your initial consultation through to the
            completion of treatment.
          </Typography>
          <Typography sx={{ margin: "1rem 0" }}>
            We look forward to the opportunity to serve you and your loved ones.
            Whether you are seeking early orthodontic intervention, adult
            treatment, or advanced techniques like Invisalign, our practice is
            here to help you achieve your best smile.
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Cards;
