import { IVehicle } from './IVehicle';

export interface ICar extends IVehicle {
  doorsQty: number
  seatsQty: number,
}

// não dá, simplesmente não consigo extender e usar o zod ao mesmo tempo. Eu não aṕrendi nada