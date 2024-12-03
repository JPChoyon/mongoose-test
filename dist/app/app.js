"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./modules/student/student.route");
const user_router_1 = require("./modules/users/user.router");
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
// parser / middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// api call from here
app.use('/api/v1/students', student_route_1.StudentRoutes);
app.use('/api/v1/users', user_router_1.UserRoutes);
const getAController = (req, res) => {
    res.send('Hello World!');
};
app.get('/', getAController);
app.use(globalErrorHandler_1.default);
//Not Found
app.use(notFound_1.default);
exports.default = app;
