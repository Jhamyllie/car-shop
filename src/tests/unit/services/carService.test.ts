import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Cars from '../../../models/cars';
import CarService from '../../../services/cars';
import { carMock, carMockId, carsList } from '../mocks/carMocks';

describe('Car Service', () => {
    const carModel = new Cars();
    const carService = new CarService(carModel);

    before(() => {
        sinon.stub(Model, 'create').resolves(carMockId);
    });

    after(() => { 
        sinon.restore() 
    });
    
    describe('creating a car', () => {
        it('successfully created', async () => {
          const newCar = await carService.create(carMock);
          expect(newCar).to.be.deep.equal(carMockId);
        });
      });
    
    
      describe('lista todos os carros', () => {
        it ('encontrado com sucesso', async () => {
        const car = await carService.read();
        expect(car).to.be.deep.equal(carsList);
        });
      });
});