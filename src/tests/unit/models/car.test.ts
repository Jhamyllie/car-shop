import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carMock, carMockId } from '../mocks/carMocks';
import Cars from '../../../models/cars';

describe('Car Model', () => {
  const carModel = new Cars();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockId),
    sinon.stub(Model, 'find').resolves([carMockId]),
    sinon.stub(Model, 'findOne').resolves(carMockId),
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockId),
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockId)
  });

  after(() => { 
    sinon.restore() 
  });

  describe('creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockId);
    });
  });
});