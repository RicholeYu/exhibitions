import Vue from "vue";
import Vuex from "vuex";
import store from "./store";
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

import App from "./component/App";

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
  