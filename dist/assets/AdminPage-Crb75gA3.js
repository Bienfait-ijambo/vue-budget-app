import{d as D,o,c as l,e,t as d,f as h,F as S,i as M,b as B,m as C,j as L,k as T,h as N,l as P,g as A,r as w,a as c,w as g,n as y,p as I,T as V,q as j,v as q}from"./index-B8ZSdwpR.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as x}from"./makeHttpReq-DbGmgVk1.js";import{a as R,s as $}from"./toastnotification-Bjh8Hj8x.js";import"./App-Cr4Cy-db.js";const U=[{name:"Dashboard",link:"/dashboard",icon:"bi bi-wrench-adjustable"},{name:"Income & Expenses",link:"/create_income_or_expenses",icon:"bi bi-piggy-bank"},{name:"Customers",link:"/customers",icon:"bi bi-people"},{name:"Pricings",link:"/pricings",icon:"bi bi-coin"},{name:"Payments",link:"/payments",icon:"bi bi-cash"}],F="/assets/avatar-BqGUsuG1.webp",G={id:"sidebarMenu",style:{"background-color":"white"},class:"col-md-3 col-lg-2 d-md-block sidebar collapse"},H={class:"position-sticky pt-3"},O={align:"center"},z=e("img",{src:F,id:"user-avatar",width:"50"},null,-1),J={href:"#"},K=e("br",null,null,-1),Q=e("br",null,null,-1),W={class:"badge bg-success"},X=e("br",null,null,-1),Y=e("h6",{class:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",{style:{color:"red"}},"Menu"),e("a",{class:"link-secondary",href:"#","aria-label":"Add a new report"},[e("span",{"data-feather":"plus-circle"})])],-1),Z={class:"nav flex-column","tested-ul":"links"},ee=e("a",{class:"nav-link"},[e("i",{class:"bi bi-box-arrow-right"}),h(" Logout ")],-1),ae=[ee],se=D({__name:"NavBar",props:{navigation:{},userData:{}},emits:["logout"],setup(f,{emit:u}){const r=u;return(a,_)=>{var m,s,n,i,p,t,b,k;return o(),l("nav",G,[e("div",H,[e("div",O,[z,e("a",J,d((s=(m=a.userData)==null?void 0:m.user)==null?void 0:s.email),1),K,h(" "+d((i=(n=a.userData)==null?void 0:n.user)==null?void 0:i.role)+" ",1),Q,h(" LeftDays : "+d((t=(p=a.userData)==null?void 0:p.userAccount)==null?void 0:t.leftDays)+" - ",1),e("span",W,d((k=(b=a.userData)==null?void 0:b.userAccount)==null?void 0:k.account_status),1)]),X,Y,e("ul",Z,[(o(!0),l(S,null,M(a.navigation,v=>(o(),l("li",{class:"nav-item",key:v.name},[B(a.$slots,"navigation",C({ref_for:!0},{nav:v}))]))),128)),e("li",{"tested-logout":"btn",class:"nav-item",style:{cursor:"pointer"},onClick:_[0]||(_[0]=v=>r("logout"))},ae)])])])}}}),te={},ne={class:"navbar sticky-top bg-dark flex-md-nowrap p-0 shadow","data-bs-theme":"dark"},oe=e("a",{"tested-appname":"app",class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white",href:"#"},"Budget tracker",-1),re=L('<ul class="navbar-nav flex-row d-md-none"><li class="nav-item text-nowrap"><button class="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search"><svg class="bi"><use xlink:href="#search"></use></svg></button></li><li class="nav-item text-nowrap"><button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><svg class="bi"><use xlink:href="#list"></use></svg></button></li></ul><div id="navbarSearch" class="navbar-search w-100 collapse"><input class="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"></div>',2),ie=[oe,re];function le(f,u){return o(),l("header",ne,ie)}const ce=E(te,[["render",le]]),de={class:"container-fluid"},ue={class:"row"},_e={class:"col-md-9 ms-sm-auto col-lg-10 bg-pages"},me=e("br",null,null,-1),pe=e("br",null,null,-1),ke=D({__name:"AdminPage",setup(f){const u=T(U),r=N(),{showMenu:a}=P();async function _(){var s;try{const n=parseInt((s=r==null?void 0:r.user)==null?void 0:s.userId),i=await x("logout","POST",{userId:n});window.location.href="/",localStorage.clear(),R(i.message)}catch(n){$(n.message)}}async function m(){try{await x("logout","POST",{userId:void 0})}catch(s){$(s.message)}}return A(async()=>{await m()}),(s,n)=>{const i=w("RouterLink"),p=w("router-view");return o(),l(S,null,[c(ce),e("div",de,[e("div",ue,[c(se,{onLogout:_,navigation:y(a)(u.value),userData:y(r)},{navigation:g(({nav:t})=>[c(i,{class:"nav-link",to:t.link,exact:""},{default:g(()=>[e("i",{class:I(t.icon)},null,2),h(" "+d(t.name),1)]),_:2},1032,["to"])]),_:1},8,["navigation","userData"]),e("main",_e,[me,pe,c(p,null,{default:g(({Component:t,route:b})=>[c(V,{name:"fade",mode:"out-in"},{default:g(()=>[(o(),l("div",{key:b.name},[(o(),j(q(t)))]))]),_:2},1024)]),_:1})])])])],64)}}});export{ke as default};
