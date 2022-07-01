(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7b2f316"],{"24b8":function(t,e,a){"use strict";var n=a("7b0e"),r=a.n(n);r.a},"7b0e":function(t,e,a){},a92a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main-container"},[a("div",{staticClass:"path"},[t._v(" 首頁 / 場地租借 / "),a("span",[t._v(" "+t._s(t.room.name)+" ")])]),a("div",{staticClass:"wrapper-main d-flex"},[a("div",{staticClass:"room-img"},[a("img",{attrs:{src:t.room.img,alt:""}})]),a("div",{staticClass:"\n          detail\n          d-flex\n          flex-column\n          justify-content-start\n          align-items-start\n        "},[a("h1",{staticClass:"room-name originalFontStyle"},[t._v(" 教室名稱 "+t._s(t.room.name)+" ")]),a("p",{staticClass:"room-headCount originalFontStyle mb-4"},[t._v(" 適合人數： "+t._s(t.room.headCount)+" 人 ")]),a("div",{staticClass:"room-usage originalFontStyle d-flex mb-4"},[t._v(" 適合用途： "),t._l(t.room.usages,(function(e){return a("div",{key:e.index},[t._v(" "+t._s(e)+" ")])}))],2),a("div",{staticClass:"room-equipment originalFontStyle d-flex mb-4"},[t._v(" 場地設備： "),a("div",[t._v(" "+t._s(t.room.equipment)+" ")])]),a("p",{staticClass:"room-introduction originalFontStyle mb-4"},[t._v(" 介紹： "+t._s(t.room.introduction)+" ")])])]),a("div",{staticClass:"horizon mb-4"}),a("div",{staticClass:"wrapper-order-info"},[t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"wrapper-calendar"},[t._m(4),a("FunctionalCalendar",{ref:"Calendar",staticClass:"calendar multiple",attrs:{"sunday-start":!0,"is-date-range":!0,transition:!0,"is-layout-expandable":!0,"change-month-function":!0,"change-year-function":!0,"marked-dates":t.markedDates},on:{changedMonth:t.changedMonth,changedYear:t.changedYear},model:{value:t.calendarData,callback:function(e){t.calendarData=e},expression:"calendarData"}})],1),t._m(5),a("div",{staticClass:"rental-period"},[a("div",{staticClass:"time d-flex align-items-center"},[a("p",{staticClass:"originalFontStyle"},[t._v(" 租借時段： ")]),a("label",{staticClass:"mr-3",attrs:{for:"morning"},on:{click:function(e){return t.changePeriod("morning")}}},[a("input",{attrs:{id:"morning",type:"radio",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("上午")])]),a("label",{staticClass:"mr-3",attrs:{for:"noon"},on:{click:function(e){return t.changePeriod("noon")}}},[a("input",{attrs:{id:"noon",type:"radio",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("下午")])]),a("label",{attrs:{for:"night"},on:{click:function(e){return t.changePeriod("night")}}},[a("input",{attrs:{id:"night",type:"radio",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("晚上")])])]),"morning"===t.rentalPeriod?a("div",{staticClass:"during d-flex"},[t._m(6),t._m(7),t._m(8),t._m(9)]):t._e(),"noon"===t.rentalPeriod?a("div",{staticClass:"during d-flex"},[t._m(10),t._m(11),t._m(12),t._m(13),t._m(14)]):t._e(),"night"===t.rentalPeriod?a("div",{staticClass:"during d-flex"},[t._m(15),t._m(16),t._m(17),t._m(18)]):t._e(),t._m(19),t.rentalPeriod?a("router-link",{staticClass:"confirm-btn",attrs:{to:"/confirm"}},[t._v(" 完成租借 ")]):t._e()],1)])]),a("iframe",{staticStyle:{border:"0",margin:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.053119457709!2d121.60187201599136!3d25.100063141791864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442add9a2c10a43%3A0xc7c0a2ded7d590d3!2z5aW954mn5Lq66I6K5ZyS!5e0!3m2!1szh-TW!2stw!4v1652838585532!5m2!1szh-TW!2stw",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item d-flex flex-column text-left justify-content-between"},[a("label",{attrs:{for:""}},[t._v("租借人姓名（必填）")]),a("input",{attrs:{id:"renter-name",type:"text"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item d-flex flex-column text-left justify-content-between"},[a("label",{attrs:{for:""}},[t._v("租借人電話（必填）")]),a("input",{attrs:{id:"renter-phone",type:"number"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item d-flex flex-column text-left justify-content-between"},[a("label",{attrs:{for:""}},[t._v("租借人Email")]),a("input",{attrs:{id:"renter-email",type:"Email"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item d-flex flex-column text-left justify-content-between"},[a("label",{attrs:{for:""}},[t._v("所在小組（必填）")]),a("select",{attrs:{id:"group",name:"group"}},[a("option",{attrs:{value:""}},[t._v(" 請選擇所在小組 ")]),a("option",{attrs:{value:""}},[t._v(" 和平一 ")]),a("option",{attrs:{value:"LED"}},[t._v(" 和平二 ")]),a("option",{attrs:{value:"LED"}},[t._v(" 青橄欖 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accommodation d-flex justify-content-between align-items-center"},[a("p",{staticClass:"originalFontStyle"},[t._v(" 租借時間： ")]),a("div",{staticClass:"d-flex align-items-center"},[a("input",{attrs:{type:"checkbox"}}),a("p",{staticClass:"originalFontStyle"},[t._v(" 需要住宿 ")]),a("p",{staticClass:"chechInOut-time originalFontStyle"},[t._v(" （請選擇入住與退房時間） ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item d-flex justify-content-between align-items-center"},[a("label",{attrs:{for:""}},[t._v("租借目的：")]),a("select",{staticClass:"rental-purpose"},[a("option",{attrs:{value:""}},[t._v(" 請選擇租借目的 ")]),a("option",{attrs:{value:""}},[t._v(" 目的一 ")]),a("option",{attrs:{value:""}},[t._v(" 目的二 ")]),a("option",{attrs:{value:""}},[t._v(" 目的三 ")]),a("option",{attrs:{value:""}},[t._v(" 目的四 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"8-9"}},[a("input",{attrs:{id:"8-9",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("8:00 - 9:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"9-10"}},[a("input",{attrs:{id:"9-10",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("9:00 - 10:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"10-11"}},[a("input",{attrs:{id:"10-11",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("10:00 - 11:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"11-12"}},[a("input",{attrs:{id:"11-12",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("11:00 - 12:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"12-13"}},[a("input",{attrs:{id:"12-13",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("12:00 - 13:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"13-14"}},[a("input",{attrs:{id:"13-14",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("13:00 - 14:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"14-15"}},[a("input",{attrs:{id:"14-15",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("14:00 - 15:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"15-16"}},[a("input",{attrs:{id:"15-16",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("15:00 - 16:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"17-18"}},[a("input",{attrs:{id:"17-18",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("17:00 - 18:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"18-19"}},[a("input",{attrs:{id:"18-19",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("18:00 - 19:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"19-20"}},[a("input",{attrs:{id:"19-20",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("19:00 - 20:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"20-21"}},[a("input",{attrs:{id:"20-21",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("20:00 - 21:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"21-22"}},[a("input",{attrs:{id:"21-22",type:"checkbox",name:"variety"}}),a("span",{staticClass:"round button"},[t._v("21:00 - 22:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-items-center justify-content-start mt-4"},[a("input",{staticClass:"rental-terms",attrs:{type:"checkbox"}}),a("p",{staticClass:"originalFontStyle"},[t._v(" 我同意租借條款 ")])])}],s=(a("b0c0"),a("5530")),i={room:{id:1,name:"教室一",headCount:"1-3",headCountMin:1,headCountMax:3,usages:["會議","小組","聚餐","娛樂","親子"],equipment:"音響",introduction:"介紹介紹",img:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171"}},o={data:function(){return{room:{},rentalPeriod:""}},created:function(){this.fetchRoom()},methods:{fetchRoom:function(){var t=i.room;this.room=Object(s["a"])(Object(s["a"])({},this.room),{},{id:t.id,name:t.name,usages:t.usages,equipment:t.equipment,headCount:t.headCount,introduction:t.introduction,img:t.img})},changePeriod:function(t){this.rentalPeriod=t}}},l=o,c=(a("24b8"),a("2877")),u=Object(c["a"])(l,n,r,!1,null,"9341ebdc",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-f7b2f316.23c89b2c.js.map