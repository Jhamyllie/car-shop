import { ICar } from "../../../interfaces/ICar";

const carMock: ICar = {
    buyValue: 50000,
    color: 'black',
    doorsQty: 4,
    model: 'fusca',
    seatsQty: 5,
    year: 1980,
};

const carMockId: ICar & { _id: string } = {
    _id: 'd524dwsd6sa4d4d5sa',
    buyValue: 50000,
    color: 'red',
    doorsQty: 4,
    model: 'fusca',
    seatsQty: 5,
    year: 1980,
    status: true
}

export {carMock, carMockId};