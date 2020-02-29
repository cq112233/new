<template>
    <div>
        <h1>home</h1>
        <el-button type="primary" round v-on:click='back'>主要按钮</el-button>
        <el-button type="primary" round v-on:click='backUser'>退出账号</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        back:function(){
            this.$router.go(-1)
        },
        backUser:function(){
            this.$router.push('/login')
            window.sessionStorage.clear()
        }
    }
    
}
</script>

<style lang="less" scoped>

</style>