<template>
    <div class="movieDetail" >
          <!-- 预告片 -->
        <div class="video">
            <video :src="blooper_urls[i]" controls :poster="imgs[i]"></video>
        </div>
        <!-- 精彩花絮 -->
        <div class="title" >
            <span style="width:200px">{{data.title}}的精彩花絮 · · · </span>
            <van-button plain type="danger" round="" size="small" @click="goBuy()">附近影院信息</van-button>
        </div>
        <div class="container">
                <span  v-for="(item,index) of trailers" :key="index" @click="changeVideo(index)">
                    <img :src="item.small" :class="i==index ? 'active' : ''">
                </span>
        </div>
        <hr style="height:1px;border: none;border-top:1px solid #ddd;margin:10px 10px;"/>
        <!-- 详情介绍 -->
        <div class="title">{{data.title}}详情介绍 · · · </div>
        <div class="summary">
            {{data.summary}}
        </div>
        <hr style="height:1px;border: none;border-top:1px solid #ddd;margin:10px 10px;"/>
        <!-- 精彩短评 -->
        <div class="comment">
            <div class="commentTitle">
                <span class="titleSpan">{{data.title}}的短评 · · · </span>
                <span>( 全部 {{data.comments_count}} 条 )</span>
            </div>
            <div style="font-size:13px;margin:5px 0;">
                <span class="hot">热门 /</span><span> 最新 /</span><span> 好友</span>
            </div>
            <div class="comments_count">
                <ul>
                    <li v-for="(item,index) of list" :key="index" class="li" >
                        <hr style="height:1px;border: none;border-top:1px solid #ddd;margin:10px 0;"/>
                        <div style="margin-bottom:5px;">
                            <span class="name">{{item.author.name}}</span>
                            <span style="margin-right:5px">看过</span>
                            <van-rate v-model="item.rating.value" :size="10" void-color="#ddd" void-icon="star" />
                            <span>{{formatDate}}</span>
                        </div>
                        <p class="liP">{{item.summary}}</p>
                    </li>
                </ul>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
    data(){
        return{
             i:0,
             info:[],
             images:"",
             data:"",
             blooper_urls:[],
             trailers:[],
             popular_reviews:[],
             list:[], 
             imgs:[]    
        }
    },
    methods:{
        getImg(){
            var imgs = this.trailers.map((elem,index)=>{
                return elem.medium
            })
            this.imgs = imgs
        },
        load(){
            var id = this.$route.query.id
            var url = `/doubanapi/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
            // var url = `http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
            this.axios.get(url).then((result)=>{
                this.images = result.data.images;
                this.data = result.data;
                this.blooper_urls = result.data.blooper_urls;
                this.trailers = result.data.trailers
                this.list = result.data.popular_reviews
                this.getImg()
            }).catch((err)=>{
                console.log(err)
            })
           
        },
        
        goBuy(){
            this.$router.push('movieDetails')
        },
        changeVideo(e) {
            this.i = e
        },
    },
    computed:{
        formatDate(){
            var dates = new Date();
            var year = dates.getFullYear();
            var month = dates.getMonth()+1;
            var date = dates.getDate();
            return year+"年"+month+'月'+date+"日"
        }
    },
    created(){
        this.load()
       
        
    }
}
</script>
<style scoped>
    .movieDetail{
        margin-top: 50px;
    }
    .rating+span{
        font-weight: 600;
        color: #fff;
    }
    .video video{
        width: 100%;
        height: 200px;; 
    }
    .container{
        display: flex;
        justify-content: space-around;
        padding: 0 10px;
    }
    .container>span>img{
        width:70px;

    }
    .container>span>img.active{
        transform: scale(1.15);  
        box-shadow: 1px 3px 5px  rgb(0, 0, 0);    
    }
    .title{
        margin-top: 10px;
        text-align: start;
        margin-left: 10px;
        margin-right: 20px;
        font-size: 13px;
        color:#e54847;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title~div{
        margin-top: 6px;
    }
    .summary{
        text-indent:2em;
        font-size: 11px;
        line-height: 16px;
        text-align: left;
        margin:  0 10px;
    }
    .comment{
        text-align: left;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 60px;
    }
    .titleSpan{
        color: #e54847;
        font-size: 13px;
    }
    .titleSpan+span{
        font-size: 11px;
        color: #37a;
    }
    .hot{
        font-size: 11px;
    }
    .hot~span{
        font-size: 11px;
        color: #37a;
    }
    .li{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
     
         word-wrap: break-word;
        /* overflow: hidden; */
    }
    .li>div{
        display: flex;
        font-size: 11px;
        align-items: center;
    }
    .name{
        color: #37a;
        margin-right: 5px;
    }
    .van-rate+span{
        color: rgb(141, 141, 141);
        margin-left: 10px;
    }
    .liP{
        font-size:11px;
        line-height: 16px;
        text-indent:2em;
        width: 100%;
    }
</style>


