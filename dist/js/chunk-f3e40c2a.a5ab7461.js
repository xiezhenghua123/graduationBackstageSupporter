(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f3e40c2a"],{e822:function(t,n,e){"use strict";e.r(n);var o=e("f946"),i={data:function(){return{data:[],detail:{},dialogTableVisible:!1,columnStyle:function(t){return 1==t.columnIndex?"background:#f3f6fc;font-weight:bold;":"background:#ffffff;"}}},computed:{jobDetail:function(){return[{name:"雇主",value:this.detail.employer},{name:"标题",value:this.detail.content},{name:"职位类型",value:this.detail.type},{name:"工作地点",value:this.detail.position},{name:"学历要求",value:this.detail.education},{name:"薪酬",value:this.detail.payMent},{name:"开始时间",value:this.detail.start},{name:"结束时间",value:this.detail.end},{name:"工作内容",value:this.detail.details},{name:"职位状态",value:this.detail.status}]}},mounted:function(){var t=this;Object(o.g)().then((function(n){t.data=n.data}))},methods:{removeJob:function(t){},clickToJobDetails:function(t){var n=this;Object(o.f)({id:t,type:"partTime"}).then((function(t){n.dialogTableVisible=!0,n.detail=t.data}))}}},a=e("2877"),c=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg-fff"},[e("div",{staticClass:"p-10"},[e("el-table",{attrs:{data:t.data}},[e("el-table-column",{attrs:{label:"职位ID",prop:"id"}}),e("el-table-column",{attrs:{label:"雇主",prop:"employer"}}),e("el-table-column",{attrs:{label:"标题",prop:"job"}}),e("el-table-column",{attrs:{label:"薪酬",prop:"payMent"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.clickToJobDetails(n.row.id)}}},[t._v("查看职位详情")]),e("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.removeJob(n.row.id)}}},[t._v("删除")])]}}])})],1)],1),e("el-dialog",{attrs:{title:"职位详情",visible:t.dialogTableVisible},on:{"update:visible":function(n){t.dialogTableVisible=n}}},[e("el-table",{attrs:{data:t.jobDetail,"show-header":!1,"cell-style":t.columnStyle,border:""}},[e("el-table-column",{attrs:{prop:"name"}}),e("el-table-column",{attrs:{prop:"value"}})],1)],1)],1)}),[],!1,null,null,null);n.default=c.exports},f946:function(t,n,e){"use strict";e.d(n,"h",(function(){return i})),e.d(n,"i",(function(){return a})),e.d(n,"d",(function(){return c})),e.d(n,"j",(function(){return u})),e.d(n,"c",(function(){return l})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return r})),e.d(n,"g",(function(){return f})),e.d(n,"e",(function(){return d})),e.d(n,"f",(function(){return m}));e("d3b7");var o=e("365c"),i=function(){return new Promise((function(t,n){o.a.post("/mock/test/getStatisticsData").then((function(n){t(n)})).catch((function(t){n(t)}))}))},a=function(){return new Promise((function(t,n){o.a.post("/mock/test/getStudentAttestationData").then((function(n){t(n)})).catch((function(t){n(t)}))}))},c=function(){return new Promise((function(t,n){o.a.post("/mock/test/getCompanyAttestationData").then((function(n){t(n)})).catch((function(t){n(t)}))}))},u=function(t){return new Promise((function(n,e){o.a.post("/mock/test/studentConfirm",t).then((function(t){n(t)})).catch((function(t){e(t)}))}))},l=function(t){return new Promise((function(n,e){o.a.post("/mock/test/companyConfirm",t).then((function(t){n(t)})).catch((function(t){e(t)}))}))},r=function(t){return new Promise((function(n,e){o.a.post("/mock/test/cancelStudentConfirm",t).then((function(t){n(t)})).catch((function(t){e(t)}))}))},s=function(t){return new Promise((function(n,e){o.a.post("/mock/test/cancelCompanyConfirm",t).then((function(t){n(t)})).catch((function(t){e(t)}))}))},f=function(){return new Promise((function(t,n){o.a.post("/mock/test/getPartTimeJobData").then((function(n){t(n)})).catch((function(t){n(t)}))}))},d=function(){return new Promise((function(t,n){o.a.post("/mock/test/getFullTimeJobData").then((function(n){t(n)})).catch((function(t){n(t)}))}))},m=function(t){return new Promise((function(n,e){o.a.post("/mock/test/getJobDetail",t).then((function(t){n(t)})).catch((function(t){e(t)}))}))}}}]);