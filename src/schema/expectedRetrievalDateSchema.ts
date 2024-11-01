import { z } from 'zod'

export const expectedRetrievalDate = z.object({
    expectedRetrievalDate: z.date().nullable().optional()
})