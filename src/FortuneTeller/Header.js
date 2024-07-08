import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import DiamondCircleIcon from '../icons/DiamondCircleIcon';
import NotificationIcon from '../icons/NotificationIcon';
import SearchIcon from '../icons/SearchIcon';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <DiamondCircleIcon
            width={20}
            height={20}
            color="white"
            style={styles.iconLeft}
          />
          <Text style={styles.headerTitle}>Fal baktırmak ister misin?</Text>
          <TouchableOpacity style={styles.iconButtonRight}>
            <NotificationIcon color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerSubtitle}>
          Bakalım bugün hayatın nasıl şekillenecek?
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <SearchIcon
          width={20}
          height={20}
          color="#bbb"
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchInput} placeholderTextColor="#bbb" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  header: {
    backgroundColor: '#1d1d1d',
    height: 163,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: 32,
    paddingRight: 32,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    flex: 1,
  },
  headerSubtitle: {
    color: '#aaa',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 4,
  },
  iconLeft: {
    paddingLeft: 32,
  },
  iconButtonRight: {},
  searchContainer: {
    position: 'absolute',
    top: 142,
    left: '50%',
    transform: [{translateX: -171.5}],
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 343,
    height: 40,
    borderRadius: 24,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  searchIcon: {
    Right: 15,
  },
  searchInput: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
});

export default Header;
