import { z } from 'zod';
import { ivehicleZodSchema } from './IVehicle';

const MotocicleZodSchema = ivehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().min(1).max(2500),

});

type IMotorcycle = z.infer<typeof MotocicleZodSchema>;
export { MotocicleZodSchema, IMotorcycle };