import React from "react";
import {StyleSheet, View, Image} from 'react-native'
import LoginForm from "../components/loginScreen/LoginForm";


const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('.././assets/instagram.png')} style={styles.logoContainer}/>

        </View>
        <LoginForm/>
    </View>
)
 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop: 30,
        paddingHorizontal:12,
        alignContent:'center',        
    },
    logoContainer:{
        marginTop:60,
        height:70,
        width:70,
        alignSelf:'center'
    }
 })
 export default LoginScreen