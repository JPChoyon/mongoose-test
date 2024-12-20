"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = express_1.default.Router();
router.post('/create-academic-semester', (0, validateRequest_1.default)(academicSemester_validation_1.academicSemesterValidations.academicSemesterValidationSchema), academicSemester_controller_1.academicSemesterController.createAcademicSemester);
// router.get('/', StudentController.findStudent);
// router.get('/:id', StudentController.findOneStudent);
exports.AcademicSemesterRoutes = router;
