import {Control, useForm, Controller, FieldError} from 'react-hook-form';

import {Container, Error} from './styles';

import {Input, InputProps} from '../Input';

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export function InputForm({control, name, error, ...rest}: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error?.message}</Error>}
    </>
  );
}
