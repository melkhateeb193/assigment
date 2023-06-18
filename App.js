import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AddToList from "./component/addToList/addToList";
import Headerss from "./component/Header/Headerss";
import ColorList from "./component/color list/flagList";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Headerss />
      <AddToList /> */}
    <ColorList />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    width: "100%",
  },
});


