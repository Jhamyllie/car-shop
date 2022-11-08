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

  describe('consulta Carrros', () => {
    it('Listar todos Carros', async () => {
      const result = await carService.read();
      expect(result.length).to.be.deep.equal(1);
    });
  
    it('Consulta um Car pelo Id', async () => {
      const result = await carService.readOne('6359e47b94dc48d1e10c2f20');
      expect(result).to.be.deep.equal(carMockWithId);
    })
  
    // it('Falha com o Id não existente bem formatado', async () => {
    //   let result;
    //   try {
    //     await carService.readOne('16359e47b94dc48d1e10c2f20');
    //   } catch (error) {
    //     result = error;
    //   }
    //   expect(result).to.be.instanceOf(Error);
    // });
  
    it('Falha com o Id mal formatado', async () => {
      let result;
      try {
        await carService.readOne('XXX');
      } catch (error) {
        result = error;
      }
        expect(result).to.be.instanceOf(Error);
    });
  });
});
// import * as sinon from 'sinon';
// import Cars from '../../../models/cars';
// import CarService from '../../../services/cars';
// import { expect }  from 'chai';
// import { carMock, carMockWithId  } from '../mocks/carMocks'; 
// describe('Car Service', () => {
//   //GIVEN: Dado que tenho uma Model Car
//   const carModel = new Cars();
//   //AND: E tenho serciços para Car
//   const carService = new CarService(carModel);

  // before(async () => {  
  //   sinon.stub(carModel, 'create').resolves(carMockWithId);
  // });
  //   sinon.stub(carModel, 'read').resolves([carMockWithId]);
  //   sinon.stub(carModel, 'readOne')
  //     .onCall(0).resolves(carMockWithId);
  // })

  // after(()=>{
  //   sinon.restore();
  // });
  // describe('Serviço para criar um novo Car', () => {
  //   it('Sucesso ao criar', async () => {
  //     //WHEN: Quando utilizo o serviço de create corretamente
  //     const result = await carService.create(carMock);
  //     //THEN: Então devo receber o Car criado
  //     expect(result).to.be.deep.equal(carMockWithId);
  //   });
  //   it('Falha ao criar', async () => {
  //     let result;
  //     try {
  //       //WHEN: Quando utilizo o serviço de create errado
  //       await carService.create({});
  //     } catch (error) {
  //       result = error;
  //     }
      
  //     //THEN: Então devo receber um Error
  //     expect(result).to.be.instanceOf(Error);
  //   });
  // });

  // describe('Serviços para consulta Car', () => {
  //   it('Listar todos Car', async () => {
  //     //WHEN: Quando utilizo o serviço read
  //     const result = await carService.read();

  //     //THEN: Então devo receber uma lista de Car
  //     expect(result.length).to.be.deep.equal(1);
  //   });

  //   it('Consulta um Car pelo Id', async () => {
  //     //WHEN: Quando utilizo o serviço readOne com um Id valido
  //     const result = await carService.readOne('6359e47b94dc48d1e10c2f20');

  //     //THEN: Então devo receber um objeto Car
  //     expect(result).to.be.deep.equal(carMockWithId);
  //   })

  //   it('Falha com o Id não existente bem formatado', async () => {
  //     let result;
  //     try {
  //       //WHEN: Quando utilizo o serviço de create errado
  //       await carService.readOne('6359e47b94dc48d1e10c2f2XX');
  //     } catch (error) {
  //       result = error;
  //     }

  //     //THEN: Então devo receber um Error
  //     expect(result).to.be.instanceOf(Error);
  //   });

  //   it('Falha com o Id mal formatado', async () => {
  //     let result;
  //     try {
  //       //WHEN: Quando utilizo o serviço de create errado
  //       await carService.readOne('XXX');
  //     } catch (error) {
  //       result = error;
  //     }

  //     //THEN: Então devo receber um Error
  //     expect(result).to.be.instanceOf(Error);
  //   });
 
