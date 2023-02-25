import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View style={styles.outer}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
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
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: '#F55050',
  },
  cardTwo: {
    backgroundColor: '#03C988',
  },
  cardThree: {
    backgroundColor: '#7286D3',
  },
});
