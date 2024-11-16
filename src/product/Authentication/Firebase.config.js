// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.meta.env.VITE_APIKEY,
authDomain:import.meta.env.VITE_AUTHDOMAIN,
projectId:import.meta.env.VITE_PROJECTID,
storageBucket:import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId:import.meta.env.VITE_MESSAGEINGSENDERID,
appId:import.meta.env.VITE_APPID
// apiKey: "AIzaSyDqCaDsDt-ePJlEXa8OsddzJcPGwm0mA9I",
// authDomain: "bogura--shop.firebaseapp.com",
// projectId: "bogura--shop",
// storageBucket: "bogura--shop.firebasestorage.app",
// messagingSenderId: "562259803575",
// appId: "1:562259803575:web:274b1f41620e4c2726bc32"
};
// console.log(import.meta.env.VITE_APIKEY)
// Initialize Firebase
export const app = initializeApp(firebaseConfig);