import React from 'react';
import {SSRProvider} from '@react-aria/ssr';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ForgotPassword from './src/screens/ForgotPassword';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SSRProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <NativeBaseProvider>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </NativeBaseProvider>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </SSRProvider>
  );
};

export default App;
