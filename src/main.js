import Vue from "vue";
import Vuex from "vuex";

import App from "./component/App";

// 应用启动
new Vue({
    render: h => h(App)
}).$mount('#app')
  