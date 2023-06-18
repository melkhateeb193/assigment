import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ShowList = (props) => {
  const handleDelete = (id) => {
    props.setList((prev) => prev.filter((e) => e.id !== id));
  };

  const handleDone = (id) => {
    props.setList((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          e.done = !e.done;
        }
        return e;
      })
    );
  };

  return (
    <View>
      {props.list.map((ele) => (
        <View style={styles.container} key={ele.id}>
          <Text style={[styles.text, ele.done && styles.doneText]}>{ele.text}</Text>
          <TouchableOpacity
            style={[styles.iconContainer, ele.done && styles.doneIconContainer]}
            onPress={() => handleDone(ele.id)}
          >
            <Text style={styles.icon}>{ele.done ? "✓" : ""}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete(ele.id)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 8,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "#A9A9A9",
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  doneIconContainer: {
    backgroundColor: "#A9A9A9",
  },
  icon: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});

export default ShowList;
