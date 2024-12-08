import { z } from 'zod';

const academicSemesterValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'password must be string' })
    .max(20, { message: 'Password cannot be more than 20' })
    .optional(),
  needsPasswordChange: z.boolean().optional().default(false),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});

export const academicSemesterValidations = {
  academicSemesterValidationSchema,
};
