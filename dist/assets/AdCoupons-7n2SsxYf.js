import{_ as M,o as l,c as a,a as t,j as u,k as h,l as w,w as c,m as L,r as m,d as _,F as C,g as S,t as g,b as v}from"./index-IH5Zc-RJ.js";import{u as V}from"./statusStore-34fkjK9S.js";import{m as D}from"./modal-zhVd5Gm4.js";import{D as T}from"./DelModal-2568ulSJ.js";import{P as E}from"./PaginationView-M-hbQBld.js";const U={props:["isStatus","couponModal","updateCoupon"],mixins:[D],data(){return{tempCoupon:{},due_date:""}},watch:{couponModal(){this.tempCoupon=this.couponModal;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}}},P={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},A={class:"modal-dialog modal-dialog-scrollable"},R={class:"modal-content"},B={key:0,class:"modal-header bg-lilac"},N=t("h1",{class:"modal-title fs-5 text-white",id:"exampleModalLabel"}," 新增優惠卷 ",-1),O=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j=[N,O],F={key:1,class:"modal-header bg-warning"},H=t("h1",{class:"modal-title fs-5 text-white",id:"exampleModalLabel"}," 編輯優惠卷 ",-1),q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),z=[H,q],G={class:"modal-body"},J={class:"mb-3"},K=t("label",{for:"title",class:"form-label"}," 標題 ",-1),Q={class:"mb-3"},W=t("label",{for:"code",class:"form-label"}," 優惠碼 ",-1),X={class:"mb-3"},Y=t("label",{for:"dueDate",class:"form-label"}," 到期日 ",-1),Z={class:"mb-3"},I=t("label",{for:"percent",class:"form-label"}," 折扣百分比 ",-1),tt={class:"mb-3"},et={class:"form-check"},ot=t("label",{for:"enabled",class:"form-check-label"}," 是否啟用 ",-1),st={class:"modal-footer"},nt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function lt(s,e,i,r,o,p){return l(),a("div",P,[t("div",A,[t("div",R,[i.isStatus?(l(),a("div",B,j)):(l(),a("div",F,z)),t("div",G,[t("div",J,[K,u(t("input",{type:"text",class:"form-control",placeholder:"請輸入標題",id:"title","onUpdate:modelValue":e[0]||(e[0]=n=>o.tempCoupon.title=n)},null,512),[[h,o.tempCoupon.title]])]),t("div",Q,[W,u(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼",id:"code","onUpdate:modelValue":e[1]||(e[1]=n=>o.tempCoupon.code=n)},null,512),[[h,o.tempCoupon.code]])]),t("div",X,[Y,u(t("input",{type:"date",class:"form-control",id:"dueDate","onUpdate:modelValue":e[2]||(e[2]=n=>o.due_date=n)},null,512),[[h,o.due_date]])]),t("div",Z,[I,u(t("input",{type:"number",class:"form-control",placeholder:"請輸入折扣百分比",id:"percent",min:"0","onUpdate:modelValue":e[3]||(e[3]=n=>o.tempCoupon.percent=n)},null,512),[[h,o.tempCoupon.percent,void 0,{number:!0}]])]),t("div",tt,[t("div",et,[u(t("input",{type:"checkbox",class:"form-check-input",id:"enabled","onUpdate:modelValue":e[4]||(e[4]=n=>o.tempCoupon.is_enabled=n),"true-value":1,"false-value":0},null,512),[[w,o.tempCoupon.is_enabled]]),ot])])]),t("div",st,[nt,i.isStatus?(l(),a("button",{key:0,type:"button",class:"btn btn-lilac text-white",onClick:e[5]||(e[5]=c(n=>i.updateCoupon(o.tempCoupon),["prevent"]))}," 新增 ")):(l(),a("button",{key:1,type:"button",class:"btn btn-warning text-white",onClick:e[6]||(e[6]=c(n=>i.updateCoupon(o.tempCoupon),["prevent"]))}," 編輯 "))])])])],512)}const at=M(U,[["render",lt]]);var it={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"getmarried",BASE_URL:"/vite_week8_20240324/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_PATH:f}=it,dt={components:{CouponModal:at,DelModal:T,PaginationComponent:E},data(){return{isLoading:!1,remoteCoupons:[],tempCoupon:{title:"",is_enabled:"",percent:100,code:""},isStatus:!1,pagination:[]}},methods:{...L(V,["pushMessage"]),openModal(s,e){s==="new"?(this.tempCoupon={due_date:new Date().getTime()/1e3},this.isStatus=!0,this.$refs.couponModal.show()):s==="edit"?(this.tempCoupon={...e},this.isStatus=!1,this.$refs.couponModal.show()):s==="delete"&&(this.tempCoupon={...e},this.$refs.delModal.show())},updateCoupon(s){this.tempCoupon=s;let e=`${b}/api/${f}/admin/coupon`,i="post",r="成功新增優惠卷";this.isStatus||(e=`${b}/api/${f}/admin/coupon/${this.tempCoupon.id}`,i="put",r="成功編輯優惠卷"),this.isLoading=!0,this.$http[i](e,{data:this.tempCoupon}).then(o=>{this.isLoading=!1,this.$refs.couponModal.hide(),this.getCoupons(),this.pushMessage({style:"success",title:r,content:o.data.message})}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"success",title:"錯誤訊息",content:o.response.data.message})})},getCoupons(s=1){this.isLoading=!0,this.$http(`${b}/api/${f}/admin/coupons?page=${s}`).then(e=>{this.isLoading=!1,this.remoteCoupons=e.data.coupons,this.pagination=e.data.pagination}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:"錯誤訊息",content:e.response.data.message})})},delCoupon(s){this.tempCoupon=s,this.isLoading=!0,this.$http.delete(`${b}/api/${f}/admin/coupon/${this.tempCoupon.id}`).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除優惠卷",content:e.data.message}),this.$refs.delModal.hide(),this.getCoupons()}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除優惠卷",content:e.response.data.message})})}},mounted(){this.getCoupons()}},pt={class:"container"},ut={class:"p-lg-4 py-4 px-2"},ct={class:"card"},rt={class:"card-header bg-transparent text-end"},ht={class:"card-body"},mt={class:"table-responsive"},_t={class:"table align-middle text-nowrap text-center"},bt=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"折扣百分比"),t("th",null,"到期日"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),ft={key:0,class:"text-success"},gt={key:1,class:"text-danger"},Ct={class:"d-flex justify-content-center"},vt=["onClick"],Mt=t("i",{class:"bi bi-pen-fill"},null,-1),yt=["onClick"],xt=t("i",{class:"bi bi-trash-fill"},null,-1),kt={class:"card-footer bg-transparent p-3"};function $t(s,e,i,r,o,p){const n=m("VLoading"),y=m("CouponModal"),x=m("DelModal"),k=m("PaginationComponent");return l(),a(C,null,[_(n,{active:o.isLoading},null,8,["active"]),_(y,{ref:"couponModal","is-status":o.isStatus,"coupon-modal":o.tempCoupon,"update-coupon":p.updateCoupon},null,8,["is-status","coupon-modal","update-coupon"]),_(x,{"item-modal":o.tempCoupon,"del-product":p.delCoupon,ref:"delModal"},null,8,["item-modal","del-product"]),t("div",pt,[t("div",ut,[t("div",ct,[t("div",rt,[t("button",{class:"btn btn-lilac fw-bold",type:"button",onClick:e[0]||(e[0]=c(d=>p.openModal("new"),["prevent"]))}," 新增優惠卷 ")]),t("div",ht,[t("div",mt,[t("table",_t,[bt,t("tbody",null,[(l(!0),a(C,null,S(o.remoteCoupons,d=>(l(),a("tr",{key:d.id},[t("td",null,g(d.title),1),t("td",null,g(d.percent),1),t("td",null,g(s.$filters.date(d.due_date)),1),t("td",null,[d.is_enabled?(l(),a("span",ft,"啟用")):(l(),a("span",gt,"未啟用"))]),t("td",null,[t("div",Ct,[t("button",{class:"btn btn-outline-warning me-2 btn-sm",type:"button",onClick:c($=>p.openModal("edit",d),["prevent"])},[Mt,v(" 編輯 ")],8,vt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:c($=>p.openModal("delete",d),["prevent"])},[xt,v(" 刪除 ")],8,yt)])])]))),128))])])])]),t("div",kt,[_(k,{pages:o.pagination,"get-products":p.getCoupons},null,8,["pages","get-products"])])])])])],64)}const Tt=M(dt,[["render",$t]]);export{Tt as default};