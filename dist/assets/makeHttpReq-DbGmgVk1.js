import{h}from"./index-B8ZSdwpR.js";import{A as m}from"./App-Cr4Cy-db.js";function p(r,o=6e3){return new Promise((s,a)=>{setTimeout(()=>{a(new Error(r))},o)})}function u(r,o,s){return new Promise(async(a,n)=>{var t;try{const e=h(),i=await Promise.race([fetch(`${m.apiBaseURL}/${r}`,{method:o,headers:{"content-type":"application/json",Authorization:"Bearer "+((t=e==null?void 0:e.token)==null?void 0:t.accessToken)},body:JSON.stringify(s)}),p("Server Error")]),c=await i.json();i.ok||n(c),a(c)}catch(e){n(e)}})}function d(r,o,s){return new Promise(async(a,n)=>{try{const t=await Promise.race([fetch(`${m.baseURL}/${r}`,{method:o,headers:{"content-type":"application/json",Authorization:"Bearer "},body:JSON.stringify(s)}),p("Server Error")]),e=await t.json();t.ok||n(e),a(e)}catch(t){n(t)}})}export{u as a,d as m};
