import React,{useState} from "react";
import { View, TextInput,StyleSheet,Text,TouchableOpacity,Pressable } from 'react-native';
import {Formik} from 'formik'
import * as Yup from 'yup'
import { Validator } from "email-validator";
import { Button } from "react-native-elements";

const LoginForm = () => {
    const SignupFormSchema = Yup.object().shape({
        username: Yup.string().required().min(2, 'Enter username, Phone no or email') ,
        password: Yup.string()
        .required()
        .min(6, 'Your password should have 6 characters')      
    })
    return(
        <View style={styles.wrapper}> 
        <Formik
        initialValues={{email:'', password:''}}
        onSubmit={values => {

        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
        {({handleChange,handleBlur,handleSubmit,values, isValid}) => (

        >
        <>
            <View style={styles.inputField}>
            <TextInput
            placeholderTextColor='#444'
            placeholder='Phone number, username or email'
            autoCapitalize='none'
            autoCorrect={true}
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            
            />
            </View>
            <View style={styles.inputField}>
            <TextInput
            placeholderTextColor='#444'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            />
            </View>
            <View style={{alignItems:'flex-end', marginBottom:30}}>
                <Text style={{color:'#6BB0F5'}}>Forgot Password?</Text>
            </View>
            <Pressable titleSize={20} style={styles.button} onPress={() => console.log('you clicked me')}/>
            <View style={styles.signupContainer}>
                <Text>
                    Don't have an account?
                </Text>
                <TouchableOpacity>
                    <Text style={{color:'#6BB0F5'}}>Sign Up</Text>
                </TouchableOpacity>
                
            </View>
            )}
            
        </>
        )
            </Formik>
        </View>
    )
 const styles = StyleSheet.create({
    wrapper:{
      marginTop: 80  
    },
    inputField:{
        borderRadius: 4,
        padding: 12,
        backgroundColor:'#FAFAFA',
        marginBottom: 10,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
     },
     button:{
        backgroundColor:'#0096F6',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4,
     },
     buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize: 20,
     },
     signupContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50,
     }
 })
 export default LoginForm