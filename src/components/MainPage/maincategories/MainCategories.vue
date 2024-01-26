<template>
    <div class="maincat">
        <div v-for="cat in Categories" :key="cat.id" class="cat">
            <router-link :to="{ name: 'SubCategoryComponent', params: { id: cat.id } }">
                <figure>
                    <img :src="cat.imagePath" alt="" />
                    <figcaption>
                        <strong> {{ cat.name }} </strong>
                    </figcaption>
                </figure>
            </router-link>
        </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name: "MainCategoriesComponent",
    setup() {
        const store = useStore();
        const Categories = computed(() => store.state.categories);

        onMounted(async () => {
            await store.dispatch("fetchCategories");
        });

        return { Categories };
    },
};
</script>

<style scoped>
.maincat {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 20px;
}

.cat {
    width: 30%;
}

.cat a {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
}

.cat a img {
    width: 100px;
    height:100px;
    border-radius: 50%;
}
</style>
