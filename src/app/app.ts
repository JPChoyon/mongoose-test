import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';
import { UserRoutes } from './modules/users/user.router';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app = express();

// parser / middleware
app.use(express.json());
app.use(cors());

// api call from here
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
