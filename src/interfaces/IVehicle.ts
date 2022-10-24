// import { type } from 'os';
import { z } from 'zod';

const ivehicleSchema = z.object({
  model: z.string().min(3),
  year: z.number().min(1900).max(2022),
  color: z.string(),
  status: z.boolean().optional(),
  buyValue: z.number(),
});

export type IVehicle = z.infer<typeof ivehicleSchema>;
