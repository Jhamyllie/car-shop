import { MotocicleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import CustomErro from '../midllewares/customError';

export default class MotorcycleService implements IService<IMotorcycle> {
  private _Motorcycles: IModel<IMotorcycle>;
  notFound = 'Object not found';
  HEXADECIMAL = 'Id must have 24 hexadecimal characters';

  constructor(model: IModel<IMotorcycle>) {
    this._Motorcycles = model;
  }

  async create(obj:unknown):Promise<IMotorcycle> {
    const parsed = MotocicleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._Motorcycles.create(parsed.data);
  }

  async read(): Promise<IMotorcycle[]> {
    const arrayCars = await this._Motorcycles.read();
    return arrayCars;
  }

  async readOne(_id: string): Promise<IMotorcycle> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const car = await this._Motorcycles.readOne(_id);
    if (!car) throw new CustomErro(404, this.notFound);
    return car;
  }

  async update(_id: string, obj: unknown): Promise<IMotorcycle> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const parsed = MotocicleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const car = await this._Motorcycles.update(_id, parsed.data);
    if (!car) throw new CustomErro(404, this.notFound);
    return car;
  }
  
  async delete(_id: string): Promise<IMotorcycle> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const deleteCar = await this._Motorcycles.delete(_id);
    if (!deleteCar) throw new CustomErro(404, this.notFound);
    return deleteCar;
  }
}