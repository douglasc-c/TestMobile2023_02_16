import React, { useEffect, useState } from 'react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Content,
  ContentHeader,
  Form,
  Title,
  ContentInput,
  DescriptionInput,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import IconEyeOff from '../../assets/svg/iconEyeoff.svg';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email('E-mail invalido').required('Informe seu email'),
  password: yup
    .string()
    .min(5, ' senha deve conter no minimo 5 digitos')
    .required('Senha obrigatoria'),
});

export function SignIn() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<'email' | 'password'>();


  const {
    signIn,
    user,
    setLoadingTrue,
    setLoadingFalse,
  } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function handleSignin(data: FormData) {
    const email = data.email;
    const password = data.password;
    signIn({ email, password });
  }

  useEffect(() => {
    if (user.id === '1') {
      navigation.navigate('Home');
      return;
    }
  }, [user]);

  return (
    <Container>
      <ContentHeader>
        <Title>Start Wars{'\n'}Movies</Title>
      </ContentHeader>
      <Content>
        <Form>
          <ContentInput>
            <DescriptionInput>{'Email'}</DescriptionInput>
            <InputForm
              name="email"
              control={control}
              // isFocused={isFocused === 'email'}
              autoCapitalize="none"
              onFocus={() => setIsFocused('email')}
              keyboardType="email-address"
              error={errors.email}
            />
          </ContentInput>

          <ContentInput>
            <DescriptionInput>{'Senha'}</DescriptionInput>
            <InputForm
              control={control}
              name="password"
              autoCapitalize="none"
              // isFocused={isFocused === 'password'}
              onFocus={() => setIsFocused('password')}
              secureTextEntry={!showPassword}
              handlePress={() => setShowPassword(!showPassword)}
              error={errors.password}
              iconSecurity={IconEyeOff}
            />
          </ContentInput>
        </Form>
          <Button title={'Acessar'} onPress={handleSubmit(handleSignin)} />
      </Content>
    </Container>
  );
}
