<template>
    <div id="Tabs">
        <!-- <div style="margin-bottom: 10px;">
            <el-button
                size="small"
                @click="addTab(editableTabsValue)"
            >
                add tab
            </el-button>
        </div> -->
        <el-tabs v-model="editableTabsValue"  type="card"  @tab-remove="removeTab">
          <el-tab-pane
              v-for="(item) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
              :closable="item.close"
          >
              <!-- {{item.content}} -->
               <Map style="border-radius: 3px;margin: -15px 10px 0px 10px;" ></Map>
          </el-tab-pane>
        </el-tabs>
    </div>
    
</template>
<script>
  import Map from './Map.vue'
  export default {
    name: 'Tabs',
    data() {
      return {
        editableTabsValue: '1',
        editableTabs: [{
          title: '首页',
          name: '1',
          content: '',
          
        }],
        tabIndex: 1
      }
    },
    methods: {
      addTab(targetName) {
        console.log(targetName);
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: targetName.param,
          name: newTabName,
          content: targetName.param,
          editable:'',
          close:'closable'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
    components:{
        Map
    }

  }
</script>
<style scoped>
 /* .el-tabs--card>.el-tabs__header .el-tabs__item .el-icon-close:nth-child(1) span{
     display: none !important;
} */
.el-tabs__item .el-icon-close:before {
    -webkit-transform: scale(.9);
    transform: scale(.9);
    display: none !important;
}
.el-tabs__item.is-closable {
    display: none !important;
}
</style>