import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export class ProfilePost extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={ styles.headerContainer }>
                    <Text style={ styles.header }>
                        Posts
                    </Text>
                </View>
                <View style={ styles.postContainer }>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 10,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'pink'
    },
    postContainer: {
        marginTop: 10,
        backgroundColor: "white",
        height: 200
    }
});
