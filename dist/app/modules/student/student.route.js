"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
exports.router = express_1.default.Router();
exports.router.get('/', student_controller_1.StudentController.findStudent);
exports.router.get('/:id', student_controller_1.StudentController.findOneStudent);
exports.StudentRoutes = exports.router;
