import React from'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Image } from 'react-native-elements'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
        <Header/>
        <FormikPostUploader navigation={navigation}/>
    </View>
)
const Header = ({navigation}) => (

     <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack}>
            <Image 
            source={{
                uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'
            }}
            style={{width:30, height:30}}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>
                NEW POST
            </Text>
        

        </View>
    )


const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,

    },

    headerContainer:{
        flexDirection:'row',

        

    }, 
        headerText:{
            color:'white',
            fontWeight:'700',
            fontSize:20,
            marginLeft:130,
            justifyContent:'center',
            alignItems:'center'
        },
})
export default AddNewPost