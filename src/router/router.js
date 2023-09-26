import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import AboutView from '../views/AboutView.vue'; 
import ContactView from '../views/ContactView.vue'; 
import PortfolioView from '../views/PortfolioView.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
