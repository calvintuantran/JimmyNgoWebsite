import * as React from "react";
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const ListSection = ({ title, items }) => (
  <div>
    <Typography className="title" variant="h4">
      {title}
    </Typography>
    <div className="underline" />
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </div>
);

export default ListSection;
