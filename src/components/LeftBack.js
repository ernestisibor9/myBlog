import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FeedIcon from "@mui/icons-material/Feed";

import React from "react";
import { useLocation, Link } from "react-router-dom";

function LeftBack() {
  const location = useLocation();
  console.log(location);

  const menuList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "About",
      icon: <GroupAddIcon />,
      path: "/about",
    },
    {
      text: "Services",
      icon: <MiscellaneousServicesIcon />,
      path: "/services",
    },
    {
      text: "Contact",
      icon: <ContactMailIcon />,
      path: "/contact",
    },
    {
      text: "Blog",
      icon: <FeedIcon />,
      path: "/blog",
    },
    {
      text: "Inbox",
      icon: <InboxIcon />,
      path: "/inbox",
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#7b1fa2",
        color: "white",
        paddingTop: "50px",
        position: "sticky",
        top: 0,
        width:{xs:"75%", md:"100%"}
      }}
    >
      <List>
        {menuList.map((item) => {
          return (
            <ListItem
              className={location.pathname === item.path ? "active" : null}
            >
              <Link to = {item.path} className= 'link-man'>
              <ListItemButton>
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{display:{xs:"none", md: "block"}}}/>
              </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );
}

export default LeftBack;
