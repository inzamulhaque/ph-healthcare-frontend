import Herosction from "@/components/UI/HomePage/HeroSection/Herosction";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Herosction />
      <Specialist />
      <TopRatedDoctors />
    </>
  );
};

export default HomePage;
