import vueRouter from 'vue-router'
import Registro from './components/Registro'
//import Login from './components/Login'
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
            path: '/Registro',
            name: "registro",
            component: Registro
        },
    
    ]
})
export default router