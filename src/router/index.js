// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import AuthorBooks from '@/views/AuthorBooks.vue'
import Anthologies from '@/views/Anthologies.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Libros de autor',
        name: 'AuthorBooks',
        component: AuthorBooks
    },
    {
        path: '/Antologías',
        name: 'Anthologies',
        component: Anthologies
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router