<template>
  <div class="app-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane label="企业信息" name="first">
        <keep-alive>
          <company-info :type="activeName"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="second">
        <keep-alive>
          <company-man :type="activeName"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import companyInfo from './components/companyInfo'
import companyMan from './components/companyMan'
export default {
  components: {
    companyInfo,
    companyMan
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    // showCreatedTimes() {
    //   this.createdTimes = this.createdTimes + 1
    // }
  }
}
</script>

<style scoped>
/* .line{
  text-align: center;
} */
</style>

