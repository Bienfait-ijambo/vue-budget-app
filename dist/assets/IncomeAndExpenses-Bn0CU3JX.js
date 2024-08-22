import{d as E,k as h,o as i,c as u,e,M as f,N as x,n as _,b as I,F as g,i as O,t as v,g as D,a as y,w as C,O as N,x as $}from"./index-B8mJllWN.js";import{D as l,a as w,u as k}from"./incomeOrExpense-AxLhDqjj.js";import{a as M}from"./makeHttpReq-C057Kfqj.js";import{a as R,s as S}from"./toastnotification-DaVGR-ho.js";import{c as T}from"./sweetAlert-C-F07E3C.js";import"./App-Cr4Cy-db.js";const V={class:"row"},A={class:"row"},B={class:"col-md-4"},F={class:"input-group"},G=e("div",{class:"input-group-text"},[e("i",{class:"bi bi-funnel"})],-1),P=["value"],X=["value"],L=e("br",null,null,-1),U=e("br",null,null,-1),q=e("br",null,null,-1),H=e("br",null,null,-1),j={class:"row"},z={class:"table table-bordered table-hover table-striped"},J=e("thead",null,[e("tr",null,[e("td",null,"ID"),e("td",null,"Name"),e("td",null,"Amount"),e("td",null,"Edit"),e("td",null,"Delete")])],-1),K=["onClick"],Q=["onClick"],W=E({__name:"IncomeAndExpenseTable",props:{serverData:{}},emits:["updateRecord","deleteRecord","getIncomesOrExpenses"],setup(r,{emit:d}){const t=d,n=h(l.INCOME);return(o,a)=>(i(),u("div",V,[e("div",A,[e("div",B,[e("div",F,[G,f(e("select",{class:"form-control form-control-sm",onChange:a[0]||(a[0]=s=>t("getIncomesOrExpenses",n.value)),"onUpdate:modelValue":a[1]||(a[1]=s=>n.value=s),name:"",id:""},[e("option",{"tested-option":"income",value:_(l).INCOME,selected:"true"},"Incomes",8,P),e("option",{"tested-option":"expense",value:_(l).EXPENSE},"Expenses",8,X)],544),[[x,n.value]]),L])])]),U,q,e("h5",null,[I(o.$slots,"loading")]),H,e("div",j,[e("table",z,[J,e("tbody",null,[(i(!0),u(g,null,O(o.serverData,s=>(i(),u("tr",{key:s.id},[e("td",null,v(s.id),1),e("td",null,v(s.name),1),e("td",null,v(s.amount),1),e("td",null,[e("button",{onClick:c=>t("updateRecord",s,n.value),"tested-btn":"update",class:"btn btn-outline-primary"}," Edit ",8,K)]),e("td",null,[e("button",{onClick:c=>t("deleteRecord",s,n.value),class:"btn btn-outline-danger","tested-btn":"delete"}," Delete ",8,Q)])]))),128))])])])]))}});function Y(){const r=h(!1);async function d(t,n){try{const o=t==l.INCOME?"incomes":"expenses";r.value=!0;const a=await M(o,"DELETE",n);R(a.message),r.value=!1}catch(o){r.value=!1,S(o.message)}}return{deleteIncomeOrExpense:d,loading:r}}const Z={class:"container"},ee=e("div",{class:"row"},null,-1),se={class:"row"},te={class:"col-md-6"},ne={class:"card"},oe=e("div",{class:"card-header"},"Incomes and expenses",-1),ae={class:"card-body"},le={key:0},pe=E({__name:"IncomeAndExpenses",setup(r){const{serverData:d,getIncomesOrExpenses:t,loading:n}=w(),{deleteIncomeOrExpense:o}=Y();async function a(p,m){T().then(async()=>{await o(m,{id:p.id}),t(l.INCOME)})}const s=N(),c=k();function b(p,m){m===l.EXPENSE&&(c.checkboxInput={val:!1,label:l.EXPENSE}),c.input={...p},c.edit=!0,s.push("/create_income_or_expenses")}return D(async()=>{c.edit=!1,await t(l.INCOME)}),(p,m)=>(i(),u("div",Z,[ee,e("div",se,[e("div",te,[e("div",ne,[oe,e("div",ae,[y(W,{onUpdateRecord:b,onDeleteRecord:a,onGetIncomesOrExpenses:_(t),serverData:_(d).data},{loading:C(()=>[_(n)?(i(),u("span",le,"loading...")):$("",!0)]),_:1},8,["onGetIncomesOrExpenses","serverData"])])])])])]))}});export{pe as default};