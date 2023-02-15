"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[33],{6033:function(n,e,a){a.r(e),a.d(e,{default:function(){return B}});var t,r,o,i,s,c,d,u,l,f,x,p,h=a(2791),m=a(9434),g=a(9439),b=a(168),v=a(6444),Z=v.ZP.label(t||(t=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n    font-size: 20px;\n    font-weight: 500;\n"]))),w=v.ZP.input(r||(r=(0,b.Z)(["\n    font-size: 20px; \n    margin: 10px 0; \n    width: 250px;\n"]))),j=v.ZP.form(o||(o=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid #000;\n"]))),L=v.ZP.button(i||(i=(0,b.Z)(["\n    margin: 0  20px 20px 20px;\n    max-width: 200px;\n    padding: 10px 20px;\n    border-radius: 8px;\n    border: none;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 24px;\n    font-weight: 400;\n    box-shadow: 5px 5px 6px 1px rgba(34, 60, 80, 0.2); \n    background-color: #6e6e6e;\n    color: #fff;\n    ransition: background-color 500ms linear;  \n    &:hover,\n    &:focus{\n    color: #fff;\n    background-color: #3e3e3e;\n    transform: scale(1.10);\n}\n"]))),y=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",a=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&a[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e},S=function(n){return n.contacts.items},C=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},P=function(n){return n.filter.filter},z=a(9215),G=a(184),_=function(){var n=(0,h.useState)(""),e=(0,g.Z)(n,2),a=e[0],t=e[1],r=(0,h.useState)(""),o=(0,g.Z)(r,2),i=o[0],s=o[1],c=(0,m.I0)(),d=(0,m.v9)(S);return(0,G.jsxs)(j,{onSubmit:function(n){n.preventDefault();var e=d.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}));if(e)alert("".concat(a," is already in contacts "));else{var r={name:a,number:i,id:y()};c((0,z.G3)(r)),t(""),s("")}},children:[(0,G.jsxs)(Z,{children:["Name",(0,G.jsx)(w,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){t(n.target.value)},value:a})]}),(0,G.jsxs)(Z,{children:["Number",(0,G.jsx)(w,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){s(n.target.value)},value:i})]}),(0,G.jsx)(L,{type:"submit",children:"Add contact"})]})},A=v.ZP.ul(s||(s=(0,b.Z)(["\n"]))),R=v.ZP.li(c||(c=(0,b.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 10px 0;\n    font-size: 18px;\n    font-weight: 500;\n"]))),U=v.ZP.button(d||(d=(0,b.Z)(["\n    max-width: 100px;\n    padding: 5px 10px;\n    border-radius: 8px;\n    border: none;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    box-shadow: 5px 5px 6px 1px rgba(34, 60, 80, 0.2); \n    background-color: #6e6e6e;\n    color: #fff;\n    ransition: background-color 500ms linear;  \n    &:hover,\n    &:focus{\n    color: #fff;\n    background-color: #3e3e3e;\n    transform: scale(1.05);\n"]))),V=function(){var n=(0,m.v9)(S),e=(0,m.v9)(P),a=(0,m.I0)(),t=(0,m.v9)(C),r=(0,m.v9)(k);(0,h.useEffect)((function(){a((0,z.m$)())}),[a]);var o=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,G.jsxs)(A,{children:[t&&!r&&(0,G.jsx)("b",{children:"Loading..."}),r&&(0,G.jsx)("b",{children:r.message}),o.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,G.jsxs)(R,{children:[t,": ",r,(0,G.jsx)(U,{type:"button",onClick:function(){return a((0,z.ku)(e))},children:"Delete"})]},e)}))]})},I=v.ZP.div(u||(u=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;       \n    margin: 0 auto;\n    width: 40%;\n    height: 100%;\n    border-radius: 5px; \n    box-shadow: 7px 7px 9px 5px rgba(34, 60, 80, 0.2);\n    padding: 0px 30px 20px 30px;\n"]))),q=v.ZP.h1(l||(l=(0,b.Z)(["\n    font-size: 32px;\n    font-weight: 600;\n    color: #000;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n"]))),F=v.ZP.h1(f||(f=(0,b.Z)(["\n    font-size: 28px;\n    font-weight: 600;\n    color: #000;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n"]))),N=a(6462),$=v.ZP.label(x||(x=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;\n    font-size: 20px;\n    font-weight: 500;\n"]))),D=v.ZP.input(p||(p=(0,b.Z)(["\n    font-size: 20px; \n    margin: 10px 0; \n    width: 250px;\n"]))),E=function(){var n=(0,m.I0)();return(0,G.jsx)("div",{children:(0,G.jsxs)($,{children:["Find contacts by name",(0,G.jsx)(D,{autoComplete:"off",type:"text",name:"filter",onChange:function(e){return n((0,N.K)(e.target.value.toLowerCase()))}})]})})};function B(){var n=(0,m.I0)(),e=(0,m.v9)(C);return(0,h.useEffect)((function(){n((0,z.m$)())}),[n]),(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(I,{children:[(0,G.jsx)(q,{children:"Phonebook"}),(0,G.jsx)(_,{}),(0,G.jsx)(F,{children:"Contacts"}),(0,G.jsx)(E,{}),(0,G.jsx)("div",{children:e&&"Request in progress..."}),(0,G.jsx)(V,{})]})})}}}]);
//# sourceMappingURL=33.68ff37ab.chunk.js.map