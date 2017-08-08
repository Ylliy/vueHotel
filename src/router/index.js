import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/home'
// import City from '@/components/city'
import DatePick from '@/components/datePick'
import Keywords from '@/components/keywords'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',

        name: 'Home',
        component: Home
    }, {
        path: '/city',
        name: 'City',
        component: () =>
            import ('@/components/city')
    }, {
        path: '/datepick',
        name: 'DatePick',
        component: DatePick
    }, , {
        path: '/keywords',
        name: 'Keywords',
        component: Keywords
    }]
})