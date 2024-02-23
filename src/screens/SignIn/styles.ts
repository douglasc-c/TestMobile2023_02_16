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

export const Content = styled.View`
  padding:${RFValue(20)}px ${RFValue(20)}px;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFIphone(16)}px ${RFIphone(16)}px 0 0;
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

export const DescriptionInput = styled.Text`
  padding: ${RFValue(10)}px 0;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFIphone(14)}px;
`;

export const Form = styled.View`margin-bottom: ${RFValue(80)}px;`;


export const ContentInput = styled.View`
`;
