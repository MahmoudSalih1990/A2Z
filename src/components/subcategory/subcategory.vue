<template>
    <div class="container">
        <div v-for="(cat, i) in subcategories" :key="i" class="product">
            <router-link :to="{ name: 'Products', params: { id: cat.id } }">
                <img :src="cat.imagePath" alt="" />
                <strong>{{ cat.name }}</strong>
            </router-link>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export default {
    name: "SubCategoryComponent",
    setup() {
        const subcategories = ref([]);
        const route = useRoute();
        const categoryId = ref(route.params.id);
        const displaySubCats = async () => {
            const Url =
                "https://panel.a2ztr.com/api/types/getsubcategoriesbycategoryid?categoryId=" +
                categoryId.value;
            const result = await fetch(Url);
            const data = await result.json();
            subcategories.value = data;
        };
        onMounted(() => {
            displaySubCats();
        });
        return { subcategories };
    },
};
</script>

<style scoped>
.container {
    padding: 200px 20px 30px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.product {
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 1px solid #f5f4ef;
    border-radius: 8px;
    width: 30%;
    max-width: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1000px) {
    .product {
        width: 45%;
    }
}
</style>
