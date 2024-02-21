import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RFIphone } from '../RFIphone';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.colors.btn};

  border-radius: ${RFIphone(16)}px;
`;

export const ContentLinear = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFIphone(20)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  text-align: center;
  padding: ${RFIphone(15)}px;
`;

export const ContentLoading = styled.View`
  padding: ${RFIphone(19)}px;
`;
