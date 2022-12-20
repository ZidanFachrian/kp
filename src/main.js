import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const app = createApp(App);
// css

import "bootstrap"
import './assets/css/argon-dashboard.min.css'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import 'sweetalert2/dist/sweetalert2.min.css';
app.use(VueSweetalert2);




// import "./assets/js/plugins/perfect-scrollbar.min.js"
// import "./assets/js/plugins/smooth-scrollbar.min.js"

// Global page components imported
import SidebarHero from './components/section/SidebarHero.vue';
import NavbarHero from './components/section/NavbarHero.vue';



// Global page components register
app.component('NavbarHero', NavbarHero);
app.component('SidebarHero', SidebarHero);




app.use(router).mount('#app')
