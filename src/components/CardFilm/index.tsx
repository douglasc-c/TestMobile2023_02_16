import React, { useState, useEffect } from 'react';
import { TouchableOpacityProps, Image } from 'react-native';
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
  ContentDescription,
  Description,
} from './styles';

import ep1 from "../../assets/png/ep1.png";

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
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
      setIsDataInfo(data);
  }, [data]);

  const handlePress = () => {
    setExpanded(prevExpanded => !prevExpanded);
  }
  
  return (
    <Container onPress={handlePress}>
          {expanded && (
            <Image source={ep1} style={{ width: "100%", height: "25%" }}/>
          )}
        <Content expanded={expanded}>
          <View>
            <Title>{isDataInfo?.title}</Title>
            <ContentText>
              <Director>{isDataInfo?.director}</Director>
              <ContentDate>{formattedDate}</ContentDate>
            </ContentText>
          </View>

          {expanded && (
            <ContentDescription>
              <Description>{isDataInfo?.opening_crawl}</Description>
            </ContentDescription>
          )}
          </Content>
    </Container>
  );
}
