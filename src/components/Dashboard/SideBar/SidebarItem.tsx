import { IDrawerItem } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const SidebarItem = ({ item }: { item: IDrawerItem }) => {
  return (
    <>
      <Link href={item.path}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{item?.icon && <item.icon />}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default SidebarItem;
