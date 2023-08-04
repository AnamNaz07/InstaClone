import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import { ScrollView } from 'react-native';
import { POSTS } from '../data/post';
import Post from '../components/home/Post';
import Bottom, { BottomTabIcons } from '../components/home/Bottom'
const homeScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />

      <ScrollView>
        
        {POSTS.map((post,index) => (
      <Post post={post} key={index}/>
      ))}
      </ScrollView>
      <Bottom icons={BottomTabIcons}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
export default homeScreen;
