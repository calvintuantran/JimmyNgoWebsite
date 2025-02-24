import * as React from "react";

// MUI
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

// Components
import JimmyNgo from "../../images/JimmyNgoImage.jpg";
import ListSection from "../Common/ListSection";
import Office from "../../images/Office.jpg";
import OfficeTwo from "../../images/Office2.jpg";

const About = () => {
  return (
    <>
      <div className="twocolumnContainer">
        <div className="centerContent">
          <img src={JimmyNgo} alt="Jimmy Ngo" className="about_photo" />
        </div>
        <div>
          <Typography className="title" variant="h4">
            Jimmy Vu Ngo
          </Typography>
          <div className="underline" />
          <Typography sx={{ margin: "1rem 0" }}>
            Dr. Jimmy Vu Ngo is a highly experienced and board-eligible
            orthodontist with a distinguished career spanning over 25 years in
            the field of orthodontics. He earned his Doctor of Dental Surgery
            (D.D.S.) degree from the prestigious University of California, Los
            Angeles (UCLA) School of Dentistry, where he gained extensive
            expertise in dental care.
          </Typography>
          <Typography sx={{ margin: "1rem 0" }}>
            Following his D.D.S., Dr. Ngo pursued advanced orthodontic training
            through the renowned postgraduate orthodontic residency program at
            New York University (NYU) College of Dentistry. Dr. Ngo is widely
            recognized for his specialization in early orthodontic
            interventions, successfully addressing the unique needs of younger
            patients.
          </Typography>
          <Typography>
            He also has a strong track record in managing complex orthodontic
            cases for adults. A pioneer in adopting cutting-edge technologies,
            Dr. Ngo is especially skilled in the use of Invisalign, offering his
            patients effective, minimally invasive treatment options tailored to
            their individual needs. His commitment to utilizing advanced methods
            ensures high-quality care and optimal outcomes for patients of all
            ages.
          </Typography>
          <ListSection
            title="Education"
            items={[
              "Bachelor of Science (B.S.) in Biology, University of California, Irvine (UCI)",
              "Doctor of Dental Surgery (D.D.S.), University of California, Los Angeles (UCLA) School of Dentistry",
              "Postgraduate Residency in Orthodontics, New York University (NYU) College of Dentistry",
            ]}
            Icon={SchoolIcon} // Pass the SchoolIcon here
          />
          <ListSection
            title="Certifications and Professional Memberships"
            items={[
              "Member of the American Association of Orthodontists (AAO)",
              "Member of the California Dental Association (CDA)",
              "Member of the Pacific Coast Society of Orthodontists (PCSO)",
            ]}
            Icon={SchoolIcon} // Pass the SchoolIcon here as well
          />
        </div>
      </div>
      <div className="centeredContent">
        <Typography variant="h4" className="title">
          Values, Philosophy, and Principles
        </Typography>
        <div className="underline" />
        <img
          src={Office}
          alt="Office"
          className="image"
        />
        <Typography sx={{ margin: "1rem 0" }}>
          Dr. Jimmy Vu Ngo’s approach to orthodontics is deeply rooted in a
          commitment to excellence, patient-centered care, and lifelong
          learning. His treatment philosophy is based on several core principles
          that guide his interactions with patients and his clinical practice.
        </Typography>
        <Typography variant="h4" className="title">
          Personal Interests
        </Typography>
        <div className="underline" />
        <img
          src={OfficeTwo}
          alt="Office"
          className="image"
        />
        <Typography sx={{ margin: "1rem 0" }}>
          Dr. Ngo is not only a highly skilled orthodontist but also a
          well-rounded individual whose personal interests enrich his
          professional values. Outside of his practice, Dr. Ngo enjoys
          activities such as skiing, snowboarding, and exploring the world of
          cars, which reflect his appreciation for precision and detail. His
          love for tropical fish and corals demonstrates his patience and
          commitment to long-term care, traits that are mirrored in his
          orthodontic work.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          Dr. Ngo also values time with his family, fostering a sense of empathy
          and connection that carries over into his relationships with patients.
          His passion for travel and discovering new cultures and cuisines
          reflects his open-mindedness and willingness to continuously
          learn—qualities that enhance his approach to orthodontics. These
          diverse interests give Dr. Ngo a balanced perspective, allowing him to
          bring creativity, compassion, and curiosity to both his personal and
          professional life, further emphasizing his patient-centered,
          empathetic, and ethical approach to care.
        </Typography>
      </div>
    </>
  );
};

export default About;
