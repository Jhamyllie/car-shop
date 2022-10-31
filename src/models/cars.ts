import { model as createModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

// estrutura como a tabela/coleção vai ser criada dentro mongo
const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class Cars extends MongoModel<ICar> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}

export default Cars;