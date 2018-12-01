import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../_config/theme';


const InputView = ({
    placeholder,
    onChangeText,
}) => {
    return (
        <View style={styles.userInputContainer}>     
            <TextInput
                style={styles.userInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    userInputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginVertical: 10
    },
    userInput: {
        paddingLeft: 20,
        fontSize: Font.regular
    },

})

export default InputView;
