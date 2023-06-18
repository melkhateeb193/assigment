import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyColors = ({ colorName, hexCode }) => {
  return (
    <View style={[styles.colorContainer, { backgroundColor: hexCode }]}>
      <Text style={styles.colorText}>{colorName}</Text>
      <Text style={styles.colorText}>{hexCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 5,
  },
  colorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MyColors;
