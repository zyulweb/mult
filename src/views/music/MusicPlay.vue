<template>
  <div class="play" style="margin:60px 0;">
    <div class="header">
      <div class="title">
        <router-link to='musicClass'>
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p class="music-title">{{ songinfo.title }}</p>
          <p class="author">{{ songinfo.author }}</p>
        </div>
        <router-link to='musicClass'>
          <i class="iconfont icon-sousuo right"></i>
        </router-link>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="son-info">
      <!-- 图片和歌词 -->
      <div class="song-info-img">
        <img :src="songinfo.pic_big" alt="">
        <LRC :currentTime='currentTime'  :songid="song_id" />
      </div>
      <!-- 收藏和下载 -->
      <div class="iconbox">
      	<i class="iconfont icon-shoucang2 left"></i>
      	<i class="box"></i>
      	<i class="iconfont icon-xiazai right"></i>
      </div>
      <!-- 音乐播放器 -->
      <div class="song">
      	<audio ref='player' :src="show_link"  controls="controls" autoplay="" ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/font/iconfont.css'
import LRC from '../../components/LRC'
export default{
  data () {
    return {
      song_id:this.$route.query.song_id,
      songinfo:"",
      bitrate:"",
      show_link:"",
      currentTime: 0,  // 播放的当前时间
     // durationTime: 0  // 音乐文件的总持续时间
    }
  },
  components: {
    LRC
  },
  
  methods: {
    addEventListeners () {
      this.$refs.player.addEventListener('timeupdate',this._currentTime)
      // this.$refs.player.addEventListener('canplay',this._durationTime)
    },
    removeEventListeners () {
      this.$refs.player.removeEventListener('timeupdate',this._currentTime)
      // this.$refs.player.removeEventListener('canplay',this._durationTime)
    },
    _currentTime () {
      this.currentTime = this.$refs.player.currentTime
    },
    // _durationTime () {
    //   this.durationTime = this.$refs.player.duration
    // }
  },
  beforeRouteLeave(to, from, next) {   
        from.meta.keepAlive = true; 
        next();
    },
  mounted() {
     let playUrl = `/baiduapi/restserver/ting?method=baidu.ting.song.play&songid=${this.song_id}`
    // let playUrl = `http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=${this.song_id}`
    this.axios.get(playUrl).then(res => {
      this.songinfo = res.data.songinfo;
      this.bitrate = res.data.bitrate;
      this.show_link = res.data.bitrate.show_link;
      // console.log(res.data)
    
    }).catch(err => {
      console.log(err)
    })
    this.addEventListeners()
  },
  beforeDestroy () {
    this.removeEventListeners()
  },
}
</script>

<style scoped>
.header{
  padding: 10px 15px;
}
.music-info{
  flex: 1;
  font-size: 20px;
}
.title{
  display: flex;
  text-align: center;
}
.left{
  font-size: 30px;
}
.ca{
  color: red;
}
.right{
  font-size: 30px;
}
.song-info{
  padding: 15px;
}
/* .song-info-img{
  text-align: center;
} */
.song-info-img img{
  width: 45%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50,50,50, .31);
}
/* .song-lrc{
  margin-top: 10px;
  min-height: 50px;
} */
.iconbox{
  display: flex;
  margin: 20px;
}
.iconbox .box{
  flex: 1;
}
.song{
  width: 100%;
}
.song audio{
  width: 80%;
}
.active{
  color: #222;
}
.author{
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}
</style>
