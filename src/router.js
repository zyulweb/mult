import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie.vue'
import MovieList from './views/movie/MovieList.vue'
import MovieDetail from './views/movie/MovieDetail.vue'
import MovieDetails from './views/movie/MovieDetails.vue'
import Music from './views/music/Music.vue'
import MusicClass from './views/music/MusicClass.vue'
import MusicList from './views/music/MusicList.vue'
import MusicPlay from './views/music/MusicPlay.vue'
import Book from './views/book/Book.vue'
import BookList from './views/book/BookList.vue'
import BookDetail from './views/book/BookDetail.vue'
import Photo from './views/photo/Photo.vue'
import PhotoList from './views/photo/PhotoList.vue'
import PhotoDetail from './views/photo/PhotoDetail.vue'
import PhotoLook from './views/photo/PhotoLook.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",redirect:'/movie/movieList',meta:{keepAlive:true}
    },
    {
      path:'/movie',component:Movie,redirect:'/movie/movieList',
      children:[
        {path:'movieList',component:MovieList,meta:{keepAlive:true}},
        {path:'movieDetail',component:MovieDetail},
        {path:'movieDetails',component:MovieDetails}
      ]
    },
    {
      path:'/music',component:Music,redirect:'/music/musicClass',
      children:[
        {path:'musicClass',component:MusicClass},
        {path:'musicList',component:MusicList},
        {path:'musicPlay',component:MusicPlay}
      ]
    },
    {
      path:'/book',component:Book,redirect:'/book/bookList',
      children:[
        {path:'bookList',component:BookList},
        {path:'bookDetail',component:BookDetail}
      ]
    },
    {
      path:'/photo',component:Photo,redirect:'/photo/photoList',
      children:[
        {path:'photoList',component:PhotoList},
        {
          path:'photoDetail',
          component:PhotoDetail,
        },
        {path:'photoLook',component:PhotoLook},
      ]
    }
  ]
})
