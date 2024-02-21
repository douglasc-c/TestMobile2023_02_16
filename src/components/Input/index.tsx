import { TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ContainerError, ContentIcon, Field, ButtonSecurity, Container } from "./styles";

export interface InputProps extends TextInputProps {
  icon?: React.FC<any>;
  iconSecurity?: React.FC<any>;
  textDecoration?: string;
  typeError?: boolean;
  handlePress?: () => void;
}

export function Input({
  icon: Icon,
  iconSecurity: IconSecurity,
  value,
  textDecoration,
  focused,
  typeError,
  handlePress,
  ...rest
}: InputProps) {
  return (
    <>
      {typeError ? (
        <ContainerError isFocused={focused} typeError={typeError}>
          {Icon && (
            <ContentIcon>
              <Icon width={RFValue(20)} height={RFValue(20)} />
            </ContentIcon>
          )}
          {textDecoration && (
            <ContentIcon>
              {/* <TextNickNAme>@</TextNickNAme> */}
            </ContentIcon>
          )}
          <Field
           testID="input-element"
            value={value}
            {...rest}
          />
          {IconSecurity && (
            <ButtonSecurity onPress={handlePress}>
              <IconSecurity width={RFValue(20)} height={RFValue(20)} />
            </ButtonSecurity>
          )}
        </ContainerError>
      ) : (
        <Container isFocused={focused} typeError={typeError}>
          {Icon && (
            <ContentIcon>
              <Icon width={RFValue(20)} height={RFValue(20)} />
            </ContentIcon>
          )}
          {textDecoration && (
            <ContentIcon>
              {/* <TextNickNAme>@</TextNickNAme> */}
            </ContentIcon>
          )}
          <Field
           testID="input-element"
            value={value}
            {...rest}
          />
          {IconSecurity && (
            <ButtonSecurity onPress={handlePress}>
              <IconSecurity />
            </ButtonSecurity>
          )}
        </Container>
      )}
    </>
  );
}