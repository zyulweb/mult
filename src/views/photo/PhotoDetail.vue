<template>
    <div class="detail">
        <div class="content" v-for="(item,index) of imgs" :key="index" >
            <img :src="item" @click="look(item)" /> 
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgs:[],
        }
    },
    methods:{
        look(item){
            this.$router.push({path:'photoLook',query:{url:item}})
        },
        loadmore(){
            var  url = "https://api.ooopn.com/image/sogou/api.php?type=json"
            this.axios.get(url).then(res=>{
                this.imgs = this.imgs.concat(res.data.imgurl) 
            })
        },
        handleScroll(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var windowHight = document.documentElement.clientHeight || document.body.clientHeight;
            var scrollHigth = document.documentElement.scrollHeight || document.body.scrollHeight;
             var scrollHigth1 = scrollHigth -1
            if(scrollTop+windowHight>scrollHigth1 ||scrollTop+windowHight==scrollHigth){
                 this.loadmore()
            }
        }
    },
 
    created(){
        this.loadmore()
    },
    beforeMount(){
         this.loadmore()
    },
    mounted(){
         this.loadmore()
         window.addEventListener('scroll', this.handleScroll,false)
    }


}
</script>
<style scoped>
    .detail{
        padding: 60px 10px;
    }
    .content{
        position: relative;
    }
    .content>img{
    width: 100%; 
    padding-bottom: 5px; 
    }
    .content p{
        position: absolute;
        right:10%;
        bottom: 12%;
        color: #fff;
        background-color: rgba(32, 32, 32, 0.5);
        padding: 8px;
        border-radius: 15px;
        font-size: 10px;
    }
</style>
    