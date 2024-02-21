import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Error = styled.Text`
  color: #dc1637;
  margin-top: ${RFValue(5)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.light};
`;
