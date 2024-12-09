import express, { Request, Response } from 'express';
import cors from 'cors';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';
import router from './routes';
const app = express();

// parser / middleware
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
