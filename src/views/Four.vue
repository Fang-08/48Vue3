<template>
    <div>
      <h1>问卷调查表填写</h1>
        <p>您的性别是：{{this.$store.state.sex}}</p>
        <p> 您的爱好是：{{this.$store.state.like}}</p>
        <p>个人简介:{{this.$store.state.txt}}</p>
    </div>
</template>

<script>
    export default {
        name: "Four"
    }
</script>

<style scoped>

</style>