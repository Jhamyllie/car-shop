import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _carService: IService<ICar>) {}

  async create(req: Request, res: Response) {
    const creatCar = await this._carService.create(req.body);
    return res.status(201).json(creatCar);
  }

  async read(_req: Request, res: Response) {
    const readCar = await this._carService.read();
    return res.status(200).json(readCar);
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const readOneCar = await this._carService.readOne(id);
    return res.status(200).json(readOneCar);
  }

  async update(req: Request, res: Response<ICar>) {
    const { params, body } = req;
    const updateRegister = await this._carService.update(params.id, body);
    return res.status(200).json(updateRegister);
  }

  async delete(req: Request, res: Response) {
    // const { id } = req.params;
    await this._carService.delete(req.params.id);
    return res.status(204).json();
  }
}