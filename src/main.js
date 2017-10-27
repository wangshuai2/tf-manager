// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router/routes'
import Login from './components/Login'
import store from './vuex/store'

Vue.use(VueResource)
Vue.use(Router)

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const isLogin = sessionStorage.getItem('isLogin');
    if (isLogin) {
      next();
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
