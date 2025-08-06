import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)



// 1. 引入核心库
import { library } from '@fortawesome/fontawesome-svg-core'

// 2. 引入图标（你需要的图标）
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

// 3. 引入组件
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 4. 添加图标到库
library.add(faUser, faRobot,fas)

// 5. 注册组件
Vue.component('font-awesome-icon', FontAwesomeIcon)

import RestPlugin from './plugin/rest-plugin';

Vue.use(RestPlugin);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

