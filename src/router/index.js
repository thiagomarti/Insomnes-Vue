// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthorBooksView from '@/views/AuthorBooksView.vue'
import AnthologiesView from '@/views/AnthologiesView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/nosotros',
        name: 'AboutUs',
        component: AboutUsView
    },
    {
        path: '/antologias',
        name: 'Anthologies',
        component: AnthologiesView
    },
    {
        path: '/libros_de_autor',
        name: 'AuthorBooks',
        component: AuthorBooksView
    }
]


const router = createRouter({ history: createWebHistory(), routes })
export default router