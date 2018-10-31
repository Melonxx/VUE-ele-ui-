<template>
  <div class="app-container">
    <el-card class="box-card" style="margin-bottom:30px;">
      <div slot="header" class="clearfix">
        <strong>账户金额</strong>
      </div>
      <el-row :gutter="40">
        <el-col :span="6" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
        <el-col :span="6" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
        <el-col :span="6" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
        <el-col :span="6" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" style="margin-bottom:30px;">
      <div slot="header" class="clearfix">
        <strong>薪资发放</strong>
      </div>
      <el-row :gutter="40">
        <el-col :span="5" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
        <el-col :span="5" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
        <el-col :span="4" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
        <el-col :span="5" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
        <el-col :span="5" style="text-align:center;">
          <h2>账户总额</h2>
          <h2>10000</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <p class="card-link"><router-link to="/financial_management/payroll">查看详情>></router-link></p>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" style="margin-bottom:30px;">
      <div slot="header" class="clearfix">
        <strong>公司账户金额</strong>
      </div>
      <el-table
        :data="tableData"
        :default-sort = "{prop: 'overview_name', order: 'descending'}"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="overview_name"
          label="公司名称"
          sortable
          width="">
        </el-table-column>
        <el-table-column
          prop="overview_agent"
          label="归属客户"
          sortable
          width="">
        </el-table-column>
        <el-table-column
          prop="overview_waitprice"
          label="代发总额"
          sortable
          width="">
        </el-table-column>
        <el-table-column
          prop="overview_sendprice"
          label="发放总额"
          sortable
          width="">
        </el-table-column>
        <el-table-column
          prop="overview_downprice"
          label="剩余总额"
          sortable
          width="">
        </el-table-column>
        <el-table-column
          prop="overview_allprice"
          label="账户总额"
          sortable
          width="">
        </el-table-column>
      </el-table>
      <el-row>
        <el-col :span="24">
          <p class="card-link"><router-link to="/financial_management/account">查看详情>></router-link></p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_text: '',
      dialogFormVisible: false
    }
  },
  methods: {
    delete_user() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.card-link {
  text-align: right;
 a {
  color: #2A93FF;
  cursor: pointer;
  transition: all 0.38s ease-out;
  &:hover {
   color: #66b1ff;
  }
 }
}
</style>
