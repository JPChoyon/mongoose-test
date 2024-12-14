import { z } from 'zod';

const studentNameSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required.'),
});
const guardianSchema = z.object({
  fatherName: z.string().min(1, 'Father name is required.'),
  fatherOccupation: z.string().min(1, 'Father occupation is required.'),
  fatherContactNo: z.string().min(1, 'Father contact number is required.'),
  motherName: z.string().min(1, 'Mother name is required.'),
  motherOccupation: z.string().min(1, 'Mother occupation is required.'),
  motherContactNo: z.string().min(1, 'Mother contact number is required.'),
});
const localGuardianSchema = z.object({
  name: z.string().min(1, 'Local guardian name is required.'),
  occupation: z.string().min(1, 'Local guardian occupation is required.'),
  contactNo: z.string().min(1, 'Local guardian contact number is required.'),
  address: z.string().min(1, 'Local guardian address is required.'),
});
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string({ invalid_type_error: 'password must be string' })
      .max(20, { message: 'Password cannot be more than 20' }),
    student: z.object({
      name: studentNameSchema,
      gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({ message: 'Gender must be male, female, or other.' }),
      }),
      email: z.string().email('Invalid email format.'),
      dateOfBirth: z.string().min(1, 'Date of birth is required.'),
      contactNo: z.string().min(1, 'Contact number is required.'),
      emergencyContactNo: z
        .string()
        .min(1, 'Emergency contact number is required.'),
      bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'], {
        errorMap: () => ({ message: 'Invalid blood group.' }),
      }),
      presentAddress: z.string().min(1, 'Present address is required.'),
      permanentAddress: z.string().min(1, 'Permanent address is required.'),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImg: z
        .string()
        .url('Profile image must be a valid URL.')
        .optional(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const studentValidationSchemas = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
