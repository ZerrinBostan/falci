import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Home from './src/screens/home';

const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};

export default App;
