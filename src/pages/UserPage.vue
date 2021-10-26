<template>

<div>
  <h1> страница с постами</h1>
  <my-input
  v-model="searchQuery"
  placeholder="Поиск..."
  v-focus
  ></my-input>
  <div class="app_btn"><my-button
  @click="showDialog"
  style="margin:15px 0;"
  >создать пост</my-button>
  <my-select
    v-model="selectedSort"
    :options ="sortOptions"
  ></my-select>
  </div>

  <my-dialog 
  v-model:show="dialogVisible"
  >
    <post-form
   @create="createPost"
  /></my-dialog>

  <post-list 
  @remove="removePost" 
  :posts="sortedAndSeachedPosts"/>
  <div v-intersection="loadMorePosts" class="observer"></div>
<!--   <div class="page_wrapper">
    <div
      class="page"
      :class="{
        'current_page':page === pageNumber
      }"
      @click="changePage(pageNumber)"
     v-for="pageNumber in totalPage"
    :key="pageNumber"
    >
      {{pageNumber}}
    </div>
  </div> -->
</div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import axios from 'axios'
export default {
  name: 'App',
  components: {
    PostList,
    PostForm,
    
  },
  data(){
    return{
      posts:[
       
      ],
      dialogVisible:false,
      searchQuery: '',
      selectedSort:'',
      page:1,
      limit:10,
      totalPage:0,
      sortOptions:[
        {value:'title', name:'По названию'},
        {value:'body', name:'По содержимому'}

]
    }
  },
  methods:{
    /* changePage(pageNumber){
      this.page = pageNumber
    }
    , */
    createPost(post){
     this.posts.push(post)
     this.dialogVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter( p=> p.id !== post.id) 
    },
    showDialog(){
      this.dialogVisible = true
    },
    async fetchPost(){
      try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
        params:{
          _page:this.page,
          _limit: this.limit
        }

      })
      this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit)
      this.posts = response.data
      }
      catch(e){
        alert('ошибка')
      }
    },
    async loadMorePosts(){
      try{
        this.page+=1
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
        params:{
          _page:this.page,
          _limit: this.limit
        }

      })
      this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit)
      this.posts = [...this.posts, ...response.data]
      }
      catch(e){
        alert('ошибка')
      }
    }

  },
  mounted(){
    this.fetchPost();
    /* const options = {
    rootMargin: '0px',
    threshold: 1.0
}
    const callback = (entries)=>{
      if(entries[0].isIntersecting && this.page < this.totalPage){
        this.loadMorePosts()
      }
};
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer) */
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((a,b)=>{
        return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
    })
    },
    sortedAndSeachedPosts(){
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch:{
    /* page(){
      this.fetchPost()
    } */
  }
  
}
</script>

<style>


.app{
  padding: 20px;
}
.app_btn{
  display: flex;
  justify-content: space-between;
}
.page_wrapper{
  display: flex;
  margin-top:15px;
}
.page{
  border:1px solid teal;
  padding: 10px;
}
.current_page{
  border: 2px solid teal;
  background:rgb(146, 123, 123);
}
.observer{
  height: 30px;
  background: chartreuse;
}
</style>
