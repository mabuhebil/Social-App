 import * as z from 'zod'
 
 
 export  const registerSchema = z.object({
    name: z.string().nonempty('name is reqiured').min(3, "min 3 carc").max(15, "max 15 chars"),
    email: z.email('invalidEmail'),
    password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invaildPassword'),
    rePassword: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invaildPassword'),

    dateOfBirth: z.coerce.date()
        .refine(function (valu) {
            return new Date().getFullYear() - valu.getFullYear() >= 16 ? true : false
        }, "Age must be above 16")
        .transform(function (date) {
            return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()} `
        }),

    gender: z.enum(['male', 'female'], 'gender is required')
}).refine(
    function (data) {
        return data.password === data.rePassword ? true : false;
    },
    { message: "passwords are not match", path: ["rePassword"] },
)
