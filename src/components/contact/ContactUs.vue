<template>
    <section class="container">
        <div class="banner">
            <img :src="require('@/assets/images/about.webp')" alt="A2Z " />
        </div>
        <div class="contacts">
            <div v-for="(contact, i) in Contacts" :key="i">
                <figure>
                    <font-awesome-icon :icon="contact.icon" style="font-size: 4em" />

                    <figcaption>
                        <strong class="title">{{ contact.title }}</strong>
                        <br />
                        <br />
                        <span><strong>{{ contact.d1 }}</strong>{{ contact.d2 }}</span><br />
                        <span><strong>{{ contact.d3 }}</strong> {{ contact.d4 }}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const Contacts = ref([
            {
                title: "العنوان",
                d1: "المكتب :",
                d2: "تركيا - اسطنبول - بيلكدوزو",
                d3: "المصنع :",
                d4: "تركيا - اسطنبول - أسنيورت",
                icon: "map-marker",
            },
            {
                title: "أرقام التواصل",
                d1: "واتساب :",
                d2: "00902125223892",
                d3: "اتصال :",
                d4: "00905524935992",
                icon: "phone",
            },
            {
                title: "ساعات العمل",
                d1: " الاثنين - الجمعة :",
                d2: " 8.30 صباحا - 5 مساء ",
                d3: "السبت :",
                d4: " 8.30 صباحا - 2.30 ظهرا",
                icon: "clock",
            },
        ]);

        return { Contacts };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 100px 0;
}

img {
    padding: 0 30px;
    margin: 20px 0;
    border-radius: 4%;
}

.contacts {
    display: flex;
    justify-content: space-around;
}

.contacts div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.title,
svg {
    width: 100%;
    text-align: center;
    display: block;
    padding: 10px 0;
}
</style>
