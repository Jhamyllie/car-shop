// import { expect } from 'chai';
// import sinon from 'sinon';
// import { Model } from 'mongoose';
// import Cars from '../../../models/cars';
// import CarService from '../../../services/cars';
// import { carMock, carMockId, carsList } from '../mocks/carMocks';

// describe('Car Service', () => {
//   const carModel = new Cars();
//   const carService = new CarService(carModel);

//   before(() => {
//       // sinon.stub(Model, 'create').resolves(carMockId);
//       // sinon.stub(Model, 'find').resolves(carsList),
//       // sinon.stub(Model, 'findOne').resolves(carMockId),
//       // sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockId),
//       // sinon.stub(Model, 'findByIdAndDelete').resolves(carMockId)
//       sinon.stub(carModel, 'create').resolves(carMockId);
//     sinon.stub(carModel, 'readOne')
//       .onCall(0).resolves(carMockId)
//       .onCall(1).resolves(null);
//     sinon.stub(carModel, 'read').resolves([carMockId]);
//     sinon.stub(carModel, 'delete').onCall(0).resolves(carMockId).onCall(1).resolves(null);
//     sinon.stub(carModel, 'update').onCall(0).resolves(carMockId).onCall(1).resolves(null);
//   });

//   after(() => { 
//       sinon.restore() 
//   });
  
//       describe('cria um carro', () => {
//       it('se criado com sucesso', async () => {
//         const newCar = await carService.create(carMock);
//         expect(newCar).to.be.deep.equal(carMockId);
//       });
//     });
  
  
//     describe('lista todos os carros', () => {
//       it ('encontrado com sucesso', async () => {
//       const car = await carService.read();
//       expect(car).to.be.deep.equal([carsList]);
//       });
//     });

//     describe('Read car', () => {
//       it('Success', async () => {
//         const carCreated = await carService.read();
//         expect(carCreated).to.be.deep.equal([carMockId]);
//       });
//     });
// });