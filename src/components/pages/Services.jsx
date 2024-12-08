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
import { styled } from "@mui/material/styles";

// Images
import BeforeBite from "../../images/BeforeBite.jpeg";
import AfterBite from "../../images/AfterBite.jpeg";
import BicuspidsExtractionFinal from "../../images/BicuspidsExtractionFinal.jpeg";
import BicuspidsExtractionInital from "../../images/BicuspidsExtractionInitial.jpeg";
import PosteriorCrossbiteFinal from "../../images/PosteriorCrossbiteFinal.jpeg";
import PosteriorCrossbiteInitial from "../../images/PosteriorCrossBiteInitial.jpeg";

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
  {
    img: BicuspidsExtractionInital,
    title: "Bicuspids Extraction Before",
    description:
      "Aenean euismod aliquam risus, nec fermentum ante faucibus eu. Duis non tristique quam.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/2.jpg" }],
  },
  {
    img: BicuspidsExtractionFinal,
    title: "Bicuspids Extraction After",
    description:
      "Aenean euismod aliquam risus, nec fermentum ante faucibus eu. Duis non tristique quam.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/3.jpg" }],
  },
  {
    img: PosteriorCrossbiteInitial,
    title: "Posterior Crossbite Before",
    description:
      "Aenean euismod aliquam risus, nec fermentum ante faucibus eu. Duis non tristique quam.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/3.jpg" }],
  },
  {
    img: PosteriorCrossbiteFinal,
    title: "Posterior Crossbite After",
    description:
      "Aenean euismod aliquam risus, nec fermentum ante faucibus eu. Duis non tristique quam.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/3.jpg" }],
  },
];

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

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
        <StyledBox id="video-background">
          <video
            src={DentalOffice3DVideo2}
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </StyledBox>
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
