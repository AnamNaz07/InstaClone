import { Formik } from 'formik'
import React, { useState } from 'react'
import {View, Text, TextInput,Image, Button} from 'react-native'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'
import * as Yup from 'yup' 
const PLACEHOLDER_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IPk91_a338JOJpaA2NqjB_0UziqQVEeNOA&usqp=CAU' 
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200,'Caption has reached the characters'),
})
const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return(
        <Formik
            initialValues={{caption:'',imageUrl:''}}
        onSubmit={(values) => {
            console.log(values)
        console.log('Your Post was submitted')
        navigation.goBack()
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}>

            {({handleBlur, handleChange, handleSubmit, values,errors, isValid})=> 
                <>
                <View style={{margin:20, justifyContent:'space-between', flexDirection:'row'}}>
                 <Image source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} 
                 style={{width:100, height:100}}/>   


<View style={{flex:1, marginLeft:12}}>
                <TextInput style={{color:'white', fontSize:20}}
                placeholder='Write a Caption...' placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
                />
                </View>

                              </View>
                              <Divider width={0.2} orientation='vertical'/>
                              <TextInput
                              onChange={(e)=>setThumbnailUrl(e.nativeEvent.text)}
                              style={{color:'white', fontSize:18}}
                placeholder='Enter image url' 
                placeholderTextColor='gray'
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                />
{errors.imageUrl &&(
    <Text style={{fontSize:10, color:'red'}}>{errors.imageUrl}</Text>
)}
<Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
                </>
}



        </Formik>
    )
}

export default FormikPostUploader