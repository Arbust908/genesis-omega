require('./bootstrap');

import Vue from 'vue'
import Welcome from './components/Welcome'


Vue.component('welcome', Welcome);

const app = new Vue({
    el: '#app'
});
