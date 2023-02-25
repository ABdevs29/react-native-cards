import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.outer}>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.fancyCard]}>
        <Image
          source={require('../assets/manipur-head.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Manipur</Text>
          <Text style={styles.cardDescription}>Switzerland of India</Text>
          <Text style={styles.cardText} numberOfLines={3}>
            One of the Seven sisters of India, Manipur is a state in Northeast
            India, with the city of Imphal as its capital. It is bounded by the
            Indian states of Nagaland to the north, Mizoram to the south and
            Assam to the west. It also borders two regions of Myanmar, Sagaing
            Region to the east and Chin State to the south.
          </Text>
          <Text style={styles.cardFooter}>1000 kms away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    padding: 8,
  },
  headingText: {
    fontSize: 24,
    paddingBottom: 6,
  },
  card: {
    backgroundColor: 'lightpink',
  },
  fancyCard: {
    borderRadius: 4,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'grey',
  },
  cardImage: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardBody: {
    padding: 8,
    flex: 1,
    alignItems: 'flex-start',
    gap: 2,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  cardDescription: {
    fontSize: 16,
    color: '#03203C',
  },
  cardText: {
    fontSize: 16,
    color: '#242B2E',
  },
  cardFooter: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'flex-end',
    opacity: 0.5,
  },
});
