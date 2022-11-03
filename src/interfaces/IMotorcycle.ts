import { z } from 'zod';
import { ivehicleZodSchema } from './IVehicle';

const MotocicleZodSchema = ivehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  // category: z.string(),
  engineCapacity: z.number().int().max(2500),

});

type IMotorcycle = z.infer<typeof MotocicleZodSchema>;
export { MotocicleZodSchema, IMotorcycle };