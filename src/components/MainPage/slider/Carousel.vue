<template>
  <vueper-slides fade transition-speed="2000" :bullets="false" autoplay :touchable="false" :infinite="true"
    :slide-content-outside="contentPosition" :duration=3000 :breakpoints="breakpoints" fixed-height='55vw' lazy
    lazy-load-on-drag>
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.background.img" :class="slide.background.class">
      <template #loader>
        <font-awesome-icon icon="spinner" spin />
        <span>Loading...</span>
      </template>

    </vueper-slide>
  </vueper-slides>
</template>
<script>
import { defineComponent } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default defineComponent({
  name: 'CarouselComponent',
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,

    breakpoints: {
      1040: {
        fixedHeight: '70vw',
        arrows: false,
      },
      790: {
        fixedHeight: '90vw',
        arrows: false,
      },
      480: {
        fixedHeight: '150vw',
        arrows: false,
      },

    },
    slides: [
      {
        background: { img: require('@/assets/images/slide-1.webp'), class: "s1" },

      },
      {
        background: { img: require('@/assets/images/slide-2.webp'), class: "s2" },

      },
      {
        background: { img: require('@/assets/images/slide-3.webp'), class: "s3" },

      }
    ]
  }),

});
</script>
<style scoped>
.vueperslide {
  display: inline-block;

}

.vueperslide--active {
  display: block;

}
</style>
