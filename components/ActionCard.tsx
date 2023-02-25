import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }
  return (
    <View style={styles.outer}>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.actionCard]}>
        <Text style={styles.CardTitle}>Social Links:</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/abdevs29/')
            }>
            <Text>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWebsite('https://twitter.com/ABdevs29')}>
            <Text>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openWebsite('https://github.com/ABdevs29')}>
            <Text>Github</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              openWebsite(
                'https://snort.social/p/npub1a4hadadm39vsjkg5pfjp3c0yle2urs7rdx4lnhfsvn0kt5gvx2psk7hs38',
              )
            }>
            <Text>Nostr</Text>
          </TouchableOpacity>
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
  CardTitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#758283',
  },
  actionCard: {
    padding: 8,
    borderRadius: 4,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'grey',
  },
  buttonContainer: {
    gap: 8,
    flexDirection: 'row',
  },
  button: {
    width: 66,
    height: 36,
    backgroundColor: '#12B0E8',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});
