import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

import Transaksi from '../views/transaksi/Transaksi.vue'
import TransaksiCreate from '../views/transaksi/TransaksiCreate.vue'
import TransaksiEdit from '../views/transaksi/TransaksiEdit.vue'

import Kegiatan from '../views/kegiatan/Kegiatan.vue'
import KegiatanCreate from '../views/kegiatan/KegiatanCreate.vue'
import KegiatanEdit from '../views/kegiatan/KegiatanEdit.vue'

import Pengumuman from '../views/pengumuman/Pengumuman.vue'
import PengumumanCreate from '../views/pengumuman/PengumumanCreate.vue'
import PengumumanEdit from '../views/pengumuman/PengumumanEdit.vue'

import Contact from '../views/contact/Contact.vue'
import ContactCreate from '../views/contact/ContactCreate.vue'
import ContactEdit from '../views/contact/ContactEdit.vue'





const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }

  //kegiatan
  {
    path: '/transaksi',
    name: 'transaksi.index',
    component: Transaksi
  },
  {
    path: '/transaksi/create',
    name: 'transaksi.create',
    component: TransaksiCreate
  },
  {
    path: '/transaksi/edit',
    name: 'transaksi.edit',
    component: TransaksiEdit
  },

  //kegiatan
  {
    path: '/kegiatan',
    name: 'kegiatan.index',
    component: Kegiatan
  },
  {
    path: '/kegiatan/create',
    name: 'kegiatan.create',
    component: KegiatanCreate
  },
  {
    path: '/kegiatan/edit',
    name: 'kegiatan.edit',
    component: KegiatanEdit
  },

  //pengumuman

  {
    path: '/pengumuman',
    name: 'pengumuman.index',
    component: Pengumuman
  },
  {
    path: '/pengumuman/create',
    name: 'pengumuman.create',
    component: PengumumanCreate
  },
  {
    path: '/pengumuman/edit',
    name: 'pengumuman.edit',
    component: PengumumanEdit
  },

  //contact

  {
    path: '/contact',
    name: 'contact.index',
    component: Contact
  },
  {
    path: '/contact/create',
    name: 'contact.create',
    component: ContactCreate
  },
  {
    path: '/contact/edit',
    name: 'contact.edit',
    component: ContactEdit
  },

  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
