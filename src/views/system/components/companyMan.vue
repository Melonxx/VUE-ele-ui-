<template>
  <div class="app-container">
    <el-row>
      <el-col :span="7" style="margin-bottom:26px;">
        <el-button type="primary" @click="dialogVisible = true">添加账号</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'companyman_name', order: 'descending'}"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="companyman_name"
        label="姓名"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="companyman_mobile"
        label="手机号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="companyman_status"
        label="账号状态"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="companyman_option"
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="dialogVisible = true">编辑</el-button>
          <el-button type="danger" size="small" @click="delete_man()">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" title="添加角色" width="40%">
      <man-detail @childclose="childclose()"></man-detail>
    </el-dialog>
  </div>
</template>

<script>
import ManDetail from './manDetail'
export default {
  components: {
    ManDetail
  },
  props: {
    type: {
      type: String,
      required: true,
      default: 'first'
    }
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [{
        companyman_name: '管理官',
        companyman_mobile: '15911111111',
        companyman_status: '开启'
      }, {
        companyman_name: '管理官',
        companyman_mobile: '15911111111',
        companyman_status: '开启'
      }, {
        companyman_name: '管理官',
        companyman_mobile: '15911111111',
        companyman_status: '开启'
      }, {
        companyman_name: '管理官',
        companyman_mobile: '15911111111',
        companyman_status: '开启'
      }]
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    delete_man() {
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
      this.dialogVisible = val
    }
  }
}
</script>

