(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-982f7e0c"],{"6e1f":function(t,e,n){"use strict";n.r(e);var i=n("5530"),a=(n("d9e2"),n("f946")),o={data:function(){return{data:[],editData:{},dialogTableVisible:!1,rules:{tel:[{required:!0,message:"请输入联系方式",trigger:["blur","change"]},{pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message:"手机号码格式错误",trigger:["blur","change"]}],name:[{required:!0,message:"请输入姓名",trigger:["blur","change"]},{min:2,message:"名字太短",trigger:["blur","change"]},{max:8,message:"名字太长",trigger:["blur","change"]}],number:{validator:function(t,e,n){e||n(new Error("请输入学号")),"number"!=typeof e&&n(new Error("学号为数字")),12!==String(e).length&&n(new Error("学号格式错误")),n()},trigger:["blur","change"]},college:{type:"string",required:!0,message:"请正确填写学院",trigger:"blur"},major:{type:"string",required:!0,message:"请正确填写专业",trigger:"blur"}}}},mounted:function(){var t=this;Object(a.i)().then((function(e){t.data=e.data}))},methods:{onSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogTableVisible=!1)}))},editConfirm:function(t){this.dialogTableVisible=!0,this.editData=Object(i.a)({},t)},cancelConfirm:function(t,e){var n=this;Object(a.b)({id:t.id,status:e}).then((function(){t.status=!1,n.$message({message:"修改成功",type:"success"})}))},studentConfirm:function(t,e){var n=this;"failed"===e?this.$prompt("请输入认证失败理由","提示",{inputValidator:function(t){if(!t)return"请输入理由"}}).then((function(i){var o=i.value;Object(a.j)({id:t.id,status:e,value:o}).then((function(){t.status=!0,n.$message({message:"提交成功",type:"success"})}))})):Object(a.j)({id:t.id,status:e}).then((function(){t.status=!0,n.$message({message:"提交成功",type:"success"})}))}}},r=n("2877"),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-fff"},[n("div",{staticClass:"pl-10"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data,"highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"80"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),n("el-table-column",{attrs:{prop:"number",label:"学号",width:"150"}}),n("el-table-column",{attrs:{prop:"college",label:"学院",width:"150"}}),n("el-table-column",{attrs:{prop:"major",label:"专业",width:"150"}}),n("el-table-column",{attrs:{prop:"tel",label:"联系电话",width:"120"}}),n("el-table-column",{attrs:{label:"认证状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.status?"已认证":"未认证"))])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?n("div",[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.cancelConfirm(e.row)}}},[t._v("取消认证")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.editConfirm(e.row)}}},[t._v("修改信息")])],1):n("div",{staticClass:"flex"},[n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(n){return t.studentConfirm(e.row,"success")}}},[t._v("通过认证")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.studentConfirm(e.row.id,"failed")}}},[t._v("认证失败")])],1)]}}])})],1),n("el-dialog",{attrs:{"close-on-click-modal":!1,"show-close":"",title:"编辑认证信息",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("el-form",{ref:"form",attrs:{rules:t.rules,model:t.editData,"label-width":"auto"}},[n("el-form-item",{attrs:{label:"姓名:",required:"",prop:"name"}},[n("el-input",{model:{value:t.editData.name,callback:function(e){t.$set(t.editData,"name",e)},expression:"editData.name"}})],1),n("el-form-item",{attrs:{label:"学号:",required:"",prop:"number"}},[n("el-input",{model:{value:t.editData.number,callback:function(e){t.$set(t.editData,"number",t._n(e))},expression:"editData.number"}})],1),n("el-form-item",{attrs:{label:"学院:",required:"",prop:"college"}},[n("el-input",{model:{value:t.editData.college,callback:function(e){t.$set(t.editData,"college",e)},expression:"editData.college"}})],1),n("el-form-item",{attrs:{label:"专业:",required:"",prop:"major"}},[n("el-input",{model:{value:t.editData.major,callback:function(e){t.$set(t.editData,"major",e)},expression:"editData.major"}})],1),n("el-form-item",{attrs:{label:"联系电话:",required:"",prop:"tel"}},[n("el-input",{model:{value:t.editData.tel,callback:function(e){t.$set(t.editData,"tel",e)},expression:"editData.tel"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),n("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("取消")])],1)],1)],1)],1)])}),[],!1,null,"648fbfc0",null);e.default=c.exports},f946:function(t,e,n){"use strict";n.d(e,"h",(function(){return a})),n.d(e,"i",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"j",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return d}));n("d3b7");var i=n("365c"),a=function(){return new Promise((function(t,e){i.a.post("/mock/test/getStatisticsData").then((function(e){t(e)})).catch((function(t){e(t)}))}))},o=function(){return new Promise((function(t,e){i.a.post("/mock/test/getStudentAttestationData").then((function(e){t(e)})).catch((function(t){e(t)}))}))},r=function(){return new Promise((function(t,e){i.a.post("/mock/test/getCompanyAttestationData").then((function(e){t(e)})).catch((function(t){e(t)}))}))},c=function(t){return new Promise((function(e,n){i.a.post("/mock/test/studentConfirm",t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},u=function(t){return new Promise((function(e,n){i.a.post("/mock/test/companyConfirm",t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},l=function(t){return new Promise((function(e,n){i.a.post("/mock/test/cancelStudentConfirm",t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},s=function(t){return new Promise((function(e,n){i.a.post("/mock/test/cancelCompanyConfirm",t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},f=function(){return new Promise((function(t,e){i.a.post("/mock/test/getPartTimeJobData").then((function(e){t(e)})).catch((function(t){e(t)}))}))},m=function(){return new Promise((function(t,e){i.a.post("/mock/test/getFullTimeJobData").then((function(e){t(e)})).catch((function(t){e(t)}))}))},d=function(t){return new Promise((function(e,n){i.a.post("/mock/test/getJobDetail",t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}}}]);