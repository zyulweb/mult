<template>
    <div class="foot" >
        <div>
            <router-link to="/movie" >电影</router-link>
        </div>
        <div>
            <router-link to="/music" >音乐</router-link>
        </div>
        <div>
            <router-link to="/book" >书籍</router-link>
        </div>
        <div>
            <router-link to="/photo" >图片</router-link> 
        </div> 
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
    .foot{
        display: flex;
        justify-content: space-around;
        position: fixed;;
        bottom: 0;
        height:50px;
        width: 100%;
        background: #cccccc;
        
    }
    .foot>div{
        line-height: 50px;
    }
    .foot a{
        color: rgb(209, 209, 209);
        font-weight: 600;
    }
    .foot a.router-link-active{  
        color:#ffffff;
        font-size: larger;
        font-weight: bold;
    }
</style>


