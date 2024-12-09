"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemester = void 0;
const mongoose_1 = require("mongoose");
const academicSemester_constain_1 = require("./academicSemester.constain");
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        enum: academicSemester_constain_1.AcademicSemesterName,
    },
    year: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        enum: academicSemester_constain_1.AcademicSemesterCode,
    },
    startMonth: {
        type: String,
        required: true,
        enum: academicSemester_constain_1.Months,
    },
    endMonth: {
        type: String,
        required: true,
        enum: academicSemester_constain_1.Months,
    },
}, {
    timestamps: true,
});
// acdemicSemesterSchema.pre('save', async function (next) {
//   const isSemesterExists = await AcademicSemester.findOne({
//     year: this.year,
//     name: this.name,
//   });
//   if (isSemesterExists) {
//     throw new Error('Semester is already exists !');
//   }
//   next();
// });
exports.academicSemester = (0, mongoose_1.model)('AcademicSemester', academicSemesterSchema);
