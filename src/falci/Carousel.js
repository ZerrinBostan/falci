import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const data = [
  {
    title: 'Kahve Falı',
    description: 'Kahve mi içtiniz falınızı mı merak ediyorsunuz doğru yerdesiniz.',
    illustration: require('../assets/home-slider-background.png'),
  },
  {
    title: 'Tarot Falı',
    description: 'Tarot kartlarınızı seçin ve geleceğinizi keşfedin.',
    illustration: require('../assets/home-slider-background.png'),
  },
  {
    title: 'El Falı',
    description: 'El falınıza baktırmak için uzman falcılarımızla iletişime geçin.',
    illustration: require('../assets/home-slider-background.png'),
  },
];

const ParallaxCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Sayfa yüklendikten sonra 1. indekse otomatik olarak kaydırma
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: screenWidth * 0.8 + 20,
          animated: true,
        });
      }
    }, 100);
  }, []);

  return (
    <View style={styles.carouselContainer}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth * 0.8 + 20}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * (screenWidth * 0.8 + 20),
            index * (screenWidth * 0.8 + 20),
            (index + 1) * (screenWidth * 0.8 + 20),
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-50, 0, 50],
          });

          return (
            <View
              style={{width: screenWidth * 0.8, marginHorizontal: 10}}
              key={index}>
              <View style={styles.card}>
                <Animated.Image
                  source={item.illustration}
                  style={[styles.image, {transform: [{translateX}]}]}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Hemen Baktır</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingHorizontal: (screenWidth - (screenWidth * 0.8 + 20)) / 2,
  },
  card: {
    height: 360,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#fbc02d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ParallaxCarousel;
