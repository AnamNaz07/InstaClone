import React from "react";
import {StyleSheet, View, Image} from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm'


const SignupScreen = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={require('.././assets/instagram.png')} style={{height:70, width:70}}/>
        </View>
        <SignupForm/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer:{
        alignItems:'center',
        marginTop: 60,
    }
})
export default SignupScreen