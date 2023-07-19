import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select';

const CustomSelect = ({ control, darkmode, name, label, placeholder,options }) => {
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
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger
                  className={
                    darkmode
                      ? 'SelectTrigger text-black'
                      : 'SelectTrigger text-white'
                  }
                >
                  {field.value ? (
                    <SelectValue placeholder={placeholder} />
                  ) : (
                    <p className={darkmode
                      ? ' text-black'
                      : ' text-white'
                    }>{placeholder}</p>
                  )}
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option) => {
                  return (
                    <SelectItem value={option.name} key={option.id}>
                      {option.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
