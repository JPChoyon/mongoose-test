import Joi from 'joi';

const studentNameSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'First name is required.',
  }),
  middleName: Joi.string().allow(null, '').messages({
    'string.base': 'Middle name must be a string.',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required.',
  }),
});
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father name is required.',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father occupation is required.',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': 'Father contact number is required.',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother name is required.',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother occupation is required.',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': 'Mother contact number is required.',
  }),
});
const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Local guardian name is required.',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Local guardian occupation is required.',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Local guardian contact number is required.',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Local guardian address is required.',
  }),
});
const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required.',
  }),
  name: studentNameSchema.required().messages({
    'object.base': 'Name must be a valid object.',
    'any.required': 'Name is required.',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': 'Gender must be male, female, or other.',
    'string.empty': 'Gender is required.',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address.',
    'string.empty': 'Email is required.',
  }),
  dateOfBirth: Joi.string().isoDate().required().messages({
    'string.isoDate': 'Date of birth must be in ISO format.',
    'string.empty': 'Date of birth is required.',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required.',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
    .required()
    .messages({
      'any.only': 'Invalid blood group.',
      'string.empty': 'Blood group is required.',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required.',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required.',
  }),
  guardian: guardianSchema.required().messages({
    'object.base': 'Guardian must be a valid object.',
    'any.required': 'Guardian information is required.',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'object.base': 'Local guardian must be a valid object.',
    'any.required': 'Local guardian information is required.',
  }),
  profileImg: Joi.string().uri().allow(null, '').messages({
    'string.uri': 'Profile image must be a valid URI.',
  }),
  isActive: Joi.string().valid('active', 'blocked').messages({
    'any.only': 'Status must be active or blocked.',
  }),
});

export default studentValidationSchema;