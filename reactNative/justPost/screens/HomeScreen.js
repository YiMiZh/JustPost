import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { PostMain } from "../components/PostMain";
import { TopNavigation } from "../components/TopNavigation";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <TopNavigation />
        <PostMain />
      </ScrollView>
    );
  }
}
