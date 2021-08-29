(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{27:function(t,e,n){},38:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(10),u=n.n(a),o=n(6),i=(n(38),n(1));var s=function(t){var e=t.children;return Object(i.jsx)("div",{className:"Container",children:e})},b=n(18),l=n(17),j=n.n(l),f=n(28),O=n(9),d=n.n(O),m=n(2),h=Object(m.b)("contacts/fetchSubmitRequest"),p=Object(m.b)("contacts/fetchSubmitSuccess"),v=Object(m.b)("contacts/fetchSubmitError"),x=Object(m.b)("contacts/formSubmitRequest"),g=Object(m.b)("contacts/formSubmitSuccess"),C=Object(m.b)("contacts/formSubmitError"),S=Object(m.b)("contacts/formDeleteRequest"),N=Object(m.b)("contacts/formDeleteSuccess"),y=Object(m.b)("contacts/formDeleteError"),D=(Object(m.b)("contacts/delete"),Object(m.b)("contacts/filter"));d.a.defaults.baseURL="http://localhost:4040";var w=function(t,e){return function(n){var c={name:t,number:e};n(x()),d.a.post("/contacts",c).then((function(t){var e=t.data;return n(g(e))})).catch((function(t){return n(C(t))}))}},A=function(t){return function(e){e(S()),d.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(y(t))}))}},F=function(){return function(){var t=Object(f.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(h()),t.next=3,d.a.get("/contacts");case 3:n=t.sent,c=n.data;try{e(p(c))}catch(r){e(v(r))}case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};n(59);var k=Object(o.b)(null,(function(t){return{formSubmit:function(e,n){return t(w(e,n))}}}))((function(t){var e=t.formSubmit,n=Object(c.useState)(""),r=Object(b.a)(n,2),a=r[0],u=r[1],o=Object(c.useState)(""),s=Object(b.a)(o,2),l=s[0],j=s[1],f=function(){u(""),j("")};return Object(i.jsxs)("form",{className:"formFilling",onSubmit:function(t){t.preventDefault(),e(a,l),f()},children:[Object(i.jsxs)("label",{children:["Name",Object(i.jsx)("input",{className:"inputContact",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:function(t){u(t.currentTarget.value)}})]}),Object(i.jsxs)("label",{children:["Number phone",Object(i.jsx)("input",{className:"inputContact",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:function(t){j(t.currentTarget.value)}})]}),Object(i.jsx)("button",{className:"buttonAdd",type:"submit",children:"Add contact"})]})})),q=n(11),z=function(t){return t.contacts.filter},E={getFilter:z,getVisibleContacts:Object(q.a)([function(t){return t.contacts.items},z],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))};n(27);var L=Object(o.b)((function(t){return{ContactsData:E.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(A(e))}}}))((function(t){var e=t.ContactsData,n=t.onDeleteContact;return Object(i.jsx)("ul",{className:"contacts",children:e.map((function(t){var e=t.name,c=t.number,r=t.id;return Object(i.jsxs)("li",{className:"contacts-items",children:[Object(i.jsx)("span",{className:"contacts-name",children:e}),Object(i.jsx)("span",{className:"contacts-number",children:c}),Object(i.jsx)("button",{onClick:function(){return n(r)},children:"Delete"})]},r)}))})}));n(60);var T=Object(o.b)((function(t){return{value:E.getFilter(t)}}),(function(t){return{onChange:function(e){return t(D(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(i.jsx)("div",{className:"filter",children:Object(i.jsxs)("label",{children:["Find contacts by name",Object(i.jsx)("input",{type:"text",value:e,onChange:n})]})})}));var R,B,J=Object(o.b)(null,(function(t){return{fetchContacts:function(){return t(F())}}}))((function(t){var e=t.fetchContacts;return Object(c.useEffect)((function(){e()}),[e]),Object(i.jsxs)(s,{children:[Object(i.jsx)(k,{}),Object(i.jsx)("div",{className:"contactsDiv",children:Object(i.jsx)(L,{})}),Object(i.jsx)(T,{})]})})),Z=n(13),I=n(7),M=n(29),P=n.n(M),V=n(4),U=n(3),$=Object(m.c)([],(R={},Object(V.a)(R,p,(function(t,e){return e.payload})),Object(V.a)(R,g,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(V.a)(R,N,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),R)),G=Object(m.c)("",Object(V.a)({},D,(function(t,e){return e.payload}))),H=Object(m.c)(!1,(B={},Object(V.a)(B,x,(function(){return!0})),Object(V.a)(B,g,(function(){return!1})),Object(V.a)(B,C,(function(){return!1})),Object(V.a)(B,S,(function(){return!0})),Object(V.a)(B,N,(function(){return!1})),Object(V.a)(B,y,(function(){return!1})),Object(V.a)(B,h,(function(){return!0})),Object(V.a)(B,p,(function(){return!1})),Object(V.a)(B,v,(function(){return!1})),B)),K=Object(U.b)({items:$,filter:G,loading:H}),Q=[].concat(Object(Z.a)(Object(m.d)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})),[P.a]),W=Object(m.a)({reducer:{contacts:K},middleware:Q,devTools:!1}),X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),c(t),r(t),a(t),u(t)}))};u.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(o.a,{store:W,children:Object(i.jsx)(J,{})})}),document.getElementById("root")),X()}},[[62,1,2]]]);
//# sourceMappingURL=main.37ac8265.chunk.js.map