<template>
    <div class="list">
        <div class="nav">
            <p class="navP">大家正在关注</p>
            <ul  @click="goDetail">
                <li class="nav_img1 img">
                    <p>520海报</p>
                </li>
                <li class="nav_img2 img">
                    <p>拼接壁纸</p>
                </li>
                <li class="nav_img3 img">
                    <p>世界建筑</p>
                </li>
                <li class="nav_img4 img">
                    <p>小黄脸</p>
                </li>
                <li class="nav_img5 img">
                    <p>老爷车</p>
                </li>
                <li class="nav_img6 img">
                    <p>工作室</p>
                </li>
            </ul>
        </div>
        <div class="nav">
            <p class="navP">为您推荐</p>
        </div>
        <ul>
            <li v-for="(photo,index) of photoList" :key="index"  @click="goDetail">
                <div class="content">
                    <div class="left">
                        <img :src="photo.url" alt="">
                        <div class="info_top">
                            <p class="name">{{ photo.name }}</p>
                            <p class="num font">{{ photo.num }}  <span>{{ photo.fs }}</span></p>
                            <h4>{{photo.logo}}</h4>
                        </div>
                    </div>
                    <div class="right">
                        <img :src="photo.url2">
                    </div>  
                </div>
            </li>         
        </ul>
    
    </div>
</template>

<script>
    export default{
        data(){
            return{
                photoList:[]
            }
        },
        methods:{
            goDetail(){
                this.$router.push("photoDetail")
            }
        },
        mounted(){
            this.axios.get('data/photolist.json').then((res)=>{
            this.photoList = res.data.list;
        });
        }
    }
</script>

<style scoped>
    .list{
        margin:50px 0;
    }
    .nav>.navP{
        font-size: 15PX;
        padding:12px 0;
    }
    .nav p{
        font-size: 11px;
        color: #999999;
    }
    .nav>ul{
        display: flex;
        justify-content:  space-evenly;
        flex-wrap: wrap;
    }
    .nav ul li {
        width: 30%;
        height: 45px;
        margin: 4px 0 ;
        line-height: 45px;

    }
    .nav .img p{
        background-size: cover;
        color: #ffffff;
    }
    .nav .nav_img1 p{
        background-image: url(https://hbimg.huabanimg.com/23cdda6daf089130921d574f5183b8fbf331e47624711-aRB9xK_sq236bl4);
    }
    .nav .nav_img2 p{
        background-image: url(https://hbimg.huabanimg.com/ed7e19729c02ae303e385ff93c98a5de00124cc1178013-tje7GY_sq236bl4);
    }
    .nav .nav_img3 p{
        background-image: url(https://hbimg.huabanimg.com/001ffe7c7c092ec86322743834d9e3ef2867eff533d17-GvOXOk_sq236bl4);
    }
    .nav .nav_img4 p{
        background-image: url(https://hbimg.huabanimg.com/384f0d098bbb58a18b723993aeda05ff6538d25b2a857-bJknUw_sq236bl4);
    }
    .nav .nav_img5 p{
        background-image: url(https://hbimg.huabanimg.com/78688e38a45d2ec025ca3d286b4f4c39cb60d009251ff-nNqKc1_sq236bl4);
    }
    .nav .nav_img6 p{
        background-image: url(https://hbimg.huabanimg.com/50ea3e9101bcd90844e92b6638ab643c032e1e611af56-K0J88l_sq236bl4);
    }
    
    .content{
        display: flex;
        padding: 0 10px;
        margin-bottom: 15px;
        
    }
    .content .left{
        width: 35%;
        padding:0 10px 0 0; 
    }
    .content .left img{
        width: 100%;
    }
    .content .right{
        flex: 1;
    }
    .content .right img{
       width: 100%;
       padding: 0 10px 0 0 ;
    }
    .content .left .info_top{
       text-align: left;
       line-height: 25px;
       margin-top: 13px;

       
    }
    .content .left .info_top h4{
        color: rgb(211,211,211);
    }
    .content .left .font{
        color: #999999;
    }
    
    .name{
     font-weight: bolder;
    }
    .num{
        font-size: 12px;
        font-weight: bold;
    }
</style>