import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Header from '../components/FortuneTeller/Homepage/Header';
import Carousel from '../components/FortuneTeller/Homepage/Carousel';
import Featured from '../components/FortuneTeller/Homepage/Featured';
import DailyAstrology from '../components/FortuneTeller/Homepage/DailyAstrology';

const Home = () => {
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <Header />
        <Carousel />
        <Featured />
        <DailyAstrology />
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
