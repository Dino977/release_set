import Vue from "vue";
import App from "./App.vue";


Vue.config.productionTip = false;

import X from 'x-ui';
import 'x-ui/lib/theme-chalk/index.css'
Vue.use(X);

/* import { Button } from 'x-ui'
Vue.component(Button.name, Button); // 用法一
Vue.use(Button); // 用法二 */

new Vue({
  render: (h) => h(App),
}).$mount("#app");
