import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import CustomErro from '../midllewares/customError';

export default class CarService implements IService<ICar> {
  private _cars: IModel<ICar>;
  // LETRAS MAIÚSCULAS 
  notFound = 'Object not found';
  HEXADECIMAL = 'Id must have 24 hexadecimal characters';

  constructor(model: IModel<ICar>) {
    this._cars = model;
  }

  async create(obj:unknown):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._cars.create(parsed.data);
  }

  async read(): Promise<ICar[]> {
    const arrayCars = await this._cars.read();
    return arrayCars;
  }

  async readOne(_id: string): Promise<ICar> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const car = await this._cars.readOne(_id);
    if (!car) throw new CustomErro(404, this.notFound);
    return car;
  }

  async update(_id: string, obj: unknown): Promise<ICar> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const car = await this._cars.update(_id, parsed.data);
    if (!car) throw new CustomErro(404, this.notFound);
    return car;
  }
  
  async delete(_id: string): Promise<ICar> {
    if (_id.length < 24) throw new CustomErro(400, this.HEXADECIMAL);
    const deleteCar = await this._cars.delete(_id);
    if (!deleteCar) throw new CustomErro(404, this.notFound);
    return deleteCar;
  }
}
