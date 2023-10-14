// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*Добавьте объект конфигурации Firebase, а затем инициализируйте Firebase в своем приложении:*/

/*npm install -g firebase-tools   ? */
/* робила npm install firebase*/

const firebaseConfig = {
  apiKey: 'AIzaSyBh_gP2-PCBwVg50C_dx9X-7DONSJushXU',
  authDomain: 'book-team-project-js-04.firebaseapp.com',
  projectId: 'book-team-project-js-04',
  storageBucket: 'book-team-project-js-04.appspot.com',
  messagingSenderId: '662639254549',
  appId: '1:662639254549:web:06bfb144698d9a8531821c',
  measurementId: 'G-GT0HHT9VRW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

// *******************************
