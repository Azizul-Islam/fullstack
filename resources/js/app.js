
require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
const Test = ()=> import('./components/Test.vue');
const AnotherTest = ()=> import('./components/AnotherTest.vue');
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/ExampleComponent.vue').default },
    { path: '/test', component: Test },
    { path: '/another-test', component: AnotherTest },
]

const router = new VueRouter({
    routes,
    mode: "history"
})
const app = new Vue({
    router
}).$mount('#app');
