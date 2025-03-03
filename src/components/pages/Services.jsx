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
import ClassInitalPhoto from "../../images/ClassInitialPhoto.jpeg";
import ClassFinalPhoto from "../../images/ClassFinalPhoto.jpeg";
import InvsalignCase from "../../videos/InvsalignCase.mov";

const cardData = [
  {
    img: BeforeBite,
    title: "Anterior Crossbite Before",
    description:
      "Diagnosis-Severe underbite, significant crowding, and misaligned teeth, with the upper left canine blocked out.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/1.jpg" }],
  },
  {
    img: AfterBite,
    title: "Anterior Crossbite After",
    description:
      "End Treatment Outcome-The underbite (crossbite) has been corrected, teeth are perfectly aligned, and the upper left canine is properly positioned.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/6.jpg" }],
  },
  {
    img: BicuspidsExtractionInital,
    title: "Bicuspids Extraction Before",
    description:
      "Diagnosis: Severe crowding, midline deviation, and crossbite (misalignment causing incorrect bite on the front teeth).",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/2.jpg" }],
  },
  {
    img: BicuspidsExtractionFinal,
    title: "Bicuspids Extraction After",
    description:
      "End Treatment Outcome: Teeth were perfectly aligned, midline deviations were corrected, and the crossbite was resolved.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/3.jpg" }],
  },
  {
    img: ClassInitalPhoto,
    title: "Class II Overjet Before",
    description:
      "Diagnosis: Significant overjet and severe proclination of the upper front teeth, with end-to-end canine relationships and pronounced crowding in the lower arch.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/2.jpg" }],
  },
  {
    img: ClassFinalPhoto,
    title: "Class II Overjet After",
    description:
      "End Treatment Outcome: A proper overbite was achieved, and the upper front teeth were aligned and retroclined to their ideal positions.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/3.jpg" }],
  },
  {
    img: PosteriorCrossbiteInitial,
    title: "Posterior Crossbite Before",
    description:
      "Diagnosis:Severe crowding & crooked teeth. Midline deviations. Severe underbite. Constricted upper jaw.",
    authors: [{ name: "Jimmy Ngo", avatar: "/static/images/avatar/3.jpg" }],
  },
  {
    img: PosteriorCrossbiteFinal,
    title: "Posterior Crossbite After",
    description:
      "End Treatment Outcome:The teeth are now perfectly aligned, with midline deviations and underbite successfully corrected. The upper jaw has been widened and properly adjusted.",
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

const formatText = (text) => {
  const parts = text.split(":");
  if (parts.length > 1) {
    return (
      <>
        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
          {parts[0]}:
        </span>
        {parts.slice(1).join(":")}
      </>
    );
  }
  return text;
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <Container id="features">
        <ListSection
          title="Early Treatment (Phase I: Prevention Treatment)"
          items={[
            formatText(
              "Preventing Unnecessary Tooth Removal: Addressing crowding by regaining space early to avoid the need for permanent tooth extractions."
            ),
            formatText(
              "Correcting Jaw Disproportions: Treating overbites, underbites, and asymmetries to ensure proper jaw function."
            ),
            formatText(
              "Protecting Protruded Front Teeth: Preventing injury and addressing harmful habits to safeguard tooth development."
            ),
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
            formatText(
              "Crowding and Spacing: Correcting overlapping or gapped teeth for improved alignment and appearance."
            ),
            formatText(
              "Protruding and Retruding Teeth: Adjusting teeth that extend outward or are positioned too far back for better dental harmony."
            ),
            formatText(
              "Missing and Impacted Teeth: Managing missing or unerupted teeth to ensure proper dental function."
            ),
            formatText(
              "Bite Issues: Treating crossbites, open bites, overbites, and midline discrepancies for a balanced bite."
            ),
            formatText(
              "Jaw and Facial Growth Problems: Monitoring and correcting jaw misalignments and facial growth discrepancies."
            ),
            formatText(
              "TMJ Dysfunction: Alleviating pain and improving jaw function for those with temporomandibular joint disorders."
            ),
            formatText(
              "Pre-Implant and Surgical Care: Preparing teeth for dental implants, crown/bridge work, or orthognathic surgery for severe jaw deformities."
            ),
            formatText(
              "Invisalign Treatment: Offering clear aligner therapy as an alternative to traditional braces, Invisalign uses custom-made, removable aligners to gradually move teeth into their correct positions. Invisalign is ideal for patients who are seeking a more discreet treatment option."
            ),
          ]}
          Icon={() => <FontAwesomeIcon icon={faTooth} />}
        />

        <StyledBox id="video-background">
          <video
            src={InvsalignCase}
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
          title="Extraction Using Invisalign"
          items={[
            formatText(
              "Initial Diagnosis: Posterior and anterior cross bite, severe anterior crowding, with the lower midline deviated to the patient’s right."
            ),
            formatText(
              "Treatment Plan: Extraction of the lower left first premolar, followed by Invisalign 18-24 months."
            ),
            formatText(
              "Final outcome: All teeth are properly aligned and the midline has been corrected."
            ),
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
