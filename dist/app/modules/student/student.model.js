"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.'],
    },
    middleName: { type: String },
    lastName: {
        type: String,
        required: [true, 'Last name is required.'],
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: [true, 'Father name is required.'],
    },
    fatherOccupation: {
        type: String,
        required: [true, 'Father occupation is required.'],
    },
    fatherContactNo: {
        type: String,
        required: [true, 'Father contact number is required.'],
    },
    motherName: {
        type: String,
        required: [true, 'Mother name is required.'],
    },
    motherOccupation: {
        type: String,
        required: [true, 'Mother occupation is required.'],
    },
    motherContactNo: {
        type: String,
        required: [true, 'Mother contact number is required.'],
    },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Local guardian name is required.'],
    },
    occupation: {
        type: String,
        required: [true, 'Local guardian occupation is required.'],
    },
    contactNo: {
        type: String,
        required: [true, 'Local guardian contact number is required.'],
    },
    address: {
        type: String,
        required: [true, 'Local guardian address is required.'],
    },
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'Student ID is required.'],
        unique: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'Must need user id'],
        unique: true,
        ref: 'User',
    },
    name: {
        type: studentNameSchema,
        required: [true, 'Student name is required.'],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: 'Gender must be male, female, or other.',
        },
        required: [true, 'Gender is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format.'],
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Date of birth is required.'],
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required.'],
    },
    emergencyContactNo: {
        type: String,
        required: [true, 'Emergency contact number is required.'],
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
            message: 'Invalid blood group.',
        },
        required: [true, 'Blood group is required.'],
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required.'],
    },
    permanentAddress: {
        type: String,
        required: [true, 'Permanent address is required.'],
    },
    guardian: {
        type: guardianSchema,
        required: [true, 'Guardian information is required.'],
    },
    localGuardian: {
        type: localGuardianSchema,
        required: [true, 'Local guardian information is required.'],
    },
    profileImg: { type: String },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false,
});
// creating a static method
studentSchema.statics.isStudentExist = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingStudent = yield exports.Student.findOne({ id });
        return existingStudent;
    });
};
// create model
exports.Student = (0, mongoose_1.model)('Student', studentSchema);
