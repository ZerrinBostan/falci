import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // TODO icon problem will be fixed

const {width: screenWidth} = Dimensions.get('window');

const data = [
  {
    title: 'Kahve Falı',
    description:
      'Kahve mi içtiniz falınızı mı merak ediyorsunuz doğru yerdesiniz.',
    illustration: require('../assets/fortune-telling-background.png'),
  },
  {
    title: 'Tarot Falı',
    description: 'Tarot kartlarınızı seçin ve geleceğinizi keşfedin.',
    illustration: require('../assets/fortune-telling-background.png'),
  },
  {
    title: 'El Falı',
    description:
      'El falınıza baktırmak için uzman falcılarımızla iletişime geçin.',
    illustration: require('../assets/fortune-telling-background.png'),
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
          x: screenWidth * 0.7 + 12, // 1. indekse kaydır
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
        snapToInterval={screenWidth * 0.7 + 12} // Kart aralığı 20px
        decelerationRate="fast"
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * (screenWidth * 0.7 + 12),
            index * (screenWidth * 0.7 + 12),
            (index + 1) * (screenWidth * 0.7 + 12),
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-50, 0, 50],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[styles.cardContainer, {transform: [{scale}]}]}
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
                    <LinearGradient
                      colors={['#ffaf37', '#ff793f']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}}
                      style={styles.gradient}>
                      <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Hemen Baktır</Text>
                        {/* <Ionicons // TODO icon problem will be fixed
                          name="chevron-forward"
                          size={16}
                          color="#151522"
                        /> */}
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>
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
    paddingHorizontal: (screenWidth - screenWidth * 0.7) / 2, // Kart aralığı 20px sağlamak için yarısını ekledik
  },
  cardContainer: {
    width: screenWidth * 0.7,
    marginHorizontal: 4, // Kart aralığı 4px
  },
  card: {
    height: 360,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
    borderWidth: 3,
    borderColor: '#D7B676',
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
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  description: {
    fontSize: 12,
    color: '#A3A3A3',
    marginTop: 9,
    lineHeight: 18,
    fontWeight: '400',
  },
  button: {
    borderRadius: 4,
    marginTop: 24,
    width: 132,
    height: 32,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#151522',
    fontWeight: '500',
  },
});

export default ParallaxCarousel;
