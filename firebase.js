
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBCIBsu9kUxaVXnoKkURmefiWqXRHODqpw",
  authDomain: "rn-instagram-clone-77a66.firebaseapp.com",
  projectId: "rn-instagram-clone-77a66",
  storageBucket: "rn-instagram-clone-77a66.appspot.com",
  messagingSenderId: "891905730543",
  appId: "1:891905730543:web:033115733c98e21862381a"
};

!firebase.apps.length ?  firebaseinitializeApp(firebaseConfig) : firebase.app()
export default firebase