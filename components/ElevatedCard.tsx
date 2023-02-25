import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View style={styles.outer}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>😃</Text>
        </View>
      </ScrollView>
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
  container: {},
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    backgroundColor: '#FFB26B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardElevated: {
    margin: 4,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'grey',
  },
  cardText: {
    color: 'black',
  },
});
