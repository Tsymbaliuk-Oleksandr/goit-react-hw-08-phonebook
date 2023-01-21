"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[750],{750:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r,a,i,s,o,l=t(2791),c=t(9457),d=t(1405),u=t(9031),h=t(5365),m=t(1634),x=t(168),f=t(7691),p=f.ZP.table(r||(r=(0,x.Z)(["\n  margin: 0 auto;\n\n  border-collapse: collapse;\n  border-radius: 10px;\n  overflow: hidden;\n\n  tbody > tr:hover {\n    background-color: #eeffee;\n  }\n\n  th,\n  td {\n    padding: 10px;\n  }\n"]))),v=f.ZP.thead(a||(a=(0,x.Z)(["\n  text-align: left;\n  color: ",";\n"])),(function(e){return e.theme.colors.muted})),j=t(184),Z=function(){var e=(0,d.I0)(),n=(0,d.v9)(h.K),t=(0,d.v9)(m.zK),r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),a=function(n){e((0,u.zY)(n))};return(0,j.jsx)("div",{children:(0,j.jsxs)(p,{children:[(0,j.jsx)(v,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)(c.Z,{as:"th",width:"50px",children:"Avatar"}),(0,j.jsx)(c.Z,{as:"th",width:"300px",children:"Name"}),(0,j.jsx)(c.Z,{as:"th",width:"300px",children:"Number"}),(0,j.jsx)(c.Z,{as:"th",width:"50px",children:"Option"})]})}),(0,j.jsx)("tbody",{children:r.map((function(e){var n=e.id,t=e.avatar,r=e.name,i=e.number;return(0,j.jsx)(C,{id:n,avatar:t,name:r,number:i,deleteContact:a},n)}))})]})})},b=t(2526),g=t(3400),y=(f.ZP.span(i||(i=(0,x.Z)(["\n  color: ",";\n  margin-right: ","px;\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.space[3]})),f.ZP.span(s||(s=(0,x.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),(0,f.ZP)(g.Z)(o||(o=(0,x.Z)(["\n  :hover {\n    color: red;\n  }\n"])))),z=t(7247),C=function(e){var n=e.id,t=e.name,r=e.number,a=e.deleteContact;return(0,j.jsxs)(c.Z,{as:"tr",children:[(0,j.jsx)("td",{children:(0,j.jsx)(b.ZP,{name:t,size:30,round:!0,textSizeRatio:2.5})}),(0,j.jsx)("td",{children:t}),(0,j.jsx)("td",{children:r}),(0,j.jsx)("td",{children:(0,j.jsx)(y,{type:"button",onClick:function(){return a(n)},"aria-label":"delete",size:"small",children:(0,j.jsx)(z.Z,{fontSize:"inherit"})})})]},n)},w=t(885),k=t(4802),P=t(6151),A=t(7195),K=function(){var e=(0,l.useState)(""),n=(0,w.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(""),i=(0,w.Z)(a,2),s=i[0],o=i[1],d=(0,k.I0)(),m=(0,k.v9)(h.K),x=(0,k.v9)(h.v),f=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"number":o(a)}},p=m.map((function(e){return e.name})),v=function(){r(""),o("")};return(0,j.jsxs)(c.Z,{as:"form",display:"flex",alignItems:"center",flexDirection:"column",onSubmit:function(e){if(e.preventDefault(),!function(e){if(p.includes(e))return alert("".concat(e," is already in contacts.")),!0}(t)){var n={avatar:t,name:t,number:s};d((0,u.uK)(n)),v()}},children:[(0,j.jsx)(A.Z,{id:"name",label:"Name",variant:"outlined",size:"small",margin:"normal",type:"text",name:"name",value:t,onChange:f,inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,j.jsx)(A.Z,{id:"tel",label:"Number",variant:"outlined",size:"small",margin:"normal",type:"text",name:"number",value:s,onChange:f,inputProps:{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,j.jsx)(P.Z,{disabled:!t||!s,variant:"text",type:"submit",children:x?"Loading...":"Add contact"})]})},I=function(){var e=(0,d.I0)(),n=(0,d.v9)(m.zK);return(0,j.jsx)(A.Z,{id:"filter",label:"Find contacts by name",variant:"standard",margin:"normal",helperText:"Type to search",size:"small",value:n,onChange:function(n){e((0,m.Tv)(n.target.value.toLowerCase()))}})},D=t(6907),L=function(){var e=(0,d.I0)(),n=(0,d.v9)(h.K);return(0,l.useEffect)((function(){e((0,u.yF)())}),[e]),(0,j.jsxs)(c.Z,{display:"flex",flexDirection:"column",alignItems:"center",p:5,children:[(0,j.jsx)(D.B6,{children:(0,j.jsx)(D.ql,{children:(0,j.jsx)("title",{children:"Contacts page"})})}),(0,j.jsx)(c.Z,{width:"350px",height:"200px",textAlign:"center",border:"normal",borderColor:"secondary",borderRadius:"10px",p:4,m:16,children:(0,j.jsx)(K,{})}),n.length>0?(0,j.jsxs)(c.Z,{display:"flex",flexDirection:"column",children:[(0,j.jsx)(I,{}),(0,j.jsx)(Z,{})]}):(0,j.jsx)("h2",{children:"Contact list is empty"})]})}},5365:function(e,n,t){t.d(n,{K:function(){return r},v:function(){return a}});var r=function(e){return e.contacts.items},a=function(e){return e.contacts.isLoading}},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s}}]);
//# sourceMappingURL=750.f10cdda9.chunk.js.map