<template>
    <div>   
        <my-header style="background:rgb(51,133,255);">
             <span slot="title">Photo</span>
        </my-header>
        <keep-alive>   <!--路由缓存-->
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <my-foot style="background:rgb(51,133,255)"></my-foot>
    </div>
</template>
<script>
export default {
    
}
</script>

