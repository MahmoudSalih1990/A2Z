<template>
<div>
<carousel-component/>
<main-mategories-momponent/>
<categories-component/>
<social-component/>

</div>
</template>

<script>
    import CarouselComponent from './slider/Carousel.vue';
    import SocialComponent from './social/Social.vue';
    import CategoriesComponent from './categories/Categories'
    import MainCategoriesComponent from './maincategories/MainCategories'
export default {
    name:'MainPageComponent',
    components: {
        'carousel-component':CarouselComponent,
        'categories-component':CategoriesComponent,
        'social-component':SocialComponent,
        'main-mategories-momponent':MainCategoriesComponent
  },
}
</script>

<style  scoped>

</style>