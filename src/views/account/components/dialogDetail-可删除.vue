<template>
  <div class="dialog-container">
    <el-form>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label-width="formLabelWidth" label="头像">
            <span>我是头像</span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label-width="formLabelWidth" label="昵称">
            <span>阿斯达斯</span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label-width="formLabelWidth" label="OpenDI">
            <span>1556165165</span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label-width="formLabelWidth" label="姓名">
            <span>李思航</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item :label-width="formLabelWidth" label="证件号">
            <span>362324199501091893</span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label-width="formLabelWidth" label="证件类型">
            <span>身份证</span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label-width="formLabelWidth" label="所属公司">
            <span>占先科技有限公司</span>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row :gutter="20" style="padding-top:30px;border-top: 1px solid #ddd;margin-top:20px;">
      <el-col>
        <span>薪资情况：</span>
        <el-select v-model="select_year" placeholder="请选择">
          <el-option
            v-for="item in options_years"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="select_month" placeholder="请选择">
          <el-option
            v-for="item in options_months"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'detail_time', order: 'descending'}"
      border
      stripe
      style="width: 100%;margin-top: 30px;">
      <el-table-column
        prop="detail_number"
        label="银行卡号"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="detail_bank"
        label="开户银行"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="detail_price"
        label="应发工资"
        sortable
        width="">
      </el-table-column>
      <el-table-column
        prop="detail_time"
        label="发放时间"
        sortable
        width="">
      </el-table-column>
    </el-table>
    <div slot="footer" class="dialog-footer" style="margin-top: 30px;">
      <el-button @click="childclose()">取 消</el-button>
      <el-button type="primary" @click="childclose()">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: '90px',
      tableData: [{
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '2019-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '2016-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '2017-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }, {
        detail_number: '41561651651561563123',
        detail_bank: '10111100',
        detail_price: '2016-05-04',
        detail_time: '20198-05-04'
      }],
      options_years: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      options_months: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      select_year: '',
      select_month: ''
    }
  },
  mounted() {
    console.log(1)
  },
  methods: {
    childclose() {
      this.$emit('childclose', false)
    }
  }
}
</script>

<style>
.el-dialog__header {
  border-bottom: 1px solid #ddd;
}
</style>

<style scoped>
.el-form-item {
  margin-bottom: 0;
}
.dialog-footer {
  text-align: right;
}
</style>
