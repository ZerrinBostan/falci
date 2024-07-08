import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Header from './src/FortuneTeller/Header';
import Carousel from './src/FortuneTeller/Carousel';
import Featured from './src/FortuneTeller/Featured';

import DailyAstrology from './src/FortuneTeller/DailyAstrology';

const App = () => {
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

export default App;
