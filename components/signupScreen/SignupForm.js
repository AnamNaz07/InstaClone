// import React from "react";
// import { View, TextInput,StyleSheet,Text,TouchableOpacity,Pressable } from "react-native-reanimated/lib/typescript/Animated";
// import {Formik} from 'formik'
// import * as Yup from 'yup'
// import { Validator } from "email-validator";

// const SignupForm = () => {
//     const SignupFormSchema = Yup.object().shape({
//         email: Yup.string().email().required('An email is required'),
//         username: Yup.string().required().min(2, 'A username is required') ,
//         password: Yup.string()
//         .required()
//         .min(6, 'Your password should have 6 characters')      
//     })
//     return(
//         <View style={StyleSheet.wrapper}>
//             <Formik
//             initialValues={{email:'', username: '', password:''}} 
//             onSubmit={values =>{
//                 console.log(values)
//             }}
//             validationSchema={SignupFormSchema}
//             validateOnMount={true}
//             >
//             {({ handleChange, handleBlur, handleSubmit, values, isValid, errors}
                
//                 <View style={[
//                     styles.inputField,
//                     {
//                         borderColor:
//                         values.email.length < 1 || Validator.validate(values)
//                     },
//                 ]}
//                 )}

//             </Formik>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     wrapper:{

//     }
// })
//  export default SignupForm