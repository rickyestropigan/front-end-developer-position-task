import{r as i,j as s,R as m}from"./index-BDGmgByD.js";const j="_logo_1mvyq_3",d="_nav_links_1mvyq_13",x="_hamburger_1mvyq_69",_="_open_1mvyq_127",t={logo:j,nav_links:d,hamburger:x,open:_};function u(){const[n,e]=i.useState(!1),r=()=>{e(!n)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:t.logo,children:"Your Logo"}),s.jsxs("div",{className:t.hamburger,onClick:r,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}),s.jsxs("ul",{className:`${t.nav_links} ${n?t.open:""}`,children:[s.jsx("li",{children:s.jsx("a",{href:"#",children:"Home"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"About"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Services"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Contact"})})]})]})}const h=({eventNavEnlarge:n})=>s.jsx("header",{children:s.jsx("nav",{className:"container",children:s.jsx(u,{})})});function v(){return s.jsx(s.Fragment,{children:s.jsx("p",{children:"© 2023 Your Company Name. All rights reserved."})})}const g=()=>s.jsx(m.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx("footer",{children:s.jsx("div",{className:"container",children:s.jsx(v,{})})})}),q=({children:n,navmenu:e,footer:r})=>s.jsxs("div",{className:"frontpage",children:[e?s.jsx(h,{}):"",s.jsx("main",{children:n}),r?s.jsx(g,{}):""]}),p="_button_1vktj_1",y="_primary_1vktj_75",f="_secondary_1vktj_97",k="_small_1vktj_121",b="_medium_1vktj_131",N="_large_1vktj_141",a={button:p,primary:y,secondary:f,small:k,medium:b,large:N};function C({children:n,onClick:e,variant:r="primary",size:o="medium",disabled:l=!1,className:c}){return s.jsx("button",{className:`${a.button} ${a[r]} ${a[o]} ${c??""}`,onClick:e,disabled:l,children:n})}export{C as B,q as L};
