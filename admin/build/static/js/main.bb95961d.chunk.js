(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),l=(a(11),a(12),a(1)),o=a.n(l),u=a(3),i=a(2),m=(a(14),function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2?s[2]:void 0,e.next=4,fetch(t,{method:a,body:n?JSON.stringify(n):void 0,headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function p(e){var t=e.onLoginRequest,a=Object(n.useState)(""),s=Object(i.a)(a,2),c=s[0],l=s[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),f=d[0],b=d[1],h=function(){var e=Object(u.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m("/admin/login","POST",{username:c,password:f});case 3:n=e.sent,t(n&&n.isLoggedIn);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{class:"form-signin",onSubmit:h},r.a.createElement("h1",{class:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("label",{for:"username",class:"sr-only"},"Username:"),r.a.createElement("br",null),r.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)},type:"text",id:"username",name:"username",placeholder:"Username",class:"form-control"}),r.a.createElement("br",null),r.a.createElement("label",{for:"password",class:"sr-only"},"Password:"),r.a.createElement("br",null),r.a.createElement("input",{value:f,onChange:function(e){b(e.target.value)},type:"password",id:"password",name:"password",placeholder:"Password",class:"form-control"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{class:"btn btn-lg btn-warning btn-block",type:"submit"},"Sign in"),r.a.createElement("p",{class:"mt-5 mb-3 text-muted"},"TrackCOVID"," Admin"))}var d=function(e){try{JSON.parse(e)}catch(t){return!1}return!0};function f(e){e.onUpload;return r.a.createElement("div",null,r.a.createElement("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},r.a.createElement("h1",{class:"h2"},"Upload Checkpoints")),r.a.createElement("form",{id:"checkpoint-upload-form"},r.a.createElement("p",null,"Click the button to upload a checkpoint history file."),r.a.createElement("p",null,"A patient with a positive test can download this from the web app and email it to you to be uploaded here."),r.a.createElement("div",{class:"alert alert-success",style:{display:"none"},id:"upload-success",role:"alert"},"The checkpoints were uploaded successfully."),r.a.createElement("input",{class:"btn btn-large btn-warning",type:"file",id:"checkpoint-upload",onChange:function(){var e=document.getElementById("checkpoint-upload").files;if(e.length<=0)return!1;var t=new FileReader;t.onload=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&t.target.result&&d(t.target.result))){e.next=9;break}return a=JSON.parse(t.target.result),e.next=4,m("/admin/api/checkpoints","POST",{checkpoints:a});case 4:(n=e.sent)&&!n.error?alert("The checkpoints were uploaded successfully."):alert("Oops, that upload failed."),document.getElementById("checkpoint-upload-form").reset(),e.next=10;break;case 9:alert("Oops, that upload failed.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.readAsText(e.item(0))}})))}var b={list:1,new:2};function h(e){var t=e.currentUser,a=Object(n.useState)(void 0),s=Object(i.a)(a,2),c=s[0],l=s[1],p=Object(n.useState)(b.list),d=Object(i.a)(p,2),f=d[0],h=d[1],w=Object(n.useState)(""),v=Object(i.a)(w,2),E=v[0],g=v[1],k=Object(n.useState)(!1),x=Object(i.a)(k,2),O=x[0],y=x[1],j=Object(n.useState)(""),C=Object(i.a)(j,2),S=C[0],U=C[1],T=Object(n.useState)(""),P=Object(i.a)(T,2),A=P[0],D=P[1],N=c||[],I=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/admin/api/users");case 2:(t=e.sent)&&t.users&&l(t.users);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){"undefined"===typeof c&&I()}));var L=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!/((^[a-z]+)|(^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i.test(E)){e.next=12;break}return a=O?1:2,e.next=6,m("/admin/api/users","POST",{username:E,privilege:a});case 6:(n=e.sent).error?alert("Oops, there was an error creating this user."):(U(n.user.username),D(n.user.password),h(b.created),I()),g(""),y(!1),e.next=13;break;case 12:alert("Only letters and numbers are allowed in a username.");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete user: ".concat(a,"?"))){e.next=5;break}return e.next=3,m("/admin/api/users/".concat(t),"DELETE");case 3:(n=e.sent)&&!n.error?I():alert("Oops, something went wrong.");case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},r.a.createElement("h1",{class:"h2"},"Users")),f===b.list&&r.a.createElement("div",null,r.a.createElement("a",{class:"btn btn-dark text-light mb-2",onClick:function(){return h(b.new)}},"New user"),r.a.createElement("ul",{class:"list-group"},N.map((function(e){var a=1===e.privilege,n=e.id!==t.id;return r.a.createElement("li",{class:"list-group-item user-list"},r.a.createElement("strong",null,e.username),a&&r.a.createElement("span",null," (can manage users)"),n&&r.a.createElement("a",{onClick:function(){return J(e.id,e.username)},class:"btn btn-danger text-light user-delete"},"Delete"))})))),f===b.new&&r.a.createElement("form",{class:"form-signin",onSubmit:L},r.a.createElement("h2",{class:"h3 mb-3 font-weight-normal"},"Create a new user"),r.a.createElement("label",{for:"username",class:"sr-only"},"Username:"),r.a.createElement("input",{value:E,onChange:function(e){g(e.target.value)},type:"text",id:"username",name:"username",placeholder:"Username",class:"form-control"}),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{checked:O,onChange:function(){y(!O)},class:"form-check-input",type:"checkbox",id:"can-manage"}),r.a.createElement("label",{class:"form-check-label",for:"can-manage"},"Can manage other users")),r.a.createElement("button",{class:"btn btn-lg btn-warning btn-block mt-3",type:"submit"},"Create")),f===b.created&&r.a.createElement("div",null,r.a.createElement("h2",{class:"h3 mb-3 font-weight-normal"},"A new user was created with the following credentials:"),r.a.createElement("p",null,"Username: ",r.a.createElement("strong",null,S)),r.a.createElement("p",null,"Temporary password: ",r.a.createElement("strong",null,A)),r.a.createElement("p",null,"Please provide these credentials to the user and instruct them to change their password once they log in."),r.a.createElement("a",{class:"btn btn-dark text-light mt-2",onClick:function(){return h(b.list)}},"Return to all users")))}function w(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),l=Object(i.a)(c,2),p=l[0],d=l[1],f=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!/^[\w!@#$%^&*]{8,}$/.test(p)){e.next=9;break}return e.next=5,m("/admin/api/account","PUT",{currentPassword:a,newPassword:p});case 5:e.sent.error?alert("Current password is incorrect."):(alert("Your password was updated successfully."),s(""),d("")),e.next=10;break;case 9:alert("New password is not valid.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-left pt-3 pb-2 mb-3 border-bottom"},r.a.createElement("h1",{class:"h2"},"Account")),r.a.createElement("form",{class:"form-signin",onSubmit:f},r.a.createElement("h2",{class:"h3 mb-3 font-weight-normal"},"Update password"),r.a.createElement("p",null,"Passwords must be at least 8 characters long."),r.a.createElement("label",{for:"current-password",class:"sr-only"},"Current password:"),r.a.createElement("input",{value:a,onChange:function(e){s(e.target.value)},type:"password",id:"username",name:"current-password",placeholder:"Current password",class:"form-control"}),r.a.createElement("label",{for:"new-password",class:"sr-only"},"New password:"),r.a.createElement("input",{value:p,onChange:function(e){d(e.target.value)},type:"password",id:"username",name:"new-password",placeholder:"New password",class:"form-control"}),r.a.createElement("button",{class:"btn btn-lg btn-warning btn-block mt-3",type:"submit"},"Update")))}var v=1,E=2,g=3;var k=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({}),l=Object(i.a)(c,2),d=l[0],b=l[1],k=Object(n.useState)(v),x=Object(i.a)(k,2),O=x[0],y=x[1],j=d&&1===d.privilege,C=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/admin/api/status");case 2:(t=e.sent)&&(s(t.isLoggedIn),b(t.user));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){"undefined"===typeof a&&C()}));var S=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?C():alert("Login failed");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?r.a.createElement("div",{className:"App"},r.a.createElement("nav",{class:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},r.a.createElement("a",{class:"navbar-brand col-sm-3 col-md-2 mr-0",href:"/admin"},"TrackCOVID"," Admin"),r.a.createElement("ul",{class:"navbar-nav px-3"},r.a.createElement("li",{class:"nav-item text-nowrap"},r.a.createElement("a",{class:"nav-link",href:"/admin/logout"},"Sign out")))),r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"row"},r.a.createElement("nav",{class:"col-md-2 d-none d-md-block bg-light sidebar"},r.a.createElement("div",{class:"sidebar-sticky"},r.a.createElement("ul",{class:"nav flex-column"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",onClick:function(){return y(v)}},"Checkpoints")),j&&r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",onClick:function(){return y(E)}},"Users")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",onClick:function(){return y(g)}},"Account"))))),r.a.createElement("main",{role:"main",class:"col-md-9 ml-sm-auto col-lg-10 px-4"},r.a.createElement("p",{class:"mt-3"},"Welcome, ",d.username,"."),O===v&&r.a.createElement(f,null),j&&O===E&&r.a.createElement(h,{currentUser:d}),O===g&&r.a.createElement(w,null))))):r.a.createElement("div",{class:"login-container bg-dark text-center text-light"},r.a.createElement(p,{onLoginRequest:S}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.bb95961d.chunk.js.map