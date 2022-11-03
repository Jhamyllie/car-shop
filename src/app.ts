import express from 'express';
import 'express-async-errors';
import erroHandler from './midllewares/erroRendler';
import routes from './routes/routes';
import routesMotorcycle from './routes/routesMotorcicle';

const app = express();
app.use(express.json());

app.use(routes);

app.use(routesMotorcycle);

app.use(erroHandler);

export default app;
