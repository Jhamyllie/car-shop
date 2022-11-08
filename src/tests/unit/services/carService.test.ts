import * as sinon from 'sinon';
import Cars from '../../../models/cars';
import { carMock, carMockWithId  } from '../mocks/carMocks'; 
import CarService from '../../../services/cars';
import { expect }  from 'chai';


describe('Car Service', () => {
  const carModel = new Cars();
  const carService = new CarService(carModel);

  before(async () => {  
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves([carMockWithId]);
    sinon.stub(carModel, 'readOne').resolves(carMockWithId);
  });
  after(()=>{
    sinon.restore();
  });

  describe('Service para criar um novo Car', () => {
    it('Se criado com sucesso', async () => {
      const result = await carService.create(carMock);
      expect(result).to.be.deep.equal(carMockWithId);
    });
    it('Caso de erro', async () => {
      let result;
      try {
        await carService.create({});
      } catch (error) {
        result = error;
      }
      expect(result).to.be.instanceOf(Error);
    });
  });

  describe('Consulta Carrros', () => {
    it('Listar todos Carros', async () => {
      const result = await carService.read();
      expect(result.length).to.be.deep.equal(1);
    });
  
    it('Consulta um Carro pelo Id', async () => {
      const result = await carService.readOne('6359e47b94dc48d1e10c2f20');
      expect(result).to.be.deep.equal(carMockWithId);
    });
  
    it('Falha com o Id mal formatado', async () => {
      let result;
      try {
        await carService.readOne('789');
      } catch (error) {
        result = error;
      }
        expect(result).to.be.instanceOf(Error);
    });
  });
});
