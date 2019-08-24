<template>
        <ul class="movieList" >  
            <li v-for="(list,index) of myList" :key="index" class="movie" @click="goDetail(list.id)" >
                <img :src="imgs[index]" class="listImg">
                <div class="rightInfo">
                    <p class="title">{{list.title}}</p>
                    <p class="rating">评分: {{rating[index]}}</p>
                    <p class="casts"><span>主演: </span><span v-for="(item,index) of list.casts" :key="index">{{item.name+' '}}</span></p>
                    <p class="genres">类型: <span v-for="(item,index) of list.genres" :key="index" class="genresChildrnm">{{item}} </span></p>
                </div>
            </li>
        </ul>
</template>

<script>
export default {
    data(){
        return{
            myList:[],
            genres:[],
            imgs:[],
            rating:[]
        }
    },
    methods:{
        goDetail(id){
            this.$router.push({path:'movieDetail',query:{id:id}})
        },
        
        load(){
             var url = `/doubanapi/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.myList.length}&count=10`;
        //    var url =  `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.myList.length}&count=10`;
            this.axios.get(url).then((result)=>{
                this.myList = this.myList.concat(result.data.subjects)
                this.getArr()
            }).catch(err=>{
                console.log(err)
            })
        },
        getArr(){
            var imgs = this.myList.map((elem,i,arr)=>{
              return elem.images.large;
            });
            this.imgs = imgs;
            var rating = this.myList.map((elem,i,arr)=>{
                return elem.rating.average
            })
            this.rating = rating
        },
        handleScroll(){
            
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var windowHight = document.documentElement.clientHeight || document.body.clientHeight;
            var scrollHigth = document.documentElement.scrollHeight || document.body.scrollHeight;
             var scrollHigth1 = scrollHigth -1
            if(scrollTop+windowHight>scrollHigth1 ||scrollTop+windowHight==scrollHigth){
                 this.load()
            }
        }
    },
    created(){
        this.load()
         window.addEventListener('scroll', this.handleScroll,false)
    },
    mounted(){
      
    }
    // beforeRouteLeave(to, from, next) {   
    //     from.meta.keepAlive = true; 
    //     next();
    // },

}
</script>

<style scoped>
    .movieList{
        
        margin-top: 50px;
        padding: 8px;
        margin-bottom: 50px;
    }
    .movie{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 8px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;

    }
    .listImg{
        display: block;
        height: 110px;
        width: 80px;
        margin-right:15px;
    }
    .rightInfo{
        flex: 1;
        text-align: left;
        font-size: 15px;
    }
    .title{
        font-size: 18px;
        font-family: 'Microsoft YaHei';
        font-weight: 800;
        margin-bottom: 8px; 
    }
    .rating{
        color:#ffac2d;
        margin-bottom: 7px; 
    }
    .casts{
        margin-bottom: 8px;
    }
    .casts>span{
        line-height: 20px;
    }
    .genresChildren:not(:nth-child(3))::after{
        content:"/";
    }
</style>

