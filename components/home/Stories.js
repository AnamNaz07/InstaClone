import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import { USERS } from '../../data/users';


const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal
       showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: story.image}} style={styles.story} />
            <Text style={styles.storyText}>
             {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()} 
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  storyText: {
    marginLeft: 15,
    fontWeight: '300',
  },
});

export default Stories;
