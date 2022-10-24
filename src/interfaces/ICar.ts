// import { z } from 'zod';

import { IVehicle } from './IVehicle';

// const carZodSchema extends ivehicleZodSchema = ({
//   doorsQty: z.number().min(2).max(4),
//   seatsQty: z.number().min(2).max(7),
// });

// type Icar = z.infer<typeof carZodSchema>;
// export { Icar, carZodSchema };

export interface ICar extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}