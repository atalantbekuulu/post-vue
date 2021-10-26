<template>
    <div class="navbar">
        <div @click="$router.push('/')" >Vue 3</div>
        <div class="navbar-btn">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')" class="btn"> О сайте </my-button>
            <my-button @click="$router.push('/store')" class="btn"> VUEX </my-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.navbar{
    height: 50px;
    background: rgb(151, 161, 161);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar-btn{
    margin-left: auto;
}
.btn{
    margin-left: 15px;
}
</style>