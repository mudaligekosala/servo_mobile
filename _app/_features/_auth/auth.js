import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {  Font, Colors } from '../../_config/theme';
//components
import UserInput from '../../_components/userInputsAuth';
import ButtonView from '../../_components/button';

class Auth extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require("../../../assets/logo.jpg")
                        } />
                    <Text style={styles.title}>SERVO</Text>
                </View>
                <View style={styles.formContainer}>

                <UserInput
                    placeholder={"username"}
                    iconName={"email"}
                />
                <UserInput
                    placeholder={"password"}
                    iconName={"vpn-key"}
                />

                <ButtonView
                placeholder={"Login"}
                onPress={() => this.props.navigation.navigate('BottomTabs')}
                />
                        
                    </View>
                <View style={styles.footerContainer}></View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
   
    title: {
        fontSize: Font.exLarge,
        color: Colors.primary,
        fontWeight: '100',
        marginTop:20
    },
    container: {
        flex: 1,

    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    footerContainer: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
    },
    logo: {
        height: '50%',
        width: '50%',
        resizeMode: 'center'
    }
})

export default Auth;
