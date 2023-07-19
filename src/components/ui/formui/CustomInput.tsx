import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '../Form';
import { Input } from '../Input';

const CustomInput = ({control,darkmode,name,label,placeholder}) => {
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
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="bg-transparent"
                  darkmode={darkmode}
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />       
  )
}

export default CustomInput