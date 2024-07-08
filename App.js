import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Header from './src/components/FortuneTeller/Homepage/Header';
import Carousel from './src/components/FortuneTeller/Homepage/Carousel';
import Featured from './src/components/FortuneTeller/Homepage/Featured';

import DailyAstrology from './src/components/FortuneTeller/Homepage/DailyAstrology';

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
