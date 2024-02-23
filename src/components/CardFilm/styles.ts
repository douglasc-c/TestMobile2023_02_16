import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgProps} from 'react-native-svg';

export const Container = styled.TouchableOpacity`
  padding: ${RFValue(10)}px ${RFValue(20)}px ;
`;

export const Content = styled.View`
  padding: ${RFValue(15)}px;
  border-radius: ${RFValue(10)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const ContentText = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items:center
`;

export const View = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.secondary};
`;

export const Director = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.secondary};
`;

export const ContentDate = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.year};
`;
