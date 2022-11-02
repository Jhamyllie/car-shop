import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carMock, carMockId, carsList } from '../mocks/carMocks';
import Cars from '../../../models/cars';

describe('Car Model', () => {
  const carModel = new Cars();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockId),
    sinon.stub(Model, 'find').resolves(carsList),
    sinon.stub(Model, 'findOne').resolves(carMockId),
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockId),
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockId)
  });

  after(() => { 
    sinon.restore() 
  });

  describe('cria um carro', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockId);
    });
  });


  describe('lista todos os carros', () => {
    it ('encontrado com sucesso', async () => {
    const car = await carModel.read();
    expect(car).to.be.deep.equal(carsList);
    });
  });
});