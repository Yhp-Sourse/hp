<template>
    <div id="home">
       <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="001000000">处理中心</el-menu-item>
        <el-submenu index="002000000">
            <template slot="title">我的工作台</template>
            <el-menu-item index="002001000">选项1</el-menu-item>
            <el-menu-item index="002002000">选项2</el-menu-item>
            <el-menu-item index="002003000">选项3</el-menu-item>
            <el-submenu index="002004000">
            <template slot="title">选项4</template>
            <el-menu-item index="002004001">选项1</el-menu-item>
            <el-menu-item index="002004002">选项2</el-menu-item>
            <el-menu-item index="002004003">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="003000000">消息中心</el-menu-item>
        <el-menu-item index="003000000">订单管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            activeIndex: '1',
        };
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){

        },
        // handleSelect(key, keyPath) {
        //     console.log(key, keyPath);
        //     this.$emit('handleSelect');
        // },
        handleSelect(key, keyPath) {//子组件的方法名，随便取
            //因为要调用的是事件为parentFn，后面跟上参数
            this.$emit('parentFn',{param:key});
        },
    },
    components:{


    }

}
</script>

<style scoped>

</style>