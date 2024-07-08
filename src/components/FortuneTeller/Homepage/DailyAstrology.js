import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import {Box, VStack} from 'native-base';

const DailyAstrology = () => {
  return (
    <Box style={styles.container}>
      <VStack space={4}>
        <Text style={styles.title}>Günlük Burç Yorumum</Text>
        <Box style={styles.borderContainer}>
          <ImageBackground
            source={require('../../../assets/fortuneTeller/daily-astrology.png')}
            style={styles.imageBackground}
            imageStyle={styles.imageBackgroundImage}>
            <Box style={styles.card}>
              <Text style={styles.date}>7 Temmuz 2023</Text>
              <Text style={styles.content}>
                Ay, Yay burcunda ilerliyor ve saat 20.20'de Oğlak burcuna
                geçiyor. Değer sorgulaması içerisindesin. Hayatın için nelerin
                değerli olması gerektiğini düşüneceksin. Vardığın kanı senin
                gerçekliğin olacak ve hayatını bu gerçeklik üzerinden yeniden
                şekillendirmek için yola koyulacaksın. Hayatında bir kere cesur
                olmayı seç. Günün sonunda kaçtığın ne varsa yakalanırsın. Bugün
                biraz keyifsiz hissedebilirsin kendini. Sevdiğin şeylerle
                ilgilen. Ailenle vakit geçirmek iyi gelecektir.
              </Text>
              <Text style={styles.sign}>Balık</Text>
            </Box>
          </ImageBackground>
        </Box>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 24,
    paddingTop: 30,
  },
  borderContainer: {
    borderWidth: 3,
    borderColor: '#D7B676',
    borderRadius: 10,
    overflow: 'hidden', // Border radius'u etkili kılmak için
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    height: 530,
  },
  card: {
    paddingVertical: 32,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: '100%',
  },
  date: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  content: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    textAlign: 'center',
    lineHeight: 24,
  },
  sign: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
  },
});

export default DailyAstrology;
