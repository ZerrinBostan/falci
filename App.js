import React from 'react';
import {NativeBaseProvider} from 'native-base';
// import Login from './src/screens/Login';
// import Home from './src/screens/Home'; 
import ForgotPassword from './src/screens/ForgotPassword';

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* Home */}
      <ForgotPassword />
    </NativeBaseProvider>
  );
};

export default App;
//TODO: navigator stack error will be fixed

/*
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

<NativeBaseProvider>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
</NativeBaseProvider>
*/
