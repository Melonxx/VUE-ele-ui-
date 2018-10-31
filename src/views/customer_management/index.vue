<template>
  <div class="app-container">
    <el-row>
      <el-col :span="7" style="margin-bottom:26px;">
        <el-input v-model="search_text" placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
      <el-col :span="6" :offset="11">
        <el-button type="primary" @click="dialogVisible2 = true">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button type="primary" @click="dialogVisible1 = true">新增客户</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'customer_number', order: 'descending'}"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="customer_number"
        label="客户编号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_name"
        label="公司名称"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_type"
        label="客户类型"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_contact"
        label="联系人"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_mobile"
        label="联系方式"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_job"
        label="职位"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_mail"
        label="邮箱"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_creater"
        label="创建人"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_time"
        label="创建时间"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="customer_option"
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="dialogVisible1 = true">查看</el-button>
          <el-button type="danger" size="small" @click="delete_customer()">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible1" title="操作客户" width="60%">
      <dialog-form @childclose="childclose()"></dialog-form>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible2" title="批量导入" width="40%">
      <el-row>
        <el-col :span="24" style="text-align:center;">
          <!-- <img class="mid" src="../assets/images/upload_file.jpg" alt="上传文件"> -->
          <el-button type="danger">上传表格<i class="el-icon-upload el-icon--right"></i></el-button>
          <p>注：请先<a>下载表格</a>模板格式填写对应信息，支持 xls、xlsx 文件；</p>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import DialogForm from './components/dialogForm'
export default {
  components: {
    DialogForm
  },
  data() {
    return {
      search_text: '',
      dialogVisible1: false,
      dialogVisible2: false,
      tableData: [{
        customer_number: '无限责任有限公司1',
        customer_name: '10111100',
        customer_type: '2016-05-04',
        customer_contact: '2016-05-04',
        customer_mobile: '2016-05-04',
        customer_job: '2016-05-04',
        customer_mail: '2016-05-04',
        customer_creater: '2016-05-04',
        customer_time: '2016-05-04'
      }, {
        customer_number: '无限责任有限公司2',
        customer_name: '10111100',
        customer_type: '2016-05-04',
        customer_contact: '2016-05-04',
        customer_mobile: '2016-05-04',
        customer_job: '2016-05-04',
        customer_mail: '2016-05-04',
        customer_creater: '2016-05-04',
        customer_time: '2016-05-04'
      }, {
        customer_number: '无限责任有限公司4',
        customer_name: '10111100',
        customer_type: '2016-05-04',
        customer_contact: '2016-05-04',
        customer_mobile: '2016-05-04',
        customer_job: '2016-05-04',
        customer_mail: '2016-05-04',
        customer_creater: '2016-05-04',
        customer_time: '2016-05-04'
      }, {
        customer_number: '无限责任有限公司5',
        customer_name: '10111100',
        customer_type: '2016-05-04',
        customer_contact: '2016-05-04',
        customer_mobile: '2016-05-04',
        customer_job: '2016-05-04',
        customer_mail: '2016-05-04',
        customer_creater: '2016-05-04',
        customer_time: '2016-05-04'
      }]
    }
  },
  methods: {
    delete_customer() {
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
      this.dialogVisible1 = val
    }
  }
}
</script>

<style scoped>
/* .el-date-editor .el-range-separator{
  padding: 0;
} */
</style>
