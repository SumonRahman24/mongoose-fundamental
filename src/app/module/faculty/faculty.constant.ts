import { TBloodGroup, TGender } from "./faculty.interface";

export const Gender: TGender[] = ["Male", "Female", "Other"];
export const BloodGroup: TBloodGroup[] = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

export const facultySearchableFields = [
  "contactNo",
  "emergencyContactNo",
  "name.firstName",
  "name.lastName",
  "name.middleName",
  "designation",
  "gender",
];
