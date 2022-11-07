import * as sinon from 'sinon';
import chai from 'chai';
import Cars from '../../../models/cars';
import { Model } from 'mongoose';
import { carMock, carMockWithId, carListMock  } from '../mocks/carMocks'; 

const { expect } = chai;

describe('Car Model', () => {
  const carModel = new Cars();

  before(async () => {  
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carListMock);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findOneAndUpdate').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);


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

  describe('Lista os carros', () => {
    it('listado com sucesso', async() => {
      const result = await carModel.read();
      expect(result).to.be.equal(carListMock);
    });
  });

  describe('retorna um carro pelo id', () => {
    it('Em caso de sucesso', async () => {
      const result = await carModel.readOne(carMockWithId._id);
      expect(result).to.be.equal(carMockWithId);
    });
  });

  describe('É possível atualizar um carro', () => {
    it('Em caso de sucesso', async () => {
      const result = await carModel.update(carMockWithId._id, carMock);
      expect(result).to.be.equal(carMockWithId);
    });
  });

  describe('É possível deletar um carro', () => {
    it('Deletado com sucesso', async () => {
      const result = await carModel.delete(carMockWithId._id);
      expect(result).to.be.equal(carMockWithId);
    });
  });
});