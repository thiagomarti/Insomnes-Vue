// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthorBooksView from '@/views/AuthorBooksView.vue'
import AnthologiesView from '@/views/AnthologiesView.vue'

const routes = [
    {
        path: '/Inicio',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/Antologias',
        name: 'AnthologiesView',
        component: AnthologiesView
    },
    {
        path: '/Libros de Autor',
        name: 'AuthorBooksView',
        component: AuthorBooksView
    }
]


const router = createRouter({ history: createWebHistory(), routes })
export default router