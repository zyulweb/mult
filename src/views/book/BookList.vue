<template>
    <div class="book">
            <van-swipe :autoplay="3000" indicator-color="white" class="my-swipe">
                <van-swipe-item class="slide1"></van-swipe-item>
                <van-swipe-item class="slide2"></van-swipe-item>
                <van-swipe-item class="slide3"></van-swipe-item>
            </van-swipe>

            <div class="nav">
                <h3>活动</h3>
            </div>
            <div class="center"  @click="goDeatil">
                <div class="content " >
                    <div class="content-img">
                        <div class="mb" >
                            <div>
                                <h3>#阅无止境，一鹿相伴第二季#</h3>
                                <p>传统艺术里的中国味道</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-info">
                        <div>
                            <div>
                                <span>来一起漫游艺术世界</span>
                                <p>117人参加 <span>已结束</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center"  @click="goDeatil">
                <div class="content " >
                    <div class="content-img" style="background-image: url('https://img3.doubanio.com/view/freyr_page_photo/raw/public/2262.jpg');">
                        <div class="mb" >
                            <div>
                                <h3>#这些书在购物车躺很久了#</h3>
                                <p>在此静静的候着你的到来</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-info">
                        <div>
                            <div>
                                <span>晒出你的想买，豆瓣书店送你劵！</span>
                                <p>96人参加 <span>已结束</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
</template>

<script>


    export default{
        methods:{
            goDeatil(){
                this.$router.push('/book/bookDetail')
            }
        }
    }
</script>

<style scoped>
    .book{
        margin-top: 50px;
        margin-bottom: 60px;
    }
    .my-swipe {
        height: 180px;
    }

    .slide1 {
        background-image:url('https://img3.doubanio.com/view/freyr_page_photo/raw/public/3791.jpg');
        background-size: cover;  /*图片背景完整占满空间*/
    }

    .slide2 {
        background-image:url('https://img3.doubanio.com/view/freyr_page_photo/raw/public/3783.jpg');
        background-size: cover;
    }

    .slide3 {
        background-image:url('https://img1.doubanio.com/view/freyr_page_photo/raw/public/3718.jpg');
        background-size: cover;
    }

    .content-img{
        background-image: url("https://img3.doubanio.com/view/freyr_page_photo/raw/public/2286.jpg");
        width: auto;
        height: 110px;
        padding: 10px 10px 0 10px;

    }
    .nav h3{
        margin: 10px 0;
        font-weight: 600;
        color: #333333;
    }
    .center{
        background: rgb(247,241,237);
    }
    .content-img .mb{
        background-color: rgba(136, 136, 136,0.6);
        border-radius: 6px 6px 0 0 ;
        width: 100%;
        height: 100%;
    }
    .content-img .mb div{
        padding-top: 20px;
        color: #fff;
        line-height: 40px;
        margin: auto;
    }
   .content-info{
       height: 110px;
       padding: 0 10px 10px 10px;
   }
   .content-info>div{
       margin: auto;
       background-color: #fff;
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       border-radius: 0 0 5px 5px;
   }
   .content-info>div>div{
       margin-left: 15px;
       text-align: left;
       line-height: 35px;
   }
   .content-info span{
        color: #9B9B9B;
   }
   .content-info p>span{
       display:inline-block;
       padding: 3px 10px;
       background-color:  #ccc;
       font-size: 14px;
       line-height: 20px;
       margin-left: 10px;
       border-radius: 5px;
       color: #fff;
       font-weight: 600;
   }
    .content-info P:before {
        content: "\e668";
    }
</style>