(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-03ae"],{"8Ltd":function(e,t,l){"use strict";l.r(t);var a={data:function(){return{formLabelWidth:"90px",tableData:[{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"2019-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"2016-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"2017-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"},{detail_number:"41561651651561563123",detail_bank:"10111100",detail_price:"2016-05-04",detail_time:"20198-05-04"}],options_years:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],options_months:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],select_year:"",select_month:""}},mounted:function(){console.log(1)},methods:{childclose:function(){this.$emit("childclose",!1)}}},i=(l("LP5K"),l("hGfw"),l("KHd+")),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"dialog-container"},[l("el-form",[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"头像"}},[l("span",[e._v("我是头像")])])],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"昵称"}},[l("span",[e._v("阿斯达斯")])])],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"OpenDI"}},[l("span",[e._v("1556165165")])])],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"姓名"}},[l("span",[e._v("李思航")])])],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"证件号"}},[l("span",[e._v("362324199501091893")])])],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"证件类型"}},[l("span",[e._v("身份证")])])],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"所属公司"}},[l("span",[e._v("占先科技有限公司")])])],1)],1)],1),e._v(" "),l("el-row",{staticStyle:{"padding-top":"30px","border-top":"1px solid #ddd","margin-top":"20px"},attrs:{gutter:20}},[l("el-col",[l("span",[e._v("薪资情况：")]),e._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.select_year,callback:function(t){e.select_year=t},expression:"select_year"}},e._l(e.options_years,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.select_month,callback:function(t){e.select_month=t},expression:"select_month"}},e._l(e.options_months,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.tableData,"default-sort":{prop:"detail_time",order:"descending"},border:"",stripe:""}},[l("el-table-column",{attrs:{prop:"detail_number",label:"银行卡号",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"detail_bank",label:"开户银行",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"detail_price",label:"应发工资",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"detail_time",label:"发放时间",sortable:"",width:""}})],1),e._v(" "),l("div",{staticClass:"dialog-footer",staticStyle:{"margin-top":"30px"},attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.childclose}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.childclose}},[e._v("确 定")])],1)],1)},[],!1,null,"12826ce8",null);r.options.__file="dialogDetail.vue";var s={components:{DialogDetail:r.exports},data:function(){return{search_text:"",dialogFormVisible:!1,tableData:[{user_img:"头像3",user_nickname:"10111100",user_name:"2016-05-04",user_mobile:"2016-05-04",user_address:"2016-05-04",user_idcard:"2016-05-04",user_card:"2016-05-04"},{user_img:"头像2",user_nickname:"10111234100",user_name:"2016-05-04",user_mobile:"2016-05-04",user_address:"2016-05-04",user_idcard:"2016-05-04",user_card:"2016-05-04"},{user_img:"头像1",user_nickname:"1011132100",user_name:"2016-05-04",user_mobile:"2016-05-04",user_address:"2016-05-04",user_idcard:"2016-05-04",user_card:"2016-05-04"},{user_img:"头像4",user_nickname:"1013511100",user_name:"2016-05-04",user_mobile:"2016-05-04",user_address:"2016-05-04",user_idcard:"2016-05-04",user_card:"2016-05-04"}]}},methods:{delete_user:function(){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},childclose:function(e){this.dialogFormVisible=e}}},o=(l("pHhJ"),Object(i.a)(s,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-row",[l("el-col",{staticStyle:{"margin-bottom":"26px"},attrs:{span:7}},[l("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.search_text,callback:function(t){e.search_text=t},expression:"search_text"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"},[e._v("搜索")])],1)],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"default-sort":{prop:"user_name",order:"descending"},border:"",stripe:""}},[l("el-table-column",{attrs:{prop:"user_img",label:"头像",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"user_nickname",label:"昵称",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"user_name",label:"姓名",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"user_mobile",label:"手机号",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"user_address",label:"所属公司",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"user_idcard",label:"证件号",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"user_card",label:"证件类型",sortable:"",width:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"user_option",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("查看")]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){e.delete_user()}}},[e._v("删除")])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{visible:e.dialogFormVisible,fullscreen:"",title:"查看详情"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("dialog-detail",{on:{childclose:e.childclose}})],1)],1)},[],!1,null,"bcb858fa",null));o.options.__file="index.vue";t.default=o.exports},AzwZ:function(e,t,l){},IhMG:function(e,t,l){},LP5K:function(e,t,l){"use strict";var a=l("AzwZ");l.n(a).a},Rf6J:function(e,t,l){},hGfw:function(e,t,l){"use strict";var a=l("Rf6J");l.n(a).a},pHhJ:function(e,t,l){"use strict";var a=l("IhMG");l.n(a).a}}]);