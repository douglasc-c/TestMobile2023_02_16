import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgProps} from 'react-native-svg';

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: ${RFValue(10)}px ${RFValue(20)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: ${RFValue(20)}px;
  width: 100%;
`;

export const ContentText = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin-left: ${RFValue(15)}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.extraBold};
  color: red;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
`;
