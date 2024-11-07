import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLayout from '../views/UserLayoutView.vue'
import UserProfiles from '../views/UserProfilesView.vue'
import UserOrders from '../views/UserOrdersView.vue'
import UsersList from '../views/UsersView.vue'
import UserWelcome from '../views/UserWelcomeView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',    // ruta nouă pentru lista de utilizatori
    name: 'users',
    component: UsersList
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserLayout,
    children: [
      {
        path: '',  // ruta implicită
        component: UserWelcome
      },
      {
        path: 'profiles',
        name: 'profiles',
        component: UserProfiles
      },
      {
        path: 'orders',
        name: 'orders',
        component: UserOrders
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router