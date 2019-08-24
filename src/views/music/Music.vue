<template>
    <div>
        <my-header style="background:rgb(0,150,136);">
             <span slot="title">Music</span>
        </my-header>
        <keep-alive>   <!--路由缓存-->
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <my-foot style="background:rgb(0,150,136);"></my-foot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>

