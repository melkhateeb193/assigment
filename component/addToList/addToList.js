import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, TextInput, Pressable, Text } from "react-native";

const AddToList = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  const handleAddList = () => {
    if (value.length >= 3) {
      setList((prev) => [
        ...prev,
        { text: value, done: false, id: list.length },
      ]);
      setValue("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add to list"
          onChangeText={handleChange}
          value={value}
        />
        <Pressable style={styles.addButton} onPress={handleAddList}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <ShowList list={list} setList={setList} />
    </SafeAreaView>
  );
};

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
    <View style={styles.listContainer}>
      {props.list.map((ele) => (
        <View style={styles.itemContainer} key={ele.id}>
          <Text
            style={[styles.itemText, ele.done && styles.itemTextDone]}
            onPress={() => handleDone(ele.id)}
          >
            {ele.text}
          </Text>
          <Pressable style={styles.deleteButton} onPress={() => handleDelete(ele.id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
  itemTextDone: {
    textDecorationLine: "line-through",
    color: "#A9A9A9",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default AddToList;
