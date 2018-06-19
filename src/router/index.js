import Vue from 'vue';
import VueRouter from 'vue-router';
import {Dives, MapView, ChartView} from '~/pages';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/dives'},
        {
            path: '/dives',
            component: Dives
        },
        {
            path: '/map',
            component: MapView
        },
        {
            path: '/charts',
            component: ChartView
        }
    ]
});

export default router;
