import React from "react";
import {View, Text} from 'react-native'
import AddNewPost from "../components/home/newPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
    return (
<View>
        <AddNewPost navigation={navigation}/>
            
</View>
    )
    }

export default NewPostScreen