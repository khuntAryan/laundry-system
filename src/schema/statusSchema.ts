import { z } from 'zod'

export const status = z.object({
    status: z.enum(['Pending', 'In Process', 'Completed', 'Ready for Pickup']),
})