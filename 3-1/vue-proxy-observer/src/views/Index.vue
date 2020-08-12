<template>
    <div>
        <h1>===首页===</h1>
        <!-- <button @click="replace">登录-replace</button>
        <button @click="goDetail">详情页-push-10086</button> -->
    </div>
</template>
<script>
export default {
    name: 'Index',
    methods: {
        replace(){
            // 方式 1
            this.$router.replace('/login')
            // 方式 2 
            //  this.$router.replace({ name: 'login' })
        },
        goDetail(){
            this.$router.push({name: 'detail', params: { id: 10086 }})
        }
    }
}
</script>