export interface IVehicle {
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
}

// import { z } from 'zod';

// const ivehicleZodSchema = z.object({
//   model: z.string().min(3),
//   year: z.number().min(1900).max(2022),
//   color: z.string(),
//   status: z.boolean().optional(),
//   buyValue: z.number(),
// });

// export type IVehicle = z.infer<typeof ivehicleZodSchema>;

// export default ivehicleZodSchema;