import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export class ProfileDetail extends Component {
    render() {
        return (
            <SafeAreaView style={ styles.outerContainer }>
                <View style={ styles.avatarContainer }>
                    <Image style={ styles.avatar }
                      source={require("../assets/images/splash.png")} />
                </View>
                <View style={{flex: 0.7}}>
                    <View style={ styles.detailContainer }>
                        <View style={{ marginRight: 20 + "%" }}>
                            <TouchableOpacity style={ styles.center }
                                activeOpacity={0.5}>
                                <Text style={ styles.text }>
                                    1
                                </Text>
                                <Text style={ styles.text }>
                                    Liked
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={ styles.center }
                                activeOpacity={0.5}>
                                <Text style={ styles.text }>
                                    1
                                </Text>
                                <Text style={{color: 'pink',
                                    fontWeight: 'bold'}}>
                                    Comments
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ styles.signoutButtonContainer }>
                        <View style={{ flex: 0.7 }}>
                            <TouchableOpacity style={ styles.signoutButton }
                                activeOpacity={0.5}>
                                <Text style={ styles.text }>
                                    Log Out
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 120
    },
    avatarContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    detailContainer: {
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signoutButtonContainer: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signoutButton: {
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 25
    },
    text: {
        color: 'pink',
        fontWeight: 'bold'
    }
});
