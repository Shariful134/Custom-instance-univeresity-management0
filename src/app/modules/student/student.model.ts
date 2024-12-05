import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGurdian,
  TStudent,
  TUserName,
  userModel,
} from './student.interface';

const userSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'firstname is required'],
    trim: true,
    // maxlength: 15,
    // minlength: 5,
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.substring(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not capitalieze formate',
    // },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'latname is required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not supported',
    // },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: { type: String, required: true },
  occupatioin: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, userModel>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userSchema,
      required: [true, 'name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not valid',
      },
      required: true,
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avater: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroupe: {
      type: String,
      enum: ['A', 'B', 'AB', 'O', 'A+', 'B+', 'AB+', 'O+', 'B-', 'AB-', 'O-'],
    },

    presentAddress: { type: String, required: true },
    parmanentAddress: { type: String, required: true },
    gurdian: { type: guardianSchema, required: true },
    localGurdian: { type: localGurdianSchema, required: true },
    profileImg: { type: String },
    addmissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

//virtual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName}  ${this.name.middleName}  ${this.name.lastName}`;
});

//query middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  // console.log(this);
  next();
});
// studentSchema.pre('findOne',  function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   // console.log(this);
//   next();
// });
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  // console.log(this);
  next();
});

//creating a instance method

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};
//creating a custom instance mathod
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id: id });
//   return existingUser;
// };
export const Student = model<TStudent, userModel>('Student', studentSchema);
