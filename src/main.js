import Vue from 'vue'
import Vuex from 'vuex'
import custosStore from "airavata-custos-portal/src/lib/store";
import App from './App.vue'

Vue.use(Vuex);
new Vue({
    custosStore,
    render: h => h(App),
}).$mount('#app')

