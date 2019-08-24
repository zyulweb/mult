<template>
    <div style="margin-top:50px">
        <ul class="list">
            <li v-for="(music,index) in musicList" :key="index" @click="goList(music.type)">
                    <img :src="music.imgurl" >
                    <p class="dissname">{{music.dissname}}</p>
                    <p class="name">{{music.creator.name}}</p>
                    <p class="name">播放量：{{music.listennum}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
     data(){
            return{
                musicList:[]
            }
        },
        methods:{
            goList(type){
                this.$router.push({path:'musicList',query:{type:type}})
            }
        },
        created(){
            this.axios.get('data/musiclist.json').then((res)=>{
            this.musicList = res.data.data.list;
            });
        }
}
</script>
<style scoped>
    .list{
        display: flex;
        justify-content: space-evenly;/* 均匀排列每个元素，每个元素之间的间隔相等 */
        flex-wrap: wrap;
        flex-direction: row;
    }
    .list li{
        width: 45%;
        margin-top: 12px;
    }
    .list li img{
        width: 100%;
    }
    .list li p{
        text-align: left;
        margin-top:8px; 
    }
    .dissname{
        color:rgb(70, 70, 70);
        font-size: 15px;
    }
    .name{
        font-size: 13px;
    }
</style>

