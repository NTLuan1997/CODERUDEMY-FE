"use strict";(self.webpackChunkCODEUDEMY=self.webpackChunkCODEUDEMY||[]).push([[328],{9328:(T,c,a)=>{a.r(c),a.d(c,{UsersModule:()=>b});var m=a(9808),g=a(8698),o=a(2382);class h{constructor(){}}var e=a(1223),d=a(4981),p=a(2160);const f=function(){return["/user/signin"]};let C=(()=>{class r{constructor(n,t,u,i){this.userService=n,this.fb=t,this.router=u,this.cookie=i,this.User=new h,this.registerForm=this.fb.group({user_name:new o.NI(this.User.user_name,[o.kI.required]),email:new o.NI(this.User.email,[o.kI.required]),password:new o.NI(this.User.password,[o.kI.required,o.kI.minLength(6),o.kI.maxLength(15)]),dateOfBirth:new o.NI(this.User.dateOfBirth,[o.kI.required])})}ngOnInit(){}onSubmit(){"VALID"==this.registerForm.status&&(this.User.status=!0,this.User.role="Member",this.User.courses=[],this.userService.userRegister(this.User).then(n=>{n?(this.cookie.set("clientToken",n.token,{expires:86400}),this.router.navigate(["/"])):console.log(n.message)}).catch(n=>{throw n}))}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(d.K),e.Y36(o.qu),e.Y36(g.F0),e.Y36(p.N))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-register"]],decls:26,vars:7,consts:[[1,"user-register"],[1,"wrapper-register"],[1,"register--title"],[3,"formGroup","submit"],[1,"form-group"],["for","user-signin-name"],["type","text","formControlName","user_name","id","user-signin-name","placeholder","T\xean ng\u01b0\u1eddi d\xf9ng",1,"form-control",3,"ngModel","ngModelChange"],["for","user-signin-email"],["type","email","id","user-signin-email","formControlName","email","placeholder","Email@gmail.com",1,"form-control",3,"ngModel","ngModelChange"],["for","user-signin-password"],["type","password","id","user-signin-password","formControlName","password","placeholder","Nh\u1eadp 6 k\xfd t\u1ef1 ho\u1eb7c nhi\u1ec1u h\u01a1n",1,"form-control",3,"ngModel","ngModelChange"],["for","user-signin-dateofbirth"],["type","date","id","user-signin-dateofbirth","formControlName","dateOfBirth","placeholder","T\xean ng\u01b0\u1eddi d\xf9ng",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-user-signin"],[1,"user-change-form"],[3,"routerLink"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"\u0110\u0103ng k\xfd"),e.qZA(),e.TgZ(4,"form",3),e.NdJ("submit",function(){return t.onSubmit()}),e.TgZ(5,"div",4)(6,"label",5),e._uU(7,"T\xean \u0111\u0103ng k\xfd"),e.qZA(),e.TgZ(8,"input",6),e.NdJ("ngModelChange",function(i){return t.User.user_name=i}),e.qZA()(),e.TgZ(9,"div",4)(10,"label",7),e._uU(11,"Email ng\u01b0\u1eddi d\xf9ng"),e.qZA(),e.TgZ(12,"input",8),e.NdJ("ngModelChange",function(i){return t.User.email=i}),e.qZA()(),e.TgZ(13,"div",4)(14,"label",9),e._uU(15,"M\u1eadt kh\u1ea9u"),e.qZA(),e.TgZ(16,"input",10),e.NdJ("ngModelChange",function(i){return t.User.password=i}),e.qZA()(),e.TgZ(17,"div",4)(18,"label",11),e._uU(19,"Ng\xe0y sinh"),e.qZA(),e.TgZ(20,"input",12),e.NdJ("ngModelChange",function(i){return t.User.dateOfBirth=i}),e.qZA()(),e.TgZ(21,"button",13),e._uU(22,"\u0110\u0103ng nh\u1eadp"),e.qZA(),e.TgZ(23,"div",14)(24,"a",15),e._uU(25,"\u0110\u0103ng nh\u1eadp"),e.qZA()()()()()),2&n&&(e.xp6(4),e.Q6J("formGroup",t.registerForm),e.xp6(4),e.Q6J("ngModel",t.User.user_name),e.xp6(4),e.Q6J("ngModel",t.User.email),e.xp6(4),e.Q6J("ngModel",t.User.password),e.xp6(4),e.Q6J("ngModel",t.User.dateOfBirth),e.xp6(4),e.Q6J("routerLink",e.DdM(6,f)))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,g.yS],styles:[".user-register[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;min-height:100vh}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]{box-shadow:0 0 2px #00000030;padding:35px 20px 15px;width:415px}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   .register--title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin-bottom:25px;text-align:center;text-transform:uppercase}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-user-signin[_ngcontent-%COMP%]{background-color:#f28d0f;color:#fff;text-transform:capitalize;width:100%}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-change-form[_ngcontent-%COMP%]{margin-top:15px}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-change-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-change-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:inherit}"]}),r})();const l_InputError_email="Email kh\xf4ng h\u1ee3p l\u1ec7",l_InputError_required="Tr\u01b0\u1eddng n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c tr\u1ed1ng",l_InputError_minLength="\u0110\u1ed9 d\xe0i n\u1ed9i dung ph\u1ea3i l\u1edbn h\u01a1n",l_InputError_maxLength="\u0110\u1ed9 d\xe0i n\u1ed9i dung ph\u1ea3i nh\u1ecf h\u01a1n";new Date;let _=(()=>{class r{constructor(){this.regexEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}required(){return n=>n.value?null:{error:"required",message:l_InputError_required}}email(){return n=>n.value?this.regexEmail.test(n.value.trim())?null:{error:"email",message:l_InputError_email}:null}minLength(n){return t=>t.value&&t.value.trim().length<n?{error:"minLength",message:`${l_InputError_minLength} - ${n}`}:null}maxLength(n){return t=>t.value&&t.value.trim().length>n?{error:"maxLength",message:`${l_InputError_maxLength} - ${n}`}:null}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const M=function(r){return{"is-invalid":r}},v=function(r){return{"is-error":r}};let U=(()=>{class r{constructor(n){this.elementRef=n,this.InputChanged=new e.vpe,this.isError=!1}ngOnInit(){}ngDoCheck(){this.Submit&&this.handleError()}blur(n){this.FormController.errors&&this.handleError()}input(n){let t=this.queryElement("small.form-message");t.innerText&&(t.innerText="",this.isError=!1),this.InputChanged.emit(n.target.value)}queryElement(n){return this.elementRef.nativeElement.querySelector(n)}handleError(){if(this.FormController.errors){let n=this.queryElement("small.form-message");this.isError=!0,n.innerText=this.FormController.errors.message}}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.SBq))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-common-form-input"]],inputs:{Label:"Label",FormController:"FormController",Placeholder:"Placeholder",Id:"Id",Type:"Type",Submit:"Submit"},outputs:{InputChanged:"InputChanged"},decls:5,vars:11,consts:[[1,"form-group"],["for","user-signin-email"],[1,"form-control",3,"ngClass","formControl","id","placeholder","type","blur","input"],[1,"form-message",3,"ngClass"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"input",2),e.NdJ("blur",function(i){return t.blur(i)})("input",function(i){return t.input(i)}),e.qZA(),e._UZ(4,"small",3),e.qZA()),2&n&&(e.xp6(2),e.Oqu(t.Label),e.xp6(1),e.Q6J("ngClass",e.VKq(7,M,t.isError))("formControl",t.FormController)("id",t.Id)("placeholder",t.Placeholder)("type",t.Type),e.xp6(1),e.Q6J("ngClass",e.VKq(9,v,t.isError)))},directives:[o.Fj,m.mk,o.JJ,o.oH],styles:[".is-error[_ngcontent-%COMP%]{color:#dc3545;text-transform:capitalize}"]}),r})();const O=function(){return["/user/register"]},E=[{path:"",redirectTo:"/register",pathMatch:"full"},{path:"register",component:C},{path:"signin",component:(()=>{class r{constructor(n,t,u,i,I){this.fb=n,this.userService=t,this.validation=u,this.router=i,this.cookie=I,this.User=new h,this.submitEvent=!1,this.signInForm=new o.cw({}),this.email=new o.NI(this.User.email,[this.validation.required(),this.validation.email()]),this.password=new o.NI(this.User.password,[this.validation.required(),this.validation.minLength(6),this.validation.maxLength(15)])}ngOnInit(){this.createForm()}createForm(){this.signInForm=this.fb.group({email:this.email,password:this.password})}userSignIn(){this.submitEvent=!0,"VALID"==this.signInForm.status&&this.userService.userSignIn(this.User).then(n=>{n?(this.cookie.set("clientToken",n.token,{expires:86400}),this.router.navigate(["/"])):console.log(n.message)}).catch(n=>{throw n})}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(o.qu),e.Y36(d.K),e.Y36(_),e.Y36(g.F0),e.Y36(p.N))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-signin"]],decls:12,vars:7,consts:[[1,"user-register"],[1,"wrapper-register"],[1,"register--title"],[3,"formGroup","submit"],["Label","Email \u0111\u0103ng nh\u1eadp","Id","user-email","Placeholder","VD: Email@gmail.com","Type","email",3,"FormController","Submit","InputChanged"],["Label","M\u1eadt kh\u1ea9u","Id","user-password","Placeholder","Nh\u1eadp 6 k\xfd t\u1ef1 ho\u1eb7c nhi\u1ec1u h\u01a1n","Type","password",3,"FormController","Submit","InputChanged"],["type","submit",1,"btn","btn-user-signin"],[1,"user-change-form"],[3,"routerLink"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"\u0110\u0103ng nh\u1eadp"),e.qZA(),e.TgZ(4,"form",3),e.NdJ("submit",function(){return t.userSignIn()}),e.TgZ(5,"app-common-form-input",4),e.NdJ("InputChanged",function(i){return t.User.email=i}),e.qZA(),e.TgZ(6,"app-common-form-input",5),e.NdJ("InputChanged",function(i){return t.User.password=i}),e.qZA(),e.TgZ(7,"button",6),e._uU(8,"\u0110\u0103ng nh\u1eadp"),e.qZA(),e.TgZ(9,"div",7)(10,"a",8),e._uU(11,"\u0110\u0103ng k\xfd"),e.qZA()()()()()),2&n&&(e.xp6(4),e.Q6J("formGroup",t.signInForm),e.xp6(1),e.Q6J("FormController",t.email)("Submit",t.submitEvent),e.xp6(1),e.Q6J("FormController",t.password)("Submit",t.submitEvent),e.xp6(4),e.Q6J("routerLink",e.DdM(6,O)))},directives:[o._Y,o.JL,o.sg,U,g.yS],styles:["",".user-register[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;min-height:100vh}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]{box-shadow:0 0 2px #00000030;padding:35px 20px 15px;width:415px}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   .register--title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin-bottom:25px;text-align:center;text-transform:uppercase}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-user-signin[_ngcontent-%COMP%]{background-color:#f28d0f;color:#fff;text-transform:capitalize;width:100%}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-change-form[_ngcontent-%COMP%]{margin-top:15px}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-change-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.user-register[_ngcontent-%COMP%]   .wrapper-register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-change-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:inherit}"]}),r})()}];let w=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[g.Bz.forChild(E)],g.Bz]}),r})();var P=a(2837);let b=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[p.N,{provide:m.mr,useValue:"/"}],imports:[[m.ez,o.u5,o.UX,w,P._]]}),r})()}}]);