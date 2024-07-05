import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {HStack} from 'native-base';

const Carousel = () => {
  const imageUrl = 'https://via.placeholder.com/250x360';

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.scrollViewContent}>
        <HStack space={3}>
          <ImageBackground
            source={{uri: imageUrl}}
            style={styles.card}
            imageStyle={styles.image}>
            <Text style={styles.title}>Kahve Falı</Text>
            <Text style={styles.description}>
              Kahve mi içtiniz falınızı mı merak ediyorsunuz doğru yerdesiniz.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Hemen Baktır</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={{uri: imageUrl}}
            style={styles.card}
            imageStyle={styles.image}>
            <Text style={styles.title}>Tarot Falı</Text>
            <Text style={styles.description}>
              Tarot kartlarınızı seçin ve geleceğinizi keşfedin.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Hemen Baktır</Text>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={{uri: imageUrl}}
            style={styles.card}
            imageStyle={styles.image}>
            <Text style={styles.title}>El Falı</Text>
            <Text style={styles.description}>
              El falınıza baktırmak için uzman falcılarımızla iletişime geçin.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Hemen Baktır</Text>
            </TouchableOpacity>
          </ImageBackground>
        </HStack>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 45,
    justifyContent: 'start',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  card: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: 250,
    height: 360,
    padding: 24,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'left',
    marginBottom: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#fbc02d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Carousel;
