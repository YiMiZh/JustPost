import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ScrollView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "rgb(227, 246, 249)"
  }
});
