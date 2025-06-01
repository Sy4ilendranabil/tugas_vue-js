import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import ServicesView from '@/views/ServicesView.vue';
// import SiswaIndex from '@/views/siswa/indexVue.vue'; // Sesuaikan nama file
import SiswaCreate from '@/views/siswa/createVue.vue'; // Sesuaikan nama file
import SiswaEdit from '@/views/siswa/editVue.vue';   // Sesuaikan nama file

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/About',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/Services',
      name: 'Services',
      component: ServicesView,
    },
    // {
    //   path: '/siswa',
    //   name: 'siswa.index',
    //   component: SiswaIndex,
    // },
    {
      path: '/siswa/create',
      name: 'siswa.create',
      component: SiswaCreate,
    },
    {
      path: '/siswa/edit/:id',
      name: 'siswa.edit',
      component: SiswaEdit,
      props: true,
    },
  ],
});

export default router;
