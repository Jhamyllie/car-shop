import * as sinon from 'sinon';
import chai from 'chai';
import Cars from '../../../models/cars';
import { Model } from 'mongoose';
import { carMock, carMockWithId  } from '../mocks/carMocks'; 

const { expect } = chai;

describe('Car Model', () => {
  const carModel = new Cars();

  before(async () => {  
    sinon.stub(Model, 'create').resolves(carMockWithId);
  });
  after(()=>{
    sinon.restore();
  });

  describe('Cria um carro', () => {
    it('Se criado com sucesso', async () => {
      const result = await carModel.create(carMock);
      expect(result).to.be.deep.equal(carMockWithId);
    });
  });
});