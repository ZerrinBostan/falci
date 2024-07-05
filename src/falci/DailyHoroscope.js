import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Box, VStack} from 'native-base';

const DailyHoroscope = () => {
  return (
    <Box style={styles.container}>
      <VStack space={4}>
        <Text style={styles.title}>Günlük Burç Yorumum</Text>
        <Box style={styles.card}>
          <Text style={styles.date}>7 Temmuz 2023</Text>
          <Text style={styles.content}>
            Ay, Yay burcunda ilerliyor ve saat 20.20'de Oğlak burcuna geçiyor.
            Değer sorgulaması içerisindesin. Hayatın için nelerin değerli olması
            gerektiğini düşüneceksin. Vardığın kanı senin gerçekliğin olacak ve
            hayatını bu gerçeklik üzerinden yeniden şekillendirmek için yola
            koyulacaksın. Hayatında bir kere cesur olmayı seç. Günün sonunda
            kaçtığın ne varsa yakalanırsın. Bugün biraz keyifsiz hissedebilirsin
            kendini. Sevdiğin şeylerle ilgilen. Ailenle vakit geçirmek iyi
            gelecektir.
          </Text>
          <Text style={styles.sign}>Balık</Text>
        </Box>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 24,
    paddingTop: 30,
  },
  card: {
    backgroundColor: '#4b2e83',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  },
  date: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  content: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
    lineHeight: 24,
  },
  sign: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
    paddingTop: 30,
  },
});

export default DailyHoroscope;
