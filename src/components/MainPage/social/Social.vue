<template>

    <section class="container">


        <div v-for="(Social,i) in Socials" :key="i">
            <a :href="Social.href" target="_blank">
                  <font-awesome-icon :icon="['fab', Social.icon]" style=" font-size: 4em;" />
            </a>
                  <strong>  {{Social.title}}</strong>
        </div>


    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    name:'SocialComponent',
    setup () {
      const Socials= ref([
        {href:"https://www.instagram.com/a2ztr.toptan/", icon: "instagram", title:"a2ztr.toptan"},
        {href:"https://www.facebook.com/a2ztrcom", icon: "facebook", title:"a2ztrcom"},
        {href:"https://www.tiktok.com/@a2ztr.toptan", icon: "tiktok", title:"a2ztr.toptan"},
    ] );

        return {Socials}
    }
}
</script>

<style scoped>
.container{
    display:flex;
    justify-content: space-around;
    padding:10% 20px;

}
.container div{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
svg{
    color:#3a3d45;
}


</style>