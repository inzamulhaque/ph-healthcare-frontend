export type TSpecialties = {
  specialtiesId: string;
  isDeleted?: null;
};

export type TDoctor = {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number | undefined;
  gender: "MALE" | "FEMALE";
  apointmentFee: number | undefined;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialties?: TSpecialties[];
  role?: string;
  createdAt: Date;
  status?: string;
  averageRating?: number;
};
