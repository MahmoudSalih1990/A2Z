<template>
    <section class="about">
        <header class="container">
            <div v-for="(data, i) in Data" :key="i" class="data">
                <strong v-if="i === 0 || i === 6">{{ data }}</strong>
                <p v-else-if="i === 1">{{ data }}</p>
                <li v-else>{{ data }}</li>
            </div>
        </header>

        <div class="image">
            <img :src="require('@/assets/images/about.webp')" alt="Alternate Text" />
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutComponent",
    setup() {
        const Data = [
            "شركة A2ZTR للتجارة نعمل في تركيا – إسطنبول",
            "نوفر منتجات متعددة للمبيع بالجملة",
            "لوحات خشبية مطبوعة",
            "ساعات خشبية مطبوعة",
            "أكواب مطبوعة",
            "أقمشة مطبوعة ( ستائر - أغطية وسائد - أغطية طاولات - لوحات جدارية - ملابس - موكيت )",
            "اسم الشركة (A2ZTR IÇ VE DIS TICARET LIMITED SIRKETI)",
        ];
        return { Data };
    },
};
</script>

<style scoped>
.about {
    padding: 100px 20px 30px;
}

.data {
    padding: 10px;
}

.data li {
    list-style-type: disc;
    margin-right: 40px;
}

.image {
    padding: 40px 20px;
}

img {
    border-radius: 20px;
}</style>
