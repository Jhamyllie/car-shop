import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotorcycleController {
  constructor(private _MotorcycleService: IService<IMotorcycle>) {}
  
  async create(req: Request, res: Response) {
    const creatMotorcycle = await this._MotorcycleService.create(req.body);
    return res.status(201).json(creatMotorcycle);
  }

  async read(_req: Request, res: Response) {
    const readCar = await this._MotorcycleService.read();
    return res.status(200).json(readCar);
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const readOneCar = await this._MotorcycleService.readOne(id);
    return res.status(200).json(readOneCar);
  }

  async update(req: Request, res: Response<IMotorcycle>) {
    const { params, body } = req;
    const updateRegister = await this._MotorcycleService.update(params.id, body);
    return res.status(200).json(updateRegister);
  }

  async delete(req: Request, res: Response) {
    // const { id } = req.params;
    await this._MotorcycleService.delete(req.params.id);
    return res.status(204).json();
  }
}