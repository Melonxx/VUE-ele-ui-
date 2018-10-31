<template>
  <div class="app-container">
    <el-row>
      <el-col :span="7" style="margin-bottom:26px;">
        <el-input v-model="search_text" placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'user_name', order: 'descending'}"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="user_img"
        label="头像"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="user_nickname"
        label="昵称"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="user_name"
        label="姓名"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="user_mobile"
        label="手机号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="user_address"
        label="所属公司"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="user_idcard"
        label="证件号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="user_card"
        label="证件类型"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="user_option"
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="dialogFormVisible = true">查看</el-button>
          <el-button type="danger" size="small" @click="delete_user()">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" fullscreen title="查看详情">
      <dialog-detail @childclose="childclose"></dialog-detail>
    </el-dialog>
  </div>
</template>

<script>
import DialogDetail from './components/dialogDetail'
export default {
  components: {
    DialogDetail
  },
  data() {
    return {
      search_text: '',
      dialogFormVisible: false,
      tableData: [{
        user_img: '头像3',
        user_nickname: '10111100',
        user_name: '2016-05-04',
        user_mobile: '2016-05-04',
        user_address: '2016-05-04',
        user_idcard: '2016-05-04',
        user_card: '2016-05-04'
      }, {
        user_img: '头像2',
        user_nickname: '10111234100',
        user_name: '2016-05-04',
        user_mobile: '2016-05-04',
        user_address: '2016-05-04',
        user_idcard: '2016-05-04',
        user_card: '2016-05-04'
      }, {
        user_img: '头像1',
        user_nickname: '1011132100',
        user_name: '2016-05-04',
        user_mobile: '2016-05-04',
        user_address: '2016-05-04',
        user_idcard: '2016-05-04',
        user_card: '2016-05-04'
      }, {
        user_img: '头像4',
        user_nickname: '1013511100',
        user_name: '2016-05-04',
        user_mobile: '2016-05-04',
        user_address: '2016-05-04',
        user_idcard: '2016-05-04',
        user_card: '2016-05-04'
      }]
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
    },
    childclose(val) {
      this.dialogFormVisible = val
    }
  }
}
</script>

<style scoped>
/* .el-date-editor .el-range-separator{
  padding: 0;
} */
</style>
