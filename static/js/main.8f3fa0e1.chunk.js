(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={container:"ContactForm_container__1INJV",form:"ContactForm_form__1fuOn",submit:"ContactForm_submit__ChZTI"}},,function(e,t,n){e.exports={item:"ContactList_item__lk0Rm",text:"ContactList_text__MyT-R",btn:"ContactList_btn__2de-X"}},,,,function(e,t,n){e.exports={wrapper:"Filter_wrapper__IqOjQ"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=(n(16),n(11)),s=n(2),u=n(5),l=n.n(u),b=n(0),d=function(e){var t=e.contacts,n=e.onClick;return Object(b.jsx)("ul",{className:l.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(b.jsxs)("li",{className:l.a.item,children:[Object(b.jsxs)("p",{className:l.a.text,children:[a," : ",c]}),Object(b.jsx)("button",{className:l.a.btn,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},m=n(9),j=n.n(m),O=function(e){var t=e.contacts,n=e.onChange;return Object(b.jsx)("div",{className:j.a.wrapper,children:Object(b.jsxs)("label",{children:["Find contacts by name",Object(b.jsx)("input",{type:"text",value:t,onChange:n})]})})},f=n(20),h=n(3),p=n.n(h);function x(e){var t=e.addNewContact,n=Object(f.a)(),c=Object(f.a)(),r=Object(a.useState)(null),o=Object(s.a)(r,2),i=(o[0],o[1]),u=Object(a.useState)(""),l=Object(s.a)(u,2),d=l[0],m=l[1],j=Object(a.useState)(""),O=Object(s.a)(j,2),h=O[0],x=O[1],C=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":m(a);break;case"number":x(a)}},_=function(){m(""),x("")};return Object(b.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault();var n={name:d,number:h,id:Object(f.a)()};t(n),i(n),_()},children:[Object(b.jsx)("label",{htmlFor:n,children:"Name"}),Object(b.jsx)("input",{id:n,type:"text",name:"name",value:d,placeholder:"enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:C}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:c,children:"Number"}),Object(b.jsx)("input",{id:c,type:"tel",name:"number",value:h,placeholder:"enter phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:C}),Object(b.jsx)("button",{type:"submit",className:p.a.submit,children:"Add contact"})]})}var C=n(10);function _(){var e=function(e){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:e})),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))}),[c]),[c,r]}(C),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1];return Object(b.jsxs)("div",{className:p.a.container,children:[Object(b.jsx)("h1",{className:p.a.title,children:"Phonebook"}),Object(b.jsx)(x,{addNewContact:function(e){n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):c((function(t){return[].concat(Object(i.a)(t),[e])}))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(O,{contacts:u,onChange:function(e){l(e.currentTarget.value)}}),0===n.length?Object(b.jsx)("p",{children:"Your phone book is empty. Add contacts."}):Object(b.jsx)(d,{contacts:n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})),onClick:function(e){c(n.filter((function(t){return t.id!==e})))}})]})}o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8f3fa0e1.chunk.js.map