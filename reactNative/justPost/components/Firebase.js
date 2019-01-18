const config = {
    apiKey: "AIzaSyC7utvEPinno3msTPfR3jij9nBZ-Vmt0bc",
    authDomain: "just-post-baffd.firebaseapp.com",
    databaseURL: "https://just-post-baffd.firebaseio.com",
    projectId: "just-post-baffd",
    storageBucket: "just-post-baffd.appspot.com",
    messagingSenderId: "126330057166"
  };


export default class Firebase extends React.Component{
    static int(){
        firebase.initializeApp(config);
    }
}

