(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-477289b5"],{1232:function(e,t,i){"use strict";var n=i("73ce"),s=i.n(n);s.a},"73ce":function(e,t,i){},ee96:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("ul",[i("li",{class:["d-flex item",{editing:"name"===e.currentEdit.status}]},[i("p",{staticClass:"item-title"},[e._v(" 姓名 ")]),i("div",{staticClass:"view"},[i("label",{on:{dblclick:function(t){return e.editMode("name")}}},[e._v(e._s(e.user.name))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentEdit.name,expression:"currentEdit.name"},{name:"focus",rawName:"v-focus",value:"email"===e.currentEdit.status,expression:"currentEdit.status === 'email'"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:e.currentEdit.name},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doneEdit(t)}],blur:e.doneEdit,input:function(t){t.target.composing||e.$set(e.currentEdit,"name",t.target.value)}}})]),i("li",{class:["d-flex item",{editing:"email"===e.currentEdit.status}]},[i("p",{staticClass:"item-title"},[e._v(" 電子郵件 ")]),i("div",{staticClass:"view"},[i("label",{on:{dblclick:function(t){return e.editMode("email")}}},[e._v(e._s(e.user.email))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentEdit.email,expression:"currentEdit.email"},{name:"focus",rawName:"v-focus",value:"email"===e.currentEdit.status,expression:"currentEdit.status === 'email'"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:e.currentEdit.email},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doneEdit(t)}],blur:e.doneEdit,input:function(t){t.target.composing||e.$set(e.currentEdit,"email",t.target.value)}}})])])])},s=[],r=(i("b0c0"),i("a9e3"),i("5530")),a={id:1,name:"Tony",email:"tony123@gmail.com"},u={name:"PersonalInfo",directives:{focus:function(e,t){t.value&&e.focus()}},data:function(){return{currentEdit:{},user:{id:Number,name:"",email:""}}},created:function(){this.fetchUser()},methods:{fetchUser:function(){var e=a.id,t=a.name,i=a.email;this.user.id=e,this.user.name=t,this.user.email=i},editMode:function(e){this.currentEdit=Object(r["a"])({},this.user),this.currentEdit.status=e},doneEdit:function(){this.currentEdit.status&&(this.user=Object(r["a"])({},this.currentEdit),this.currentEdit={})},cancelEdit:function(){this.currentEdit={}}}},c=u,d=(i("1232"),i("2877")),l=Object(d["a"])(c,n,s,!1,null,"42eded45",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-477289b5.7f8d4073.js.map