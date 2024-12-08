import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/midlewares/globalErrorHandle';
import notFound from './app/midlewares/notFound';
import router from './app/routes';
// import { Server } from 'http';

// let server: Server;

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

app.use(notFound);

//testing parpas using this route
// const test = async (req: Request, res: Response) => {
//   Promise.reject();
//   // const a = 10;
//   // res.send(a);
// };
// app.get('/', test);

export default app;
