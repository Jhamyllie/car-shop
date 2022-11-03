import { Router } from 'express';
import MotorcycleController from '../controllers/motorcycles';
import Motorcycle from '../models/motorcycles';
import MotorcycleService from '../services/motocycles';

const routesMotorcycle = Router();
const motorcycle = new Motorcycle();
const serviceMotorcycle = new MotorcycleService(motorcycle);
const controllerMotorcycle = new MotorcycleController(serviceMotorcycle);
const motorcyclesId = '/motorcycles/:id';

routesMotorcycle.post('/motorcycles', (req, res) => controllerMotorcycle.create(req, res));

routesMotorcycle.get('/motorcycles', (req, res) => controllerMotorcycle.read(req, res));

routesMotorcycle.get(motorcyclesId, (req, res) => controllerMotorcycle.readOne(req, res));

routesMotorcycle.put(motorcyclesId, (req, res) => controllerMotorcycle.update(req, res));

routesMotorcycle.delete(motorcyclesId, (req, res) => controllerMotorcycle.delete(req, res));

export default routesMotorcycle;