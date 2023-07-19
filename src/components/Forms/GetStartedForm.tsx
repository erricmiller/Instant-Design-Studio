'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { GetStartedFormSchema } from '@/utils/validations/GetStartedFormSchema';
import {
  Form,
} from '../ui/Form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/Button';

import { categories } from '@/content/Categories';
import { useToast } from '@/hooks/use-toast';
import CustomInput from '../ui/formui/CustomInput';
import CustomSelect from '../ui/formui/CustomSelect';
import CustomPhone from '../ui/formui/CustomPhone';
import { api } from '@/utils/trpc-provider';

const GetStartedForm = ({ darkmode }: { darkmode: boolean }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const contactMail = api.email.contact.useMutation();

  const form = useForm<z.infer<typeof GetStartedFormSchema>>({
    resolver: zodResolver(GetStartedFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      services: '',
    },
  });

  async function onSubmit(values: z.infer<typeof GetStartedFormSchema>) {
    setIsLoading(true);
    // console.log(values)

    try {
      
      const res = await contactMail.mutateAsync(values)
      if (res) {
        toast({
          title: 'Success',
          description: 'Thank you for contacting us. We will be with you shortly.',
          variant: 'default',
        });
      }
      else {
        toast({
          title: 'Something went Wrong.',
          description: 'There was an error during Email. Please Try Again Later.',
          variant: 'destructive',
        });
      }

      // throw new Error();
    } catch (error) {
      // toast notification
      toast({
        title: 'Error Sending Email',
        description: 'There was an error during Email. Please Try Again Later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="div_container mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
      >
        <CustomInput control={form.control} darkmode={darkmode} label={"Full Name"} name={"name"} placeholder={"Enter Full Name"} />
        <CustomInput control={form.control} darkmode={darkmode} label={"Email"} name={"email"} placeholder={"Enter Email Address"} />
        <CustomPhone control={form.control} darkmode={darkmode} label={"Phone"} name={"phone"} placeholder={"Enter Phone Number"} />
        <CustomSelect control={form.control} darkmode={darkmode} label={"Services"} name={"services"} placeholder={"Select Service"} options={categories} />
        
        <Button type="submit" className="w-fit" isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default GetStartedForm;
