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


// function onAuthStateChanged(user){
//   if(user){
//     location.href= ""
//   }else{
//     firebase.auth()
//   }
// }

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