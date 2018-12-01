import React from 'react';
import { View, StyleSheet,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../_config/theme';


const InputView = ({
    placeholder,
    onChangeText,
    iconName
}) => {
    return(
        <View style={styles.userInputContainer}>
                    <Icon
                        name={iconName}
                        size={26}
                        style={styles.icon}
                    />
                <TextInput
                    style={styles.userInput}
                            placeholder={placeholder}
                            onChangeText={onChangeText}
                        />
                </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        alignSelf:'center'
    },
    userInputContainer:{
        flexDirection:'row',
        paddingHorizontal:20,
        borderColor:'black',
       borderWidth:1,
       marginHorizontal:20,
       borderRadius:10,
       marginVertical:10
    },
    userInput:{
       paddingLeft:20,
       fontSize:Font.regular
    },
    
})

export default InputView;
