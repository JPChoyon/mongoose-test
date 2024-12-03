"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    password: zod_1.z
        .string({ invalid_type_error: 'password must be string' })
        .max(20, { message: 'Password cannot be more than 20' })
        .optional(),
    needsPasswordChange: zod_1.z.boolean().optional().default(false),
    role: zod_1.z.enum(['admin', 'student', 'faculty']),
    status: zod_1.z.enum(['in-progress', 'blocked']).default('in-progress'),
    isDeleted: zod_1.z.boolean().optional().default(false),
});
exports.userValidation = {
    userValidationSchema,
};
