import { Router } from 'express';

const routes = Router();
const carController = new CarController(carSErvice);

routes.post('/cars', carController.createCar);