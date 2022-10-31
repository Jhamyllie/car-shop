import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import CustomErro from '../midllewares/customError';

export default class CarService implements IService<ICar> {
  private _cars: IModel<ICar>;

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
    const car = await this._cars.readOne(_id);
    // if (_id.length < 24) {
    //   throw new CustomErro(400, 'Id must have 24 hexadecimal characters'); 
    // }
    if (!car) throw new CustomErro(404, 'Object not found');
    return car;
  }
}
