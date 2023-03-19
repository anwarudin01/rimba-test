import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/createcustomer',
    name: 'create.customer',
    component: () => import('../views/createCustomer.vue'),
  },
  {
    path: '/createitem',
    name: 'create.item',
    component: () => import('../views/createItem.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
