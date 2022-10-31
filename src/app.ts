import express from 'express';
import 'express-async-errors';
import erroHandler from './midllewares/erroRendler';
import routes from './routes/routes';

const app = express();
app.use(express.json());

app.use(routes);

app.use(erroHandler);

export default app;
