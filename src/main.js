import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';
import store from './store.js';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
var firebaseConfig = {
    apiKey: 'AIzaSyBW7VDLSlcyhgz3Ryo9_8cLDjthXhISxzE',
    authDomain: 'newproject-b6341.firebaseapp.com',
    projectId: 'newproject-b6341',
    storageBucket: 'newproject-b6341.appspot.com',
    messagingSenderId: '218972919901',
    appId: '1:218972919901:web:3b6a482a76f280c3a315b4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
