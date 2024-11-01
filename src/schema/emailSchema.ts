import { z } from 'zod'

export const email = z.object({
    email: z.string().regex(/^[\w-.]+@srmist\.edu\.in$/, "Email must be in the format example@srmist.edu.in")
})