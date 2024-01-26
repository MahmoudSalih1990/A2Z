import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage/MainPage.vue';
import ContactUs from '../components/contact/ContactUs.vue'
import ProductsComponent from '@/components/products/Products.vue';
import SubCategoryComponent from '@/components/subcategory/subcategory.vue';
import AboutComponent from '@/components/about/About.vue';
const routes = [
  { path: '/', component: MainPage },
  { path: '/ContactUs', component:ContactUs},
  {
    path: '/products/:id',
    name: 'Products',
    component: ProductsComponent,
    props: true
  },
  {
    path:'/subcat/:id',
    name: 'SubCategoryComponent',
    component:SubCategoryComponent,
    props:true
  },
  {
    path:'/about',
    component:AboutComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
