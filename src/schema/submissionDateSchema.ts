import { z } from 'zod'

export const submissionDate = z.object({
    submissionDate: z.date().nullable().optional()
})