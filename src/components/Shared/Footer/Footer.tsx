import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <>
      <Box bgcolor={"rgb(17, 26, 34)"} py={5}>
        <Container>
          <Stack direction={"row"} gap={4} justifyContent={"center"}>
            <Typography color="#fff" component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography color="#fff" component={Link} href="/login">
              Health Plans
            </Typography>
            <Typography color="#fff" component={Link} href="/login">
              Medicine
            </Typography>
            <Typography color="#fff" component={Link} href="/login">
              Diagnostics
            </Typography>
            <Typography color="#fff" component={Link} href="/login">
              NGOs
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={2} justifyContent={"center"} py={3}>
            <Image
              src={facebookIcon}
              width={30}
              height={30}
              alt="Facebook Icon"
            />

            <Image
              src={facebookIcon}
              width={30}
              height={30}
              alt="Facebook Icon"
            />

            <Image
              src={facebookIcon}
              width={30}
              height={30}
              alt="Facebook Icon"
            />

            <Image
              src={facebookIcon}
              width={30}
              height={30}
              alt="Facebook Icon"
            />
          </Stack>

          {/* <div className="border-b-[1px] border-dashed"></div> */}

          <Box
            sx={{
              border: "1px dashed lightgray",
            }}
          ></Box>

          <Stack
            direction={"row"}
            gap={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={3}
          >
            <Typography color="#fff" component={"p"}>
              &copy; 2024 PH HealthCare. All Rights Reserved.
            </Typography>

            <Typography
              color="white"
              variant="h4"
              component={Link}
              href="/"
              fontWeight={600}
            >
              P
              <Box component={"span"} color={"primary.main"}>
                H
              </Box>{" "}
              Health Care
            </Typography>

            <Typography color="#fff" component={"p"}>
              Privacy Policy | Terms & Conditions
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
