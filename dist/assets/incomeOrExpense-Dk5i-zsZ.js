import{j as n,O as u}from"./index-D2ziipwj.js";import{a as l}from"./makeHttpReq-ep6UpiE5.js";var r=(e=>(e.INCOME="income",e.EXPENSE="expense",e))(r||{});function p(){const e=n(!1),s=n({});async function t(o){try{const a=o=="income"?"incomes":"expenses";e.value=!0;const c=await l(a,"GET");s.value=c,e.value=!1}catch{e.value=!1}}return{getIncomesOrExpenses:t,serverData:s,loading:e}}const f=u("incomeOrExpense",()=>{const e=n({id:null,name:"",amount:"",userId:null}),s=n({val:!0,label:r.INCOME}),t=n(!1);return{input:e,checkboxInput:s,edit:t}});export{r as D,p as a,f as u};