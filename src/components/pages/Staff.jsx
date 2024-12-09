import React from "react";
import "../../App.css";

// MUI
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

// Components
import NatalieTung from "../../images/NatalieTungPhoto.png";
import ListSection from "../Common/ListSection";

export default function Staff() {
  return (
    <>
      <div className="twocolumnContainer">
        <div className="centerContent">
          <img src={NatalieTung} alt="Jimmy Ngo" className="about_photo" />
        </div>
        <div>
          <Typography className="title" variant="h4">
            Natalie Tung MD, DDS, MBA, EdD
          </Typography>
          <div className="underline" />
          <Typography sx={{ margin: "1rem 0" }}>
            Dr. Natalie Tung is a board certified oral and maxillofacial
            surgeon. She completed her residency in Oral and Maxillofacial
            Surgery, and obtained her MD degree from Harvard Medical School.
            Prior to that, she went to UC Berkeley, majoring biology and
            business, and then graduated with top honors from UCLA School of
            Dentistry. After surgery residency, she served as Assistant
            Professor of Oral and Maxillofacial Surgery and Clinic Director at
            USC for 7 years prior to leaving full-time academia for private
            practice.
          </Typography>
          <Typography sx={{ margin: "1rem 0" }}>
            She enjoys spending time with her 2 boys, traveling, reading,
            volunteering at church, and playing sports, including tennis and
            basketball. She has special interests in dentoalveolar surgery
            including implants and bone grafting, wisdom teeth surgery,
            orthognathic surgery and facial trauma.
          </Typography>
          <Typography>
            She looks forward to providing excellent and compassion care!
          </Typography>
          <ListSection
            title="Education & Background"
            items={[
              "Board-certified oral and maxillofacial surgeon with an MD degree from Harvard Medical School and a DDS from UCLA School of Dentistry.",
              "Completed residency in Oral and Maxillofacial Surgery; previously served as Assistant Professor and Clinic Director at USC for 7 years.",
              "Specializes in dentoalveolar surgery, implants, bone grafting, wisdom teeth surgery, orthognathic surgery, and facial trauma.",
            ]}
            Icon={SchoolIcon}
          />
        </div>
      </div>
    </>
  );
}
