export type TSpecialties = {
  specialtiesId: string;
  isDeleted?: null;
};

export interface IDoctorSpecialty {
  specialtiesId: string;
  doctorId: string;
  specialties: any; // You may want to specify the structure of the specialties object if known
}

export type TDoctor = {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE" | "OTHER";
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  review: any[];
  doctorSpecialties: IDoctorSpecialty[];
};

export interface IDoctorFormData {
  doctor: TDoctor;
  password: string;
}
