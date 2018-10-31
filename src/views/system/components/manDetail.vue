<template>
  <div class="dialog-container">
    <el-form>
      <el-row style="margin-bottom: 20px">
        <el-col :span="20">
          <el-form-item :label-width="formLabelWidth" label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 20px">
        <el-col :span="20">
          <el-form-item :label-width="formLabelWidth" label="手机号(账号)">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 20px">
        <el-col :span="20">
          <el-form-item :label-width="formLabelWidth" label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item :label-width="formLabelWidth" label="权限">
        <el-row v-for="(item,index) in checkBoxAll" :key="item.label">
          <el-col :span="20" style="margin-bottom:-10px;">
            <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="handleCheckAllChange($event, index)">{{ item.label }}</el-checkbox>
            <el-checkbox-group v-model="item.checked" style="margin-top: -15px;" @change="handleCheckedCitiesChange($event, index)">
              <el-checkbox v-for="item_son in item.checkBox" :label="item_son" :key="item_son">{{ item_son }}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
      </el-form-item>
      <el-row style="margin-top: 10px">
        <el-col :span="20">
          <el-form-item :label-width="formLabelWidth" label="账号状态">
            <el-radio v-model="form.radio" label="1">开启</el-radio>
            <el-radio v-model="form.radio" label="2">关闭</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-top: 30px;">
      <el-button @click="childclose">取 消</el-button>
      <el-button type="primary" @click="childclose">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: '110px',
      form: {
        name: '',
        mobile: '',
        password: '',
        radio: '1'
      },
      checkBoxAll: [{
        label: '客户管理',
        isIndeterminate: true,
        checkAll: false,
        checked: ['查看'],
        checkBox: ['查看', '删除', '修改', '添加']
      }, {
        label: '用户管理',
        isIndeterminate: true,
        checkAll: false,
        checked: ['查看'],
        checkBox: ['查看']
      }, {
        label: '财务管理',
        isIndeterminate: true,
        checkAll: false,
        checked: ['查看'],
        checkBox: ['查看', '发放']
      }, {
        label: '系统设置',
        isIndeterminate: true,
        checkAll: false,
        checked: ['查看'],
        checkBox: ['查看', '编辑']
      }]
    }
  },
  mounted() {
    console.log(1)
  },
  methods: {
    childclose() {
      this.$emit('childclose', false)
    },
    handleCheckAllChange(val, index) {
      this.checkBoxAll[index].checked = val ? this.checkBoxAll[index].checkBox : []
      this.checkBoxAll[index].isIndeterminate = false
    },
    handleCheckedCitiesChange(val, index) {
      const checkedCount = val.length
      this.checkBoxAll[index].checkAll = checkedCount === this.checkBoxAll[index].checkBox.length
      this.checkBoxAll[index].isIndeterminate = checkedCount > 0 && checkedCount < this.checkBoxAll[index].checkBox.length
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
