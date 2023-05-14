// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookView from '@/views/BookView.vue'
import AuthorBooksView from '@/views/AuthorBooksView.vue'
import AnthologiesView from '@/views/AnthologiesView.vue'
import AdminView from '@/views/AdminView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/book/:path',
        name: 'book',
        component: BookView
    },
    {
        path: '/antologias',
        name: 'Anthologies',
        meta: { category: 'antologia' },
        component: AnthologiesView,
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: AdminView,
    },
    {
        path: '/libros_de_autor',
        name: 'AuthorBooks',
        meta: { category: 'autor' },        
        component: AuthorBooksView
    }
]


const router = createRouter({ history: createWebHistory(), routes })
export default router

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0) // Esto hace que la página se desplace hasta la parte superior de la página en cada cambio de ruta.
    next()
  })