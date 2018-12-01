import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Font,Colors } from '../_config/theme';


const ButtonView = ({
    placeholder,
    onPress
}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}
            onPress={onPress}
        >
            <Text style={styles.text}>{placeholder}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Colors.primary,
        margin: 20
    },
    text: {
        fontSize: Font.large,
        alignSelf: 'center',
        padding: 10
    },
})


export default ButtonView;