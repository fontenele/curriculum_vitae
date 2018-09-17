import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from './../components/AboutMe'
import TechInfo from './../components/TechInfo'
import Languages from './../components/Languages'
import Resume from './../components/Resume'

const routes = [
    { path: '/', component: Resume },
    { path: '/about-me', component: AboutMe },
    { path: '/tech-info', component: TechInfo },
    { path: '/languages', component: Languages },
    { path: '/resume', component: Resume },
];

const router = new VueRouter({routes});
Vue.use(VueRouter);

export default router;
