import { z } from 'zod';

export const GetStartedFormSchema = z.object({
  name: z
    .string()
  .min(3, {message:'Name should atleast be 3 Characters'})
    .max(30, {message:'Name can only be maximum of 30 Characters'}),
  phone: z
    .string().min(10, {message:'Please Enter Phone Number'}),
    // .regex(
    //   /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
    //   {message:'Please enter only numbers'}
    // )
    // .length(14, {message:'Please Enter 14 digit number with country code'}),
  services: z.string().min(1, {message:'Please Select s Service'}),
  email: z.string().email({message:'Please Input correct Email'}),
});

