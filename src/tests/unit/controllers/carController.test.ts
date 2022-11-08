import * as sinon from 'sinon';
import Cars from '../../../models/cars';
import { carMock, carMockWithId  } from '../mocks/carMocks'; 
import CarService from '../../../services/cars';
import { expect }  from 'chai';
import { Request, Response } from 'express';
import CarController from '../../../controllers/cars';

describe('Car Controller', () => {
    const carModel = new Cars();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);
    const req = {} as Request;
    const res = {} as Response;
  
    before(async () => {  
      sinon.stub(carService, 'create').resolves(carMockWithId);
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(()=>{
      sinon.restore();
    });

    describe('Controle para criar um novo Car', () => {
      it('Se criado com sucesso', async () => {
        req.body =  carMock;
        await carController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      });
    });
  });