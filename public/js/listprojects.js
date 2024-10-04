/*
  CCTB Website Development
  IST105
  Oct 2024
  Description: This is a simple login website where students are asked to 
  implement Social Network Login with Firebase
*/

/*
Function onAuthStateChanged(user)
Write a function to check if a user is logged
*/
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/v8/firebase.User
    var uid = user.uid;
  } else {
    console.log(window.location.pathname == '/listprojects.html');
    console.log(window.location.pathname + '  /listprojects.html');
    
    
    if (window.location.pathname == '/listprojects.html') {
      window.location.href = 'index.html'; 
    }
  }
});

window.addEventListener('load', function () {

    //Listen for auth state changes
    // firebase.auth().onAuthStateChanged(onAuthStateChanged);
    document.getElementById('sign-out-button').addEventListener('click', function () {
      //Implement SignOut Function
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        location.href = 'index.html';
      }).catch((error) => {
        // An error happened.
        console.log('Logging fail', errorMessage);
      });
    });

});