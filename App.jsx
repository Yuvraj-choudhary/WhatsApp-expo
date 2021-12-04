import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAssets } from "expo-asset";

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello From React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function Main() {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
  );
  if (!assets) {
    return <Text>Loading ...</Text>;
  }
  return <App />;
}

export default Main;
