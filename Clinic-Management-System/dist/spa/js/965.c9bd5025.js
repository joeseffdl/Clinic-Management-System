"use strict";(self["webpackChunkclinic_management_system"]=self["webpackChunkclinic_management_system"]||[]).push([[965],{1965:(e,a,l)=>{l.r(a),l.d(a,{default:()=>V});var s=l(3673),r=l(8880);const t={class:"row justify-center align-center",style:{height:"55vh"}},i={class:"col-xs-12 col-md-6 q-px-xl self-center"},o=(0,s._)("div",{class:"div-row row full-width justify-center"},[(0,s._)("div",{class:"row fit items-end justify-center text-bold text-center text-h5"},[(0,s.Uk)(" Sign up to Best "),(0,s._)("span",{class:"text-primary"},"Byte")]),(0,s._)("div",{class:"row fit justify-center align-center q-mt-md"},[(0,s.Uk)(" By creating an account, you agree to our "),(0,s._)("a",{href:"terms-of-service/",target:"blank"},"Terms of Service")]),(0,s._)("div",{class:"row fit justify-center align-center"},[(0,s.Uk)(" and have read and understand the "),(0,s._)("a",{href:"privacy-policy/",target:"blank"},"Privacy Policy.")])],-1),m={class:"gt-sm col-md-6 self-center q-mt-xl"};function d(e,a,l,d,n,u){const c=(0,s.up)("q-input"),p=(0,s.up)("q-icon"),f=(0,s.up)("q-btn"),w=(0,s.up)("q-form"),y=(0,s.up)("q-carousel-slide"),g=(0,s.up)("q-carousel"),h=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(h,{class:"bg-secondary q-pa-xl"},{default:(0,s.w5)((()=>[(0,s._)("div",t,[(0,s._)("div",i,[o,(0,s.Wm)(w,{class:"q-mt-lg",onSubmit:(0,r.iM)(e.submitForm,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:e.formData.firstName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.formData.firstName=a),type:"text",dense:"",color:"primary",label:"First Name",standout:"bg-accent text-white",clearable:"","clear-icon":"mdi-close",rules:[e=>!!e||"Field is required!"]},null,8,["modelValue","rules"]),(0,s.Wm)(c,{modelValue:e.formData.lastName,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formData.lastName=a),type:"text",square:"",filled:"",dense:"",color:"primary",label:"Last Name",clearable:"","clear-icon":"mdi-close",rules:[e=>!!e||"Field is required!"]},null,8,["modelValue","rules"]),(0,s.Wm)(c,{modelValue:e.formData.email,"onUpdate:modelValue":a[2]||(a[2]=a=>e.formData.email=a),type:"email",square:"",filled:"",dense:"",color:"primary",label:"Email",clearable:"","clear-icon":"mdi-close",rules:[e=>!!e||"Email is required!"]},null,8,["modelValue","rules"]),(0,s.Wm)(c,{ref:"FieldPassword",modelValue:e.formData.password,"onUpdate:modelValue":a[4]||(a[4]=a=>e.formData.password=a),square:"",filled:"",dense:"",color:"primary",label:"Password",type:e.isPwd?"password":"","lazy-rules":"",clearable:"","clear-icon":"mdi-close",rules:e.Required},{append:(0,s.w5)((()=>[(0,s.Wm)(p,{name:e.isPwd?"mdi-eye":"mdi-eye-off",onClick:a[3]||(a[3]=a=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,s.Wm)(c,{ref:"FieldPasswordConfirm",modelValue:e.formData.password_confirm,"onUpdate:modelValue":a[6]||(a[6]=a=>e.formData.password_confirm=a),square:"",filled:"",dense:"",color:"primary",label:"Confirm Password",type:e.isPwd?"password":"","lazy-rules":"",clearable:"","clear-icon":"mdi-close",rules:e.Confirm},{append:(0,s.w5)((()=>[(0,s.Wm)(p,{name:e.isPwd?"mdi-eye":"mdi-eye-off",onClick:a[5]||(a[5]=a=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,s.Wm)(f,{class:"full-width q-mb-md",color:"primary",type:"submit",label:"Sign Up",size:"1em"})])),_:1},8,["onSubmit"])]),(0,s._)("div",m,[(0,s.Wm)(g,{modelValue:e.slide,"onUpdate:modelValue":a[7]||(a[7]=a=>e.slide=a),animated:"",navigation:"",infinite:"",autoplay:e.autoplay,swipeable:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:a[8]||(a[8]=a=>e.autoplay=!1),onMouseleave:a[9]||(a[9]=a=>e.autoplay=!0)},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}),(0,s.Wm)(y,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),(0,s.Wm)(y,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,s.Wm)(y,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})])),_:1},8,["modelValue","autoplay"])])])])),_:1})}var n=l(1959),u=l(52),c=l.n(u);const p=(0,s.aZ)({name:"Signup",setup(){return{isPwd:(0,n.iH)(!0),text:(0,n.iH)(""),slide:(0,n.iH)(1),autoplay:(0,n.iH)(!0)}},data(){return{formData:{firstName:"",lastName:"",email:"",password:"",password_confirm:""}}},computed:{Confirm(){return[e=>!!e||"Field is required!"]},Required(){return[e=>!!e||"Field is required!"]}},methods:{async submitForm(){if(this.formData.password!=this.formData.password_confirm)console.log("Passwords do not match. Try again!");else try{await c().post("http://localhost:5000/doctorProfile",{firstName:this.formData.firstName,lastName:this.formData.lastName,email:this.formData.email,password:this.formData.password,confirmPassword:this.formData.password_confirm}),this.$router.push("/guest"),console.log("Data Added Successfully!")}catch(e){console.log(e)}}}});var f=l(4260),w=l(4379),y=l(5269),g=l(4842),h=l(4554),q=l(2165),b=l(1277),v=l(4593),_=l(7518),D=l.n(_);const P=(0,f.Z)(p,[["render",d]]),V=P;D()(p,"components",{QPage:w.Z,QForm:y.Z,QInput:g.Z,QIcon:h.Z,QBtn:q.Z,QCarousel:b.Z,QCarouselSlide:v.Z})}}]);