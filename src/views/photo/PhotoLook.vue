<template>
    <div  class="look"  :style="{'height':height+'px'}">
        <div class="content" >
            <img :src="url"  >
        </div>
        
    </div>
</template>
<script>
import html2canvas from 'html2canvas'
export default {
    data(){
        return{
            url:this.$route.query.url,
            with:"",
            height:"",
        }
    },
    methods:{
        getHight(){
            var windowHight = document.documentElement.clientHeight || document.body.clientHeight;
            var windowWidth = document.documentElement.clientWidth  || document.body.clientWidth;
            this.width = windowWidth
            this.height = windowHight
        },

    },
    components: {
　　    html2canvas
    },
    created(){

    },
    mounted(){
        this.getHight()
    }
}
</script>

<style scoped>

    .look{
        background-color: black;
        position: relative;
        
    }
    .content{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
    }
    .content img{
        width: 100%;
    }
</style>

