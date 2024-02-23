import React, { useEffect, useState } from "react";
import { NativeModules } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import {
  Container,
  ContentHeader,
  Title,
  ViewIcon,
  ContentIcon,
  Content,
  ConteinerCard,
} from './styles';

import api from "../../services/api";

import { CardFilm } from "../../components/CardFilm";

import SignOut from "../../assets/svg/signout.svg";

interface Film {
  director?: string;
  opening_crawl?: string;
  release_date: string;
  title?: string;
}

export function Home(){
  const [filmsList, setFilmsList] = useState<Film[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    function fetchFilms() {
      api.get('/films').then(response => {
        const {results} = response.data;
        setFilmsList(results); 
      });
    }
    fetchFilms();
  }, []);

  return (
    <Container>
      <ContentHeader>
        <Title>Start Wars{'\n'}Movies</Title>
        <ViewIcon>
          <ContentIcon>
            <SignOut width={30} height={30}/>
          </ContentIcon>
        </ViewIcon>
      </ContentHeader>
      <Content>
        <FlatList
          data={filmsList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CardFilm data={item} key={index} />
          )}
        />
      </Content>
    </Container>
  )
}
