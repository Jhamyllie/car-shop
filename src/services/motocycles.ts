import { MotocicleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import CustomErro from '../midllewares/customError';

export default class MotorcycleService implements IService<IMotorcycle> {
  private _Motorcycles: IModel<IMotorcycle>;
  NOTFOUND = 'Object not found';
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
    const arrayMotorcycles = await this._Motorcycles.read();
    return arrayMotorcycles;
  }

  async readOne(_id: string): Promise<IMotorcycle> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const Motorcycles = await this._Motorcycles.readOne(_id);
    if (!Motorcycles) throw new CustomErro(404, this.NOTFOUND);
    return Motorcycles;
  }

  async update(_id: string, obj: unknown): Promise<IMotorcycle> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const parsed = MotocicleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const Motorcycles = await this._Motorcycles.update(_id, parsed.data);
    if (!Motorcycles) throw new CustomErro(404, this.NOTFOUND);
    return Motorcycles;
  }
  
  async delete(_id: string): Promise<IMotorcycle> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const deleteMotorcycles = await this._Motorcycles.delete(_id);
    if (!deleteMotorcycles) throw new CustomErro(404, this.NOTFOUND);
    return deleteMotorcycles;
  }
}