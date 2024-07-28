import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NotificationIcon from '../icons/NotificationIcon';
import SettingsIcon from '../icons/SettingsIcon';

const Navbar = ({userName, greetingMessage}) => {
  return (
    <View style={styles.navbar}>
      <View style={styles.userInfo}>
        <Image
          source={require('../assets/fortuneTeller/featured-1.png')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>{greetingMessage}</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <NotificationIcon width={17} height={17} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <SettingsIcon width={17} height={17} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 14,
    color: '#6927FF',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
    backgroundColor: '#837DFF',
    padding: 5,
    borderRadius: 50,
  },
});

export default Navbar;
