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
    </el-row>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'tab2_time', order: 'descending'}"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="tab2_bill"
        label="充值单号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab2_name"
        label="操作人"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab2_mobile"
        label="手机号"
        sortable
        width="80px">
      </el-table-column>
      <el-table-column
        prop="tab2_price"
        label="充值额"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="tab2_text"
        label="备注"
        sortable
        width="120px">
      </el-table-column>
      <el-table-column
        prop="tab2_time"
        label="操作时间"
        sortable
        width="120px">
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
      tableData: [{
        tab2_bill: '156416551',
        tab2_name: '阿斯达斯 ',
        tab2_mobile: '21231231',
        tab2_price: '120000',
        tab2_card: '3303232331123132',
        tab2_text: '农村',
        tab2_time: '2018-06-05'
      }, {
        tab2_bill: '156416551',
        tab2_name: '都是',
        tab2_mobile: '1131232123',
        tab2_price: '3303232331123132',
        tab2_card: '3303232331123132',
        tab2_text: '农村',
        tab2_time: '2018-06-05'
      }, {
        tab2_bill: '156416551',
        tab2_name: '非法',
        tab2_mobile: '1231152152132',
        tab2_price: '3200',
        tab2_card: '3303232331123132',
        tab2_text: '农村',
        tab2_time: '2018-06-05'
      }, {
        tab2_bill: '156416551',
        tab2_name: '多少分',
        tab2_mobile: '1516556',
        tab2_price: '1200',
        tab2_card: '3303232331123132',
        tab2_text: '农村',
        tab2_time: '2018-06-05'
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

