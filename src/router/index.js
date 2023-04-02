// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthorBooksView from '@/views/AuthorBooksView.vue'
import AnthologiesView from '@/views/AnthologiesView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
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