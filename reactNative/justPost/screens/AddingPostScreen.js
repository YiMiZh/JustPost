import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { CreatePost } from "../components/CreatePost";


export default class AddingPost extends React.Component {
  static navigationOptions = {
    title: "Add Post"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CreatePost />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "rgb(227, 246, 249)"
  }
});
