webpackJsonp([4],{"3cXf":function(e,o,r){e.exports={default:r("L+o2"),__esModule:!0}},IBNy:function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=r("3cXf"),i=r.n(t),l={name:"PersonalCenter",data:function(){return{profile:{name:"Yang",bio:"Seas the world",email:"seas@gmail.com",phone:"12345678910",post:"公司.技术部.前端开发工程师",location:"广东-深圳"},profileForm:{logo:"",name:"Yang",bio:"Seas the world",email:"seas@gmail.com",phone:"12345678910",post:"公司.技术部.前端开发工程师",location:"广东-深圳"},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],post:[{required:!0,message:"请输入职位信息",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var o=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;o.profile=JSON.parse(i()(o.profileForm))})},handleReset:function(e){this.$refs[e].resetFields(),this.profileForm=JSON.parse(i()(this.profile))},handleAvatarSuccess:function(e,o){this.profileForm.logo=URL.createObjectURL(o.raw)},beforeAvatarUpload:function(e){var o="image/jpeg"===e.type,r=e.size/1024/1024<2;return o||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),o&&r}}},a={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"main__personalCenter"},[t("aside",{staticClass:"personalCenter__profile"},[t("div",{staticClass:"profileBox"},[t("section",{staticClass:"profile__main"},[t("img",{staticClass:"profile__logo",attrs:{src:r("9Mh+")}}),e._v(" "),t("p",{staticClass:"profile__name"},[e._v(e._s(e.profile.name))]),e._v(" "),t("p",{staticClass:"profile__motto"},[e._v(e._s(e.profile.bio))])]),e._v(" "),t("section",{staticClass:"profile__detail"},[t("p",[t("i",{staticClass:"icon-email"}),e._v(e._s(e.profile.email))]),e._v(" "),t("p",[t("i",{staticClass:"icon-smartphone"}),e._v(e._s(e.profile.phone))]),e._v(" "),t("p",[t("i",{staticClass:"icon-people"}),e._v(e._s(e.profile.post))]),e._v(" "),t("p",[t("i",{staticClass:"icon-navigation-"}),e._v(e._s(e.profile.location))])])])]),e._v(" "),t("main",{staticClass:"personalCenter__setting"},[t("el-form",{ref:"profileForm",staticClass:"demo-profile",attrs:{model:e.profileForm,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"头像",prop:"logo"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.profileForm.logo?t("img",{staticClass:"avatar",attrs:{src:e.profileForm.logo}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{model:{value:e.profileForm.name,callback:function(o){e.$set(e.profileForm,"name",o)},expression:"profileForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"简介",prop:"bio"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.profileForm.bio,callback:function(o){e.$set(e.profileForm,"bio",o)},expression:"profileForm.bio"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.profileForm.email,callback:function(o){e.$set(e.profileForm,"email",o)},expression:"profileForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{model:{value:e.profileForm.phone,callback:function(o){e.$set(e.profileForm,"phone",o)},expression:"profileForm.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"职位",prop:"post"}},[t("el-input",{model:{value:e.profileForm.post,callback:function(o){e.$set(e.profileForm,"post",o)},expression:"profileForm.post"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"地址",prop:"location"}},[t("el-input",{model:{value:e.profileForm.location,callback:function(o){e.$set(e.profileForm,"location",o)},expression:"profileForm.location"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.handleSubmit("profileForm")}}},[e._v("保存")]),e._v(" "),t("el-button",{on:{click:function(o){return e.handleReset("profileForm")}}},[e._v("重置")])],1)],1)],1)])},staticRenderFns:[]};var s=r("C7Lr")(l,a,!1,function(e){r("Miv1")},"data-v-5b1ba106",null);o.default=s.exports},"L+o2":function(e,o,r){var t=r("ZuHZ"),i=t.JSON||(t.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},Miv1:function(e,o){}});
//# sourceMappingURL=4.c0132bdfbcc64ee9158e.js.map