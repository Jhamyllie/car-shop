import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Cars from '../../../models/cars';
import CarService from '../../../services/cars';
import CarController from '../../../controllers/cars';
import { carMock, carMockId, carsList } from '../mocks/carMocks';
import { Request, Response } from 'express';

describe('Car Controller', () => {
  const carModel = new Cars();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
      sinon.stub(Model, 'create').resolves(carMockId);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      
  });

  after(() => { 
      sinon.restore() 
  });
  
  describe('criar carro', () => {
      it('se criado com sucesso', async () => {
        req.body = carMock;
        await carController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be.true;
      });
    });
  
  
    // describe('lista todos os carros', () => {
    //   it ('encontrado com sucesso', async () => {
    //   const car = await carController.read();
    //   expect(car).to.be.deep.equal(carsList);
    //   });
    // });
});

