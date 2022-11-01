// import { IVehicle } from './IVehicle';

// export interface ICar extends IVehicle {
//   doorsQty: number
//   seatsQty: number,
// }

// não dá, simplesmente não consigo extender e usar o zod ao mesmo tempo. Eu não aṕrendi nada

import { z } from 'zod';
import { ivehicleZodSchema } from './IVehicle';

const CarZodSchema = ivehicleZodSchema.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type ICar = z.infer<typeof CarZodSchema>;
export { CarZodSchema, ICar };