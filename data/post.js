import {USERS} from './users';

export const POSTS = [
  {
    imageUrl:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
    user: USERS[0].user,
    likes: 7870, 
    caption: 'Hi guyss',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'userr',
        comment: 'hi',
      },
      {
        user: 'new_user',
        comment: 'Amazing Post',
      },
    ],
  },
  {
    imageUrl:
      'https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg',
    user: USERS[1].user,
    likes: 790,
    caption: 'Heyyy',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'userr123',
        comment: 'hi',
      },
      {
        user: 'new_user1',
        comment: 'Amazing Post',
      },
    ],
  },
];
