<template>
    <div class="a">
        <div class="b">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
                <!-- 表单 -->
            <el-form class="c" :model="loginForm" :rules="rules" ref='reset'>
                <!-- 用户区域 -->
                <el-form-item prop="username">
                  <el-input  v-model='loginForm.username' prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!-- 密码区域 -->
                <el-form-item prop="password">
                    <el-input v-model='loginForm.password' prefix-icon="iconfont icon-3702mima"  suffix-icon="iconfont icon-showpassword" type="text"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="d">
                    <el-button type="success" @click='set'>登入</el-button>
                    <el-button type="info" @click='reset'>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            // 引用表单内部值
            loginForm:{
                username:"admin",
                password:"123456",
            },
            // 表单引用路由规则
            rules:{
                username: [
                { required: true, message: '请输入用户账号', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 1, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        // 点击重置，清除重置表单
        reset:function(){
           this.$refs.reset.resetFields()
        },
        //点击登入，表单预验证
        set:function(){
            //在validate方法中有个回调函数，两个参数，boolen，对象
            console.log(1)
            let css = {};
            this.$refs.reset.validate(async (e,css) => {
                // 输出true，false,如果符合表单规则，输出true，反之false
                // 不符合规则
                if(!e){
                    console.log(e)
                    console.log('不符合表单规则')
                    console.log(css) //f返回不符合规则对象
                }
                console.log(e)
                // 符合规则,运用async 和 await获取数据
                if(e){
                    let req = await this.$http.post('login',this.loginForm);
                    //传统方式调用数据
                    // req.then(data =>{
                    //     console.log(data.data)
                    //     } 
                    // )
                    console.log(req.data)
                    console.log(req.data.data.token)
                    if(req.data.meta.status !== 200){
                        this.$message.error('错了哦，这是一条错误消息');
                        // this.$message.success('登入成功');
                    }else if(req.data.meta.status == 200){
                        this.$message.success('登入成功');
                        //登入成功后将token令牌存入客户端,之后访问用户数据必须携带token
                        window.sessionStorage.setItem('token',req.data.data.token)
                        //跳转界面
                        this.$router.push('/home')
                    }
                }
            }) 
        }
    }

}
</script>
<style lang="less" scoped>
    .a{
        /* width:100px; */
        height:100%;
        background-color:#ccc;
        position:relative;
    }
    .b{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
    .logo{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        /* overflow: hidden; */
        padding: 10px;
        border: 1px solid #ccc;
        background-color:#fff;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 0 3px #ccc;
            img {
                border-radius:50%;
                width:100%;
                /* height:100%; */
                background-color:#ccc;
            }
    }
    .c{
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    .d{
        display: flex;
        justify-content: flex-end;
     }

</style>