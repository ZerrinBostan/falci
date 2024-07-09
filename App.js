import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
      {/* <Login /> */}
    </NativeBaseProvider>
  );
};

export default App;
