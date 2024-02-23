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

export function SplashScreen(){
  const [systemVersion, setSystemVersion] = useState('');
  const [systemName, setSystemName] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [appVersion, setAppVersion] = useState('');
  
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const systemVersion = await DeviceInfo.getSystemVersion();
        const systemName = await DeviceInfo.getSystemName();
        const deviceName = await DeviceInfo.getDeviceName();
        const version = await DeviceInfo.getVersion();

        setSystemVersion(systemVersion);
        setSystemName(systemName);
        setDeviceName(deviceName);
        setAppVersion(version);
      } catch (error) {
        console.error("Erro ao obter o nome do dispositivo:", error);
      }
    };

    fetchDeviceInfo();

    const timeout = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      <ContentHeader>
        <Title>Start Wars{'\n'}Movies</Title>
      </ContentHeader>
      <Content>
        <CircularProgress size={100} strokeWidth={10} progress={5} />
        <Description>Carregando...</Description>
      </Content>
      <ContentFooter>
        <Description>Versão: {appVersion} - {systemName} {systemVersion} - {deviceName}</Description>
      </ContentFooter>
    </Container>
  )
}
