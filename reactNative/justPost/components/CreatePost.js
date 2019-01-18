import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  PixelRatio,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { ImagePicker, Permissions } from "expo";
const projectApi = require("../controller/ProjectAPI");

export class CreatePost extends React.Component {
  constructor() {
    super();
    this.createThisPost = this.createThisPost.bind(this);
  }

  state = {
    post_title: "",
    post_Describtion: "",
    image: null
  };

  //Create this Post and call dataBaseManager
  createThisPost() {
    projectApi.createEntirePost(
      this.state.post_title,
      this.state.post_Describtion,
      this.state.image
    );
  }

  render() {
    let { image } = this.state;
    return (
      <View>
        <View>
          <Text>Post Tile: </Text>
          <TextInput
            style={styles.PostTile}
            onChangeText={post_title => this.setState({ post_title })}
          />
        </View>

        <TouchableOpacity onPress={this.pickFromGallery}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            {this.state.image === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={{ uri: image }} />
            )}
          </View>
        </TouchableOpacity>

        <View>
          <Text>Post Describtion:</Text>
          <TextInput
            style={styles.postDescribtion}
            onChangeText={post_Describtion =>
              this.setState({ post_Describtion })
            }
          />
        </View>

        <View>
          <Button onPress={this.createThisPost} title="Create" />
        </View>
      </View>
    );
  }

  pickFromGallery = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    if (status === "granted") {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "Images"
      }).catch(error => console.log(permissions, { error }));

      this.setState({ image: image.uri });
    }
  };
}

const styles = StyleSheet.create({
  PostTile: {
    height: 40,
    width: 100 + "%",
    fontSize: 20,
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white"
  },
  postDescribtion: {
    height: 150,
    width: 100 + "%",
    fontSize: 20,
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white"
  },
  avatarContainer: {
    borderColor: "black",
    borderWidth: 2 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 100 + "%",
    height: 300
  }
});
