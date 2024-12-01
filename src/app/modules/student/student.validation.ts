import Joi from 'joi';

// Joi Schema for UserName
const userSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Z][a-z]*$/, '{VALUE} is not capitalieze formate')
    .messages({
      'string.pattern.base': '{#value} is not capitalieze formate',
      'string.empty': 'firstname is required',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/, '{VALUE} is not supported')
    .messages({
      'string.pattern.base': '{#value} is not supported',
      'string.empty': 'latname is required',
    }),
});

// Joi Schema for Guardian
const guardianSchema = Joi.object({
  fatherName: Joi.string()
    .required()
    .messages({ 'string.empty': 'fatherName is required' }),
  fatherOccupation: Joi.string()
    .required()
    .messages({ 'string.empty': 'fatherOccupation is required' }),
  fatherContactNo: Joi.string()
    .required()
    .messages({ 'string.empty': 'fatherContactNo is required' }),
  motherName: Joi.string()
    .required()
    .messages({ 'string.empty': 'motherName is required' }),
  motherOccupation: Joi.string()
    .required()
    .messages({ 'string.empty': 'motherOccupation is required' }),
  motherContactNo: Joi.string()
    .required()
    .messages({ 'string.empty': 'motherContactNo is required' }),
});

// Joi Schema for LocalGurdian
const localGurdianSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'string.empty': 'name is required' }),
  occupatioin: Joi.string()
    .required()
    .messages({ 'string.empty': 'occupatioin is required' }),
  contactNo: Joi.string()
    .required()
    .messages({ 'string.empty': 'contactNo is required' }),
  address: Joi.string()
    .required()
    .messages({ 'string.empty': 'address is required' }),
});

// Joi Schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({ 'string.empty': 'id is required' }),
  name: userSchema.required().messages({ 'any.required': 'name is required' }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': '{#value} is not valid',
    'string.empty': 'gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string()
    .email()
    .required()
    .messages({ 'string.empty': 'email is required' }),
  avater: Joi.string()
    .uri()
    .required()
    .messages({ 'string.empty': 'avater is required' }),
  contactNo: Joi.string()
    .required()
    .messages({ 'string.empty': 'contactNo is required' }),
  emergencyContactNo: Joi.string()
    .required()
    .messages({ 'string.empty': 'emergencyContactNo is required' }),
  bloodGroupe: Joi.string()
    .valid('A', 'B', 'AB', 'O', 'A+', 'B+', 'AB+', 'O+', 'B-', 'AB-', 'O-')
    .optional(),
  presentAddress: Joi.string()
    .required()
    .messages({ 'string.empty': 'presentAddress is required' }),
  parmanentAddress: Joi.string()
    .required()
    .messages({ 'string.empty': 'parmanentAddress is required' }),
  gurdian: guardianSchema
    .required()
    .messages({ 'any.required': 'gurdian is required' }),
  localGurdian: localGurdianSchema
    .required()
    .messages({ 'any.required': 'localGurdian is required' }),
  profileImg: Joi.string()
    .uri()
    .required()
    .messages({ 'string.empty': 'profileImg is required' }),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({ 'any.only': '{#value} is not valid' }),
});

export default studentValidationSchema;
