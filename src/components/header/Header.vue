<template>
  <header :class="{ sticky: isSticky, 'bg-white': isSticky }">
    <nav>
      <ul v-if="!isMobileView" class="MainMenu">
        <li>
          <a href="/">
            <img :src="require('@/assets/images/A2ztrcom.png')" href="#" alt="A2ZTR" class="logo" />
          </a>
        </li>
        <li v-for="(link, i) in links" :key="link.to" :class="link.class">
          <router-link :to="link.path">{{ link.to }}
            <font-awesome-icon v-if="i === 1" icon="angle-down" />
          </router-link>
          <div v-if="i === 1">
            <Transition name="slide">
              <ul v-if="isProductsMenuOpen" class="ProductsMenu">
                <li v-for="(subcat, i) in subcats" :key="i">
                  <router-link :to="{ name: 'Products', params: { id: subcat.id } }">
                    {{ subcat.name }}
                  </router-link>
                </li>
              </ul>
            </Transition>
          </div>
        </li>
      </ul>
      <div v-if="isMobileView" class="MobileView">
        <li @click="toggleMobileMenu" :class="{ mobileViewToggleButton: true, active: isMobileMenuOpen }" role="button"
          tabindex="0">
          <font-awesome-icon icon="bars" />
        </li>
        <transition name="slide">
          <ul v-if="isMobileMenuOpen" class="MobileMainMenu">
            <li v-for="(link, i) in links" :key="link.to" :class="link.class">
              <router-link :to="link.path">{{ link.to }}
                <font-awesome-icon v-if="i === 1" icon="angle-down" style="font-size: 1em" />
              </router-link>
              <div v-if="i === 1">
                <Transition name="slide2">
                  <ul v-if="isProductsMenuOpen" class="ProductsMenu">
                    <li v-for="(subcat, i) in subcats" :key="i">
                      <a :href="subcat.id">
                        {{ subcat.name }}
                      </a>
                    </li>
                  </ul>
                </Transition>
              </div>
            </li>
          </ul>
        </transition>
        <a href="/" style="width: fit-content">
          <img :src="require('@/assets/images/A2ztrcomCut.png')" alt="A2ZTR" class="Mlogo" /></a>
      </div>
    </nav>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent } from "vue";
import { ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "HeaderComponent",

  setup() {
    const store = useStore();
    const isMobileView = ref(window.innerWidth <= 1000);
    const isMobileMenuOpen = ref(false);
    const isProductsMenuOpen = ref(false);
    const isSticky = ref(false);
    const MMenuhight = ref("fit-content");
    const subcats = computed(() => store.state.subcats);
    const toggleProductsMenu = (event) => {
      if (event.target.closest(".PL")) {
        isProductsMenuOpen.value = !isProductsMenuOpen.value;
        MMenuhight.value = isProductsMenuOpen.value ? "90vh" : "fit-content";
      } else {
        isProductsMenuOpen.value = false;
        MMenuhight.value = "fit-content";
      }
    };
    const links = ref([
      { to: "الرئيسية", path: "/" },
      { to: "تسوق", path: "", click: toggleProductsMenu, class: "PL" },
      { to: "حول", path: "/about" },
      { to: "اتصل بنا", path: "/ContactUs" },
    ]);
    const checkScreenWidth = () => {
      isMobileView.value = window.innerWidth <= 1000;
    };
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };
    const checkScroll = () => {
      isSticky.value = window.scrollY > 0;
    };
    onMounted(() => {
      window.addEventListener("resize", checkScreenWidth);
      window.addEventListener("scroll", checkScroll);
      document.addEventListener("click", toggleProductsMenu);
      store.dispatch("fetchSubCategories");
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkScreenWidth);
      window.removeEventListener("scroll", checkScroll);
      document.removeEventListener("click", toggleProductsMenu);
    });
    return {
      links,
      isProductsMenuOpen,
      isSticky,
      toggleProductsMenu,
      MMenuhight,
      isMobileView,
      isMobileMenuOpen,
      toggleMobileMenu,
      subcats,
    };
  },
  components: { FontAwesomeIcon },
});
</script>

<style scoped>
header {
  position: fixed;
  z-index: 10000;

  background-color: azure;
}

header.sticky {
  top: 0;
  box-shadow: 0px -4px 8px #000000;
  border-bottom: 1px solid #f4f4f4;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 150px;
  height: 34px;
}

.MainMenu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  height: 10vh;
}

.ProductsMenu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10vh;
  background-color: azure;
  padding-top: 20px;
  overflow-y: auto;
  height: 90vh;
}

.ProductsMenu li {
  padding: 6px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right,
      transparent,
      rgba(0, 0, 0, 0.5),
      transparent);
  border-image-slice: 1;
}

.svg-inline--fa {
  padding-right: 5px;
  vertical-align: -webkit-baseline-middle;
}

@media (max-width: 1000px) {
  .MobileView {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
  }

  .Mlogo {
    width: 130px;
    height: 55px;
    padding: 2px 10px;
  }

  .mobileViewToggleButton {
    border: 5px solid;
    border-radius: 15px;
    transform: skewx(-30deg) scale(0.7);
    width: 80px;
    height: 50px;
    margin-right: 20px;
    padding-right: 10px;
    text-align: center;
    cursor: pointer;
  }

  .mobileViewToggleButton i {
    transform: skewx(30deg);
  }

  svg {
    font-size: 40px;
    font-weight: 700;
    line-height: 42px;
  }

  .MobileView .MobileMainMenu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 10vh;
    right: 0;
    width: 100vw;
    background: azure;
    height: v-bind(MMenuhight);
    overflow-y: auto;
  }

  .MobileView .MobileMainMenu li {
    margin-right: 50px;
    padding: 15px 5px 15px 5px;
    width: calc(100% - 50px);
  }

  .PL .ProductsMenu {
    background: inherit;
    position: static;
    overflow-y: auto;
    height: auto;
    padding-top: 0;
  }

  .slide-leave-active,
  .slide-enter-active,
  .slide2-leave-active,
  .slide2-enter-active {
    transition: all 1.5s ease;
  }

  .slide-leave-to,
  .slide-enter-from,
  .slide2-leave-to,
  .slide2-enter-from {
    max-height: 0;
  }

  .slide-leave-from,
  .slide-enter-to,
  .slide2-enter-to,
  .slide2-leave-from {
    max-height: 90vh;
  }
}
</style>
