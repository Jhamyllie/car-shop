import { model as createModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MModel from './MongoModelVehicle';

const MotorcycleSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class Motorcycle extends MModel<IMotorcycle> {
  constructor(model = createModel('Motorcycle', MotorcycleSchema)) {
    super(model);
  }
}

export default Motorcycle;