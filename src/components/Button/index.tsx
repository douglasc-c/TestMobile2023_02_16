import {useState} from 'react';
import {Container, Title, ContentLoading, ContentLinear} from './styles';
import {ActivityIndicator} from 'react-native';

import {TouchableOpacityProps} from 'react-native';
import {useAuth} from '../../hooks/auth';
interface IPropsButton extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: IPropsButton) {
  const {isLogging} = useAuth();

  return (
    <Container {...rest}>
      {isLogging ? (
        <ContentLoading>
          <ActivityIndicator color="#E31B13" />
        </ContentLoading>
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
