<template>
  <section class="Categories">
    <div v-for="subcat in subcats" :key="subcat.id" class="Category">
      <div>
        <article>
          <div>
            <div>
              <router-link :to="{ name: 'Products', params: { id: subcat.id } }">
                <img :src="subcat.imagePath" alt="" />
              </router-link>
            </div>
            <div class="caption">
              <h2>
                <router-link :to="{ name: 'Products', params: { id: subcat.id } }">
                  {{ subcat.name }}
                </router-link>
              </h2>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "CategoriesComponent",
  setup() {
    const store = useStore();
    const subcats = computed(() => store.state.subcats);

    onMounted(async () => {
      await store.dispatch("fetchSubCategories");
    });

    return { subcats };
  },
};
</script>
<style scoped>
.Categories {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 100px;
  box-sizing: border-box;
}

.Category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border: 1px solid #f5f4ef;
  border-radius: 8px;
  flex-shrink: 1;
  flex-wrap: nowrap;
}

.Category .caption {
  padding: 20px;
}

.caption a {
  color: #3a3d45;
  font-size: 20px;
  font-weight: 600;
  text-overflow: ellipsis;
}

@media (max-width: 1000px) {
  .Categories {
    grid-template-columns: repeat(1, 1fr);
    padding: 100px 15%;
  }
}
</style>
