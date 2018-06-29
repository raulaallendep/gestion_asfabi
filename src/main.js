// Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import App from './App.vue'

// Routes
import routes from '@/routes'

// Store
import store from '@/store'

// Styles
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Plugins
// import EventBus from '@/plugins/event-bus'

// Use
Vue.use(VueRouter)
Vue.use(BootstrapVue)

// VueRouter Instance
const router = new VueRouter({
  routes,
  mode: 'history'
})

// Vue Instance
new Vue({
  // HTML Inject
  el: '#app',
  // Render Component
  render: h => h(App),
  // Add router
  router,
  // Add Store
  store
})
