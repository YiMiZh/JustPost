import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export class PostDetail extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={[ styles.headerContainer, styles.flexInRow ]}>
                    <View style={[ styles.avatarContainer,  styles.flexInRow ]}>
                        <Image
                            style={ styles.avatar }
                            source={ require("../assets/images/uoft.jpg") }
                        />
                        <Text style={[ styles.header, styles.text ]}>
                            UofT
                        </Text>
                    </View>
                    <View style={[ styles.buttonContainer, styles.flexInRow ]}>
                        <TouchableOpacity style={ styles.flexInRow }
                            activeOpacity={ 0.5 }
                            >
                            <Image
                                style={ styles.image }
                                source={ require("../assets/icons/wstar.png") }
                            />
                            <Text style={ styles.text }>
                                Collect
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.flexInRow, styles.marginBtn ]}
                            activeOpacity={ 0.5 }
                            >
                            <Image
                                style={ styles.image }
                                source={ require("../assets/icons/wheart.png") }
                            />
                            <Text style={ styles.text }>
                                Like
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.postContainer }>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    flexInRow: {
        flex: 1,
        flexDirection: 'row'
    },
    headerContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 5,
        height: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatarContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    avatar: {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 15
    },
    postContainer: {
        marginTop: 10,
        backgroundColor: "white",
        height: 200
    },
    buttonContainer: {
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        marginRight: 10
    },
    marginBtn: {
        marginLeft: 10
    },
    image: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    text: {
        color: 'pink'
    }
});
