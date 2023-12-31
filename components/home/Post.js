import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider, Image} from 'react-native-elements';

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/833/833472.png',
    likedImageUrl: 'https://cdn-icons-png.flaticon.com/128/833/833472.png',
  },
  {
    name: 'Comment',
    imageUrl:
      'https://i.pinimg.com/originals/90/23/36/902336ef4a502c6cb9fed4b27d5defbf.png',
  },
  {
    name: 'Share',
    imageUrl:
      'https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-share-icon-png-image_986967.jpg',
  },
  {
    name: 'Save',
    imageUrl: 'https://cdn141.picsart.com/328472001021211.png',
  },
];

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30, flex: 1}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post}/>
        <Comments post={post}/>
      </View>
    </View>
  );
};
const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
      justifyContent: 'space-between',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_picture}} style={styles.story} />
      <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
        {post.user}
      </Text>
    </View>

    <Text style={{color: 'white', fontWeight: '900', fontSize: 30}}>...</Text>
  </View>
);

const PostImage = ({post}) => (
  <View style={{width: '100%', height: 450}}>
    <Image
      source={{uri: post.imageUrl}}
      style={{height: '100%', resizeMode: 'cover'}}
    />
  </View>
);

const PostFooter = () => (
  <View style={{flexDirection: 'row'}}>
    <View style={styles.leftFooterIcons}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon
        imgStyle={(styles.footerIcon, styles.commentIcon)}
        imgUrl={postFooterIcons[1].imageUrl}
      />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>

    <View style={{flex: 1, alignItems: 'flex-end'}}>
      <Icon imgStyle={(styles.footerIcon , styles.saveIcon)} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{uri: imgUrl}} />
  </TouchableOpacity>
);

const Likes = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white'}}>
      <Text style={{fontWeight: '600'}}>{post.user} </Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({post}) =>  (
  <View style={{marginTop:5}}>
    {!!post.comments.length && (
  <Text style={{color:'gray'}}>
  View{post.comments.length > 1 ? ' all' :' '} {post.comments.length}{' '}
  {post.comments.length > 1 ? 'comments' : 'comment'}
  </Text>
)}
  </View>
)


const Comments = ({post}) => (
<>
{post.comments.map((comment,index) => (

<View key={index} style={{flexDirection:'row', marginTop:5}}>
<Text style={{color:'white'}}>
  <Text style={{fontWeight:'600'}}>{comment.user}</Text>
{comment.comment} 
 </Text>
</View>
))}

</>
)
//1. Zero Comments : Don't render component
//2. 1 comment: render component without "all" and singular comment
//3. 2 comments: render with the word "all" and plural comments

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  footerIcon: {
    width: 33,
    height: 33,
    marginTop:5,
  },

  leftFooterIcons: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
  commentIcon: {
    height: 50,
    width:40,
    marginLeft:5,
  },
  saveIcon:{
    height:27,
    width:20,
    marginTop:5
  },
});
export default Post;
