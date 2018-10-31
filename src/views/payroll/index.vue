<template>
  <div class="app-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/tabPane'
export default {
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '待审核', key: 'first' },
        { label: '待发放', key: 'second' },
        { label: '已发放', key: 'third' },
        { label: '发放失败', key: 'fourth' }
      ],
      activeName: 'first',
      createdTimes: 0
    }
  },
  methods: {
    // showCreatedTimes() {
    //   this.createdTimes = this.createdTimes + 1
    // }
  }
}
</script>

