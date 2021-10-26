<template>
    <div class="post"
    >
    <div> {{post.id}} </div>
   <div> <strong>  название:</strong>{{post.title}}</div>
   <div> <strong> описание: </strong>{{post.body}}</div>
   <div class="post_btns">
          <my-button
       @click="$router.push(`/posts/${post.id}`)"
       >открыть</my-button>
       <my-button
       @click="$emit('remove',post)"
       >Удалить</my-button>

   </div>
 </div>
</template>
<script>
export default {
    props:{
        post:{
            type:Object,
            required:true
        }
    }
}
</script>
<style scoped>
.post{
  margin-top:15px;
  padding: 10px;
  border: 2px solid teal;
  display: flex;
  align-items:center;
  justify-content: space-between;
}
.post_btns{
    display: flex;
    
}
</style>