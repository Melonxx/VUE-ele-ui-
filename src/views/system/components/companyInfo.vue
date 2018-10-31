<template>
  <div class="app-container">
    <el-form :model="form">
      <el-row>
        <el-col :span="14">
          <el-form-item :label-width="formLabelWidth" label="平台名称">
            <el-input :disabled="editor" v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item :label-width="formLabelWidth" label="公司地址">
            <upload-logo :editor="editor"></upload-logo>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item :label-width="formLabelWidth" label="客服电话">
            <el-input :disabled="editor" v-model="form.mobile1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="2">
          <h4>打款设置</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item :label-width="formLabelWidth" label="开户银行">
            <el-input :disabled="editor" v-model="form.bank"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item :label-width="formLabelWidth" label="银行卡号">
            <el-input :disabled="editor" v-model="form.bankcard"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item :label-width="formLabelWidth" label="充值客服">
            <el-input :disabled="editor" v-model="form.mobile2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="2">
          <el-button :type="editor_type" @click="editorFn">{{ editor_text }}</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import uploadLogo from './uploadLogo'
export default {
  components: {
    uploadLogo
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
      editor: true,
      editor_text: '　　编辑　　',
      editor_type: 'primary',
      formLabelWidth: '140px',
      form: {}
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    editorFn() {
      if (this.editor) {
        this.editor_text = '　　　保存　　　'
        this.editor = false
        this.editor_type = 'success'
      } else {
        this.editor_text = '　　编辑　　'
        this.editor = true
        this.editor_type = 'primary'
      }
    }
  }
}
</script>

