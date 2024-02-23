import React, { useEffect, useState } from "react";
import { NativeModules } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';

import CircularProgress from "../../components/Loading/CircularProgress";

import {
  Container,
  ContentHeader,
  Title,
  Description,
  Content,
  ContentFooter
} from './styles';

export function Home(){
  
  const navigation = useNavigation();

  return (
    <Container>
      <ContentHeader>
      </ContentHeader>
      <Content>
      </Content>
      <ContentFooter>
      </ContentFooter>
    </Container>
  )
}
