import * as React from "react";

// MUI
import { Typography } from "@mui/material";

// Components
import JimmyNgo from "../../images/JimmyNgoImage.jpg";
import ListSection from "../Common/ListSection";

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
            orthodontist with a distinguished career spanning over 24 years in
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
          />
          <ListSection
            title="Certifications and Professional Memberships"
            items={[
              "Member of the American Association of Orthodontists (AAO)",
              "Member of the California Dental Association (CDA)",
              "Member of the Pacific Coast Society of Orthodontists (PCSO)",
            ]}
          />
        </div>
      </div>
      <div className="centeredContent">
        <Typography variant="h4" className="title">
          Values, Philosophy, and Principles
        </Typography>
        <div className="underline" />
        <Typography sx={{ margin: "1rem 0" }}>
          Dr. Jimmy Vu Ngo’s approach to orthodontics is deeply rooted in a
          commitment to excellence, patient-centered care, and lifelong
          learning. His treatment philosophy is based on several core principles
          that guide his interactions with patients and his clinical practice.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Individualized Treatment Plans:</strong> Dr. Ngo believes in
          creating customized treatment plans that cater to each patient's
          unique needs and goals. He ensures that his patients are well-informed
          about their treatment options so they can make confident decisions
          regarding their dental care.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Commitment to Excellence:</strong> Striving for the highest
          standards in all aspects of orthodontic care, Dr. Ngo is dedicated to
          continually evaluating and improving clinical practices. He embraces
          the latest advancements in orthodontic techniques and technologies,
          ensuring that his patients receive the most effective and modern
          treatments available.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Evidence-Based Practice:</strong> Dr. Ngo's treatment
          approaches are firmly grounded in the latest scientific research and
          clinical evidence. He actively engages in ongoing education and
          training to keep his skills and knowledge up to date, allowing him to
          provide cutting-edge care to his patients.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Empathy and Compassion:</strong> Dr. Ngo understands the
          importance of empathy in patient care. He strives to create a
          supportive and caring environment where patients feel heard and
          respected. By fostering trust through honesty, transparency, and
          respect, he helps patients feel at ease throughout their orthodontic
          journey.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Ethical Practice:</strong> Adhering to the highest ethical
          standards, Dr. Ngo ensures that all treatments are necessary and in
          the best interest of the patient. He remains vigilant in protecting
          patient privacy and confidentiality, prioritizing patient well-being
          in every decision made.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Effective Communication:</strong> Dr. Ngo prioritizes open,
          clear communication with his patients. He encourages patients to ask
          questions and express any concerns they may have throughout the
          treatment process, fostering a collaborative environment where
          patients feel fully involved in their care.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Comprehensive Care:</strong> With a holistic approach to
          orthodontics, Dr. Ngo collaborates closely with other dental and
          medical professionals when necessary to provide comprehensive care. He
          also offers long-term follow-up services to maintain the results of
          his treatments, ensuring continued success beyond the initial
          procedure.
        </Typography>
        <Typography sx={{ margin: "1rem 0" }}>
          <strong>Technology and Innovation:</strong> Dr. Ngo is passionate
          about utilizing the latest technology and innovative techniques to
          improve treatment effectiveness and patient comfort. His
          forward-thinking approach allows him to enhance both the efficiency of
          treatments and the overall patient experience.
        </Typography>
        <Typography variant="h4" className="title">
          Personal Interests
        </Typography>
        <div className="underline" />
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
