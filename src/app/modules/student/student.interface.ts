import { Model, ObjectId, Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TLocalGurdian = {
  name: string;
  occupatioin: string;
  contactNo: string;
  address: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  avater: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroupe?:
    | 'A'
    | 'B'
    | 'AB'
    | 'O'
    | 'A+'
    | 'B+'
    | 'AB+'
    | 'O+'
    | 'A-'
    | 'B-'
    | 'AB-'
    | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  gurdian: TGuardian;
  localGurdian: TLocalGurdian;
  profileImg?: string;
  addmissionSemester: ObjectId;
  isDeleted: boolean;
  academicDepertment: ObjectId;
};

//for creating statick method
export interface userModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

//for creating custom instance
// export type StudentMethod = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethod
// >;
