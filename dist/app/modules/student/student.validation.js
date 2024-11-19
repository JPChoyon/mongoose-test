"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const studentNameSchema = joi_1.default.object({
    firstName: joi_1.default.string().required().messages({
        'string.empty': 'First name is required.',
    }),
    middleName: joi_1.default.string().allow(null, '').messages({
        'string.base': 'Middle name must be a string.',
    }),
    lastName: joi_1.default.string().required().messages({
        'string.empty': 'Last name is required.',
    }),
});
const guardianSchema = joi_1.default.object({
    fatherName: joi_1.default.string().required().messages({
        'string.empty': 'Father name is required.',
    }),
    fatherOccupation: joi_1.default.string().required().messages({
        'string.empty': 'Father occupation is required.',
    }),
    fatherContactNo: joi_1.default.string().required().messages({
        'string.empty': 'Father contact number is required.',
    }),
    motherName: joi_1.default.string().required().messages({
        'string.empty': 'Mother name is required.',
    }),
    motherOccupation: joi_1.default.string().required().messages({
        'string.empty': 'Mother occupation is required.',
    }),
    motherContactNo: joi_1.default.string().required().messages({
        'string.empty': 'Mother contact number is required.',
    }),
});
const localGuardianSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        'string.empty': 'Local guardian name is required.',
    }),
    occupation: joi_1.default.string().required().messages({
        'string.empty': 'Local guardian occupation is required.',
    }),
    contactNo: joi_1.default.string().required().messages({
        'string.empty': 'Local guardian contact number is required.',
    }),
    address: joi_1.default.string().required().messages({
        'string.empty': 'Local guardian address is required.',
    }),
});
const studentValidationSchema = joi_1.default.object({
    id: joi_1.default.string().required().messages({
        'string.empty': 'Student ID is required.',
    }),
    name: studentNameSchema.required().messages({
        'object.base': 'Name must be a valid object.',
        'any.required': 'Name is required.',
    }),
    gender: joi_1.default.string().valid('male', 'female', 'other').required().messages({
        'any.only': 'Gender must be male, female, or other.',
        'string.empty': 'Gender is required.',
    }),
    email: joi_1.default.string().email().required().messages({
        'string.email': 'Email must be a valid email address.',
        'string.empty': 'Email is required.',
    }),
    dateOfBirth: joi_1.default.string().isoDate().required().messages({
        'string.isoDate': 'Date of birth must be in ISO format.',
        'string.empty': 'Date of birth is required.',
    }),
    contactNo: joi_1.default.string().required().messages({
        'string.empty': 'Contact number is required.',
    }),
    emergencyContactNo: joi_1.default.string().required().messages({
        'string.empty': 'Emergency contact number is required.',
    }),
    bloodGroup: joi_1.default.string()
        .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
        .required()
        .messages({
        'any.only': 'Invalid blood group.',
        'string.empty': 'Blood group is required.',
    }),
    presentAddress: joi_1.default.string().required().messages({
        'string.empty': 'Present address is required.',
    }),
    permanentAddress: joi_1.default.string().required().messages({
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
    profileImg: joi_1.default.string().uri().allow(null, '').messages({
        'string.uri': 'Profile image must be a valid URI.',
    }),
    isActive: joi_1.default.string().valid('active', 'blocked').messages({
        'any.only': 'Status must be active or blocked.',
    }),
});
exports.default = studentValidationSchema;
