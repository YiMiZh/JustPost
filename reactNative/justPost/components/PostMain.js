import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
const projectApi = require("../controller/ProjectAPI");

let post = [];
async function loadPost() {
  post = await projectApi.readPostData();
}
export class PostMain extends React.Component {
  constructor() {
    super();
    this.freash = this.freash.bind(this);
    setInterval(() => {
      this.forceUpdate();
    }, 60000);
  }

  openPostDetail() {
    alert("open another post");
  }

  async freash() {
    await loadPost();
    this.forceUpdate();
  }

  render() {
    let views = [];

    for (let j = 0; j < post.length; j++) {
      views.push(
        <View key={j} style={styles.post}>
          <TouchableOpacity
            style={{ height: 180 }}
            activeOpacity={0.5}
            onPress={() => {
              this.openPostDetail();
            }}
          >
            <Image
              style={{ width: 180, height: 180, borderRadius: 15 }}
              source={{
                uri: post[j].image
              }}
            />
            <Text style={styles.postAuthor}>{post[j].post_titile}</Text>
          </TouchableOpacity>
          <View style={styles.iconBar}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/wheart.png")}
            />
            <Image
              style={styles.icon}
              source={require("../assets/icons/bubble.png")}
            />
            <Image
              style={styles.icon}
              source={require("../assets/icons/wstar.png")}
            />
          </View>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          width: 100 + "%",
          height: 100 + "%",
          backgroundColor: "rgb(227, 246, 249)"
        }}
      >
        {views}
        <Button onPress={this.freash} title="Learn More" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    width: 100 + "%",
    height: 2000,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  post: {
    width: 50 + "%",
    height: 220,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255,100,97,0.7)",
    backgroundColor: "white",
    alignItems: "center"
  },
  postAuthor: {
    height: 15 + "%",
    width: 90 + "%",
    fontSize: 20
  },
  catagoryText: {
    color: "black",
    fontSize: 20,
    textAlign: "center"
  },
  iconBar: {
    width: 90 + "%",
    height: 25,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-end"
  },
  icon: {
    maxWidth: 25,
    maxHeight: 25
  },
  searchIcon: {
    maxWidth: 40,
    maxHeight: 40
  }
});
