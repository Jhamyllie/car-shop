import { ICar } from "../../../interfaces/ICar";

const carMock: ICar = {
    buyValue: 50000,
    color: 'green',
    doorsQty: 4,
    model: 'fusca',
    seatsQty: 5,
    year: 1980,
};

const carMockId: ICar & { _id: string } = {
    _id: 'd524dwsd6sa4d4d5sa',
    buyValue: 50000,
    color: 'green',
    doorsQty: 4,
    model: 'fusca',
    seatsQty: 5,
    year: 1980,
    status: true
}

const listCar: [
    {
        _id: 'd524dwsd6sa4d4d5sa',
        buyValue: 50000,
        color: 'green',
        doorsQty: 4,
        model: 'fusca',
        seatsQty: 5,
        year: 1980,
        status: true
    },
    {
        _id: 'd524dwsd6sa4d4d5sa',
        buyValue: 50000,
        color: 'black',
        doorsQty: 4,
        model: 'impala',
        seatsQty: 5,
        year: 1980,
        status: true
    }
]

const carsList = [ carMockId, carMockId, carMockId ];

export {carMock, carMockId, carsList, listCar };