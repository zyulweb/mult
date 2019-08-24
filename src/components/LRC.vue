<template >
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      {{ getAllKey }}
      <p
        class="lrc-p"
        :class="{active:parseInt(currentTime) >= keyArr[index] && parseInt(currentTime) < keyArr[index+1]}"
        v-for="(item,key,index) in lrcData"
        :key="index">
        {{ item }}{{ srcollLrc(key,index) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lrcData:{},   // {0:"心如止水",1:"录音：阿敏"......}  包含秒数 和后面对应的歌词
      keyArr:[]     // ["0","1","3"...]  每个段歌词的秒数
    }
  },
  props:{
    songid:{
      type:[String,Number],
      default:""
    },
    currentTime:{
      type:[String,Number],
      default:0
    },
    // durationTime:{
    //   type:[String,Number],
    //   default:0
    // }
  },
  created(){  
    //const LRCUrl = `/baiduapi/restserver/ting?method=baidu.ting.song.lry&songid=${this.songid}`;
   const LRCUrl = `http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid=${this.songid}`;
    this.axios.get(LRCUrl)
     .then(res => {
       // 数据格式处理 
       var lyrics = res.data.lrcContent.split("\n");   //返回的是单独成行的字符串 要切割成数组
      //  console.log(lyrics)
        var lrcObj = {};
        for(var i = 0 ;i<lyrics.length;i++){
          var lyric = decodeURIComponent(lyrics[i]); //遍历数组得到每个元素
          //对有可能经过encodeURIComponent编码的数据进行解码;获得数组中每个元素[ti:勇士的荣耀] / [00:00.89]勇士的荣耀
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;  //全局匹配  [ 数字:数字: (.或者:)数字 ]
          var timeRegExpArr = lyric.match(timeReg);   //用每个元素匹配正则,返回一个数组 ["[00:00.89]"]
          if(!timeRegExpArr)continue;                 // 如果没有 就跳过当前 继续执行
          var clause = lyric.replace(timeReg,'');     //把元素中符合正则要求的数据替换为''  返回  caluse = 勇士的荣耀
          // console.log(timeRegExpArr)
          // console.log(clause) 
          var t = timeRegExpArr[0];    //取出数组中额元素  t  = [00:00.89]
          var min = Number(String(t.match(/\[\d*/i)).slice(1)),  
          //  先用正则得到数组["[00"]   然后转为字符串 再去掉 [ 返回 "00"  最后转为数子 0 就是分钟数 
          sec = Number(String(t.match(/\:\d*/i)).slice(1));
          //  先用正则得到数组 [":00.89]"]  去掉 : 最后得到 秒  00.89
          var time = min * 60 + sec;  //得到总秒数 对应 audio 标签的属性  currentTime和durationTime 都是以秒计算
          lrcObj[time] = clause;   //给空对象添加属性 如果添加的属性名为number 必须用obj[] 的方式赋值，得到  lrcObj = {90: "勇士的荣耀"}
        } 
          this.lrcData = lrcObj;
          //  console.log(this.lrcData)  {0:"心如止水",1:"录音：阿敏"......}
     })
     .catch(error => {
       console.log(error);
     })
  },
  computed:{
    getAllKey(){
      for(var key in this.lrcData){  //通过遍历获得属性名(秒数)
        this.keyArr.push(key);  // this.keyArr = ["0","1","3"]  把每个时间秒数 放在数组里
      }
    }
  },
  methods:{
    srcollLrc(key,index){
      const lrcDiv = this.$refs.lrc
       if(key < this.currentTime){
           lrcDiv.style.top = -((index-2)*30)+"px"
       }
    }
  },


}

</script>

<style scoped>

.lrcContainer{
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc{
	width: 100%;
  position: absolute;
  top: 60px;
}
.active{
  color: red !important;
}
.lrc-p{
  height: 30px;
	line-height: 30px;
}

</style>
