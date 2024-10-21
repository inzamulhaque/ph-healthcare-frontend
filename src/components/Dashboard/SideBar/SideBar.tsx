import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const SideBar = () => {
  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Box>
        <Stack
          direction={"row"}
          justifyItems={"center"}
          alignItems={"center"}
          gap={1}
          px={2}
          my={1.5}
          component={Link}
          href={"/"}
        >
          <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
          <Typography variant="h6" component={"h1"}>
            PH Health Care
          </Typography>
        </Stack>
        {drawer}
      </Box>
    </>
  );
};

export default SideBar;
