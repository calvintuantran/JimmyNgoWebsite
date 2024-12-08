import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  padding: 16,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

function Author({ authors }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroup>
        <Typography variant="caption">{authors.map((author) => author.name).join(", ")}</Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

function CardItem({ card, isFocused, handleFocus, handleBlur, index }) {
  return (
    <Grid item xs={12} md={6}>
      <StyledCard
        variant="outlined"
        onFocus={() => handleFocus(index)}
        onBlur={handleBlur}
        tabIndex={0}
        className={isFocused ? "Mui-focused" : ""}
      >
        <CardMedia
          component="img"
          alt={card.title}
          image={card.img}
          sx={{ aspectRatio: "16 / 9", borderBottom: "1px solid", borderColor: "divider" }}
        />
        <StyledCardContent>
          <Typography variant="caption" gutterBottom>
            {card.tag}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {card.title}
          </Typography>
          <StyledTypography variant="body2" color="text.secondary">
            {card.description}
          </StyledTypography>
        </StyledCardContent>
        <Author authors={card.authors} />
      </StyledCard>
    </Grid>
  );
}

export default function BeforeAfterServices({ cardData }) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => setFocusedCardIndex(index);
  const handleBlur = () => setFocusedCardIndex(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Grid container spacing={2} sx={{ px: 6 }}>
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            card={card}
            index={index}
            isFocused={focusedCardIndex === index}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
        ))}
      </Grid>
    </Box>
  );
}
