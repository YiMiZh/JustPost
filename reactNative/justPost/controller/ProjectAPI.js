import * as firebase from "firebase";

//read post from database
const readPostData = async function() {
  let post = [];
  let promise = new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("Posts/")
      .once("value", function(snapshot) {
        snapshot.forEach(function(data) {
          resolve(post.push(data.val()));
        });
      });
  });
  let result = await promise;
  return post;
};

//create a new post and send to the database
const createEntirePost = async (post_title, post_Describtion, image) => {
  const imageKey = await createPost(post_title, post_Describtion);
  uploadImage(image, imageKey)
    .then(() => {
      const reff = firebase.storage().ref("image/" + imageKey);
      reff.getDownloadURL().then(url => {
        firebase
          .database()
          .ref("Posts/" + imageKey)
          .update({ image: url, postId: imageKey });
      });
    })
    .catch(error => {
      alert(error);
    });
};

//helper for create post info in database
const createPost = async function(post_title, post_Describtion) {
  let like = 0;
  let view = 0;
  let comments = false;
  let image = false;
  let postId = false;
  let tags = false;
  let key = "";
  await firebase
    .database()
    .ref("Posts/")
    .push({
      postId,
      post_title,
      post_Describtion,
      image,
      like,
      view,
      tags,
      comments
    })
    .then(data => {
      //success callback
      key = key + data.key;
    })
    .catch(error => {
      //error callback
      console.log("error ", error);
    });
  return key;
};

//helper for uploading pics
const uploadImage = async (uri, key) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  var ref = firebase
    .storage()
    .ref()
    .child("image/" + key);
  return ref.put(blob);
};

//signUp method for the user userName must be unique
const signUp = function(userId, userPassword, nikiName) {
  firebase.auth().createUserWithEmailAndPassword(userId, userPassword)
    .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode === 'auth/weak-password'){
        alert('The password is too easy.');
      }
      else{
        alert(errorMessage);
      }
    });

  const collection = false;
  const post = false;
  firebase
    .database()
    .ref('/Users')
    .push({
      userId,
      nikiName,
      collection,
      post
      })
};

//Signin method return ture if the user is successfully logged in
const signIn = function(userId, userPassword) {
  firebase.auth().signInWithEmailAndPassword(userId, userPassword)
    .catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCode === 'auth/wrong-password'){
      alert('Password is incorrect');
    }
    else{
      alert(errorMessage);
    }
    });
};

//like method to like one certain post and make its like attribute plus one
const like = function(postId) {
  var postRef = firebase.database().ref("Posts/" + postId)
  postRef.child('likes').once('value', function (snapshot) {
    var currentLikes = snapshot.val() ? snapshot.val() : 0;
    postRef.update({
        'likes': currentLikes + 1

    }, function (error) {
            console.log(error);
    });
  });
};

//Comment method to leave the comment on certain post and who leaves comments
const reviews = function(postId, commenter, commentText) {
  var postRef = firebase.database().ref("Posts/" + postId)
  postRef.child('comments').once('value', function (snapshot) {
    var currentcomment = snapshot.val() ? snapshot.val() : 0;
    var c = currentcomment.commenter ? currentcomment.commenter : {};
    postRef.update({
        'comments': commentText

    }, function (error) {
            console.log(error);
    });
  });
};

//Adding Tag method to add Tag for one certain post
const addTag = function(postId, Tag) {};

//addCollection method for user to collect this post
const addCollection = function(postId, userId) {};

//incviews method for post to increase this post views.
const incviews = function(postId) {
  var postRef = firebase.database().ref("Posts/" + postId)
  postRef.child('views').once('value', function (snapshot) {
    var currentviews = snapshot.val() ? snapshot.val() : 0;
    postRef.update({
        'views': currentviews + 1
    }, function (error) {
            console.log(error);
    });
  });
};
module.exports = {
  readPostData: readPostData,
  createEntirePost: createEntirePost,
  signUp: signUp,
  signIn: signIn,
  incviews: incviews,
  like: like,
  reviews: reviews
};
