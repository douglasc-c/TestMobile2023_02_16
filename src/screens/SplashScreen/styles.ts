import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RFIphone} from '../../components/RFIphone';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? RFIphone(80) : RFIphone(80)}px;
  background-color: ${({theme}) => theme.colors.secondary};
  justify-content: space-between;
`;

export const ContentHeader = styled.View`
  padding: 0 ${RFValue(30)}px;
  width: ${RFIphone(290)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.extraBold};
  font-size: ${RFIphone(38)}px;
`;

export const Content = styled.View`
  align-items: center;
  padding:${RFValue(20)}px 0;
`;

export const ContentFooter = styled.View`
  align-items: center;
  padding:${RFValue(20)}px 0;
`;

export const Description = styled.Text`
  padding: ${RFValue(10)}px 0;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFIphone(12)}px;
`;