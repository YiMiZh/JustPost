import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ProfileDetail } from '../components/ProfileDetail';
import { ProfilePost } from '../components/ProfilePost';

export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: "Post"
  };

  render() {
    return (
    <ScrollView style={ styles.container }>
        <PostDetail />
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "rgb(227, 246, 249)"
  }
});
