import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To-Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
