<template>
    <div>
  <form @submit.prevent> 
    <h4>Создание поста</h4>
    <my-input
     v-focus
    v-model="post.title"
      type="text" placeholder="название поста"></my-input>
    <my-input
     v-model="post.body"
      type="text" placeholder="описание"></my-input>
    <my-button style="align-self:flex-end; margin-top:10px;" class="btn" @click="createPost">Coздание</my-button>
  </form>
</div>
</template>
<script>

export default {
  name:'PostForm',
  data(){
    return{
      post:{
        title:'',
        body:'',
      }
    }
  },
  methods:{
    createPost(){
      this.post.id = Date.now()
      this.$emit('create',this.post)
      this.post ={
      title:'',
      body:'',
      
     }
     
    }
  }
}
</script>
  
<style scoped>
form{
  display: flex;
  flex-direction: column;

}

</style>