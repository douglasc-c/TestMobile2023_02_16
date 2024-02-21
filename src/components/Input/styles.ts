import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Platform, TextInput} from 'react-native';
import {RFIphone} from '../RFIphone';

interface Props {
  isFocused: boolean;
  typeError: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;

  padding: ${Platform.OS === 'ios' ? RFIphone(12) : RFIphone(4)}px
    ${Platform.OS === 'ios' ? RFIphone(10) : RFIphone(12)}px;

  border-radius: ${RFIphone(8)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: ${RFValue(1)}px;
  border-color: #b7bac2;
  ${({isFocused}) =>
    isFocused &&
    css`
      border-color: ${({theme}) => theme.colors.secondary};
    `}
  ${({typeError, theme}) =>
    typeError &&
    css`
      border-color: ${({theme}) => theme.colors.secondary};
    `}
`;

export const ContainerError = styled.View<Props>`
  width: 100%;
  padding: ${Platform.OS === 'ios' ? RFIphone(12) : RFIphone(4)}px
    ${Platform.OS === 'ios' ? RFIphone(10) : RFIphone(12)}px;
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: ${RFValue(1)}px;

  border-color: ${({theme}) => theme.colors.error};
`;

export const Field = styled(TextInput)`
  flex: 1;
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${Platform.OS === 'ios' ? RFIphone(14) : RFIphone(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-left: ${RFIphone(8)}px;
`;

export const ButtonSecurity = styled.TouchableOpacity``;

export const ContentIcon = styled.View`
  align-items: center;
  justify-content: center;
`;
