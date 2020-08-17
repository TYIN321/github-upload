import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBy0qjfoqU4hFdTyNcPOcNsIwcKoRIfyMc",
authDomain: "joyworkshoppe-irap.firebaseapp.com",
databaseURL: "https://joyworkshoppe-irap.firebaseio.com",
projectId: "joyworkshoppe-irap",
storageBucket: "joyworkshoppe-irap.appspot.com",
messagingSenderId: "1049022121667",
appId: "1:1049022121667:web:ab5f048cf0218bbd550476",
measurementId: "G-NJ78FLCB72"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
