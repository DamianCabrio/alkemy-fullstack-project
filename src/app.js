import './helpers/loadEnv.js';
import cors from 'cors';

const { PORT } = process.env;

import express from 'express';
import appRouter from './routes/index.js';
import apiErrorHandler from './middlewares/apiErrorHandler.js';
import notFound from './middlewares/notFound.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/', appRouter);

app.use(notFound);
app.use(apiErrorHandler);

const port = PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});
