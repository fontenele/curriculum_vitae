import Vue from "vue";
import VueRouter from "vue-router";
import AboutMe from './../components/AboutMe'
import TechInfo from './../components/TechInfo'
import WorkHistory from './../components/WorkHistory'

const routes = [
    { path: '/', component: AboutMe },
    { path: '/about-me', component: AboutMe },
    { path: '/tech-info', component: TechInfo },
    { path: '/work-history', component: WorkHistory },
];

const router = new VueRouter({routes});
Vue.use(VueRouter);
router.replace('/about-me');

export default router;
