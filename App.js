import React from 'react';
import {SSRProvider} from '@react-aria/ssr';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ForgotPassword from './src/screens/ForgotPassword';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PaymentsScreen = () => (
  <View style={styles.centered}>
    <Text>Ödemeler</Text>
  </View>
);

const StartChatScreen = () => (
  <View style={styles.centered}>
    <Text>Görüşme Başlat</Text>
  </View>
);

const ChatsScreen = () => (
  <View style={styles.centered}>
    <Text>Görüşmeler</Text>
  </View>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
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
    } else if (route.name === 'StartChat') {
      iconName = 'pluscircle';
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
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: ''}} />
      <Tab.Screen
        name="History"
        component={PaymentsScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="StartChat"
        component={StartChatScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Wallet"
        component={ChatsScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          headerShown: false,
        }}
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
