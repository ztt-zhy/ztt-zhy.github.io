(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55aca02d"],{"261e":function(n,t,e){"use strict";e.d(t,"f",(function(){return i})),e.d(t,"h",(function(){return u})),e.d(t,"g",(function(){return s})),e.d(t,"m",(function(){return p})),e.d(t,"e",(function(){return f})),e.d(t,"d",(function(){return d})),e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return m})),e.d(t,"n",(function(){return b})),e.d(t,"u",(function(){return v})),e.d(t,"w",(function(){return w})),e.d(t,"v",(function(){return g})),e.d(t,"p",(function(){return h})),e.d(t,"q",(function(){return k})),e.d(t,"l",(function(){return x})),e.d(t,"x",(function(){return _})),e.d(t,"k",(function(){return y})),e.d(t,"i",(function(){return $})),e.d(t,"t",(function(){return O})),e.d(t,"o",(function(){return P})),e.d(t,"s",(function(){return j})),e.d(t,"r",(function(){return C})),e.d(t,"j",(function(){return R})),e.d(t,"c",(function(){return S}));e("845c");var r=e("be3b");function a(n,t){return new Promise((function(e,a){r["a"].get(n,{params:t}).then((function(n){e(n.data)})).catch((function(n){a(n.data)}))}))}function o(n,t){return new Promise((function(e,a){r["a"].post(n,t).then((function(n){e(n.data)})).catch((function(n){a(n.data)}))}))}function c(n,t){return new Promise((function(e,a){r["a"].put(n,t).then((function(n){e(n.data)})).catch((function(n){a(n.data)}))}))}var i=function(n){return o("/api/app/login",n)},u=function(n){return o("/api/app/smsCode",n)},s=function(n){return o("/api/app/password",n)},p=function(n){return a("/api/app/getUCenterInfo?",n)},f=function(n){return a("/api/app/userInfo",n)},d=function(n){return c("/api/app/user",n)},l=function(n){return a("/api/app/module/attribute/1?",n)},m=function(n){return o("/api/app/public/img",n)},b=function(n){return a("/api/app/collect",n)},v=function(n){return c("api/app/collect/cancel/".concat(n,"/2"))},w=function(n){return a("/api/app/collect",n)},g=function(n){return c("/api/app/collect/cancel/".concat(n,"/1"))},h=function(n){return o("/api/app/message/classifyMessage",n)},k=function(n){return o("/api/app/message/getMessage",n)},x=function(n){return o("/api/app/feedback",n)},_=function(n){return a("/api/app/vip/grade",n)},y=function(n){return o("/api/app/order/downOrder",n)},$=function(n){return a("/api/app/coin/coinRank",n)},O=function(n){return o("/api/app/pay",n)},P=function(n){return a("/api/app/coin/item",n)},j=function(n){return a("/api/app/myStudy/".concat(n,"?"))},C=function(n){return o("/api/app/myOrder",n)},R=function(n){return o("/api/app/myOrder/detail",n)},S=function(n){return a("/api/app/sonArea/"+n)}},3890:function(n,t,e){},"4e5f":function(n,t,e){"use strict";e("3890")},e417:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"forgetPass"},[e("div",{staticClass:"header"},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(t){return n.$router.go(-1)}}}),e("p",[n._v("找回密码")]),e("p")],1),e("div",{staticClass:"van-form"},[e("div",{staticClass:"yan"},[e("van-field",{attrs:{name:"用户名",label:"",placeholder:"请输入手机号"},model:{value:n.mobile,callback:function(t){n.mobile=t},expression:"mobile"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.flag,expression:"!flag"}],on:{click:n.editPass}},[n._v("获取验证码")]),e("span",{directives:[{name:"show",rawName:"v-show",value:n.flag,expression:"flag"}],staticStyle:{color:"#ccc"}},[n._v("获取验证码("+n._s(n.count)+")")])],1),e("van-field",{attrs:{name:"验证码",label:"",placeholder:"请输入验证码"},model:{value:n.sms_code,callback:function(t){n.sms_code=t},expression:"sms_code"}}),e("van-field",{attrs:{name:"密码",label:"",placeholder:"请输入密码"},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}}),e("div",{staticStyle:{margin:"0.3rem"}},[e("van-button",{attrs:{round:"",block:"",type:"warning","native-type":"submit"},on:{click:n.onSubmit}},[n._v("确定")])],1)],1)])},a=[],o=(e("6a61"),e("2e91")),c=e("261e"),i={name:"",props:[],components:{},data:function(){return{sms_code:"",password:"",mobile:"",sms_type:"getPassword",count:"",flag:!1}},computed:{},watch:{},methods:{onSubmit:function(n){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=/^1[3|4|5|7|8][0-9]{9}$/,a=/^[0-9]{6,12}$/,o=/^[0-9]{6}$/,!r.test(t.mobile)){e.next=20;break}if(!o.test(t.sms_code)){e.next=17;break}if(!a.test(t.password)){e.next=14;break}return e.next=8,Object(c["g"])({mobile:t.mobile,password:t.password,sms_code:t.sms_code,type:t.type});case 8:i=e.sent,console.log("submit",n),console.log(i),200==i.code&&(t.$toast.success("修改成功"),t.$router.push("/login")),e.next=15;break;case 14:t.$toast("密码必须是6-12位的数字");case 15:e.next=18;break;case 17:t.$toast("验证码必须是6位的数字");case 18:e.next=21;break;case 20:t.$toast("请输入正确的手机号");case 21:case"end":return e.stop()}}),e)})))()},editPass:function(){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=/^1[3|4|5|7|8][0-9]{9}$/,!e.test(n.mobile)){t.next=9;break}return t.next=4,Object(c["h"])({mobile:n.mobile,sms_type:n.sms_type});case 4:r=t.sent,200==r.code&&(n.$toast.success("发送成功"),a=60,n.count=a,n.flag=!0,setInterval((function(){n.count>0&&n.count<=a?n.count--:n.flag=!1}),1e3)),console.log(r),t.next=10;break;case 9:n.$toast("请输入正确的手机号");case 10:case"end":return t.stop()}}),t)})))()}},created:function(){},mounted:function(){}},u=i,s=(e("4e5f"),e("c701")),p=Object(s["a"])(u,r,a,!1,null,"3727c108",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-55aca02d.22bcd7af.js.map