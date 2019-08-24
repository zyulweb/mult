import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import axios from 'axios'
Vue.prototype.axios = axios
import Header from './components/Header.vue'
import Foot from './components/Foot.vue'
Vue.component("my-header",Header)
Vue.component("my-foot",Foot)
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
