(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-65e592bc"],{"46c0":function(t,n,c){"use strict";c("b311")},"8cdb":function(t,n,c){"use strict";c.r(n);var e={beforeRouteLeave:function(t,n,c){clearInterval(this.inter),c()},data:function(){return{inter:null,countdown:5}},mounted:function(){var t=this;this.inter=setInterval((function(){t.countdown--,0==t.countdown&&(clearInterval(t.inter),t.goBack())}),1e3)},methods:{goBack:function(){this.$router.push("/")}}},i=(c("46c0"),c("2877")),s=Object(i.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"notfound"},[n("svg-icon",{attrs:{name:"404"}}),n("div",{staticClass:"content"},[n("h1",[this._v("404")]),n("div",{staticClass:"desc"},[this._v("抱歉，你访问的页面不存在")]),n("el-button",{attrs:{type:"primary"},on:{click:this.goBack}},[this._v(this._s(this.countdown)+"秒后，返回首页")])],1)],1)}),[],!1,null,"6477ca1c",null);n.default=s.exports},b311:function(t,n,c){}}]);