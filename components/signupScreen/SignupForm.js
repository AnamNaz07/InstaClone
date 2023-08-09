 import React from "react";
 import { View, TextInput,StyleSheet,Text,TouchableOpacity,Pressable, Alert } from "react-native";
 import {Formik} from 'formik'
 import * as Yup from 'yup'
 import { Validator } from "email-validator";
import firebase from "react-native-firebase";
 

 const SignupForm = ({}) => {
     const SignupFormSchema = Yup.object().shape({
         email: Yup.string().email().required('An email is required'),
         username: Yup.string().required().min(2, 'A username is required') ,
         password: Yup.string()
         .required()
         .min(6, 'Your password should have 6 characters')      
     })
    
     const onSignup = async (email,password) => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(email,password)
        }catch(error){
            Alert.alert(error.message)
        }
     }
     return(
         <View style={styles.wrapper}>
             <Formik
             initialValues={{email:'', username: '', password:''}} 
             onSubmit={values =>{
                 onSignup(values.email,values.password)
             }}
             validationSchema={SignupFormSchema}
             validateOnMount={true}
             >
             {({ handleChange, handleBlur, handleSubmit, values, isValid, errors}) => (
                <>
                 <View style={
                     styles.inputField

                 }
                 >
                    <TextInput
                            style={{color:'black'}}
                                placeholderTextColor='#444'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                autoFocus={true}
                                textContentType='password'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}                                 />
                                 </View>
                                 <View
                                  style={
                                    styles.inputField}
                                  >
<TextInput
                            style={{color:'black'}}
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                 />
                                 </View>
                                 <View
                                  style={
                                    styles.inputField}
                                  >
<TextInput
                            style={{color:'black'}}
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                 />
</View>
                    
<Pressable
titleSize={20}
style={styles.button(isValid)}
onPress={handleSubmit}
>
    <Text style={styles.buttonText}>Log In</Text>

    </Pressable>
    <View style={styles.loginContainer}>
        <Text style={{color:'black'}}>Already have an account?</Text>
        <TouchableOpacity 
    //    onPress={() => navigation.goBack()}
        >
            <Text style={{color:'#6BB0F5'}}> Log In</Text>
        </TouchableOpacity>
    </View>
 </>
             )}
</Formik>
</View>
     )
 }

 const styles = StyleSheet.create({
     wrapper:{
        marginTop: 50,
     },
     loginContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50
     },
     button: isValid => ({
        backgroundColor: isValid ? '#0096F6': '#9ACAF7',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4,
        marginTop:50
     }),
     buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize:20
     },
     inputField:{
        borderRadius: 2,
        padding: 7,
        backgroundColor:'#FAFAFA',
        marginBottom: 5,
        borderWidth:1,
        
     },
    }
 )
  export default SignupForm