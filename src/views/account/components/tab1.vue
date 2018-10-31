<template>
  <div class="app-container">
    <el-row>
      <el-col :span="7" style="margin-bottom:26px;">
        <el-date-picker
          :picker-options="pickerOptions2"
          v-model="search_date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="——"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-input v-model="search_text" placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'tab1_number', order: 'descending'}"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="tab1_number"
        label="员工编号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab1_waterbill"
        label="流水账单"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab1_name"
        label="姓名"
        sortable
        width="80px">
      </el-table-column>
      <el-table-column
        prop="tab1_cardid"
        label="证件号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab1_card"
        label="证件类型"
        sortable
        width="120px">
      </el-table-column>
      <el-table-column
        prop="tab1_hometype"
        label="户口类型"
        sortable
        width="120px">
      </el-table-column>
      <el-table-column
        prop="tab1_mobile"
        label="手机号码"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab1_bankid"
        label="银行卡号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab1_bank"
        label="开户银行"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab1_sendprice"
        label="应发工资"
        sortable
        width="120px">
      </el-table-column>
      <el-table-column
        prop="tab1_sendstatus"
        label="发放状态"
        sortable
        width="120px">
      </el-table-column>
      <el-table-column
        prop="tab1_sendtime"
        label="发放时间"
        sortable
        width="">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: '120px',
      search_date: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      search_text: '',
      tableData: [{
        tab1_number: '156416551',
        tab1_waterbill: 'a111212',
        tab1_name: '阿萨德撒',
        tab1_cardid: '3303232331123132',
        tab1_card: '身份证',
        tab1_hometype: '农村',
        tab1_mobile: '1591111111',
        tab1_bankid: '6621215615615165',
        tab1_bank: '浦沿支行',
        tab1_sendprice: '5200',
        tab1_sendstatus: '已发放',
        tab1_sendtime: '2016-05-04'
      }, {
        tab1_number: '156413213216551',
        tab1_waterbill: 'a111212',
        tab1_name: '阿萨德撒',
        tab1_cardid: '3303232331123132',
        tab1_card: '身份证',
        tab1_hometype: '农村',
        tab1_mobile: '1591111111',
        tab1_bankid: '6621215615615165',
        tab1_bank: '浦沿支行',
        tab1_sendprice: '5200',
        tab1_sendstatus: '已发放',
        tab1_sendtime: '2016-05-04'
      }, {
        tab1_number: '1564161551',
        tab1_waterbill: 'a111212',
        tab1_name: '阿萨德撒',
        tab1_cardid: '3303232331123132',
        tab1_card: '身份证',
        tab1_hometype: '农村',
        tab1_mobile: '1591111111',
        tab1_bankid: '6621215615615165',
        tab1_bank: '浦沿支行',
        tab1_sendprice: '5200',
        tab1_sendstatus: '已发放',
        tab1_sendtime: '2016-05-04'
      }, {
        tab1_number: '1564146551',
        tab1_waterbill: 'a111212',
        tab1_name: '阿萨德撒',
        tab1_cardid: '3303232331123132',
        tab1_card: '身份证',
        tab1_hometype: '农村',
        tab1_mobile: '1591111111',
        tab1_bankid: '6621215615615165',
        tab1_bank: '浦沿支行',
        tab1_sendprice: '5200',
        tab1_sendstatus: '已发放',
        tab1_sendtime: '2016-05-04'
      }]
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    // editorFn() {
    // }
  }
}
</script>

