"use strict";(self.webpackChunkCODEUDEMY=self.webpackChunkCODEUDEMY||[]).push([[905],{1905:(m,s,o)=>{o.r(s),o.d(s,{DashboardModule:()=>M});var a=o(9808),c=o(8698),n=o(1223),l=o(4981),d=o(2160);const p=function(){return["/user/register"]};function u(t,i){1&t&&(n.TgZ(0,"li")(1,"a",12)(2,"p",8),n._UZ(3,"i",13),n.qZA(),n.TgZ(4,"p",10),n._uU(5,"Kh\xf3a h\u1ecdc \u0111\u0103ng k\xfd"),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("routerLink",n.DdM(1,p)))}function g(t,i){1&t&&(n.TgZ(0,"li")(1,"a",7)(2,"p",8),n._UZ(3,"i",14),n.qZA(),n.TgZ(4,"p",10),n._uU(5,"\u0110\u0103ng nh\u1eadp"),n.qZA()()())}function h(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"li")(1,"a",15),n.NdJ("click",function(){return n.CHM(e),n.oxw().clientLogout()}),n.TgZ(2,"p",8),n._UZ(3,"i",14),n.qZA(),n.TgZ(4,"p",10),n._uU(5,"\u0110\u0103ng xu\u1ea5t"),n.qZA()()()}}const f=[{path:"",component:(()=>{class t{constructor(e,r){this.userService=e,this.cookie=r,this.userSignIn=!1}ngOnInit(){}ngDoCheck(){this.cookie.check("clientToken")&&(this.userSignIn=!0)}clientLogout(){if(this.userSignIn){console.log("Hello world");let e={token:this.cookie.get("clientToken")};this.userService.userLogOut(e).then(r=>{console.log(r)}).catch(r=>{throw r})}}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.K),n.Y36(d.N))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dashboard"]],decls:17,vars:3,consts:[[1,"dashboard"],[1,"container-fluid"],[1,"row"],[1,"col-2"],[1,"slider-wrapper"],[1,"slider-bard","list-unstyled","mb-0"],[4,"ngIf"],["href","https://code-udemy.herokuapp.com/"],[1,"slider-bard--icon"],["aria-hidden","true",1,"fa","fa-user-circle-o"],[1,"slider-bard--des"],[1,"col-10"],[3,"routerLink"],["aria-hidden","true",1,"fa","fa-pencil-square-o"],["aria-hidden","true",1,"fa","fa-power-off"],[3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5),n.YNc(6,u,6,2,"li",6),n.TgZ(7,"li")(8,"a",7)(9,"p",8),n._UZ(10,"i",9),n.qZA(),n.TgZ(11,"p",10),n._uU(12,"Ng\u01b0\u1eddi d\xf9ng"),n.qZA()()(),n.YNc(13,g,6,0,"li",6),n.YNc(14,h,6,0,"li",6),n.qZA()()(),n.TgZ(15,"div",11),n._UZ(16,"router-outlet"),n.qZA()()()()),2&e&&(n.xp6(6),n.Q6J("ngIf",!r.userSignIn),n.xp6(7),n.Q6J("ngIf",!r.userSignIn),n.xp6(1),n.Q6J("ngIf",r.userSignIn))},directives:[a.O5,c.yS,c.lC],styles:[".slider-wrapper[_ngcontent-%COMP%]{height:100vh}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]{box-shadow:0 0 2px #00000030;display:flex;align-items:center;justify-content:flex-start;flex-direction:column;height:100vh;left:0px;top:60px;position:fixed;padding:15px 20px;width:225px;z-index:1}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 0 1px 1px #0000001f;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child){margin-top:20px}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#ddd}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer;height:100%;padding:20px 5px;width:100%}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:0;text-transform:uppercase}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .slider-bard--icon[_ngcontent-%COMP%]{margin-bottom:5px}.slider-wrapper[_ngcontent-%COMP%]   .slider-bard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .slider-bard--icon[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{font-size:15px}"]}),t})(),children:[{path:"",loadChildren:()=>o.e(522).then(o.bind(o,522)).then(t=>t.ProductsModule)}]}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[d.N],imports:[[a.ez,C]]}),t})()}}]);