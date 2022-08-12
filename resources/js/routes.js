const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')
//importamos los componentes
const Mostrar = () => import('./components/exped/Mostrar.vue')
const Crear = () => import('./components/exped/Crear.vue')
const Editar = () => import('./components/exped/Editar.vue')
const Enviar = () => import('./components/exped/Enviar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarExpeds',
        path: '/expeds',
        component: Mostrar
    },
    {
        name: 'crearExped',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarExped',
        path: '/editar/:id',
        component: Editar
    },
    {
        name: 'enviarExped',
        path: '/enviar',
        component: Enviar
    },
     {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    }
]
