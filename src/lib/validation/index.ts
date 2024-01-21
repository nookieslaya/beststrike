import * as z from "zod"

const SingupValidation = z.object({
    username: z.string().min(2).max(50),
})