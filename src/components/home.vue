<template>
    <div id="home">
        <Menu @parentFn="childTreeFn"></Menu>
        <Tasbs ref="tab"></Tasbs>
    </div>
</template>

<script>
import Menu from './Menu.vue'
import Tasbs from './Tabs.vue'

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
        //这个是父组件的方法，名字随便定义
        childTreeFn({param}){
            console.log('参数',param)
            //因为要调用的是别名为tree的子组件中定义的appendToTree方法，所以就这么写
            this.$refs.tab.addTab({param});
        }

        
    },
    components:{
        Menu,Tasbs
    }

}
</script>

<style scoped>

</style>