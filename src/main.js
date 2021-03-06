import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmnfO09JR0R7N_J8-_wr-rygVYmcn6oCk",
    authDomain: "sae-203-helena-jaegle.firebaseapp.com",
    projectId: "sae-203-helena-jaegle",
    storageBucket: "sae-203-helena-jaegle.appspot.com",
    messagingSenderId: "458064734105",
    appId: "1:458064734105:web:14775b40ebf74db02b5508"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

/* 
export const emitter = mitt();

app.config.globalProperties.emitter = emitter;

*/

app.use(router)

app.mount('#app')
