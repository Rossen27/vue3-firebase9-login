import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCpdpXyb2AoHWDUq9MYBc7AxBAq7EUjKJo",
    authDomain: "vue-firebase-authenticat-a023c.firebaseapp.com",
    databaseURL: "https://vue-firebase-authenticat-a023c-default-rtdb.firebaseio.com",
    projectId: "vue-firebase-authenticat-a023c",
    storageBucket: "vue-firebase-authenticat-a023c.appspot.com",
    messagingSenderId: "371882211424",
    appId: "1:371882211424:web:054a7dda1f14f248e7eb05"
};
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
