import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _carService: IService<ICar>) {}

  async create(req: Request, res: Response) {
    const creatCar = await this._carService.create(req.body);
    return res.status(201).json(creatCar);
  }
}