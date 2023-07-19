'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
} from '../ui/Form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { ClientOrderInfoFormSchema } from '@/utils/validations/ClientOrderInfoFormSchema';
import CustomInput from '../ui/formui/CustomInput';
import CustomPhone from '../ui/formui/CustomPhone';
import CustomTextArea from '../ui/formui/CustomTextArea';
import { api } from '@/utils/trpc-provider';
import { useToast } from '@/hooks/use-toast';
import { packages } from '@/content/Packages';


type orderDataType = {
  Name: string;
  email: string;
  phone: string;
  description: string;
  category: string;
  packageId: string;
  packageName: string;
  packagePrice: string;
};

const ClientOrderInfoForm = ({
  darkmode = false,
  params
}: {
  darkmode: boolean;
  params: string
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const contactMail = api.email.checkoutContact.useMutation();

  const form = useForm<z.infer<typeof ClientOrderInfoFormSchema>>({
    resolver: zodResolver(ClientOrderInfoFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      description: '',
    },
  });

  const orderPackage = packages.find((obj) => {
    return obj.id === params;
  });

  async function onSubmit(values: z.infer<typeof ClientOrderInfoFormSchema>) {
    console.log(orderPackage)
    setIsLoading(true);
    let orderData: orderDataType = {
      Name: "",
      email: "",
      phone: "",
      description: "",
      category: "",
      packageId: "",
      packageName: "",
      packagePrice: "",
    };

    orderData.Name = values.name;
    orderData.email = values.email;
    orderData.phone = values.phone;
    orderData.description = values.description;
    orderData.category = orderPackage?.category || "";
    orderData.packageId = orderPackage?.id || "";
    orderData.packageName = orderPackage?.name || "";
    orderData.packagePrice = orderPackage?.discountedPrice || "";
    try {
      
      const res = await contactMail.mutateAsync(orderData)
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
        className="div_container flex flex-col gap-4"
      >
        <CustomInput control={form.control} darkmode={darkmode} label={"Full Name"} name={"name"} placeholder={"Enter Full Name"} />
        <CustomPhone control={form.control} darkmode={darkmode} label={"Phone"} name={"phone"} placeholder={"Enter Phone Number"} />
        <CustomInput control={form.control} darkmode={darkmode} label={"Email"} name={"email"} placeholder={"Enter Email Address"} />
        <CustomTextArea control={form.control} darkmode={darkmode} label={"Description"} name={"description"} placeholder={"Tell us a little bit about yourself"} />
        
        
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ClientOrderInfoForm;
