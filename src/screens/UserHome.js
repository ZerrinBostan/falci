import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SessionCard from '../components/SessionCard';
import Navbar from '../components/Navbar';

const UserHome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar userName="Zerrin Tepedelen" greetingMessage="Hi, Welcome Back" />
      <SessionCard
        name="Emre Yıldırım"
        type="Tarot Falı"
        date="Today"
        time="9:30 - 10:00"
        onJoin={() => console.log('Join Emre Yıldırım')}
        backgroundColor="primary"
      />
      <SessionCard
        name="Falci Batuhan Ünverdi"
        type="Tarot Falı"
        date="Aug 27"
        time="14:00"
        onJoin={() => console.log('Join Batuhan Ünverdi')}
        backgroundColor="secondary"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default UserHome;
