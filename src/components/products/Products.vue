<template>
  <section class="page">
    <div id="products">
      <div v-for="pro in product" :key="pro.id" class="product">
            <div>
              <a href="#">
                <img :src="pro.mainImagePath" alt="" />
              </a>
            </div>
            <div>
              <h2>
                <a href="#">
                  {{ pro.code }}
                </a>
              </h2>
            </div>
      </div>
    </div>
    <div class="pagination">
      <ul>
        <li class="page-item">
          <a @click="nextPage" class="page-link"> + </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
export default {
  name: "ProductsComonent",

  setup() {
    const route = useRoute();
    const product = ref([]);
    let pageNumber = ref(1);

    const categoryId = ref(route.params.id);

    const fetchProducts = async () => {
      const Url =
        "https://panel.a2ztr.com/api/productapi/getproductsbysubcategorypagination?subCategoryId=" +
        categoryId.value +
        "&pageNumber=" +
        pageNumber.value +
        "&_pageSize=15&pageSize=15";
      const response = await fetch(Url);
      const data = await response.json();
      product.value.push(...data.data);
      pageNumber.value++;
    };
    const nextPage = async () => {
      fetchProducts();
    };
    watch(
      () => route.params.id,
      async (newId, oldId) => {
        if (newId !== oldId) {
          categoryId.value = newId;
          pageNumber.value = 1;
          product.value = [];
          fetchProducts();
        }
      }
    );
    onMounted(async () => {
      await fetchProducts();
    });

    return { product, nextPage };
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
}

#products {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 50px;
}

.product {
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border: 1px solid #f5f4ef;
  border-radius: 8px;
  min-width: 30%;
  padding: 10px;
  display:flex;
  flex-direction :column;
  justify-content:center;
}
.product img{
max-width:400px;
width:100%;
}
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px;
}

.pagination .page-item {
  box-shadow: 0 2px 30px rgba(10, 9, 9, 0.352);
  border-radius: 50%;
  border: 1px solid #f5f4ef;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 40px;
  transition: all 0.3s ease;
  background-color: #f5f4ef;
}

.pagination .page-item:hover {
  transform: scale(1.1);
  background-color: #0e0e0e;
}

h2 a {
  font-size: 20px;
  font-weight: 600;
  padding: 5px;
}</style>
