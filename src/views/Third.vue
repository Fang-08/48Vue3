<template>
    <div>
        <h1>问卷调查表填写</h1>
        <p>3.请介绍一下自己</p>
        <p>{{this.$store.state.checked}}</p>
        <textarea v-model="txt"></textarea><br>
        <a @click="doClick()">提交</a>
        <router-link to="/Second">上一页</router-link>
        <a>重置</a>
    </div>
</template>

<script>
    export default {
        name: "Third",
        data(){
            return{
                txt: ''
            }
        },
        methods:{
            doClick(){
                this.$router.push('/Four')
                this.$store.commit("doClick",{txt:this.txt})
            }
        }
    }
</script>

<style scoped>
a{text-decoration: none;margin-left: 20px;}
</style>