import{a as k}from"./chunk-DLKDHUTV.js";import{a as j,c as I,d as L,e as N}from"./chunk-HXA57QG4.js";import{A as l,C as x,Ca as C,Da as M,E as p,H as n,I as a,Ia as O,M as y,N as c,O as u,Va as S,W as f,Wa as T,aa as P,bb as E,cb as F,k as g,m as h,n as _,na as v,p as b,q as w,z as m}from"./chunk-THNZGXPG.js";var A=()=>({"border-radius":"var(--c-img-round)",width:"52px",height:"52px"});function B(o,e){if(o&1){let d=y();n(0,"wform",13),c("wChange",function(){b(d);let r=u();return w(r.update())}),a()}if(o&2){let d=u();p("config",d.formProfile)("submition",d.user)}}var z=(()=>{let e=class e{constructor(t,r,i){this._form=t,this._core=r,this.us=i,this.url=M.url,this.formProfile=this._form.getForm("profile",{formId:"profile",title:"Profile Settings",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"Enter your name"},{name:"Label",value:"Name"}]},{name:"Text",key:"phone",fields:[{name:"Placeholder",value:"Enter your phone"},{name:"Label",value:"Phone"}]},{name:"Text",key:"bio",fields:[{name:"Placeholder",value:"Enter your bio"},{name:"Label",value:"Bio"},{name:"Textarea",value:!0}]}]}),this.formPassword=this._form.getForm("change password",{formId:"change password",title:"Change password",components:[{name:"Password",key:"oldPass",focused:!0,fields:[{name:"Placeholder",value:"Enter your old password"},{name:"Label",value:"Old Password"}]},{name:"Password",key:"newPass",fields:[{name:"Placeholder",value:"Enter your new password"},{name:"Label",value:"New Password"}]}]}),this._core.onComplete("us.user").then(()=>{let s={};this._core.copy(this.us.user,s),this.user=s})}update(){this._core.copy(this.user,this.us.user),this.us.updateMe()}changePassword(){this._form.modal(this.formPassword,{label:"Change",click:(t,r)=>{this.us.changePassword(t.oldPass,t.newPass),r()}}).then(t=>{this.us.changePassword(t.oldPass,t.newPass)})}updateThumb(t){this.us.user.thumb=Array.isArray(t)?t[0]:t,this.us.updateMe()}};e.\u0275fac=function(r){return new(r||e)(l(E),l(O),l(k))},e.\u0275cmp=h({type:e,selectors:[["app-profile"]],decls:18,vars:8,consts:[[1,"container"],[1,"profile__header"],[1,"avatar","_profile"],["err","assets/default.png","container","user",3,"update","value","name","isPhoto","imgStyle","height","width"],[1,"profile__body"],[3,"config","submition","wChange",4,"ngIf"],[1,"profile__footer"],[1,"profile__logout"],["type","danger",3,"click"],[1,"material-icons"],["translate",""],[1,"profile__password"],["type","link","translate","",3,"click"],[3,"wChange","config","submition"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"wcard")(2,"div",1)(3,"div")(4,"div",2)(5,"ngx-file",3),c("update",function(D){return i.updateThumb(D)}),a()()()(),n(6,"div",4),x(7,B,1,2,"wform",5),n(8,"div",6)(9,"div",7)(10,"wbutton",8),c("click",function(){return i.us.logout()}),n(11,"span",9),f(12,"logout"),a(),n(13,"span",10),f(14,"Profile.Logout"),a()()(),n(15,"div",11)(16,"wbutton",12),c("click",function(){return i.changePassword()}),f(17," Profile.Change Password "),a()()()()()()),r&2&&(m(5),p("value",i.us.user.thumb?i.url+i.us.user.thumb:"assets/default.png")("name",i.us.user._id+".jpg")("isPhoto",!0)("imgStyle",P(7,A))("height",512)("width",512),m(2),p("ngIf",i.user))},dependencies:[S,v,T,j,F,I],styles:["[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: rgb(197, 61, 61);--c-secondary-hover: rgb(150, 42, 42);--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #313335ab;--c-img-round: 50%;--card-background: #fefefe;--card-border-radius: 10px;--card-box-shadow: 0 4px 12px rgba(0, 0, 0, .15);--card-margin-bottom: 24px;--card-header-padding: 20px;--card-header-background: #e0e0e0;--card-body-padding: 20px;--card-section-padding: 10px 0;--card-footer-padding: 20px;--card-footer-background: #e0e0e0;--card-border-width: 2px;--card-border-color: #cccccc;--file-img-border-radius: 50%;--file-add-bg: #28a745;--file-add-bg-hover: #218838;--file-item-border-radius: 10px;--day-name: #988888;--b-radius-btn: 10px;--transition: all .3s;--events: #4c8e9d;--border: rgba(102, 91, 91, .432)}html.dark[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #d3cdcd;--c-calendar: #141414;--day-name: #dad5d5;--events: #1c2e32;--border: rgb(255 255 255 / 23%)}[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   wcard[_ngcontent-%COMP%]{width:100%;transition:all .3s;display:block}.container[_ngcontent-%COMP%]{padding:unset}.profile__header[_ngcontent-%COMP%]{z-index:9;top:20px;position:absolute;right:30px;letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);display:flex;justify-content:space-between;align-items:center;border-radius:8px}.profile__footer[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}@media (max-width: 767.9px){.profile__footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.profile__footer[_ngcontent-%COMP%]   .profile__logout[_ngcontent-%COMP%]{order:2;margin-top:20px}}.profile__logout[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;display:flex;justify-content:space-between;align-items:center}.profile__logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:10px}.imgClass[_ngcontent-%COMP%]{height:52px;width:52px}.avatar[_ngcontent-%COMP%]{border-radius:50%;border:1px solid var(--c-border);position:relative;margin:0 auto;padding:3px}.avatar._profile[_ngcontent-%COMP%]{width:60px;height:60px}.avatar__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.avatar__upload[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:0;bottom:0;width:24px;height:24px;border-radius:50%;background:var(--c-primary);display:flex;justify-content:center;align-items:center;transition:.3s all ease-in-out}.avatar__icon[_ngcontent-%COMP%]{color:#fff;font-size:16px}.profile__password[_ngcontent-%COMP%]{cursor:pointer}"]});let o=e;return o})();var R=[{path:"",component:z}],oe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=g({imports:[C.forChild(R),N,L]});let o=e;return o})();export{oe as ProfileModule};
