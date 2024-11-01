import { z } from "zod";

export const nameSchema = z.object({
    name: z.string().min(5,"should be more than 5 char. ").max(25,"can't be more than 25 char. ")
})