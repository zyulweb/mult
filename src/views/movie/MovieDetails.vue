<template>
    <div class="movieDetails">    
        <div class="title"><span class="titleSpan">热门影片</span><router-link to='/'>查看全部></router-link></div>
        <div class="swipeCon" >
            <div class="imgDiv"><img :src="backgroundImage[index]" alt=""></div>
            <van-swipe :autoplay="0" :width="125"    :show-indicators="false" :loop="false"  @change="onChange"> 
                <div class="van-swipe__track">
                <van-swipe-item v-for="(item,index) of myList" :key="index" >
                    <img :src="item.images.small" :class="imgBorder==index ? 'active' : ''" >
                </van-swipe-item>
                </div>
            </van-swipe>
        </div>   
        <div style="width:100%;height:15px;background:#ddd;"></div>
        <div class="cinema">

        </div>
        <div class="info">
            <div v-for="(item,index) of info" :key="index">
                <div class="infoTitle">
                    <span class="nm">{{item.nm}}</span><span class="distance">距离{{item.distance}}</span>
                </div>
                <div class="addr">
                    {{item.addr}}
                </div>
                <div class="sellPrece">
                    <span class="monery">{{item.sellPrice}}元起</span>
                    <span>折扣卡</span>
                    <span>杜比全景声厅</span>
                    <van-tag type="danger">改签</van-tag>
                </div>
                <div class="showTimes">最近场次{{item.showTimes}}</div>
            </div>
        </div>          
    </div>
</template>
<script>
export default {
    data(){
        return{
            backgroundImage:[],
            myList:[],
            index:0,
            info:[],
            imgBorder:0
        }
    },
    methods:{
        loadMore(){
            var url = `/doubanapi/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10`;
            // var url = `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10`;
            this.axios.get(url).then((result)=>{
                 var newMyList = this.myList.concat(result.data.subjects)
                 this.myList = newMyList
                this.backgroundImage = newMyList.map(elem=>{
                    return elem.images.large
                })
   
            }).catch(err=>{
                console.log(err)
            })
        },
        loadInfo(){
            var url = "data/moviedetail.json";
            this.axios.get(url).then((res)=>{
               this.info = res.data.cinemas
            })
        },
        onChange(index){
            this.index = index
            this.imgBorder= index
        }
    },
    created(){
        this.loadMore()
        this.loadInfo()   
    }
}
</script>
<style scoped>
    .movieDetails{
        margin-top: 50px;
    }
    .title{
        display: flex;
        padding: 8px;
        justify-content: space-between;
        align-items: center;
    }
    .titleSpan{
        color: #000;
        font-size: 16px;
    } 
    .titleSpan+span{
        font-size: 13px;
        color:rgb(146, 146, 146)
    }
    .van-swipe-item img{
        width: 80px;
    }
    .van-swipe-item img.active{
        transform: scale(1.2);
        border: 2px solid #fff;
    }
    .van-swipe__track{
        margin-left: 125px;
        width: 1375px;
     }
    .swipeCon{
        position: relative;
        overflow: hidden;
    }
    .imgDiv>img{
        height: 180px;
        width:100%;
        filter: blur(5px);
    }
    .van-swipe{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        overflow: visible;
    }
    .info{
        margin: 0 10px;
        margin-top: 20px;
        margin-bottom: 60px;
        
    }
    .infoTitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info>div{
        text-align: left;
        border-bottom: 1px solid #ccc;
        margin-top: 10px;
    } 
     .nm{
        color: #000;
        font-size: 15px;
        font-weight: 800;
        margin-right: 10px;
    }
    .nm+span{
        color:rgb(146, 146, 146);
    }
    .addr{
        font-size: 15px;
        margin-top: 8px;
        line-height: 20px;
    }
    .distance{
        font-size: 13px;
    }
    .showTimes{
        margin-top: 8px;
        margin-bottom: 10px;
        color: rgb(155, 155, 155);
    }
    .sellPrece{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 6px;
    }
    .monery~span{
        margin-left: 10px;
        display: inline;
        font-size: 10px;
        padding: 1px;
    }
    .monery+span{
        border-radius: 2px;
        border:1px solid  red;
        color: red;
    }
    .monery+span+span{
        border-radius: 2px;
        border:1px solid  green;
        color: green;
    }
</style>


