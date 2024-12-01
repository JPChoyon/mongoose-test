"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const studentNameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, 'First name is required.'),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().min(1, 'Last name is required.'),
});
const guardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string().min(1, 'Father name is required.'),
    fatherOccupation: zod_1.z.string().min(1, 'Father occupation is required.'),
    fatherContactNo: zod_1.z.string().min(1, 'Father contact number is required.'),
    motherName: zod_1.z.string().min(1, 'Mother name is required.'),
    motherOccupation: zod_1.z.string().min(1, 'Mother occupation is required.'),
    motherContactNo: zod_1.z.string().min(1, 'Mother contact number is required.'),
});
const localGuardianSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Local guardian name is required.'),
    occupation: zod_1.z.string().min(1, 'Local guardian occupation is required.'),
    contactNo: zod_1.z.string().min(1, 'Local guardian contact number is required.'),
    address: zod_1.z.string().min(1, 'Local guardian address is required.'),
});
const studentValidationSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'Student ID is required.'),
    name: studentNameSchema,
    gender: zod_1.z.enum(['male', 'female', 'other'], {
        errorMap: () => ({ message: 'Gender must be male, female, or other.' }),
    }),
    email: zod_1.z.string().email('Invalid email format.'),
    dateOfBirth: zod_1.z.string().min(1, 'Date of birth is required.'),
    contactNo: zod_1.z.string().min(1, 'Contact number is required.'),
    emergencyContactNo: zod_1.z
        .string()
        .min(1, 'Emergency contact number is required.'),
    bloodGroup: zod_1.z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'], {
        errorMap: () => ({ message: 'Invalid blood group.' }),
    }),
    presentAddress: zod_1.z.string().min(1, 'Present address is required.'),
    permanentAddress: zod_1.z.string().min(1, 'Permanent address is required.'),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: zod_1.z.string().url('Profile image must be a valid URL.').optional(),
    isActive: zod_1.z
        .enum(['active', 'blocked'], {
        errorMap: () => ({ message: 'Status must be active or blocked.' }),
    })
        .default('active'),
});
exports.default = studentValidationSchema;
