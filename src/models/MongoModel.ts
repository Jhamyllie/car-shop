import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import CustomErro from '../midllewares/customError';

abstract class MModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  async read(): Promise<T[]> {
    return this._model.find();
  }

  async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomErro(400, 'Id must have 24 hexadecimal characters');
    return this._model.findOne({ _id });
  }
  
  async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomErro(404, 'Object not found');
    return this._model.findOneAndUpdate({ _id }, { ...obj }, { new: true });
  }

  async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomErro(400, 'Id must have 24 hexadecimal characters');
    return this._model.findByIdAndDelete({ _id });
  }
}

export default MModel;