import{_ as c,m as i,r as t,o,c as u,d as m,i as p,h,F as d}from"./index-IH5Zc-RJ.js";import{T as _}from"./ToastMessage-e6ahaWgt.js";import{u as l}from"./statusStore-34fkjK9S.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"getmarried",BASE_URL:"/vite_week8_20240324/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g}=f,k={data(){return{status:!1}},components:{ToastMessages:_},methods:{...i(l,["pushMessage"]),checkAdmin(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)getMarried\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s,this.$http.post(`${g}/api/user/check`).then(e=>{this.status=!0,this.pushMessage({style:"success",title:"驗證成功",content:e.data.message})}).catch(e=>{this.$router.push("/"),this.pushMessage({style:"danger",title:"驗證失敗",content:e.response.data.message})})}},mounted(){this.checkAdmin()}};function $(s,e,M,T,a,V){const r=t("ToastMessages"),n=t("RouterView");return o(),u(d,null,[m(r),a.status?(o(),p(n,{key:0})):h("",!0)],64)}const A=c(k,[["render",$]]);export{A as default};
