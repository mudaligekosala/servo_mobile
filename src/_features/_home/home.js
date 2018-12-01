import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import UserInput from '../../_components/userInputsAuth'

class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
            <UserInput
                    placeholder={"What you want to Do"}
                />
                <UserInput
                    placeholder={"Your Location"}
                />
                <UserInput
                    placeholder={"How far you can go"}
                />
                <UserInput
                    placeholder={"Vehicle Info"}
                />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container:{flex:1}
})

export default Home;
