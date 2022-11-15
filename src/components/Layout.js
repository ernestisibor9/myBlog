import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Badge,
  Typography,
  IconButton,
  Avatar,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import LeftBack from "./LeftBack";
import RightBack from "./RightBack";
import AddPost from "./AddPost";

function Layout({ children }) {
  const [show, setShow] = useState(true);
  const newsObj = useSelector((store) => store);
  const [value, setValue] = useState();
  return (
    <Box>
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Ernzonet
          </Typography>
          <Typography
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setShow(!show)}
          >
            <IconButton>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Tabs
              TabIndicatorProps={{
                sx: { backgroundColor: "yellow", height: 4 },
              }}
              textColor="white"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                sx={{ fontWeight: "bold" }}
                onClick={() => alert("Hello world")}
                label="First"
              />
              <Tab sx={{ fontWeight: "bold" }} label="Second" />
            </Tabs>
          </Box>

          <Box className="box-ava">
            <Badge
              badgeContent={newsObj.news.length}
              color="error"
              sx={{ marginRight: "15px" }}
            >
              <MailIcon sx="white" />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {show && (
            <Grid sm={2} xs={3}>
              <LeftBack />
            </Grid>
          )}
          <Grid sm={7} xs={9}>
            {children}
            <AddPost />
          </Grid>
          <Grid sm={3} sx={{ display: { xs: "none", md: "block" } }}>
            <RightBack />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Layout;
