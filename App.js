import React from 'react';
import {SSRProvider} from '@react-aria/ssr';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ForgotPassword from './src/screens/ForgotPassword';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PaymentsScreen = () => (
  <View style={styles.centered}>
    <Text>Ödemeler</Text>
    <AntDesign name="login" size={50} color="blue" />
    <EvilIcons name="chart" size={50} color="blue" />
  </View>
);

const ProfileScreen = () => (
  <View style={styles.centered}>
    <Text>Profil</Text>
    <AntDesign name="user" size={50} color="blue" />
  </View>
);

const ChatsScreen = () => (
  <View style={styles.centered}>
    <Text>Görüşmeler</Text>
    <AntDesign name="message1" size={50} color="blue" />
  </View>
);

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    if (route.name === 'Profile') {
      return (
        <Image
          source={require('./src/assets/fortuneTeller/profile.jpg')}
          style={[styles.avatar, focused && styles.activeAvatar]}
        />
      );
    }

    let iconName;
    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'History') {
      iconName = 'profile';
    } else if (route.name === 'Wallet') {
      iconName = 'wallet';
    }

    return <AntDesign name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 15,
    paddingTop: 5,
  },
  tabBarLabel: '',
  tabBarLabelStyle: {fontSize: 12},
  tabBarIconStyle: {marginTop: 5},
  safeAreaInsets: {bottom: 0},
});

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="History"
        component={PaymentsScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: ''}} />
      <Tab.Screen
        name="Wallet"
        component={ChatsScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: ''}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SSRProvider>
      <SafeAreaProvider>
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
                component={HomeTabs}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </SSRProvider>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  activeAvatar: {
    borderWidth: 3,
    borderColor: '#D7B676',
  },
});

export default App;
