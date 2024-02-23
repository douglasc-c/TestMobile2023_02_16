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
  ContentLoading,
} from './styles';

import api from "../../services/api";

import { CardFilm } from "../../components/CardFilm";

import SignOut from "../../assets/svg/signout.svg";
import CircularProgress from "../../components/Loading/CircularProgress";
import { useAuth } from "../../hooks/auth";
import { set } from "react-hook-form";

interface Film {
  director?: string;
  opening_crawl?: string;
  release_date: string;
  title?: string;
}

export function Home(){
  const [filmsList, setFilmsList] = useState<Film[]>([]);
  const navigation = useNavigation();
  const {isLoading, setLoadingTrue, setLoadingFalse} = useAuth();

  useEffect(() => {
    setLoadingTrue()
    function fetchFilms() {

      api.get('/films').then(response => {
        const {results} = response.data;
        setFilmsList(results); 
        setLoadingFalse()
      });
    }
    fetchFilms();
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <ContentHeader>
        <Title>Start Wars{'\n'}Movies</Title>
        <ViewIcon>
          <ContentIcon onPress={() => handleGoBack()}>
            <SignOut width={30} height={30}/>
          </ContentIcon>
        </ViewIcon>
      </ContentHeader>
      <Content>
        {!isLoading ? (
            <FlatList
            data={filmsList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <CardFilm data={item} key={index} />
              )}
          />
          ) : (
            <ContentLoading>
              <CircularProgress size={100} strokeWidth={10} progress={1} />
            </ContentLoading>
          )} 
      </Content>
    </Container>
  )
}
