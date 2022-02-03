import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
/*   {
    path: '/',
    name: 'Home',
    component: Home
  }, */
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import('../views/CreationCompte.vue')
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import('../views/Connection.vue')
  },
  {
    path: '/',
    name: 'Conversations',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/deconnection',
    name: 'Deconnection',
    component: () => import('../views/Deconnection.vue')
  },
  {
    path: '/creer-conversation',
    name: 'CreerConversation',
    component: () => import('../views/CreerConversation.vue')
  },
  {
    path: '/conversation/:id',
    name: 'Conversation',
    component: () => import('../views/Conversation.vue')
  },
  {
    path: '/membres',
    name: 'Members',
    component: () => import('../views/Members.vue')
  },
  {
    path: '/membre/:idMembre',
    name: 'Member',
    component: () => import('../views/Member.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes
})

export default router
