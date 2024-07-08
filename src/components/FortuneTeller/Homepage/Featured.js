import React from 'react';
import {ScrollView, StyleSheet, View, ImageBackground} from 'react-native';
import {Text, HStack} from 'native-base';

const Featured = () => {
  const baseImagePath = '../../../assets/fortuneTeller';

  const data = [
    {
      name: 'Zerrin Tepedelen',
      expertise: 'Kahve Falı, Tarot Falı, El Falı....',
      image: require(`${baseImagePath}/featured-1.png`),
    },
    {
      name: 'Ayşe Can',
      expertise: 'Kahve Falı, Tarot Falı, El Falı....',
      image: require(`${baseImagePath}/featured-2.png`),
    },
  ];

  return (
    <View style={styles.featured}>
      <Text style={styles.title}>Öne Çıkanlar</Text>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={styles.scrollViewContent}>
          <HStack space={3}>
            {data.map((item, index) => (
              <View key={index} style={styles.card}>
                <ImageBackground source={item.image} style={styles.image}>
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.expertise}>{item.expertise}</Text>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </HStack>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featured: {
    marginLeft: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 24,
  },
  carouselContainer: {
    marginTop: 24,
    justifyContent: 'start',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  card: {
    height: 360,
    width: 250,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  expertise: {
    fontSize: 12,
    color: '#A3A3A3',
    marginTop: 9,
    lineHeight: 18,
    fontWeight: '400',
  },
});

export default Featured;
