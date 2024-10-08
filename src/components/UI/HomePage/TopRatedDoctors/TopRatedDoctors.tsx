import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface IDoctor {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE";
  appointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  review: any[];
  doctorSpecialties: string[];
}

const TopRatedDoctors = async () => {
  const res = await fetch(`${process.env.API}/doctor?page=1&limit=3`);
  const { data: doctors } = await res.json();

  return (
    <>
      <Box
        sx={{
          my: 10,
          py: 30,
          backgroundColor: "rgba(20, 20, 20, 0.1)",
          clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Our Top Rated Doctors
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mt: 2 }}
          >
            Access to expert physicians and surgeons, advanced technologies
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            and top-quality surgery facilities right here.
          </Typography>
        </Box>

        <Container
          sx={{
            margin: "30px auto",
          }}
        >
          <Grid container spacing={2}>
            {doctors.map((doctor: IDoctor) => (
              <Grid item key={doctor.id} md={4}>
                <Card>
                  <Box
                    sx={{
                      height: "270px",
                    }}
                  >
                    <Image
                      src={doctor.profilePhoto}
                      alt="profile image"
                      width={500}
                      height={250}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {doctor.qualification}, {doctor.designation}
                    </Typography>
                    <Typography
                      variant="body2"
                      mt={1}
                      sx={{ color: "text.secondary" }}
                    >
                      <LocationOnIcon /> {doctor.address}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button>Book Now</Button>
                    <Button variant="outlined">View Profile</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
              }}
            >
              View All
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TopRatedDoctors;