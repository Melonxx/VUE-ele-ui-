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
      :default-sort = "{prop: 'payroll_name', order: 'descending'}"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="payroll_name"
        label="公司名称"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_agent"
        label="归属客户"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_upman"
        label="上传人"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_uptime"
        label="提交日期"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_sendmonth"
        label="薪酬归属月"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_sendtime"
        label="发薪日"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_people"
        label="账户总额"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_allprice"
        label="账户总额"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="payroll_option"
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="dialogVisible1 = true">查看</el-button>
          <el-button type="success" size="small" @click="dialogVisible2 = true">导出</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: 'first'
    }
  },
  data() {
    return {
      search_text: '',
      loading: false,
      dialogVisible1: false,
      dialogVisible2: false,
      tableData: [{
        payroll_name: '头像3',
        payroll_agent: '阿萨德撒',
        payroll_upman: '飒沓',
        payroll_uptime: '2016-05-04',
        payroll_sendmonth: '2016-05',
        payroll_sendtime: '2016-05-04',
        payroll_people: '20',
        payroll_allprice: '5615165'
      }, {
        payroll_name: '头像3',
        payroll_agent: '阿萨德撒',
        payroll_upman: '飒沓',
        payroll_uptime: '2016-05-04',
        payroll_sendmonth: '2016-05',
        payroll_sendtime: '2016-05-04',
        payroll_people: '20',
        payroll_allprice: '5615165'
      }, {
        payroll_name: '头像3',
        payroll_agent: '阿萨德撒',
        payroll_upman: '飒沓',
        payroll_uptime: '2016-05-04',
        payroll_sendmonth: '2016-05',
        payroll_sendtime: '2016-05-04',
        payroll_people: '20',
        payroll_allprice: '5615165'
      }, {
        payroll_name: '头像3',
        payroll_agent: '阿萨德撒',
        payroll_upman: '飒沓',
        payroll_uptime: '2016-05-04',
        payroll_sendmonth: '2016-05',
        payroll_sendtime: '2016-05-04',
        payroll_people: '20',
        payroll_allprice: '5615165'
      }]
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    // getList() {
    //   this.loading = true
    //   this.$emit('create') // for test
    //   fetchList(this.listQuery).then(response => {
    //     this.list = response.data.items
    //     this.loading = false
    //   })
    // }
  }
}
</script>

