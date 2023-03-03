export const auth_environment = {
  production: false,
  host: "https://localhost:5001/"
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbo2V6xR7GbmpB8QBHEfRtv0G4WV5g9qE",
  authDomain: "thekevinsingh.firebaseapp.com",
  databaseURL: "https://thekevinsingh-default-rtdb.firebaseio.com/tickets.json",
  projectId: "thekevinsingh",
  storageBucket: "thekevinsingh.appspot.com",
  messagingSenderId: "921821910274",
  appId: "1:921821910274:web:39721461cd867d9afbde1b",
  measurementId: "G-Q6DQW85W2P"
};
export const environment = {
  production: false,
  host: "http://localhost:5000/",//"http://localhost:8000/"
  firebaseConfig: firebaseConfig
};
