(this["webpackJsonpweather-devchallenges"]=this["webpackJsonpweather-devchallenges"]||[]).push([[0],{5:function(n,e,t){n.exports={containerHigh:"Highligths_containerHigh__1vSDz",title__h1:"Highligths_title__h1__P_WAm",title__unity:"Highligths_title__unity__7mOeA",title__h6:"Highligths_title__h6__vl3_z",text__details:"Highligths_text__details__3z_Gi",wind__icon:"Highligths_wind__icon__1HynA",progress__bar:"Highligths_progress__bar__2iwYH",progress__container:"Highligths_progress__container__2xuDI",labels:"Highligths_labels__1y5iI",progress__porcentaje:"Highligths_progress__porcentaje__kDzbV"}},56:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),i=t(14),c=t.n(i),o=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),a(n),i(n),c(n)}))},s=t(3),l=t(2),d=t(9),u=t.n(d),h=t(15),p={getCurrentCity:"Get current city",setCities:"Set cities",setNewCity:"Set new city",showMenu:"Show menu",setCurrentSearch:"Set Current Search",clearCurrentSearch:"Clear Current Search",clearCities:"Clear Cities",setLoadingToday:"Set Loading Today",setFahrenheit:"Set Fahrenheit",setCelsius:"Set Celsius"},m="910906c18c36848884a9e502f13402c2",g=function(){return function(){var n=Object(h.a)(u.a.mark((function n(e){var t,r,a,i,c,o,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(y()),n.prev=1,n.next=4,new Promise((function(n,e){navigator.geolocation.getCurrentPosition((function(e){return n(e)}),(function(n){return e(n)}))}));case 4:return t=n.sent,r=t.coords,a=r.latitude,i=r.longitude,c="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(i,"&exclude=hourly,minutely&units=metric&appid=").concat(m),n.next=9,fetch(c);case 9:return o=n.sent,n.next=12,o.json();case 12:(s=n.sent).daily=s.daily.slice(1,6),e(b(s)),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(1),console.log(n.t0);case 20:case"end":return n.stop()}}),n,null,[[1,17]])})));return function(e){return n.apply(this,arguments)}}()},b=function(n){return{type:p.getCurrentCity,payload:n}},j=function(n){return{type:p.setCities,payload:n}},f=function(n){return{type:p.setNewCity,payload:n}},x=function(){return{type:p.showMenu}},v=function(){return{type:p.clearCurrentSearch}},O=function(){return{type:p.clearCities}},y=function(){return{type:p.setLoadingToday}},_={"01d":"https://res.cloudinary.com/francoder/image/upload/v1610392552/weather-Devchallenges/Clear_sg5aac.png","02d":"https://res.cloudinary.com/francoder/image/upload/v1610392552/weather-Devchallenges/LightCloud_llxyjw.png","03d":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/HeavyCloud_aspazv.png","04d":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/HeavyCloud_aspazv.png","09d":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/LightRain_bdxwqc.png","10d":"https://res.cloudinary.com/francoder/image/upload/v1610392552/weather-Devchallenges/HeavyRain_gcdwui.png","11d":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/Thunderstorm_ecyjfo.png","13d":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/Snow_qhwtly.png","01n":"https://res.cloudinary.com/francoder/image/upload/v1610392552/weather-Devchallenges/Clear_sg5aac.png","02n":"https://res.cloudinary.com/francoder/image/upload/v1610392552/weather-Devchallenges/LightCloud_llxyjw.png","03n":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/HeavyCloud_aspazv.png","04n":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/HeavyCloud_aspazv.png","09n":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/LightRain_bdxwqc.png","10n":"https://res.cloudinary.com/francoder/image/upload/v1610392552/weather-Devchallenges/HeavyRain_gcdwui.png","11n":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/Thunderstorm_ecyjfo.png","13n":"https://res.cloudinary.com/francoder/image/upload/v1610392553/weather-Devchallenges/Snow_qhwtly.png"},w=t(4),E=t(8),k=t.n(E);function C(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return C=function(){return n},n}function S(){var n=Object(s.a)(['\n    min-height: 810px;\n    text-align: center;\n    background: #1E213A;\n    @media (min-width: 768px){\n      min-height: 100vh;\n    }\n    .header {\n      display:flex;\n      justify-content: space-between;\n      padding: 0em .7em 1em;\n      margin-bottom: 86px;\n      @media (min-width: 768px){\n        margin-bottom: 109px;\n      }\n      &__button {\n        border: none;\n        padding: .7em 1em;\n        color: #E7E7EB;\n        background: #6E707A;\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n        margin: 18px 0 0 12px;\n        outline: none;\n        &:hover {\n          cursor: pointer;\n        }\n        @media(min-width: 768px){\n          margin: 42px 0 0 46px;\n        }\n      }\n      &__icon {\n        color: #E7E7EB;\n        border: none;\n        border-radius: 50%;\n        padding: 1em;\n        background: #6E707A;\n        margin: 18px 12px 0 0;\n        display: flex;\n        outline: none;\n        &:hover {\n          cursor: pointer;\n        }\n        #location {\n          font-size: 22px;\n        }\n        @media(min-width: 768px){\n          margin: 42px 46px 0 0;\n        }\n      }\n    }\n    .main {\n      img {\n        display: block;\n        margin: 0 auto;\n        margin-bottom: 40px;\n        @media (min-width: 768px){\n          margin-bottom: 87px;\n        }\n      }\n      .title__h1 {\n        font-size: 144px;\n        font-weight: 500;\n        color: white;\n        margin: 0;\n        margin-bottom: 23px;\n        @media (min-width: 768px){\n          margin-bottom: 87px;\n        }\n        & span {\n          font-size: 48px;\n          color: #A09FB1;\n        }\n      }\n      .title__h2 {\n        font-size: 36px;\n        font-weight: 600;\n        color: #A09FB1;\n        margin-bottom: 48px;\n        @media (min-width: 768px){\n          margin-bottom: 87px;\n        }\n      }\n      &__today {\n        font-size: 18px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 21px;\n        letter-spacing: 0em;\n        text-align: center;\n\n        color: #88869D;\n        margin-bottom: 33px;\n      }\n      small {\n        font-size: 18px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 21px;\n        letter-spacing: 0em;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #88869D;\n        padding-bottom: 105px;\n        & #place {\n          margin-right: 9px;\n        }\n        @media (min-width: 796px){\n          padding-bottom: 52px;\n        }\n      }\n    }\n    .hvr-overline-from-left {\n      display: inline-block;\n      vertical-align: middle;\n      -webkit-transform: perspective(1px) translateZ(0);\n      transform: perspective(1px) translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      position: relative;\n      overflow: hidden;\n    }\n    .hvr-overline-from-left:before {\n      content: "";\n      position: absolute;\n      z-index: -1;\n      left: 0;\n      right: 100%;\n      top: 0;\n      background: #FFEC65;\n      height: 4px;\n      -webkit-transition-property: right;\n      transition-property: right;\n      -webkit-transition-duration: 0.3s;\n      transition-duration: 0.3s;\n      -webkit-transition-timing-function: ease-out;\n      transition-timing-function: ease-out;\n    }\n    .hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before {\n      right: 0;\n    }\n    .hvr-icon-grow {\n      vertical-align: middle;\n      -webkit-transform: perspective(1px) translateZ(0);\n      transform: perspective(1px) translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      -webkit-transition-duration: 0.3s;\n      transition-duration: 0.3s;\n    }\n    .hvr-icon-grow .hvr-icon {\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      -webkit-transition-duration: 0.3s;\n      transition-duration: 0.3s;\n      -webkit-transition-property: transform;\n      transition-property: transform;\n      -webkit-transition-timing-function: ease-out;\n      transition-timing-function: ease-out;\n    }\n    .hvr-icon-grow:hover .hvr-icon {\n      -webkit-transform: scale(1.2) translateZ(0);\n      transform: scale(1.2) translateZ(0);\n    }\n  ']);return S=function(){return n},n}var N=w.a.div(S()),D=w.a.div(C()),z=function(){var n=Object(l.c)((function(n){return n.currentTimezone})).split("/"),e=Object(l.c)((function(n){return n})).loadingToday,t=Math.round(Object(l.c)((function(n){return n.current.temp}))),a=Object(l.c)((function(n){return n.current.weather[0].main})),i=Object(l.c)((function(n){return n.current.weather[0].icon})),c=Object(l.b)(),o=Object(l.c)((function(n){return n.current})).dt,s=Object(l.c)((function(n){return n})).fahrenheit,d=new Date(1e3*o),u=d.toLocaleDateString("en-US",{weekday:"short"}),h=d.toLocaleDateString("en-US",{day:"numeric"}),p=d.toLocaleDateString("en-US",{month:"short"}),m=Math.round(9*t/5+32);return Object(r.jsxs)(N,{children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("button",{className:"header__button hvr-overline-from-left",onClick:function(){c(x())},children:"Search for places"}),Object(r.jsx)("button",{className:"header__icon hvr-icon-grow",onClick:function(){c(g())},children:Object(r.jsx)("span",{className:"material-icons hvr-icon",id:"location",children:"my_location"})})]}),e?Object(r.jsx)(D,{children:Object(r.jsx)(k.a,{type:"TailSpin",height:100,width:100,color:"#E7E7EB"})}):Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)("img",{src:_[i],alt:"img principal",className:"main__img"}),Object(r.jsxs)("h1",{className:"title__h1",children:[s?m:t,Object(r.jsx)("span",{children:s?"\xb0F":"\xb0C"})]}),Object(r.jsx)("h2",{className:"title__h2",children:a}),Object(r.jsx)("p",{className:"main__today",children:"Today - ".concat(u,", ").concat(h," ").concat(p)}),Object(r.jsxs)("small",{className:"main__place",children:[Object(r.jsx)("span",{className:"material-icons",id:"place",children:"place"}),n[n.length-1].replaceAll("_"," ")]})]})]})},T=t(23);function H(){var n=Object(s.a)(["\n    width: 120px;\n    height: 177px;\n    background-color: #1E213A;\n    .title__h2 {\n      font-family: Raleway;\n      font-size: 16px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 19px;\n      letter-spacing: 0em;\n      text-align: center;\n      color: #E7E7EB;\n      padding-top: 1em;\n      margin-bottom: 1em;\n    }\n    img {\n      width:50%;\n      min-height: 70px;\n      display: block;\n      margin: 0 auto;\n      margin-bottom: 1em;\n      object-fit: contain;\n    }\n    p {\n      font-family: Raleway;\n      font-size: 16px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 19px;\n      letter-spacing: 0em;\n      text-align: center;\n      .min {\n        color: #E7E7EB;\n      }\n      .max {\n        color: #A09FB1;\n        margin-left: 5px;\n      }\n    }\n  "]);return H=function(){return n},n}var B=w.a.div(H()),F=function(n){var e=n.temp,t=n.date,a=n.icon,i=Object(l.c)((function(n){return n})).fahrenheit,c=e.min,o=e.max,s=Math.round(9*c/5+32),d=Math.round(9*o/5+32);return Object(r.jsxs)(B,{children:[Object(r.jsx)("h2",{className:"title__h2",children:T.DateTime.fromSeconds(t).toFormat("ccc, d LLL")}),Object(r.jsx)("img",{src:_[a],alt:"Icon Weather"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"min",children:i?"".concat(s,"\u2109"):"".concat(Math.round(c),"\u2103")}),Object(r.jsx)("span",{className:"max",children:i?"".concat(d,"\u2109"):"".concat(Math.round(o),"\u2103")})]})]})};function A(){var n=Object(s.a)(["\n  display: grid; \n  grid-row-gap: 32px;\n  grid-column-gap: 26px;\n  grid-template-columns: repeat(2, 120px);\n  margin-bottom: 51px;\n  justify-content: center;\n  padding-top: 52px;\n  @media (min-width: 768px){\n    grid-template-columns: repeat(3, 120px);\n    margin-bottom: 72px;\n    justify-content: space-evenly;\n  }\n  @media (min-width: 992px){\n    grid-template-columns: repeat(5, 120px);\n    padding-top: 66px;\n  }\n\n"]);return A=function(){return n},n}var L=w.a.div(A()),M=function(){var n=Object(l.c)((function(n){return n.week}));return Object(r.jsx)(L,{children:n.map((function(n){return Object(r.jsx)(F,{temp:n.temp,date:n.dt,icon:n.weather[0].icon},n.dt)}))})},R=t(5),Z=t.n(R);var I=function(){var n=Object(l.c)((function(n){return n.current.wind_speed})),e=Object(l.c)((function(n){return n})).current;return Object(r.jsxs)("div",{className:Z.a.containerHigh,children:[Object(r.jsx)("h6",{className:Z.a.title__h6,children:"Wind Status"}),Object(r.jsxs)("h1",{className:Z.a.title__h1,children:[n,Object(r.jsx)("span",{className:Z.a.title__unity,children:"mph"})]}),Object(r.jsxs)("p",{className:Z.a.text__details,children:[Object(r.jsx)("span",{className:"material-icons",id:Z.a.wind__icon,style:{transform:"rotate(".concat(e.wind_deg,"deg)")},children:"near_me"}),"WSW"]})]})};var P=function(){var n=Object(l.c)((function(n){return n.current.pressure}));return Object(r.jsxs)("div",{className:Z.a.containerHigh,children:[Object(r.jsx)("h6",{className:Z.a.title__h6,children:"AirPressure"}),Object(r.jsxs)("h1",{className:Z.a.title__h1,children:[n,Object(r.jsx)("span",{className:Z.a.title__unity,children:"mb"})]})]})};var q=function(){var n=Object(l.c)((function(n){return n.current.humidity}));return Object(r.jsxs)("div",{className:Z.a.containerHigh,children:[Object(r.jsx)("h6",{className:Z.a.title__h6,children:"Humidity"}),Object(r.jsxs)("h1",{className:Z.a.title__h1,children:[n,Object(r.jsx)("span",{className:Z.a.title__unity,children:"%"})]}),Object(r.jsxs)("div",{className:Z.a.progress__container,children:[Object(r.jsxs)("label",{className:Z.a.labels,children:[Object(r.jsx)("span",{children:"0"}),Object(r.jsx)("span",{children:"50"}),Object(r.jsx)("span",{children:"100"})]}),Object(r.jsx)("progress",{className:Z.a.progress__bar,id:"file",max:"100",value:"".concat(n)}),Object(r.jsx)("p",{className:Z.a.progress__porcentaje,children:Object(r.jsx)("span",{children:" %"})})]})]})},J=t(13);var W=function(){var n=Object(l.c)((function(n){return n.current.visibility})),e=Object(a.useState)(0),t=Object(J.a)(e,2),i=t[0],c=t[1];return Object(a.useEffect)((function(){c((621371e-9*n).toFixed(2))}),[n]),Object(r.jsxs)("div",{className:Z.a.containerHigh,children:[Object(r.jsx)("h6",{className:Z.a.title__h6,children:"Visibility"}),Object(r.jsxs)("h1",{className:Z.a.title__h1,children:[i,Object(r.jsx)("span",{className:Z.a.title__unity,children:"miles"})]})]})};function U(){var n=Object(s.a)(["\n    background: var(--dark-gray);\n    padding: 1.5em 0;\n  "]);return U=function(){return n},n}function V(){var n=Object(s.a)(["\n    color: #E7E7EB;\n    font-family: Raleway;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 28px;\n    letter-spacing: 0em;\n    text-align: center;\n    margin-bottom: 32px;\n    @media (min-width:770px){\n      text-align: left;\n    }\n  "]);return V=function(){return n},n}function G(){var n=Object(s.a)(["\n  display: grid;\n  padding-bottom: 5em; \n  grid-row-gap: 32px;\n  grid-auto-flow: row-dense;\n  grid-column-gap: 48px;\n  grid-template-columns: 328px;\n  @media (min-width: 768px){\n    grid-template-columns: repeat(2, 328px);\n    grid-row-gap: 48px;\n    grid-column-gap: 48px;\n  }\n    justify-content: center;\n  "]);return G=function(){return n},n}var X=w.a.div(G()),Y=w.a.h2(V()),K=w.a.div(U());var Q=function(){return Object(r.jsxs)(K,{children:[Object(r.jsx)(Y,{children:"Today's Highlights"}),Object(r.jsxs)(X,{children:[Object(r.jsx)(I,{}),Object(r.jsx)(q,{}),Object(r.jsx)(W,{}),Object(r.jsx)(P,{})]})]})};function $(){var n=Object(s.a)(["\n  display:none;\n  @media (min-width: 1200px){\n    display: flex;\n    justify-content: flex-end;\n    padding-top: 42px;\n    button {\n      font-size: 18px;\n      font-style: normal;\n      font-weight: 700;\n      line-height: 21px;\n      letter-spacing: 0em;\n      text-align: left;\n      padding: 1em;\n      border: none;\n      border-radius: 50%;\n      display: inline-block;\n      background: #585676;\n      outline: none;\n      color: #E7E7EB;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n    .degrees {\n      margin-right: 12px;\n    }\n    .isActive {\n      background: #E7E7EB;\n      color: #110E3C;\n      transition: all .5s ease;\n    }\n    .hvr-shrink {\n      display: inline-block;\n      vertical-align: middle;\n      -webkit-transform: perspective(1px) translateZ(0);\n      transform: perspective(1px) translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      -webkit-transition-duration: 0.3s;\n      transition-duration: 0.3s;\n      -webkit-transition-property: transform;\n      transition-property: transform;\n    }\n    .hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active {\n      -webkit-transform: scale(0.9);\n      transform: scale(0.9);\n    }\n  }\n  "]);return $=function(){return n},n}var nn=w.a.div($()),en=function(){var n=Object(l.b)(),e=Object(l.c)((function(n){return n})).fahrenheit;return Object(r.jsxs)(nn,{className:"header",children:[Object(r.jsx)("button",{className:"degrees ".concat(e?"":"isActive"," hvr-shrink"),onClick:function(){n({type:p.setCelsius})},children:"\u2103"}),Object(r.jsx)("button",{className:"".concat(e?"isActive":""," hvr-shrink"),onClick:function(){n({type:p.setFahrenheit})},children:"\u2109"})]})};function tn(){var n=Object(s.a)(["\n  max-width: 704px;\n  margin: auto;\n  padding: 0 2em;\n  @media (min-width:770px){\n    padding: 0;\n  }\n"]);return tn=function(){return n},n}var rn=w.a.div(tn());var an=function(n){var e=n.children;return Object(r.jsx)(rn,{children:e})};t(56);function cn(){var n=Object(s.a)(["\n  border: 1px solid transparent;\n  background: none;\n  height: 64px;\n  width: 351px;\n  margin: 0 auto;\n  padding: 22px 12px;\n  color: #E7E7EB;\n  font-family: Raleway;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: left;\n  display: flex;\n  justify-content:space-between;\n  cursor: pointer;\n  span {\n    color: #616475;\n    display: none;\n  }\n  &:hover {\n    border: 1px solid #616475;\n    span{\n      display: block;\n    } \n  }\n"]);return cn=function(){return n},n}var on=w.a.li(cn());function sn(n){var e=n.cities,t=Object(l.b)(),a=function(n){var e,r;t((e=n.coord.lat,r=n.coord.lon,function(){var n=Object(h.a)(u.a.mark((function n(t){var a,i,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(y()),a="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(r,"&exclude=hourly,minutely&units=metric&appid=").concat(m),n.next=4,fetch(a);case 4:return i=n.sent,n.next=7,i.json();case 7:(c=n.sent).daily=c.daily.slice(1,6),t(f(c));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),i(n),t(x()),t(v()),t(O())},i=function(n){var e=JSON.parse(localStorage.getItem("lastSearches"))||[];e.find((function(e){return n.id===e.id}))||(e.unshift(n),localStorage.setItem("lastSearches",JSON.stringify(e)))};return Object(r.jsx)("ul",{children:e&&e.map((function(n){return Object(r.jsxs)(on,{onClick:function(){return a(n)},children:["".concat(n.name,", ").concat(n.sys.country),Object(r.jsx)("span",{className:"material-icons",children:"navigate_next"})]})}))})}function ln(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return ln=function(){return n},n}function dn(){var n=Object(s.a)(["\n  color: #E7E7EB;\n  width: 351px;\n  margin: auto;\n  h3 {\n    font-size: 1.7em;\n    font-weight: 500;\n    margin-bottom: .7em;\n  }\n  p {\n    margin-bottom: .5em;\n    font-size: 1.1em;\n    line-height: 1.6;\n  }\n"]);return dn=function(){return n},n}var un=w.a.div(dn()),hn=w.a.div(ln()),pn=function(){var n=Object(l.c)((function(n){return n})),e=n.cities,t=n.currentSearch;if(n.loadingSearch)return Object(r.jsx)(hn,{children:Object(r.jsx)(k.a,{type:"TailSpin",height:100,width:100,color:"#E7E7EB"})});if(0===t.length){var a=JSON.parse(localStorage.getItem("lastSearches"));return Object(r.jsx)(sn,{cities:a})}return Object(r.jsx)(r.Fragment,{children:e[0]||0===t.length?Object(r.jsxs)(un,{children:[0!==t.length&&Object(r.jsxs)("h3",{children:["Resultados para: ",Object(r.jsx)("em",{children:t})," (",e.length,")"]}),Object(r.jsx)(sn,{cities:e})]}):Object(r.jsxs)(un,{children:[Object(r.jsx)("h3",{children:"\xa1Perd\xf3n!"}),Object(r.jsxs)("p",{children:[" No pudimos encontrar ningun lugar que coincida con",Object(r.jsxs)("strong",{children:["'",t,"'"]})]})]})})};function mn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 1.9em;\n  margin-bottom: 38px;\n  label {\n    height: 48px;\n    width: 252px;\n    border: 1px solid #E7E7EB;\n    background: transparent;\n    display:flex;\n    align-items: center;\n    span {\n      color: #616475;\n      margin: 0 1em;\n    }\n    input {\n      border: none;\n      background: transparent;\n      color: #E7E7EB;\n      width: 100%;\n      margin-right: 1em;\n      outline: none;\n    }\n  }\n  button {\n    width: 86px;\n    background: #3C47E9;\n    color: #E7E7EB;\n    border: none;\n    margin-left: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);return mn=function(){return n},n}var gn=w.a.form(mn()),bn=function(){var n=Object(a.useState)(""),e=Object(J.a)(n,2),t=e[0],i=e[1],c=Object(l.b)(),o=Object(a.useState)(!0),s=Object(J.a)(o,2),d=s[0],m=s[1],g=function(){return i("")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(gn,{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("span",{className:"material-icons",children:"search"}),Object(r.jsx)("input",{type:"text",value:t,onChange:function(n){i(n.target.value),n.target.value.length>=3&&m(!1)},placeholder:"search location"})]}),Object(r.jsx)("button",{onClick:function(n){if(n.preventDefault(),0===t.trim().length)m(!0);else{c(function(n){return{type:p.setCurrentSearch,payload:n}}(t));var e=t.replaceAll(" ","%20");c(function(n){return function(){var e=Object(h.a)(u.a.mark((function e(t){var r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://openweathermap.org/data/2.5/find?q=".concat(n,"&appid=").concat("439d4b804bc8187953eb36d2a8c26a02"),e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:i=e.sent,t(j(i)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()}(e)),g()}},disabled:d,children:"Search"})]})})};function jn(){var n=Object(s.a)(["\n  min-height: 100vh;\n  background: #1E213A;\n  transition: .5s;\n  .buttonContainer {\n    color: #E7E7EB;\n    text-align: right;\n    button {\n      margin: 1em 1em 0 0;\n      background: transparent;\n      cursor: pointer;\n      border: none;\n      outline: none;\n      .icon-close {\n        color: #E7E7EB;\n      }\n      @media (min-width: 1000px){\n        margin-right: 3em;  \n      }\n    }\n\n  }\n"]);return jn=function(){return n},n}var fn=w.a.div(jn()),xn=function(){var n=Object(l.b)();return Object(r.jsxs)(fn,{children:[Object(r.jsx)("p",{className:"buttonContainer",children:Object(r.jsx)("button",{onClick:function(){n(x()),n(v()),n(O())},children:Object(r.jsx)("span",{className:"material-icons icon-close",children:"close"})})}),Object(r.jsx)(bn,{}),Object(r.jsx)(pn,{})]})};function vn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #100E1D;\n"]);return vn=function(){return n},n}function On(){var n=Object(s.a)(["\n  width: 100%;\n  background: #100E1D;\n  min-height: 100vh;\n"]);return On=function(){return n},n}function yn(){var n=Object(s.a)(["\n@media (min-width: 1200px) {\n  display: grid;\n  grid-template-columns: 459px 1fr;\n}\n"]);return yn=function(){return n},n}var _n=w.a.div(yn()),wn=w.a.div(On()),En=w.a.div(vn()),kn=function(){var n=Object(l.b)(),e=Object(l.c)((function(n){return n})),t=e.loading,i=e.loadingToday,c=Object(l.c)((function(n){return n})).showMenu;return Object(a.useEffect)((function(){n(g())}),[n]),t?Object(r.jsx)(En,{children:Object(r.jsx)(k.a,{type:"TailSpin",height:200,width:200,color:"#FFF",className:"loader"})}):Object(r.jsxs)(_n,{children:[c?Object(r.jsx)(xn,{}):Object(r.jsx)(z,{}),Object(r.jsx)(wn,{children:i?Object(r.jsx)(En,{children:Object(r.jsx)(k.a,{type:"TailSpin",height:100,width:100,color:"#E7E7EB"})}):Object(r.jsxs)(an,{children:[Object(r.jsx)(en,{}),Object(r.jsx)(M,{}),Object(r.jsx)(Q,{})]})})]})},Cn=t(12),Sn=t(24),Nn=t(6),Dn={current:{},week:[],currentTimezone:"",loading:!0,cities:[],showMenu:!1,currentSearch:"",loadingSearch:!1,loadingToday:!1,fahrenheit:!1},zn="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Cn.c,Tn=Object(Cn.d)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p.getCurrentCity:return Object(Nn.a)(Object(Nn.a)({},n),{},{current:e.payload.current,week:e.payload.daily,currentTimezone:e.payload.timezone,loading:!1,loadingToday:!1});case p.setCities:return Object(Nn.a)(Object(Nn.a)({},n),{},{loadingSearch:!1,cities:e.payload.list});case p.setNewCity:return Object(Nn.a)(Object(Nn.a)({},n),{},{current:e.payload.current,week:e.payload.daily,currentTimezone:e.payload.timezone,loadingToday:!1});case p.showMenu:return Object(Nn.a)(Object(Nn.a)({},n),{},{showMenu:!n.showMenu});case p.setCurrentSearch:return Object(Nn.a)(Object(Nn.a)({},n),{},{loadingSearch:!0,currentSearch:e.payload});case p.clearCurrentSearch:return Object(Nn.a)(Object(Nn.a)({},n),{},{currentSearch:""});case p.clearCities:return Object(Nn.a)(Object(Nn.a)({},n),{},{cities:[]});case p.setLoadingToday:return Object(Nn.a)(Object(Nn.a)({},n),{},{loadingToday:!0});case p.setFahrenheit:return Object(Nn.a)(Object(Nn.a)({},n),{},{fahrenheit:!0});case p.setCelsius:return Object(Nn.a)(Object(Nn.a)({},n),{},{fahrenheit:!1});default:return n}}),zn(Object(Cn.a)(Sn.a)));c.a.render(Object(r.jsx)(l.a,{store:Tn,children:Object(r.jsx)(kn,{})}),document.getElementById("root")),o()}},[[57,1,2]]]);
//# sourceMappingURL=main.58f9b480.chunk.js.map