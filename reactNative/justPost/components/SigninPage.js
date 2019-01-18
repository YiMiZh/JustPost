import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export class SigninPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
  render() {
    return (
    <SafeAreaView style={ styles.outerContainer }>
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
        <TouchableOpacity style={ styles.signinButton }
            activeOpacity={ 0.5 }
            disabled={!(this.state.email && this.state.password)}>
            <Text style={{ color: 'white' }}>
                Sign In
            </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 75 }}>
            <Text style={ styles.text }>
                DON'T HAVE AN ACCOUNT?
            </Text>
            <TouchableOpacity style={ styles.createButton }
                activeOpacity={ 0.5 }>
                <Text style={{ color: 'pink' }}>
                    Create an Account
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
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
    signinButton: {
        marginTop: 20,
        backgroundColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#fff'
    },
    createButton: {
        marginTop: 20,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#fff'
    },
});
