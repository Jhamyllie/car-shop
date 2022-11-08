// import * as sinon from 'sinon';
// import chai from 'chai';
// import Cars from '../../../models/cars';
// import { Model } from 'mongoose';
// import { carMock, carMockWithId, carListMock  } from '../mocks/carMocks'; 

// const { expect } = chai;

// describe('Car Model', () => {
//   const carModel = new Cars();

//   before(async () => {  
//     sinon.stub(Model, 'create').resolves(carMockWithId);
//     sinon.stub(Model, 'find').resolves(carListMock);
//     sinon.stub(Model, 'findOne').resolves(carMockWithId);
//     sinon.stub(Model, 'findOneAndUpdate').resolves(carMockWithId);
//     sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);


//   });
//   after(()=>{
//     sinon.restore();
//   });

//   describe('Cria um carro', () => {
//     it('Se criado com sucesso', async () => {
//       const result = await carModel.create(carMock);
//       expect(result).to.be.deep.equal(carMockWithId);
//     });
//   });

//   describe('Lista os carros', () => {
//     it('listado com sucesso', async() => {
//       const result = await carModel.read();
//       expect(result).to.be.equal(carListMock);
//     });
//   });

//   describe('retorna um carro pelo id', () => {
//     it('Em caso de sucesso', async () => {
//       const result = await carModel.readOne(carMockWithId._id);
//       expect(result).to.be.equal(carMockWithId);
//     });
//   });

//   describe('É possível atualizar um carro', () => {
//     it('Em caso de sucesso', async () => {
//       const result = await carModel.update(carMockWithId._id, carMock);
//       expect(result).to.be.equal(carMockWithId);
//     });
//   });

//   describe('É possível deletar um carro', () => {
//     it('Deletado com sucesso', async () => {
//       const result = await carModel.delete(carMockWithId._id);
//       expect(result).to.be.equal(carMockWithId);
//     });
//   });
// });

import { expect } from 'chai';
import sinon from 'sinon';
import Cars from '../../../models/cars';
import { Model } from 'mongoose';
import { carMock, carMockWithId, carListMock  } from '../mocks/carMocks'; 

describe('Cars Model', () => {
  const carsModel = new Cars();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });
  after(() => {
    sinon.restore();
  });

  // it('', async () => {});
  // });

  describe('Create a car', () => {
    it('should create a new car', async () => {
      const newCar = await carsModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('searching a car', () => {
    it('successfully found', async () => {
      const carFound = await carsModel.readOne('60a1c1c0b9b1a0a0b0b0b0b0');
      expect(carFound).to.be.deep.equal(carMockWithId);
    });
    it('not found', async () => {
      const carFound = await carsModel.readOne('60a1c1c0b9b1a0a0b0b0b0b0');
      expect(carFound).to.be.deep.equal(carMockWithId);
    });
  });
});
