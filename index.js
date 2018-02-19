import Vue from "vue"
import BootstrapVue from "bootstrap-vue"
import VueRouter from "vue-router"

import data from "./data"

import App from "./components/app"
import Video from "./components/video"
import Blurb from "./components/blurb"
import Ad from "./components/ad"

const router = new VueRouter({
    routes: [{
        path: '/',
        component: App,
        children: [{
                path: 'videos',
                component: Video
            },
            {
                path: 'blurbs',
                component: Blurb
            },
            {
                path: 'ads',
                component: Ad
            },
            {
                path: '*',
                redirect: 'videos'
            }
        ]
    }, ]
})

Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
    router,
    data,
    el: "#app",
    render: h => <router-view></router-view>
})