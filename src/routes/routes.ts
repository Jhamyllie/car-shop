import { Router } from 'express';
import CarService from '../services/cars';
import CarController from '../controllers/cars';
import Cars from '../models/cars';

const routes = Router();
const car = new Cars();
const service = new CarService(car);
const controller = new CarController(service);

routes.post('/cars', (req, res) => controller.create(req, res));

export default routes;