"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterValidations = void 0;
const zod_1 = require("zod");
const academicSemester_constain_1 = require("./academicSemester.constain");
const academicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_constain_1.AcademicSemesterName]),
        year: zod_1.z.string(),
        code: zod_1.z.enum([...academicSemester_constain_1.AcademicSemesterCode]),
        startMonth: zod_1.z.enum([...academicSemester_constain_1.Months]),
        endMonth: zod_1.z.enum([...academicSemester_constain_1.Months]),
    }),
});
exports.academicSemesterValidations = {
    academicSemesterValidationSchema,
};
