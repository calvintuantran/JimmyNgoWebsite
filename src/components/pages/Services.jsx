import React from "react";
import "../../App.css";

// MUI
import { Divider, Container, Typography } from "@mui/material";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

// Components
import ListSection from "../Common/ListSection";
import ServicesHero from "../pages/ServicesSection/ServicesHero";
import BeforeAfterServices from "../pages/ServicesSection/BeforeAfterServices";
import DentalOffice3DVideo2 from "../../videos/3DTeethVideo2.mp4";

// Images
import BeforeBite from "../../images/BeforeBite.jpeg";
import AfterBite from "../../images/AfterBite.jpeg";

const cardData = [
  {
    img: BeforeBite,
    title: "Anterior Crossbite Before",
    description:
      "Magnis proin himenaeos enim ultricies non adipiscing efficitur interdum lacus. Curabitur ornare orci facilisis in",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/1.jpg" }],
  },
  {
    img: AfterBite,
    title: "Anterior Crossbite After",
    description:
      "Magnis proin himenaeos enim ultricies non adipiscing efficitur interdum lacus. Curabitur ornare orci facilisis in",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/6.jpg" }],
  },
];

export default function Services() {
  return (
    <>
      <ServicesHero />
      <Container id="features">
        <ListSection
          title="Early Treatment (Phase I: Prevention Treatment)"
          items={[
            "Preventing Unnecessary Tooth Removal: Addressing crowding by regaining space early to avoid the need for permanent tooth extractions.",
            "Correcting Jaw Disproportions: Treating overbites, underbites, and asymmetries to ensure proper jaw function.",
            "Protecting Protruded Front Teeth: Preventing injury and addressing harmful habits to safeguard tooth development.",
          ]}
          Icon={() => <FontAwesomeIcon icon={faTooth} />}
        />
        <ListSection
          title="Comprehensive Orthodontic Treatment (Phase II)"
          items={[
            "Crowding and Spacing: Correcting overlapping or gapped teeth for improved alignment and appearance.",
            "Protruding and Retruding Teeth: Adjusting teeth that extend outward or are positioned too far back for better dental harmony.",
            "Missing and Impacted Teeth: Managing missing or unerupted teeth to ensure proper dental function.",
            "Bite Issues: Treating crossbites, open bites, overbites, and midline discrepancies for a balanced bite.",
            "Jaw and Facial Growth Problems: Monitoring and correcting jaw misalignments and facial growth discrepancies.",
            "TMJ Dysfunction: Alleviating pain and improving jaw function for those with temporomandibular joint disorders.",
            "Pre-Implant and Surgical Care: Preparing teeth for dental implants, crown/bridge work, or orthognathic surgery for severe jaw deformities.",
            "Invisalign Treatment: Offering clear aligner therapy as an alternative to traditional braces, Invisalign uses custom-made, removable aligners to gradually move teeth into their correct positions. Invisalign is ideal for patients who are seeking a more discreet treatment option.",
          ]}
          Icon={() => <FontAwesomeIcon icon={faTooth} />}
        />
      </Container>
      <Divider />
      <Typography className="title" variant="h4">
        Services: Before and After Treatment Photos
      </Typography>
      <div className="underline" />
      <BeforeAfterServices cardData={cardData} />
    </>
  );
}
