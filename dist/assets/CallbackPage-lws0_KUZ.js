import{d as n,g as r,o as l,c as u,u as d,s as i}from"./index-CaRcDxTW.js";import{A as m}from"./App-Cr4Cy-db.js";const k=n({__name:"CallbackPage",setup(p){const o=d();function s(){var t,c;const e=(t=o.query)==null?void 0:t.code,a=(c=o.query)==null?void 0:c.state;i({authorizationCode:e,state:a}),window.location.href=m.baseURL+`/callback?code=${e}&state=${a}`}return r(()=>{s()}),(e,a)=>(l(),u("div",null,"callback"))}});export{k as default};
