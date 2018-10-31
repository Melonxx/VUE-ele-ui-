<template>
  <div class="app-container">
    <el-row>
      <el-col :span="7" style="margin-bottom:26px;">
        <el-input v-model="search_text" placeholder="输入公司名称/归属客户" class="input-with-select">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'account_name', order: 'descending'}"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="account_name"
        label="公司名称"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="account_agent"
        label="归属客户"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="account_waitprice"
        label="代发总额"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="account_sendprice"
        label="发放总额"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="account_downprice"
        label="剩余总额"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="account_allprice"
        label="账户总额"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="account_option"
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="dialogVisible1 = true">查看</el-button>
          <el-button type="warning" size="small" @click="dialogVisible2 = true">充值</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="dialogVisible1"
      title="查看详情"
      fullscreen>
      <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
        <el-tab-pane label="发放记录" name="first">
          <keep-alive>
            <tab1 :type="activeName"/>
          </keep-alive>
        </el-tab-pane>
        <el-tab-pane label="充值记录" name="second">
          <keep-alive>
            <tab2 :type="activeName"/>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible2"
      title="充值"
      width="400px">
      <el-form>
        <el-row>
          <el-col :span="24">
            <el-form-item :label-width="formLabelWidth" label="充值对象">
              <span>{{ form.name }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item :label-width="formLabelWidth" label="充值金额">
              <el-input v-model="form.price"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item :label-width="formLabelWidth" label="充值备注">
              <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="form.desc" type="textarea" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tab1 from './components/tab1'
import tab2 from './components/tab2'
export default {
  components: {
    tab1,
    tab2
  },
  data() {
    return {
      search_text: '',
      activeName: 'first',
      dialogVisible1: false,
      dialogVisible2: false,
      formLabelWidth: '70px',
      form: {
        name: '某某有限公司',
        price: '',
        desc: ''
      },
      tableData: [{
        account_name: '头像3',
        account_agent: '10111100',
        account_waitprice: '2016-05-04',
        account_sendprice: '2016-05-04',
        account_downprice: '2016-05-04',
        account_allprice: '2016-05-04'
      }, {
        account_name: '头像3',
        account_agent: '10111100',
        account_waitprice: '2016-05-04',
        account_sendprice: '2016-05-04',
        account_downprice: '2016-05-04',
        account_allprice: '2016-05-04'
      }, {
        account_name: '头像3',
        account_agent: '10111100',
        account_waitprice: '2016-05-04',
        account_sendprice: '2016-05-04',
        account_downprice: '2016-05-04',
        account_allprice: '2016-05-04'
      }, {
        account_name: '头像3',
        account_agent: '10111100',
        account_waitprice: '2016-05-04',
        account_sendprice: '2016-05-04',
        account_downprice: '2016-05-04',
        account_allprice: '2016-05-04'
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
    }
  }
}
</script>

<style scoped>
/* .el-date-editor .el-range-separator{
  padding: 0;
} */
</style>
