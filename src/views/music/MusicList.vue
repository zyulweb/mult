<template>
    <div style="margin:50px 0;">
        <!-- 页头及轮播图 -->
        <div class="imgDiv">
            <img :src="img" alt="">
            <div class="swipeDiv" v-if="img">
                <div>
                    <van-swipe :autoplay="3000" :show-indicators="false">
                        <van-swipe-item v-for="(item,index) of myList" :key="index"><img :src="item.pic_big" alt=""></van-swipe-item>
                    </van-swipe>
                </div>
            </div>
        </div>
        <!-- 歌曲列表 -->
        <div>
            
            <ul class="ul">
                <li v-for="(item,index) of myList" :key="index" @click="goPlay(item.song_id)"> 
                    <div class="leftDiv">
                        <div class="leftImg"><img :src="item.pic_small"></div>
                        <div>
                            <p class="firstP">{{item.title}}</p>
                            <p>{{item.author}}</p>
                         
                        </div>
                    </div>
                    <div>
                        <img :src="palyImg" class="rightImg"  />
                        <img src="../../assets/music1.png" class="rightImg"/>
                    </div>
                    
                </li>
            </ul>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            palyImg:require('../../assets/music.png'),
            myList:[],
            img:"",
            errimg:require('../../assets/err.jpg'),
        }
    },
    methods:{
        loadImg(){
            if(this.img==""){
                this.img = this.errimg
            }
        },
        goPlay(song_id){
            this.$router.push({path:'musicPlay',query:{song_id:song_id}})
        },
        load(){
            var type =this.$route.query.type
         var url = `/baiduapi/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=20&offset=${this.myList.length}`;
        //var url = `http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=20&offset=0`;
        this.axios.get(url).then(res=>{
            this.img = res.data.billboard.pic_s444;
            this.loadImg()
            this.myList = res.data.song_list
        }).catch(err=>{
            console.log(err)
        })
        }
    },
    created(){
        this.load()
    }
}
</script>
<style scoped>
    .imgDiv{
        position: relative;
        margin-bottom: 10px;
        height: 160px;
        width: 100%;
    }
    .imgDiv img{
        height: 160px;
        width: 100%;
    }
    .swipeDiv{
        position: absolute;
        top:50%;
        right:10%;
        transform: translateY(-50%); 

    }
    .swipeDiv>div{
        height: 100px;
        width:100px;
        box-shadow: 1px 1px 5px#000000;
        overflow: hidden;
    }
    .swipeDiv>div img{
        width: 100%;
        height: 100%;
    }
    .ul li{
        display: flex;
        margin: 10px;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(243, 243, 243);
    }
    .leftImg img{
        width:50px;
        height: 50px;
    }
    .leftImg+div{
        font-size: 11px;
        text-align: left;
        margin-left: 10px;
        line-height: 18px;  
       
    }
    .rightImg{
        width:20px;
        margin-left: 10px;
    }
    .leftDiv{
        display: flex;
        align-items: center;
        width: 70%;
    }
</style>

