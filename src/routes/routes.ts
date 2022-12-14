import { Router } from 'express';
import CarService from '../services/cars';
import CarController from '../controllers/cars';
import Cars from '../models/cars';

const routes = Router();
const car = new Cars();
const service = new CarService(car);
const controller = new CarController(service);

routes.post('/cars', (req, res) => controller.create(req, res));

routes.get('/cars', (req, res) => controller.read(req, res));

routes.get('/cars/:id', (req, res) => controller.readOne(req, res));

routes.put('/cars/:id', (req, res) => controller.update(req, res));

routes.delete('/cars/:id', (req, res) => controller.delete(req, res));

export default routes;