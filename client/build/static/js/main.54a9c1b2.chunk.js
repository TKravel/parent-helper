(this["webpackJsonpparent-helper"]=this["webpackJsonpparent-helper"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),s=a.n(r),o=a(12),i=a(5),d=Object(n.createContext)(null),l=a(2);var j=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(l.a)(r,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){var e;localStorage.token?(e=localStorage.token,c({auth:e}),i(!1)):c(null)}),[]),{user:a,setUser:c,isLoading:o,logOut:function(){localStorage.removeItem("token"),c(null)}}},u=a(15),b=a(24),p=a(4),h=a(6),O=a(0);var m=function(e){var t=Object(n.useState)({error:!1,message:"Input required"}),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(O.jsxs)("form",{className:"textInputForm",children:[Object(O.jsx)("label",{htmlFor:e.name,children:e.label}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"textInput",type:"text",name:e.name,onChange:e.updateChange,value:e.stateData,placeholder:e.placeholder}),Object(O.jsx)("button",{className:"addSubtractButtons",onClick:function(t){""===e.stateData?(r((function(e){return{error:!0,message:e.message}})),t.preventDefault()):(r((function(e){return{error:!1,message:e.message}})),e.updateState(t),t.preventDefault())},children:Object(O.jsx)(h.a,{icon:"plus"})}),!0===c.error?Object(O.jsx)("p",{className:"errorMessage",children:c.message}):null]})};var f=function(e){var t=e.headerText;return Object(O.jsx)("h1",{className:"sectionHeader",children:t})};var x=function(e){var t=e.name,a=e.stateData,c=e.isEditing,r=e.tableRefresh,s=e.cachedData,o=Object(n.useContext)(d).user,i=Object(n.useState)(!0),j=Object(l.a)(i,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){if(0!==s.length){var e=parseInt(c.cacheDbDataIndex),n=s.filter((function(t,a){return a===e}))[0][t];JSON.stringify(a)===JSON.stringify(n)?b(!0):b(!1)}}),[[a],[s]]),Object(O.jsx)(O.Fragment,{children:c.status?Object(O.jsx)("button",{type:"submit",disabled:!!u,onClick:function(e){var n;e.preventDefault(),o&&(n=o.auth);var s={name:[t],data:a,id:c.id};fetch("api/userInputEdit",{method:"POST",headers:{authorization:n,"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){e?r():console.log("no data")})).catch((function(e){console.error("Error:",e)}))},className:"saveButton",children:u?"Up to date":"Edit"}):Object(O.jsx)("button",{type:"submit",disabled:!!u,onClick:function(e){var n;e.preventDefault(),o&&(n=o.auth);var c={name:[t],data:a};fetch("api/userInputSave",{method:"POST",headers:{authorization:n,"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log("Item saved:",e),r()})).catch((function(e){console.error("Error:",e)}))},className:"saveButton",children:u?"Up to date":"Save"})})};var g=function(e){var t=e.foodData,a=e.onFoodChange,c=e.isEditing,r=e.tableRefresh,s=e.cachedData,o=Object(n.useState)(""),i=Object(l.a)(o,2),d=i[0],j=i[1];function u(e){e.preventDefault();var n=e.currentTarget.getAttribute("index"),c=t,r=c.splice(n,1);console.log("Item deleted: ",r),a("foodItemDelete",c)}return Object(O.jsxs)("div",{id:"foodSection",children:[Object(O.jsx)(f,{headerText:"Food tracker"}),Object(O.jsxs)("div",{className:"mainCardInput",children:[Object(O.jsxs)("div",{className:"fSection",children:[Object(O.jsx)(m,{label:"Enter food",name:"foodInput",buttonID:"addFoodItem",placeholder:"Enter food here...",updateChange:function(e){var t=e.target.value;j(t)},updateState:function(e){a("food",d),j(""),e.preventDefault()},stateData:d}),Object(O.jsx)("ul",{className:"listTextField",children:0===t.length?Object(O.jsx)("li",{children:"No data to show"}):t.map((function(e,t){return Object(O.jsxs)("li",{index:t,children:[e,Object(O.jsx)("button",{className:"deleteListItem",index:t,onClick:u,children:Object(O.jsx)(h.a,{icon:"times"})})]},t)}))})]}),Object(O.jsx)(x,{name:"food",stateData:t,isEditing:c,tableRefresh:r,cachedData:s})]})]})};var v=function(e){var t=e.selectedNap,a=e.sectionData,n="";switch(t){case"wakeUp":break;case"nap1Start":"00:00"!==a.nap1Start&&a.nap1Start<a.wakeUp&&(n="Must be after wake up");break;case"nap1End":"00:00"!==a.nap1End&&a.nap1End<a.nap1Start&&(n="Must be after nap start");break;case"nap2Start":"00:00"!==a.nap1Start&&a.nap2Start<a.nap1End&&(n="Must be after last nap ended");break;case"nap2End":"00:00"!==a.nap2End&&a.nap2End<a.nap2Start&&(n="Must be after nap start");break;case"bedTime":"00:00"!==a.bedTime&&a.bedTime<a.nap2End&&(n="Must be after last nap");break;default:console.log("error")}return Object(O.jsx)("p",{className:"errorMessage",children:n})};var S=function(e){var t=e.name,a=e.label,c=e.napData,r=e.sectionData,s=e.onChange,o=Object(n.useState)(!1),i=Object(l.a)(o,2),d=i[0],j=i[1];return Object(O.jsx)("div",{children:!0===d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("label",{htmlFor:t,children:a}),Object(O.jsx)("input",{type:"time",id:t,name:t,onChange:s,onBlur:function(e){"--:--"!==c&&(j(!1),e.preventDefault(),console.log(c))},value:c})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:[a,Object(O.jsx)("span",{onClick:function(){j(!0)},children:"00:00"===c?c:function(e){var t=e.split(":"),a=Object(l.a)(t,2),n=a[0],c=n>=12?"pm":"am";return(n=n%12||12)+":"+a[1]+" "+c}(c)})]}),Object(O.jsx)(v,{napData:c,selectedNap:t,sectionData:r})]})})},D=a(8);var N=function(e){var t=e.napData,a=e.onNapChange,c=e.isEditing,r=e.tableRefresh,s=e.cachedData,o=Object(n.useState)(!1),i=Object(l.a)(o,2),d=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(l.a)(u,2),p=b[0],m=b[1];function g(e){var t=e.target;a("sleep",t),e.preventDefault()}function v(){j(!d)}function N(){m(!p)}return Object(O.jsxs)("div",{id:"sleepSection",className:"userInputSection",children:[Object(O.jsx)(f,{headerText:"Sleep tracker"}),Object(O.jsxs)("div",{className:"mainCardInput",children:[Object(O.jsxs)("div",{id:"sleepInputContainer",children:[Object(O.jsx)(S,{name:"wakeUp",label:"Wake up:",napData:t.wakeUp,sectionData:t,onChange:g}),!1===d?Object(O.jsx)("button",{onClick:v,className:"addNapBtn",children:"Add nap"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("button",{onClick:v,className:"minNapBtn",children:["1st nap"," ",Object(O.jsx)(h.a,{icon:D.g,className:"minIcon"})]}),Object(O.jsx)(S,{name:"nap1Start",label:"Start of nap:",napData:t.nap1Start,sectionData:t,onChange:g}),Object(O.jsx)(S,{name:"nap1End",label:"End of nap:",napData:t.nap1End,sectionData:t,onChange:g})]}),!1===p?Object(O.jsx)("button",{onClick:N,className:"addNapBtn",children:"Add nap"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("button",{onClick:N,className:"minNapBtn",children:["2nd nap"," ",Object(O.jsx)(h.a,{icon:D.g,className:"minIcon"})]}),Object(O.jsx)(S,{name:"nap2Start",label:"Start of nap:",napData:t.nap2Start,sectionData:t,onChange:g}),Object(O.jsx)(S,{name:"nap2End",label:"End of nap:",napData:t.nap2End,sectionData:t,onChange:g})]}),Object(O.jsx)(S,{name:"bedTime",label:"Bed time:",napData:t.bedTime,sectionData:t,onChange:g})]}),Object(O.jsx)(x,{name:"sleep",stateData:t,isEditing:c,tableRefresh:r,cachedData:s})]})]})};var C=function(e){var t=e.currentCount,a=e.onPoopChange,n="poop";return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Change count"}),Object(O.jsx)("button",{className:"addSubtractButtons",onClick:function(){0!==t&&a(n,t-1)},children:Object(O.jsx)(h.a,{icon:"minus"})}),Object(O.jsx)("button",{className:"addSubtractButtons",onClick:function(){a(n,t+1)},children:Object(O.jsx)(h.a,{icon:"plus"})})]})};var E=function(e){var t=e.poopData,a=e.onPoopChange,n=e.isEditing,c=e.tableRefresh,r=e.cachedData;return Object(O.jsxs)("div",{id:"pottySection",children:[Object(O.jsx)(f,{headerText:"Poop tracker"}),Object(O.jsxs)("div",{className:"mainCardInput",children:[Object(O.jsxs)("div",{id:"poopInputContainer",children:[Object(O.jsx)("div",{id:"poopDisplay",children:0===t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"No poop to count!"}),Object(O.jsx)(h.a,{icon:D.f,id:"poopIcon"})]}):Object(O.jsx)("p",{id:"countData",children:t})}),Object(O.jsx)("div",{id:"poopCounterControls",children:Object(O.jsx)(C,{currentCount:t,onPoopChange:a})})]}),Object(O.jsx)(x,{name:"poop",stateData:t,isEditing:n,tableRefresh:c,cachedData:r})]})]})};var k=function(e){var t=e.noteData,a=e.onNoteChange,c=e.isEditing,r=e.tableRefresh,s=e.cachedData,o=Object(n.useState)(""),i=Object(l.a)(o,2),d=i[0],j=i[1];function u(e){var n=e.currentTarget.getAttribute("index"),c=t,r=c.splice(n,1);console.log("Item deleted: ",r),a("noteItemDelete",c)}return Object(O.jsxs)("div",{id:"notesSection",children:[Object(O.jsx)(f,{headerText:"Note tracker"}),Object(O.jsxs)("div",{className:"mainCardInput",children:[Object(O.jsxs)("div",{className:"textInputContainer",children:[Object(O.jsx)(m,{label:"Enter notes",name:"notes",placeholder:"Quick notes...",updateChange:function(e){var t=e.target.value;j(t)},updateState:function(e){a("notes",d),j(""),e.preventDefault()},stateData:d}),Object(O.jsx)("ul",{className:"listTextField",children:0===t.length?Object(O.jsx)("li",{children:"No data to show"}):t.map((function(e,t){return Object(O.jsxs)("li",{children:[e,Object(O.jsx)("button",{className:"deleteListItem",index:t,onClick:u,children:Object(O.jsx)(h.a,{icon:"times"})})]},t)}))})]}),Object(O.jsx)(x,{name:"notes",stateData:t,isEditing:c,tableRefresh:r,cachedData:s})]})]})};function y(e){return e.slice(0,2)+"/"+e.slice(2,4)+"/"+e.slice(4,6)}function w(){var e=new Date,t=(e.getMonth()+1).toString(),a=e.getDate().toString(),n=e.getFullYear().toString().substring(2,4);return 1===t.length&&(t="0"+t),1===a.length&&(a="0"+a),t+"/"+a+"/"+n}function T(e){var t=e.split(":"),a=Object(l.a)(t,2),n=a[0],c=n>=12?"pm":"am";return(n=n%12||12)+":"+a[1]+" "+c}function I(e,t){var a=e.split(":"),n=t.split(":"),c=new Date(0,0,0,a[0],a[1]),r=(new Date(0,0,0,n[0],n[1])-c)/1e3/60,s=Math.floor(r/60);return 0===s&&0===r?"-":0===s?r%60+" mins":s+" hr "+r%60+" mins"}var F=function(e){var t=e.updateDisplay,a=e.isEditing,n=(e.setEditingState,e.closeEditer);function c(e){switch(e.preventDefault(),e.target.name){case"foodSection":t({foodSection:!0,sleepSection:!1,pottySection:!1,notesSection:!1});break;case"sleepSection":t({foodSection:!1,sleepSection:!0,pottySection:!1,notesSection:!1});break;case"pottySection":t({foodSection:!1,sleepSection:!1,pottySection:!0,notesSection:!1});break;case"notesSection":t({foodSection:!1,sleepSection:!1,pottySection:!1,notesSection:!0});break;default:console.error()}}return Object(O.jsxs)("div",{className:"userInputNav",children:[a.status?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{id:"currentDate",children:["Editing: ",y(a.date)]}),Object(O.jsx)("button",{id:"closeEditerButton",onClick:function(){n()},children:"Return to today"})]}):Object(O.jsx)("p",{id:"currentDate",children:w()}),Object(O.jsx)("button",{name:"foodSection",onClick:c,children:"Food"}),Object(O.jsx)("button",{name:"sleepSection",onClick:c,children:"Sleep"}),Object(O.jsx)("button",{name:"pottySection",onClick:c,children:"Poop"}),Object(O.jsx)("button",{name:"notesSection",onClick:c,children:"Notes"})]})};var B=function(e){var t=e.item,a=e.edit,n=e.data,c=e.toggleModal;return Object.keys(n[0]).map((function(e,n){return"Edit"===e?Object(O.jsx)("td",{id:t[e],className:"editTD",children:Object(O.jsx)("button",{className:"editButton",onClick:a,children:Object(O.jsx)(h.a,{icon:"edit"})})},t[e]+n):"food"===e||"notes"===e?"No data"===t[e]?Object(O.jsx)("td",{children:"No data"},t[e]+n):Object(O.jsxs)("td",{id:e,"data-items":t[e][1],"data-date":t.date,"data-amount":t[e][0],children:["1"===t[e][0]?t[e][0]+" item":t[e][0]+" items",Object(O.jsx)("button",{className:"editButton",onClick:c,style:{display:"inline"},children:Object(O.jsx)(h.a,{icon:"expand"})})]},t[e]+n):Object(O.jsx)("td",{children:t[e]},t[e]+n)}))};var U=function(e){var t=e.edit,a=e.data,n=e.toggleModal;return a.map((function(e,c){return Object(O.jsx)("tr",{dataindex:c,children:Object(O.jsx)(B,{item:e,edit:t,data:a,toggleModal:n},c)},c)}))};var P=function(e){var t=e.toggleModal,a=e.isOpen,c=e.data;return Object(n.useEffect)((function(){document.body.style.overflow=a?"hidden":""}),[a]),a?s.a.createPortal(Object(O.jsx)("div",{id:"modalWrapper",children:Object(O.jsxs)("div",{id:"modal",children:[Object(O.jsxs)("div",{id:"modalHeader",children:[Object(O.jsx)("button",{id:"modalCloseBtn",onClick:t,children:Object(O.jsx)(h.a,{icon:"times"})}),Object(O.jsx)("p",{id:"modalDate",children:c.date}),Object(O.jsx)("p",{id:"modalHeader",children:c.selectedTd})]}),Object(O.jsxs)("div",{id:"modalBody",children:[Object(O.jsx)("p",{id:"itemCount",children:"1"===c.amount?c.amount+" item recored":c.amount+" items recorded"}),Object(O.jsx)("p",{id:"itemList",children:c.data})]})]})}),document.getElementById("table-modal")):null};function R(e){var t=[];return t.length=0,e.map((function(e){var a={date:"",food:[],poop:0,"Wake up":"","Nap 1":"","Nap 2":"","Bed time":"",notes:"",Edit:""};Object.entries(e).forEach((function(t){var n=Object(l.a)(t,2),c=n[0],r=n[1];if("__v"===c||"userId"===c)return null;if(Array.isArray(r))if(0===r.length)r="No data",a[c]=r;else{var s=[[r.length],[r.join(", ")]];a[c]=s}else if("object"!==typeof e[c]||null===e[c]||Array.isArray(e[c]))"date"===c?a[c]=y(r):"_id"===c?a.Edit=r:a[c]=r;else{var o=e[c].wakeUp,i=e[c].nap1Start,d=e[c].nap1End,j=e[c].nap2Start,u=e[c].nap2End,b=e[c].bedTime;a["Wake up"]=T(o),a["Nap 1"]=I(i,d),a["Nap 2"]=I(j,u),a["Bed time"]=T(b)}})),t.push(a)})),t}var M=function(e){var t=e.edit,a=e.fetchedData,c=Object(n.useState)([]),r=Object(l.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)(!1),d=Object(l.a)(i,2),j=d[0],u=d[1],b=Object(n.useState)({}),p=Object(l.a)(b,2),h=p[0],m=p[1],f={};if(0===s.length){var x=R(a);o(x)}function g(){return Object.keys(s[0]).map((function(e,t){return"_id"===e||"__v"===e?null:Object(O.jsx)("th",{children:e},t)}))}function v(e){e.preventDefault();var t=e.currentTarget.parentNode.getAttribute("id"),a=e.currentTarget.parentNode.getAttribute("data-items"),n=e.currentTarget.parentNode.getAttribute("data-date"),c=e.currentTarget.parentNode.getAttribute("data-amount");m(j?{}:{selectedTd:t,date:n,amount:c,data:a}),f.selectedTd=t,f.date=n,f.data=[a],u(!j)}return Object(n.useEffect)((function(){var e=R(a);o(e)}),[a]),Object(O.jsxs)(O.Fragment,{children:[0===s.length?Object(O.jsx)("p",{children:"Loading data..."}):Object(O.jsx)("table",{className:"dataTable",children:Object(O.jsxs)("tbody",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)(g,{})}),Object(O.jsx)(U,{edit:t,data:s,toggleModal:v})]})}),Object(O.jsx)(P,{isOpen:j,toggleModal:v,data:h})]})};a(13).b.add(D.e,D.d,D.b,D.g,D.c);var A=function(){var e=Object(n.useContext)(d).user,t=Object(n.useState)({foodSection:!0,sleepSection:!1,pottySection:!1,notesSection:!1}),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)({date:"",food:[],sleep:{wakeUp:"00:00",nap1Start:"00:00",nap1End:"00:00",nap2Start:"00:00",nap2End:"00:00",bedTime:"00:00"},poop:0,notes:[]}),o=Object(l.a)(s,2),i=o[0],j=o[1],h=Object(n.useState)([]),m=Object(l.a)(h,2),f=m[0],x=m[1],v=Object(n.useState)({todayData:!0,pastData:!0}),S=Object(l.a)(v,2),D=S[0],C=S[1],y=Object(n.useState)({status:!1,changes:!1,date:"",id:"",cacheDbDataIndex:0,reloadTable:0}),T=Object(l.a)(y,2),I=T[0],B=T[1];function U(){B((function(e){return Object(p.a)(Object(p.a)({},e),{},{reloadTable:e.reloadTable+1})}))}function P(e,t){switch(e){case"food":j((function(e){return Object(p.a)(Object(p.a)({},e),{},{food:[].concat(Object(b.a)(e.food),[t])})}));break;case"foodItemDelete":j((function(e){return Object(p.a)(Object(p.a)({},e),{},{food:t})}));break;case"sleep":var a=t.name,n=t.value;j((function(e){return Object(p.a)(Object(p.a)({},e),{},{sleep:Object(p.a)(Object(p.a)({},e.sleep),{},Object(u.a)({},a,n))})}));break;case"poop":j((function(e){return Object(p.a)(Object(p.a)({},e),{},{poop:t})}));break;case"notes":j((function(e){return Object(p.a)(Object(p.a)({},e),{},{notes:[].concat(Object(b.a)(e.notes),[t])})}));break;case"noteItemDelete":j((function(e){return Object(p.a)(Object(p.a)({},e),{},{notes:t})}));break;default:console.log("error")}}function R(e){var t=w().replace(/\//g,"");if(e.target){e.preventDefault();var a=e.currentTarget.parentNode.parentNode.getAttribute("dataindex"),n=JSON.parse(JSON.stringify(f[a]));j({date:n.date,food:n.food,sleep:n.sleep,poop:n.poop,notes:n.notes}),t===n.date?B((function(e){return{status:!1,changes:!1,date:n.date,id:n._id,cacheDbDataIndex:a,reloadTable:e.reloadTable}})):B((function(e){return{status:!0,changes:!1,date:n.date,id:n._id,cacheDbDataIndex:a,reloadTable:e.reloadTable}}))}else{var c=JSON.parse(JSON.stringify(f[0]));j({date:c.date,food:c.food,sleep:c.sleep,poop:c.poop,notes:c.notes}),B((function(e){return{status:!1,changes:!1,date:c.date,id:c._id,cacheDbDataIndex:0,reloadTable:e.reloadTable}}))}}return Object(n.useEffect)((function(){fetch("/api/loadLog",{method:"GET",headers:{authorization:e.auth}}).then((function(e){return e.json()})).then((function(e){j({date:e.date,food:e.food,sleep:e.sleep,poop:e.poop,notes:e.notes}),C((function(e){return Object(p.a)(Object(p.a)({},e),{},{todayData:!1})}))}))}),[e.auth]),Object(n.useEffect)((function(){fetch("/api/loadTable",{method:"GET",headers:{authorization:e.auth}}).then((function(e){return e.json()})).then((function(e){x((function(){return e.arr})),C((function(e){return Object(p.a)(Object(p.a)({},e),{},{pastData:!1})}))}))}),[I.reloadTable,e.auth]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"container",children:[c.foodSection&&!D.todayData?Object(O.jsx)(g,{foodData:i.food,onFoodChange:P,isEditing:I,tableRefresh:U,cachedData:f}):null,c.sleepSection?Object(O.jsx)(N,{napData:i.sleep,onNapChange:P,isEditing:I,tableRefresh:U,cachedData:f}):null,c.pottySection?Object(O.jsx)(E,{poopData:i.poop,onPoopChange:P,isEditing:I,tableRefresh:U,cachedData:f}):null,c.notesSection?Object(O.jsx)(k,{noteData:i.notes,onNoteChange:P,isEditing:I,tableRefresh:U,cachedData:f}):null,Object(O.jsx)(F,{updateDisplay:r,isEditing:I,setEditingState:function(e,t,a){B({status:e,date:t,id:a})},closeEditer:function(){R(f[0])}})]}),Object(O.jsx)("div",{id:"tableContainer",children:D.pastData?Object(O.jsx)("p",{children:"Loading..."}):Object(O.jsx)(M,{fetchedData:f,edit:R})})]})};var J=function(e,t){var a=Object(n.useState)({}),c=Object(l.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)({}),i=Object(l.a)(o,2),d=i[0],j=i[1],b=Object(n.useState)(!1),h=Object(l.a)(b,2),O=h[0],m=h[1];return Object(n.useEffect)((function(){0===Object.keys(d).length&&O&&(m(!1),e())}),[d,O,e]),{values:r,errors:d,handleChange:function(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},a,n))}))},handleSubmit:function(e){e.preventDefault(),j(t(r)),m(!0)}}};function L(e){var t={};return e.username||(t.username="Username required!"),e.password?e.password.length<6&&(t.password="Passwords are at least 6 digits."):(t.password="Password required!",t.passwordMargin={marginBottom:"2px"}),t}var _=function(){var e=Object(i.g)(),t=Object(n.useContext)(d).setUser,a=Object(n.useState)({}),c=Object(l.a)(a,2),r=c[0],s=c[1];return{createUser:function(a){var n={username:a.username,email:a.email,email2:a.email2,password:a.password,password2:a.password2};return fetch("/users/createUser",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(a){a.token?(localStorage.setItem("token",a.token),t({auth:a.token}),e.push("/")):a.message&&s(a)})).catch((function(e){console.error("Error:",e)}))},loginUser:function(a){var n={username:a.username,password:a.password};return fetch("/users/login",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(a){a.message?s({message:a.message}):(localStorage.setItem("token",a.token),t({auth:a.token}),e.push("/"))})).catch((function(e){console.error("Error:",e)}))},error:r}};var q=function(e){var t=e.toggleForm,a=J((function(){d(c)}),L),c=a.values,r=a.errors,s=a.handleChange,o=a.handleSubmit,i=_(c),d=i.loginUser,j=i.error,u=Object(n.useState)(!1),b=Object(l.a)(u,2);return b[0],b[1],Object(O.jsxs)("div",{children:[Object(O.jsx)(h.a,{icon:D.a,id:"signInIcon"}),Object(O.jsxs)("p",{className:"loginMessage",children:["Sign in",Object(O.jsx)("br",{})," to keep on tracking!"]}),Object(O.jsxs)("form",{className:"loginForm",onSubmit:o,children:[Object(O.jsx)("input",{type:"text",name:"username",placeholder:"Username",autoComplete:"off",value:c.username||"",onChange:s}),Object(O.jsx)("p",{id:"usernameErr",className:"formError",children:r.userName&&r.userName}),Object(O.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:c.password||"",onChange:s}),Object(O.jsxs)("p",{id:"passwordErr",className:"formError",children:[r.password,r.password||r.userName?null:j.message]}),Object(O.jsx)("button",{type:"submit",className:"submitBtn",children:"Sign in"}),Object(O.jsx)("p",{children:"Dont have a account?"}),Object(O.jsx)("button",{className:"linkBtn",onClick:t,children:"Register here!"})]})]})};function z(e){var t={};return e.username||(t.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Invalid Email"):t.email="Email required",e.email2?e.email!==e.email2&&(t.email2="Emails do not match"):t.email2="Input required",e.password?e.password<6&&(t.password="Password must be at least 6 digits"):t.password="Password Required",e.password2?e.password!==e.password2&&(t.password2="Passwords do not match"):t.password2="Input required",t}var H=function(e){var t=e.toggleForm,a=J((function(){i(n)}),z),n=a.values,c=a.errors,r=a.handleChange,s=a.handleSubmit,o=_(),i=o.createUser,d=o.error;return Object(O.jsxs)("div",{className:"registerForm",children:[Object(O.jsxs)("p",{className:"loginMessage",children:["Register",Object(O.jsx)("br",{})," to start tracking!"]}),Object(O.jsxs)("form",{className:"loginForm",onSubmit:s,children:[Object(O.jsx)("input",{type:"text",name:"username",placeholder:"Username",onChange:r,value:n.username||""}),Object(O.jsx)("p",{className:"formError",children:c.username}),Object(O.jsx)("input",{type:"email",name:"email",placeholder:"Email",onChange:r,value:n.email||""}),Object(O.jsx)("p",{className:"formError",children:c.email}),Object(O.jsx)("input",{type:"email",name:"email2",placeholder:"Re-enter Email",onChange:r,value:n.email2||""}),Object(O.jsx)("p",{className:"formError",children:c.email2}),Object(O.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:r,value:n.password||""}),Object(O.jsx)("p",{className:"formError",children:c.password}),Object(O.jsx)("input",{type:"password",name:"password2",placeholder:"Re-enter Password",onChange:r,value:n.password2||""}),Object(O.jsxs)("p",{className:"formError",children:[c.password2,d.message]}),Object(O.jsx)("button",{type:"submit",className:"submitBtn",children:"Register"}),Object(O.jsx)("p",{children:"Already have an account?"}),Object(O.jsx)("button",{className:"linkBtn",onClick:t,children:"Click here to login."})]})]})};var W=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1];function r(){c((function(e){return!e}))}return Object(n.useContext)(d).user?Object(O.jsx)(i.a,{to:"/"}):Object(O.jsx)("div",{className:"loginContainer",children:a?Object(O.jsx)(q,{toggleForm:r}):Object(O.jsx)(H,{toggleForm:r})})};var G=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"About"})})};var Q=Object(i.h)((function(e){var t=e.component;return Object(n.useContext)(d).user?Object(O.jsx)(i.b,{children:Object(O.jsx)(t,{})}):Object(O.jsx)(i.a,{to:"/login"})}));a(39);var Y=function(){var e=j(),t=e.user,a=e.setUser,n=e.isLoading,c=e.logOut;return Object(O.jsx)(o.a,{children:Object(O.jsx)(d.Provider,{value:{user:t,setUser:a,isLoading:n},children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("nav",{className:"App-header",children:[Object(O.jsx)("h1",{children:"Parent Helper"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:t?Object(O.jsx)(o.b,{to:"/login",onClick:c,children:"Log out"}):Object(O.jsx)(o.b,{to:"/login",children:"Login"})}),t&&Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{to:"/",children:"Tracker"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{to:"/about",children:"About"})})]})]}),Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{exact:!0,path:"/login",children:Object(O.jsx)(W,{})}),Object(O.jsx)(Q,{exact:!0,path:"/",component:A}),Object(O.jsx)(i.b,{exact:!0,path:"/about",children:Object(O.jsx)(G,{})})]})]})})})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.54a9c1b2.chunk.js.map