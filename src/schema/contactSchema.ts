import { z } from 'zod'

export const contact = z.object({
    contactNumber: z.string()
    .min(10, "Contact number must be at least 10 characters long")
    .max(15, "Contact number cannot exceed 15 characters"),
})