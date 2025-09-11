import { z } from "zod";

export const signupSchema = z.object({
    username : z.string().min(4, {message :"username should contain atleast 4 letters"}),
    password : z.string().min(10,
        {message : "Password should contain atleast 10 charecters"})
        .max(20 ,{message : "Password should not contain more than 20 charecters"})
        .refine((val)=> /[A-Z]/.test(val),
        {message: "paassword must include capital letters "})
        .refine((val)=> /[a-z]/.test(val), {
        message: "password must include small letters"
    })
})

export type SignupInput = z.infer<typeof signupSchema>;
