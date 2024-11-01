import { z } from 'zod'

export const hostel = z.object({
    hostel: z.enum(['Mano', 'Mulai', 'Paari'])
})