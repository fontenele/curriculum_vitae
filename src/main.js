import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import router from './plugins/router'
import VueI18n from 'vue-i18n'

// import colors from 'vuetify/es5/util/colors'

let pt_BR = require('./locale/pt_BR');
let en_US = require('./locale/en_US');

const messages = {
    pt_BR: pt_BR.messages,
    en_US: en_US.messages
};
Vue.config.productionTip = false;

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: 'pt_BR',
    messages
});

new Vue({
    i18n,
    router,
    theme: {
        primary: "#42b983"
    },
    render: h => h(App)
}).$mount('#app');
