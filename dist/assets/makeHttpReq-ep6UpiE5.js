import{P as f}from"./index-D2ziipwj.js";import{g as h}from"./auth-BICLTMCl.js";import{A as m}from"./App-BkH2lvXh.js";const u=f.useToast();function b(t){u.error(t,{position:"bottom-right",duration:4e3,dismissible:!0})}function P(t){u.success(t,{position:"bottom-right",duration:4e3,dismissible:!0})}function p(t,e=6e3){return new Promise((a,s)=>{setTimeout(()=>{s(new Error(t))},e)})}function g(t,e,a){return new Promise(async(s,i)=>{var r;try{const o=h(),n=await Promise.race([fetch(`${m.apiBaseURL}/${t}`,{method:e,headers:{"content-type":"application/json",Authorization:"Bearer "+((r=o==null?void 0:o.token)==null?void 0:r.accessToken)},body:JSON.stringify(a)}),p("Server Error")]),c=await n.json();n.ok||i(c),s(c)}catch(o){i(o)}})}function k(t,e,a){return new Promise(async(s,i)=>{try{const r=await Promise.race([fetch(`${m.baseURL}/${t}`,{method:e,headers:{"content-type":"application/json",Authorization:"Bearer "},body:JSON.stringify(a)}),p("Server Error")]),o=await r.json();r.ok||i(o),s(o)}catch(r){i(r)}})}export{g as a,P as b,k as m,b as s};
