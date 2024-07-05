import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text, HStack, Center} from 'native-base';

const CategoriesHighlight = () => {
  return (
    <View style={styles.categoriesHighlight}>
      <Text style={styles.title}>Öne Çıkanlar</Text>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={styles.scrollViewContent}>
          <HStack space={3}>
            <Center h="360" w="250" bg="primary.300" rounded="md" shadow={3} />
            <Center h="360" w="250" bg="primary.500" rounded="md" shadow={3} />
            <Center h="360" w="250" bg="primary.700" rounded="md" shadow={3} />
          </HStack>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesHighlight: {
    marginLeft: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
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
});

export default CategoriesHighlight;
