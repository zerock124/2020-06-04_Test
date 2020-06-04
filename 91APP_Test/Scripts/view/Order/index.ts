import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import OrderManagement from './OrderManagement';

Vue.use(BootstrapVue);

new Vue({
    render: (h => h(OrderManagement))
}).$mount('#v_app');