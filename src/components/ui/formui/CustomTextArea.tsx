import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '../Form';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

const CustomTextArea = ({control,darkmode,name,label,placeholder}) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={darkmode ? '' : 'text-white'}>
                {label}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={placeholder}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />       
  )
}

export default CustomTextArea