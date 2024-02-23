import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ImageBackground} from 'react-native';

interface Props {
  expanded: boolean;
}

export const Container = styled.TouchableOpacity`
  padding: ${RFValue(10)}px ${RFValue(20)}px ;
`;

export const Content = styled.View<Props>`
  padding: ${RFValue(15)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
  ${({expanded}) =>
    expanded &&
    css`
      border-bottom-left-radius: ${RFValue(10)}px; 
      border-bottom-right-radius: ${RFValue(10)}px; 
    `};
  ${({expanded}) =>
    !expanded &&
    css`
        border-radius: ${RFValue(10)}px;
    `};
`;

export const ContentText = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items:center
`;

export const View = styled.View`

`;

export const Image = styled.Image``;

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

export const ContentImage = styled(ImageBackground).attrs({
  imageStyle: {
    resizeMode: 'stretch',
  },
})`
`;
export const ContentDescription = styled.View``;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.secondary};
`;