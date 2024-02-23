import React, { useState, useEffect } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import {
  Container,
  Content,
  View,
  ContentText,
  Title,
  Director,
  ContentDate,
} from './styles';

interface Props {
  director?: string;
  opening_crawl?: string;
  release_date: string;
  title?: string;
}

interface FilmsProps extends TouchableOpacityProps {
  data: Props;
}

export function CardFilm({ data }: FilmsProps) {
  const navigation = useNavigation();
  const newDate = new Date(data.release_date);
  const formattedDate = format(newDate, 'yyyy');
  const [isDataInfo, setIsDataInfo] = useState<Props>(data);

  useEffect(() => {
      setIsDataInfo(data);
  }, [data]);

  function handlePress() {
      // navigation.navigate('Details', { isDataInfo });
  }

  return (
    <Container onPress={handlePress}>
      <Content>
        <View>
          <Title>{isDataInfo?.title}</Title>
        </View>
        <ContentText>
          <Director>{isDataInfo?.director}</Director>
          <ContentDate>{formattedDate}</ContentDate>
        </ContentText>
      </Content>
    </Container>
  );
}
