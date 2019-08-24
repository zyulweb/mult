<template>
    <div class="header" >
        <button  class="home" @click="goHome" >首页</button>
        <!-- 设置一个插槽 -->
        <h1 class="title">
            <slot name="title"></slot>   
        </h1>
        
    </div>
    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goHome(){
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
    .header{
        color :#fff;
        height:50px;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 999999;
    }
    .home{
        position: absolute;
        top:50%;
        left: 2%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        z-index: 999999;
    }
    .title{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999999;
    }
</style>


