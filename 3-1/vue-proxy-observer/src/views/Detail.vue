<template>
    <div>
        <div>
            方式1： 通过当前路由规则获取路由参数： {{$route.params.id}}
        </div>
        <div>
            推荐： 方式2： 通过当前路由规则获取路由参数： {{id}}
        </div>
        <button @click="go">go(-2)</button>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id'],
    methods: {
         go(){
            this.$router.go(-2)
        }
    }
}
</script>