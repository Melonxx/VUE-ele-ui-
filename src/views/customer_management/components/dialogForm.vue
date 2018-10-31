<template>
  <div class="dialog-container">
    <el-form :model="form">
      <el-row>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="客户编号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="公司名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="客户类型">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="联系人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="公司地址">
            <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="form.desc" type="textarea" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="联系方式">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="职位">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="登录账号(手机号)">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="邮箱">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="登录密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="行业">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item :label-width="formLabelWidth" label="有效时间">
            <el-date-picker
              :picker-options="pickerOptions2"
              v-model="form.date"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="——"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="childclose()">取 消</el-button>
      <el-button type="primary" @click="childclose()">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '150px',
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
      }
    }
  },
  mounted() {
    console.log(1)
    // console.log(this.dialogFormVisible)
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
.dialog-footer {
  text-align: right;
}
</style>
