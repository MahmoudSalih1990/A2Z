<template>
    <footer >
        <div class="footer-showroom">
            <div class="col-lg-6">
                <img :src="require('@/assets/images/A2ztrcom.png')" alt="" height="70" width="240" />
            </div>
        </div>    
        <div class="footer-social">
                <a href="https://wa.me/902125223892" target="_blank">
                    <img :src="require('@/assets/images/ezgif.com-gif-maker.gif')" alt="" />
                </a>
        </div>
            <div class="info">
                    <a href="https://zanobia.me/" target="_blank">
                        الشركة المبرمجة &nbsp; zanobia.me
                    </a>
            </div>

    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    setup() {
        return {};
    },
};
</script>

<style scoped>
footer{
   
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding:50px 20px;
    background: #f5f4ef;
    gap:20px;
}
.footer-social{
    display: flex;
    justify-content: center;
    border-top:1px solid #e0e0e0;
    padding:5% 2% 2% 2%;
}
.footer-social a{
    display: flex;
    justify-content: center;
}
.footer-social img{
     max-width: 45%;

}
.info a{
 font-weight: 400;
 font-size: 18px;
}
.info a:hover{
    color:rgb(0, 0, 0)  
}
@media (max-width: 1000px) {
    .footer-social img{
        max-width: 90%;
   
   } 
}
</style>
