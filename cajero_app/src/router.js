import vueRouter from 'vue-router'
import Profile from './components/Profile'
import Partners from './components/Partners'
import Registro from './components/Registro'
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
            path: '/hotel/profile/:email',
            name: "user_profile",
            component: Profile
        },

        {
            path: '/hotel/partners/:email',
            name: "user_partners",
            component: Partners
        },
        {
            path: '/registro',
            name: "registro",
            component: Registro
        }
    ]
})

export default router