import vueRouter from 'vue-router'

import Profile from './components/Profile'
import Partners from './components/Partners'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },

        {
            path: '/user/:email',
            name: "user",
            component: Profile
        },

        {
            path: '/user/partners/:email',
            name: "user_partners",
            component: Partners
        },
    ]
})

export default router