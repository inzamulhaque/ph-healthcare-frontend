"use client";

import { Box, Divider, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import drawerItems from "@/utils/drawerItems";
import { TUserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo, IDecodedData } from "@/services/auth.service";

const SideBar = () => {
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    const { role } = getUserInfo() as IDecodedData;
    setUserRole(role);
  }, []);

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

        <Divider />

        <List>
          {drawerItems(userRole as TUserRole).map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </List>
      </Box>
    </>
  );
};

export default SideBar;
