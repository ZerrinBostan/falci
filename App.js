import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from './src/falci/Header';
import Carousel from './src/falci/Carousel';
import CategoriesHighlight from './src/falci/CategoriesHighlight';

import {NativeBaseProvider} from 'native-base';
import DailyHoroscope from './src/falci/DailyHoroscope';

const App = () => {
  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <Header />
        <Carousel />
        <CategoriesHighlight />
        <DailyHoroscope />
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
