import{a as j}from"./chunk-DLKDHUTV.js";import{b as V,e as F}from"./chunk-HXA57QG4.js";import{A as o,C,Ca as M,E as p,H as a,I as s,M as _,N as c,Na as O,O as u,Oa as S,Pa as k,Sa as I,Ua as E,W as x,bb as z,cb as T,k as w,m as b,n as v,na as y,p as h,q as g,ya as P,z as l}from"./chunk-THNZGXPG.js";function H(n,t){if(n&1){let m=_();a(0,"span",8),c("click",function(){h(m);let i=u();return g(i.us.setMode("dark"))}),x(1," dark_mode "),s()}}function R(n,t){if(n&1){let m=_();a(0,"span",8),c("click",function(){h(m);let i=u();return g(i.us.setMode())}),x(1," light_mode "),s()}}var L=(()=>{let t=class t{constructor(e,i,r,f,N,U,q,B){this.us=e,this.ui=i,this._alert=r,this._http=f,this._hash=N,this._router=U,this._form=q,this._translate=B,this.form=this._form.getForm("sign",{formId:"sign",title:"Sign In / Sign Up",components:[{name:"Email",key:"email",focused:!0,required:!0,fields:[{name:"Placeholder",value:"Enter your email"},{name:"Label",value:"Email"}]},{name:"Password",key:"password",required:!0,fields:[{name:"Placeholder",value:"Enter your password"},{name:"Label",value:"Password"}]},{name:"Number",key:"resetPin",fields:[{name:"Placeholder",value:"Enter code from email"},{name:"Label",value:"code"}],hidden:!0},{name:"Button",fields:[{name:"Label",value:"Let's go"},{name:"Submit",value:!0},{name:"Click",value:()=>{this.submit()}}]}]}),this.user={email:"ceo@webart.work",password:"asdasdasdasd",resetPin:null},this._set=d=>{d?(localStorage.setItem("waw_user",JSON.stringify(d)),this._http.set("token",d.token),this.us.setUser(d),this.us.get(),this._router.navigateByUrl("/profile")):this._alert.error({text:"Something went wrong"})}}submit(){!this.form.components[2].hidden&&this.user.resetPin?this.save():this.user.email||this._alert.error({text:this._translate.translate("Sign.Enter your email")}),this.ui.valid(this.user.email)?this.user.password?(this._hash.set("email",this.user.email),this._http.post("/api/user/status",this.user,e=>{e.email&&e.pass?this.login():e.email?this.reset():this.sign()})):this._alert.error({text:this._translate.translate("Sign.Enter your password")}):this._alert.error({text:this._translate.translate("Sign.Enter proper email")})}login(){this._http.post("/api/user/login",this.user,this._set.bind(this))}sign(){this._http.post("/api/user/sign",this.user,this._set.bind(this))}reset(){this._http.post("/api/user/request",this.user,()=>{this.form.components[2].hidden=!1}),this._alert.info({text:"Mail will sent to your email"})}save(){this._http.post("/api/user/change",this.user,e=>{e?this._alert.info({text:"Password successfully changed"}):this._alert.error({text:"Wrong Code"}),this.login()})}};t.\u0275fac=function(i){return new(i||t)(o(j),o(I),o(k),o(O),o(S),o(P),o(z),o(E))},t.\u0275cmp=b({type:t,selectors:[["ng-component"]],decls:9,vars:4,consts:[[1,"auth-wrapper"],[1,"auth__wrap"],[1,"auth__img"],[3,"click"],[1,"auth__form"],[1,"auth"],["class","material-icons",3,"click",4,"ngIf"],[3,"wSubmit","submition","config"],[1,"material-icons",3,"click"]],template:function(i,r){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"icon-spider",3),c("click",function(){return r.us.setMode(r.us.mode?"":"dark")}),s()(),a(4,"div",4)(5,"div",5),C(6,H,2,0,"span",6)(7,R,2,0,"span",6),a(8,"wform",7),c("wSubmit",function(){return r.submit()}),s()()()()()),i&2&&(l(6),p("ngIf",!r.us.mode),l(),p("ngIf",r.us.mode),l(),p("submition",r.user)("config",r.form))},dependencies:[y,T,V],styles:["[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: rgb(197, 61, 61);--c-secondary-hover: rgb(150, 42, 42);--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #313335ab;--c-img-round: 50%;--card-background: #fefefe;--card-border-radius: 10px;--card-box-shadow: 0 4px 12px rgba(0, 0, 0, .15);--card-margin-bottom: 24px;--card-header-padding: 20px;--card-header-background: #e0e0e0;--card-body-padding: 20px;--card-section-padding: 10px 0;--card-footer-padding: 20px;--card-footer-background: #e0e0e0;--card-border-width: 2px;--card-border-color: #cccccc;--file-img-border-radius: 50%;--file-add-bg: #28a745;--file-add-bg-hover: #218838;--file-item-border-radius: 10px;--day-name: #988888;--b-radius-btn: 10px;--transition: all .3s;--events: #4c8e9d;--border: rgba(102, 91, 91, .432)}html.dark[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #d3cdcd;--c-calendar: #141414;--day-name: #dad5d5;--events: #1c2e32;--border: rgb(255 255 255 / 23%)}[_nghost-%COMP%]{position:fixed;width:100%;height:100%;overflow-y:auto;display:flex;flex-direction:column}.auth-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:var(--c-bg-primary);flex-grow:1;padding:20px;transition:all .3s}.auth[_ngcontent-%COMP%]{max-width:340px;width:100%;padding:30px;border-radius:10px;box-shadow:0 0 6px var(--c-shadow);background:var(--c-bg-secondary);display:flex;flex-flow:row wrap;position:relative}.auth[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;right:25px;top:25px;z-index:9;cursor:pointer}@media (max-width: 767.9px){.auth[_ngcontent-%COMP%]{padding:25px;flex-flow:column wrap}}.auth__title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:var(--c-text-primary);text-align:center;margin-bottom:15px}@media (max-width: 767.9px){.auth__title[_ngcontent-%COMP%]{font-size:18px}}.auth__btn[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.auth__btn[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;width:100%}.auth__wrap[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;align-items:center;max-width:880px;width:100%}@media (max-width: 767.9px){.auth__wrap[_ngcontent-%COMP%]{padding:25px;flex-flow:column wrap}}.auth__img[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%;display:flex;position:relative;padding-right:40px}.auth__img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{left:50%;transform:translate(-78%);font-size:320px;position:absolute;opacity:0;cursor:pointer}@media (max-width: 767.9px){.auth__img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:70px;transform:translate(-50%)}}.auth__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:260px;width:100%;object-fit:cover}.auth__img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{max-width:260px;width:100%;height:100%}@media (max-width: 767.9px){.auth__img[_ngcontent-%COMP%]{max-width:60px;margin:0 auto;flex:0 0 100%;padding:0 0 30px}.auth__img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:100%;width:100%}}.auth__form[_ngcontent-%COMP%]{width:95%;flex:0 0 50%;max-width:50%;padding-left:40px;display:flex;justify-content:flex-end}@media (max-width: 767.9px){.auth__form[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%;justify-content:center;padding:0}}@media (max-width: 767.9px){.auth[_ngcontent-%COMP%]   .form__title[_ngcontent-%COMP%]{font-size:14px}}wform[_ngcontent-%COMP%]{flex:1 0}@media (max-width: 767.9px){wform[_ngcontent-%COMP%]{flex:0 0 100%;padding:0}}.w-forms[_ngcontent-%COMP%]{position:relative}.w-forms__level[_ngcontent-%COMP%]{top:5px;right:5px;position:absolute;display:inline-block;color:var(--c-text-secondary);font-size:22px;line-height:20px;letter-spacing:.3px;transition:.3s all ease-in-out}.w-forms__level._sky[_ngcontent-%COMP%]{color:#17a2b8}.w-forms__level._orange[_ngcontent-%COMP%]{color:#e67e22}.w-forms__level._green[_ngcontent-%COMP%]{color:#14c76e}.w-forms__input[_ngcontent-%COMP%]{padding-right:35px}.w-forms__input-block[_ngcontent-%COMP%]{position:relative}.w-forms__toggle[_ngcontent-%COMP%]{display:flex;position:absolute;right:10px;top:50%;color:var(--c-placeholder);transform:translateY(-50%);cursor:pointer}.w-forms__toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:21px}.w-forms[_ngcontent-%COMP%]   .icon-visibility[_ngcontent-%COMP%]{color:var(--c-primary)}@media screen and (max-width: 768px){.auth__img[_ngcontent-%COMP%]{display:none}}"]});let n=t;return n})();var A=[{path:"",component:L}],nt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=w({imports:[M.forChild(A),F]});let n=t;return n})();export{nt as SignModule};
