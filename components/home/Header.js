import {
    View,
    Text,
    Image,
    StyleSheet,
    Touchable,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  const Header = ({navigation}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </TouchableOpacity>
  
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../../assets/addpost.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                height: 20,
                width: 20,
                marginLeft: 20,
                resizeMode: 'contain',
              }}
              source={require('../../assets/heart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
              <View style={styles.unreadBadge}
              >
                  <Text style={styles.unreadBadgeText}>
  11
                  </Text>
              </View>
            <Image style={styles.icon} source={require('../../assets/send.png')} />
          </TouchableOpacity>
  
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 10,
    },
    logo: {
      width: 150,
      height: 70,
      resizeMode: 'contain',
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      height: 17,
      width: 17,
      marginLeft: 20,
      resizeMode: 'contain',
  
    },
    unreadBadge:{
      backgroundColor:'red',
      position:'absolute',
      left:25,
      bottom:12,
      width:20,
      height:18,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      zIndex:100
    },
    unreadBadgeText:{
      color:'white',
      fontWeight:'600',
    },
  });
  export default Header;
  