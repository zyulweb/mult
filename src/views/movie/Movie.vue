<template>
    <div>   
        <my-header style="background:rgb(229,72,71);">
            <span slot="title">Movie</span>
        </my-header>
        <keep-alive>   <!--路由缓存-->
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <my-foot style="background:rgb(229,72,71)"></my-foot>
    </div>
</template>
<script>

export default {
    data(){
        return{
          
        }
    },
   
}
</script>

<style scoped>

</style>

