import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../Form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CustomPhone = ({ control, darkmode, name, label, placeholder }) => {
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
            <div className={darkmode ? 'whiteMode' : 'darkMode'}>
              <PhoneInput
                country={'us'}
                inputProps={{ name: name }}
                {...field}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomPhone;
