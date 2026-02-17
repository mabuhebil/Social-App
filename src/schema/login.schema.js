import * as z from 'zod'


export const loginSchema = z.object({

    email: z.email('invalidEmail'),
    password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invaildPassword'),
})