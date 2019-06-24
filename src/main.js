import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import bmap from 'vue-baidu-map'
import 'normalize.css/normalize.css'
import api from './api' // 导入api接口

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.use(bmap, {
  ak: 'FGHCOUeGQbunLv4nFmr2ZDuYfNK17TQ2'
})
Vue.config.productionTip = false
Vue.prototype.$api = api // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
