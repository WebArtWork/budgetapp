import{A as T,C as _,E as p,G as Y,H as o,I as c,J as m,M,N as h,O as d,P as V,Q as I,W as g,Wa as W,X as v,Xa as j,Y as H,aa as L,ba as $,k as w,la as N,m as k,ma as B,n as O,na as P,p as u,q as x,qa as b,r as C,s as D,t as E,y as F,ya as z,z as l}from"./chunk-THNZGXPG.js";var G=[[["","header",""]],[["","body",""]]],R=["[header]","[body]"],A=n=>({"header--open":n});function U(n,i){n&1&&(o(0,"div",8),I(1,1),c())}var ce=(()=>{let i=class i{constructor(){this.config=this.config||{},this.config.show=typeof this.config.show=="boolean"?this.config.show:!1,this.config.toggle=this.config.toggle||this.toggle.bind(this),this.config.open=this.config.open||this.open.bind(this),this.config.close=this.config.close||this.close.bind(this)}toggle(){this.config.show=!this.config.show}open(){this.config.show=!0}close(){this.config.show=!1}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=k({type:i,selectors:[["wcollapse"]],inputs:{config:"config"},ngContentSelectors:R,decls:10,vars:4,consts:[[1,"header",3,"click","ngClass"],[1,"accardion__arrow"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6 9L12 15L18 9","stroke","#B9B01F","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["id","paint0_linear_31_2","x1","8","y1","-5.5","x2","12","y2","29","gradientUnits","userSpaceOnUse"],["stop-color","#183AE9"],["offset","1","stop-color","#2E9D75"],["class","body",4,"ngIf"],[1,"body"]],template:function(t,a){t&1&&(V(G),o(0,"div",0),h("click",function(){return a.config.toggle()}),I(1),o(2,"div",1),C(),o(3,"svg",2),m(4,"path",3),o(5,"defs")(6,"linearGradient",4),m(7,"stop",5)(8,"stop",6),c()()()()(),_(9,U,2,0,"div",7)),t&2&&(p("ngClass",$(2,A,a.config.show)),l(9),p("ngIf",a.config.show))},dependencies:[N,P],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px;background:#22252a;border-radius:12px}.header--open[_ngcontent-%COMP%]{border-radius:12px 12px 0 0}.header--open[_ngcontent-%COMP%]   .accardion__arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}.accardion__arrow[_ngcontent-%COMP%]{display:flex;transition:all .3s}"]});let n=i;return n})();var he=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=O({type:i}),i.\u0275inj=w({imports:[b]});let n=i;return n})();var q=()=>[1,2,3,4,5,6,7];function J(n,i){if(n&1&&(o(0,"span",22),g(1),c()),n&2){let s=d().$implicit,e=d(2);l(),v(e.dayTitle[s])}}function K(n,i){if(n&1){let s=M();o(0,"div",25),h("click",function(t){let a=u(s).$implicit;return d(4).eventClicked(a),x(t.stopPropagation())}),c()}}function Q(n,i){if(n&1&&(o(0,"span",23)(1,"span",23),g(2),c(),o(3,"div"),_(4,K,1,0,"div",24),c()()),n&2){let s=d().$implicit,e=d(2);l(2),v(e.startDay+s),l(2),p("ngForOf",e.eventsByDate[e.toDate(e.previousYear,e.previousMonth,e.startDay+s)])}}function X(n,i){if(n&1){let s=M();o(0,"div",25),h("click",function(t){let a=u(s).$implicit;return d(4).eventClicked(a),x(t.stopPropagation())}),c()}}function ee(n,i){if(n&1&&(o(0,"span")(1,"div",23),g(2),c(),o(3,"div"),_(4,X,1,0,"div",24),c()()),n&2){let s=d().$implicit,e=d().index,t=d();l(2),H(" ",s+e*7-t.skipDays," "),l(2),p("ngForOf",t.eventsByDate[t.toDate(t.currentYear,t.currentMonth,s+e*7-t.skipDays)])}}function te(n,i){if(n&1){let s=M();o(0,"div",25),h("click",function(t){let a=u(s).$implicit;return d(4).eventClicked(a),x(t.stopPropagation())}),c()}}function ne(n,i){if(n&1&&(o(0,"span")(1,"div"),g(2),c(),o(3,"div"),_(4,te,1,0,"div",24),c()()),n&2){let s=d().$implicit,e=d(2);l(2),v(s-e.keepDays),l(2),p("ngForOf",e.eventsByDate[e.toDate(e.nextYear,e.nextMonth,s-e.keepDays)])}}function ie(n,i){if(n&1){let s=M();o(0,"span",18),h("click",function(){let t=u(s).$implicit,a=d().index,r=d();return x(r.dateClicked(!a&&r.skipDays>=t?r.toDate(r.previousYear,r.previousMonth,r.startDay+t):a===r.weeksInMonth.length-1&&r.keepDays<t?r.toDate(r.nextYear,r.nextMonth,t-r.keepDays):r.toDate(r.currentYear,r.currentMonth,t+a*7-r.skipDays)))}),_(1,J,2,1,"span",19)(2,Q,5,2,"span",20)(3,ee,5,2,"span",21)(4,ne,5,2,"span",21),c()}if(n&2){let s=i.$implicit,e=d().index,t=d();l(),p("ngIf",!e),l(),p("ngIf",!e&&t.skipDays>=s),l(),p("ngIf",e&&e!==t.weeksInMonth.length-1||e===t.weeksInMonth.length-1&&t.keepDays>=s||!e&&t.skipDays<s),l(),p("ngIf",e===t.weeksInMonth.length-1&&t.keepDays<s)}}function ae(n,i){if(n&1&&(o(0,"div",15)(1,"span",16),g(2),c(),_(3,ie,5,4,"span",17),c()),n&2){let s=i.$implicit;l(2),v(s),l(),p("ngForOf",L(2,q))}}function oe(n,i){n&1&&m(0,"div",26)}function re(n,i){n&1&&(o(0,"div",29)(1,"div",30),C(),o(2,"svg",31)(3,"g",32),m(4,"path",33)(5,"path",34)(6,"path",35)(7,"path",36)(8,"path",37)(9,"path",38),c(),o(10,"defs")(11,"clipPath",39),m(12,"rect",40),c()()()(),D(),o(13,"div",41)(14,"div",42),m(15,"div",43),c()(),o(16,"button",44),g(17," + ADD NEW TRAVEL "),c()())}function se(n,i){if(n&1&&(o(0,"div",27),_(1,re,18,0,"div",28),c()),n&2){let s=d();l(),p("ngForOf",s.eventsByDate[s.selectedDate])}}var ye=(()=>{let i=class i{constructor(e){this._router=e,this.eventsByDate={},this.createEvent=new E,this.updateEvent=new E,this.dayTitle={1:"\u041F\u041D",2:"\u0412\u0422",3:"\u0421\u0420",4:"\u0427\u0422",5:"\u041F\u0422",6:"\u0421\u0411",7:"\u041D\u0414"},this.monthTitle={0:"\u0421\u0456\u0447\u0435\u043D\u044C",1:"\u041B\u044E\u0442\u0438\u0439",2:"\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C",3:"\u041A\u0432\u0456\u0442\u0435\u043D\u044C",4:"\u0422\u0440\u0430\u0432\u0435\u043D\u044C",5:"\u0427\u0435\u0440\u0432\u0435\u043D\u044C",6:"\u041B\u0438\u043F\u0435\u043D\u044C",7:"\u0421\u0435\u0440\u043F\u0435\u043D\u044C",8:"\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C",9:"\u0416\u043E\u0432\u0442\u0435\u043D\u044C",10:"\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",11:"\u0413\u0440\u0443\u0434\u0435\u043D\u044C"},this.manager=this._router.url.includes("manager"),this.currentMonth=new Date().getMonth(),this.currentYear=new Date().getFullYear(),this.weeksInMonth=[],this.startDay=0,this.skipDays=0,this.keepDays=0,this.selectedDate=localStorage.getItem("travel_selectedDate")||"",this._onMonthChange(),this.onResize()}setNow(){this.currentMonth=new Date().getMonth(),this.currentYear=new Date().getFullYear(),this._onMonthChange()}setPreviousMonth(){this.currentMonth--,this.currentMonth===-1&&(this.currentMonth=11,this.currentYear--),this._onMonthChange()}setNextMonth(){this.currentMonth++,this.currentMonth===12&&(this.currentMonth=0,this.currentYear++),this._onMonthChange()}_onMonthChange(){this.currentMonth===11?(this.previousMonth=10,this.previousYear=this.currentYear,this.nextMonth=0,this.nextYear=this.currentYear+1):this.currentMonth===0?(this.previousMonth=11,this.previousYear=this.currentYear-1,this.nextMonth=1,this.nextYear=this.currentYear):(this.previousMonth=this.currentMonth-1,this.previousYear=this.currentYear,this.nextMonth=this.currentMonth+1,this.nextYear=this.currentYear);let e=new Date(this.currentYear,this.currentMonth,1),t=this.getWeekNumber(e);this.weeksInMonth=[];let a=this.getWeeksInMonth(this.currentMonth,this.currentYear);for(let f=0;f<a;f++)this.weeksInMonth.push(t+f);this.skipDays=(e.getDay()===0?7:e.getDay())-1;let r=this.currentMonth>1?this.getDaysInMonth(this.currentMonth-1,this.currentYear):this.getDaysInMonth(11,this.currentYear-1),y=this.getDaysInMonth(this.currentMonth,this.currentYear);this.startDay=r-this.skipDays,this.keepDays=(y+this.skipDays)%7,(!this.selectedDate||this.selectedDate.split(".")[0]!==this.currentYear.toString()||this.selectedDate.split(".")[1]!==(this.currentMonth-1).toString())&&(this.selectedDate="")}onResize(){this.isMobile=window.innerWidth<=768}toDate(e,t,a,r="."){return`${e}${r}${t}${r}${a}`}dateClicked(e){this.isMobile&&(this.selectedDate=e,localStorage.setItem("travel_selectedDate",e))}eventClicked(e){this.isMobile?this.selectedDate=this.date(e):this.updateEvent.emit(e)}getWeekNumber(e){let t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+4-(t.getDay()||7));let a=new Date(t.getFullYear(),0,1);return Math.ceil(((t.getTime()-a.getTime())/864e5+1)/7)}getWeeksInMonth(e,t){let a=new Date(t,e,1),r=new Date(t,e+1,0),y=this.getWeekNumber(a),f=this.getWeekNumber(r);return y>f&&(f=this.getWeekNumber(new Date(t,11,31))),f-y+1}getDaysInMonth(e,t){return new Date(t,e+1,0).getDate()}date(e,t="."){return`${e.year}${t}${e.month}${t}${e.day}`}};i.\u0275fac=function(t){return new(t||i)(T(z))},i.\u0275cmp=k({type:i,selectors:[["wcalendar"]],hostBindings:function(t,a){t&1&&h("resize",function(){return a.onResize()},!1,F)},inputs:{eventsByDate:"eventsByDate"},outputs:{createEvent:"createEvent",updateEvent:"updateEvent"},decls:21,vars:7,consts:[[1,"calendar-nav"],[1,"calendar-nav__today"],[3,"click"],[1,"calendar-nav-year"],[1,"calendar-nav-year__buttons"],[1,"material-icons","arrow-back",3,"click"],["width","34","height","34","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.94961 2.7043L8.89219 2.75352L4.61289 6.47227C4.46797 6.59805 4.37773 6.78672 4.37773 6.99727C4.37773 7.20781 4.4707 7.39648 4.61289 7.52227L8.88398 11.2383L8.95508 11.3012C9.02344 11.3477 9.10547 11.375 9.19297 11.375C9.43086 11.375 9.625 11.1727 9.625 10.9211L9.625 3.07891C9.625 2.82734 9.43086 2.625 9.19297 2.625C9.10273 2.625 9.01797 2.65508 8.94961 2.7043Z","fill","black"],[1,"calendar-nav-year__data"],[1,"material-icons","arrow-next",3,"click"],["d","M5.05039 11.2957L5.10781 11.2465L9.38711 7.52773C9.53203 7.40195 9.62227 7.21328 9.62227 7.00273C9.62227 6.79219 9.5293 6.60352 9.38711 6.47773L5.11602 2.76172L5.04492 2.69883C4.97656 2.65234 4.89453 2.625 4.80703 2.625C4.56914 2.625 4.375 2.82734 4.375 3.07891V10.9211C4.375 11.1727 4.56914 11.375 4.80703 11.375C4.89727 11.375 4.98203 11.3449 5.05039 11.2957Z","fill","black"],[1,"calendar"],["class","calendar__row",4,"ngFor","ngForOf"],["class","line",4,"ngIf"],["class","events-wrapper",4,"ngIf"],[1,"calendar__row"],[1,"calendar__week"],["class","calendar__day",3,"click",4,"ngFor","ngForOf"],[1,"calendar__day",3,"click"],["class","calendar__day-name",4,"ngIf"],["class","calendar__stard-day",4,"ngIf"],[4,"ngIf"],[1,"calendar__day-name"],[1,"calendar__stard-day"],["class","calendar-events",3,"click",4,"ngFor","ngForOf"],[1,"calendar-events",3,"click"],[1,"line"],[1,"events-wrapper"],["class","event__item",4,"ngFor","ngForOf"],[1,"event__item"],[1,"event__icon"],["width","40","height","40","viewBox","0 0 40 40","fill","none","xmlns","http://www.w3.org/2000/svg"],["clip-path","url(#clip0_120_2)"],["d","M5.38231 1.1333C2.68075 1.1333 1.16199 2.53004 1.16199 5.38396V34.8037C1.16199 37.4732 2.52741 38.8709 5.22682 38.8709H34.771C37.4705 38.8709 38.838 37.5428 38.838 34.8037V5.38396C38.838 2.59964 37.4705 1.1333 34.6862 1.1333C34.6862 1.1333 5.37303 1.12396 5.38231 1.1333Z","fill","#256EFF","stroke","#256EFF","stroke-width","3.408"],["d","M20.1713 6.70935C17.5403 6.70935 13.9067 7.46112 12.4032 8.08759C10.8996 8.71406 9.8973 9.34053 9.58409 10.9067L8.45651 19.5891V31.5528H10.3985V33.429C10.3985 35.7165 13.7461 35.7165 13.7461 33.429V31.5528H19.9263H19.9459H26.3712V33.429C26.3712 35.7165 29.7187 35.7165 29.7187 33.429V31.5528H31.6607V19.5891L30.5331 10.9067C30.2199 9.34053 29.2176 8.71406 27.714 8.08759C26.2105 7.46112 22.5769 6.70935 19.9459 6.70935","fill","white"],["d","M28.0436 27.8023C28.9304 27.8023 29.6493 27.0833 29.6493 26.1965C29.6493 25.3097 28.9304 24.5906 28.0436 24.5906C27.1568 24.5906 26.4377 25.3097 26.4377 26.1965C26.4377 27.0833 27.1568 27.8023 28.0436 27.8023Z","fill","#256EFF"],["d","M12.0736 27.8023C11.1868 27.8023 10.4679 27.0833 10.4679 26.1965C10.4679 25.3097 11.1868 24.5906 12.0736 24.5906C12.9604 24.5906 13.6794 25.3097 13.6794 26.1965C13.6794 27.0833 12.9604 27.8023 12.0736 27.8023Z","fill","#256EFF"],["d","M19.9344 10.3115H15.285C14.3453 10.3115 14.3453 8.90198 15.285 8.90198H19.9459H24.8322C25.7719 8.90198 25.7719 10.3115 24.8322 10.3115H19.9344Z","fill","#256EFF"],["d","M19.9344 11.7346H12.7516C11.7589 11.7346 11.4996 12.2391 11.3791 13.0041L10.5014 19.3014C10.4195 19.9049 10.5941 20.5041 11.4281 20.5041H19.9458H28.6891C29.523 20.5041 29.6977 19.9049 29.6158 19.3014L28.7381 13.0041C28.6176 12.2391 28.3583 11.7346 27.3656 11.7346H19.9344Z","fill","#256EFF"],["id","clip0_120_2"],["width","40","height","40","fill","white"],[1,"event-text"],[1,"event-text","event-text__left"],[1,"event-text__row"],[1,"add-event-mobile"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"div",1)(2,"wbutton",2),h("click",function(){return a.setNow()}),g(3,"\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),c()(),o(4,"div",3)(5,"div",4)(6,"i",5),h("click",function(){return a.setPreviousMonth()}),C(),o(7,"svg",6),m(8,"path",7),c()(),D(),o(9,"div",8)(10,"span"),g(11),c(),o(12,"span"),g(13),c()(),o(14,"i",9),h("click",function(){return a.setNextMonth()}),C(),o(15,"svg",6),m(16,"path",10),c()()()()(),D(),o(17,"div",11),_(18,ae,4,3,"div",12),c(),_(19,oe,1,0,"div",13)(20,se,2,1,"div",14)),t&2&&(l(11),v(a.monthTitle[a.currentMonth]),l(2),v(a.currentYear),l(4),Y("calendar-mobile",a.isMobile),l(),p("ngForOf",a.weeksInMonth),l(),p("ngIf",a.isMobile&&a.selectedDate),l(),p("ngIf",a.isMobile&&a.selectedDate))},dependencies:[B,P,W],styles:['@charset "UTF-8";.calendar[_ngcontent-%COMP%]{padding-top:20px;display:flex;flex-direction:column;height:100vh}.calendar__row[_ngcontent-%COMP%]{flex:1;display:flex;position:relative}.calendar__stard-day[_ngcontent-%COMP%]{text-align:center}.calendar__day[_ngcontent-%COMP%]{flex:1;background:var(--c-calendar);padding:10px 5px;border-radius:0;border:1px solid var(--border);font-weight:900;display:flex;flex-flow:column wrap}.calendar__day-name[_ngcontent-%COMP%]{color:var(--day-name);font-size:12px;font-weight:700;padding-bottom:3px;text-align:center}.calendar__week[_ngcontent-%COMP%]{position:absolute;width:30px;height:30px;background:#625959;display:flex;align-items:center;justify-content:center;border-radius:5px;color:#fff;top:-10px;left:-10px}.calendar-time[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--c-primary);line-height:1;justify-content:center;font-weight:300}.calendar-time__clock[_ngcontent-%COMP%]{display:flex;margin-right:7px}.calendar-time__clock[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--c-primary)}.calendar-events[_ngcontent-%COMP%]{font-size:12px;background:var(--events);border-radius:5px;font-weight:500;color:#fff;padding:5px;margin-bottom:5px}.calendar-events__text[_ngcontent-%COMP%]{font-weight:900}.calendar-events__column[_ngcontent-%COMP%]{margin-right:20px}.calendar-events__row[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #fff}.calendar-events__row[_ngcontent-%COMP%]:last-child{border:none}.calendar-events__name[_ngcontent-%COMP%]{color:var(--c-primary)}.calendar-nav[_ngcontent-%COMP%], .calendar-nav-year[_ngcontent-%COMP%]{display:flex;align-items:center}.calendar-nav-year__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;width:250px;justify-content:space-between}.calendar-nav-year__buttons[_ngcontent-%COMP%]   .arrow-back[_ngcontent-%COMP%]{cursor:pointer}.calendar-nav-year__buttons[_ngcontent-%COMP%]   .arrow-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--c-primary)}.calendar-nav-year__buttons[_ngcontent-%COMP%]   .arrow-next[_ngcontent-%COMP%]{cursor:pointer}.calendar-nav-year__buttons[_ngcontent-%COMP%]   .arrow-next[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--c-primary)}.calendar-nav-year__data[_ngcontent-%COMP%]{margin:0 15px;font-size:20px}.calendar-nav-year__data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{margin-left:10px}.calendar-nav__today[_ngcontent-%COMP%]{margin-right:20px}.line[_ngcontent-%COMP%]{width:100%;z-index:1;background:#fff;height:1px;margin:15px 0}.event__item[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--day-name);margin-bottom:10px}.event__icon[_ngcontent-%COMP%]{margin-right:10px}.event-text__left[_ngcontent-%COMP%]{display:flex}.event-text__title[_ngcontent-%COMP%]{font-weight:700}.event-text__row[_ngcontent-%COMP%]{display:flex;padding-bottom:5px}.event-text__column[_ngcontent-%COMP%]{margin-right:20px}.event-text__column-from[_ngcontent-%COMP%]{color:var(--c-primary);font-weight:900}.event-text__column-time[_ngcontent-%COMP%]{font-size:14px;color:var(--day-name)}.event-driver[_ngcontent-%COMP%]{border-left:1px solid var(--day-name);padding-left:10px}.event-driver__name[_ngcontent-%COMP%]{color:var(--c-primary);font-weight:900}.event-driver__phone[_ngcontent-%COMP%]{font-size:14px;color:var(--day-name)}.add-event-mobile[_ngcontent-%COMP%]{padding:10px 20px;margin-top:20px}@media screen and (max-width: 769px){.calendar-nav-year__buttons[_ngcontent-%COMP%]{width:unset}.calendar-nav__today[_ngcontent-%COMP%]{margin-right:10px}.calendar-nav-year__data[_ngcontent-%COMP%]{margin:0 15px;font-size:15px;font-weight:600}.calendar-mobile[_ngcontent-%COMP%]{height:fit-content}.calendar-mobile[_ngcontent-%COMP%]   .calendar-events[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .calendar-mobile[_ngcontent-%COMP%]   .calendar-events[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:none}.calendar-mobile[_ngcontent-%COMP%]   .calendar__day[_ngcontent-%COMP%]{margin:2px;padding:8px;border-radius:5px;min-height:70px;font-size:14px}.calendar-mobile[_ngcontent-%COMP%]   .calendar__week[_ngcontent-%COMP%]{width:21px;height:21px;font-size:12px}.calendar-mobile[_ngcontent-%COMP%]   .calendar-events[_ngcontent-%COMP%]{padding:2px}}']});let n=i;return n})();var be=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=O({type:i}),i.\u0275inj=w({imports:[b,j]});let n=i;return n})();export{ce as a,he as b,ye as c,be as d};
