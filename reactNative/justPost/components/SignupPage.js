import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }
  render() {
    return (
    <SafeAreaView style={ styles.outerContainer }>
        <View>
            <Text style={ styles.text }>
                USER NAME:
            </Text>
            <TextInput
                style={ styles.inputBox }
                onChangeText={ (username) => this.setState({username}) }
                value={ this.state.username }
            />
        </View>
        <View>
            <Text style={ styles.text }>
                EMAIL ADDRESS:
            </Text>
            <TextInput
                style={ styles.inputBox }
                onChangeText={ (email) => this.setState({email}) }
                value={ this.state.email }
            />
        </View>
        <View>
            <Text style={ styles.text }>
                PASSWORD:
            </Text>
            <TextInput
                style={ styles.inputBox }
                onChangeText={ (password) => this.setState({password}) }
                value={ this.state.password }
            />
        </View>
        <TouchableOpacity style={ styles.signupButton }
            activeOpacity={ 0.5 }
            disabled={!(this.state.username && this.state.email && this.state.password)} >
            <Text style={{ color: 'white' }}>
                Sign Up
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10
    },
    text: {
        color: 'pink',
        fontWeight: 'bold'
    },
    signupButton: {
        marginTop: 20,
        backgroundColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#fff',
    },
});
