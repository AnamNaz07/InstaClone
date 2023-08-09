

import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { Divider} from "react-native-elements";
import homeactive from '../../assets/homeactive.png'
import homeInactive from '../../assets/homeInactive.png'
import searchactive from '../../assets/searchactive.png'
import searchinactive from '../../assets/searchinactive.png'
import videoactive from '../../assets/videoactive.png'
import videoinactive from '../../assets/videoinactive.png'
import shopactive from '../../assets/shopactive.png'
import shopinactive from '../../assets/shopinactive.png'




export const BottomTabIcons = [
{
    name:'Home',
    active: homeactive,
    inactive: homeInactive
    // active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiYgytQqMHFGONbKnszTrP-G_eeJeF4ne-Q&usqp=CAU',    
    // inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiYgytQqMHFGONbKnszTrP-G_eeJeF4ne-Q&usqp=CAU'
},
{
    name:'Search',
    active: searchactive,
    inactive: searchinactive,
    // active:'https://en  crypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPIskZlxA-xXAs-3V8t7Tz_5p4US2fsRqTA&usqp=CAU',
    // inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-unbQtM4pdS3tclhpS67esY5UBz3TlDtGGQ&usqp=CAU'
},
{
    name:'Shop',
    active: shopactive,
    inactive:shopinactive,
    // active:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGykvVvI8zf_Bof1TyNTrOXskGa7YMWg1EXM1qF06wRD9rbN2B9aZSGs8mU9lw88wXLQ&usqp=CAU',
    // inactive:'https://cdn-icons-png.flaticon.com/512/181/181591.png'
},
{
    name:'Reels',
    active: videoactive,
    inactive: videoinactive,
    // active:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGykvVvI8zf_Bof1TyNTrOXskGa7YMWg1EXM1qF06wRD9rbN2B9aZSGs8mU9lw88wXLQ&usqp=CAU',
    // inactive:'https://cdn-icons-png.flaticon.com/512/181/181591.png'
},
// {
//     name:'Profile',
//     active:'https://imgur.com/dxjd7FB.jpg',
//     inactive: 'https://imgur.com/dxjd7FB.jpg',
// }
]
const Bottom = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <Image
            source={activeTab === icon.name ? icon.active : icon.inactive}
            style={[
              styles.icon,
              icon.name === 'Profile' ? styles.profilePic : null,
              activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null,
            ]}
          />
        </TouchableOpacity>
      );
      
    return(
        <View style={styles.wrapper}>
            <Divider width={1} orientation="vertical"/>
                    <View style={styles.container}>
            {icons.map((icon,index) => (
                <Icon key={index} icon={icon}/>
            ))}
        </View>
        </View>

    )
}

const styles= StyleSheet.create({
    wrapper:{
        position:'absolute',
        width:'100%',
        bottom:'3%',
        zIndex:999,
        backgroundColor:'#000',
    },
    icon:{
        width:30,
        height:30,
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        paddingTop: 10,
    },
    profilePic: (activeTab = '') =>({
        borderRadius:50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor:'#fff',
    }),
})
 export default Bottom