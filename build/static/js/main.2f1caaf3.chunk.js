(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(214)},119:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},205:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(58),i=(a(119),a(120),a(27)),u=a(7),l=a.n(u),h=a(113),d=a(16),p=a(19),m=a(20),v=a(22),f=a(21),b=a(17),y=a(23),w=(a(122),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(f.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.value&&this.props.addLocation(this.state.value),this.setState({value:""})}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement("form",{className:"SearchLocation",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"location",className:"SearchLocation-label"},"Search Location"),r.a.createElement("input",{type:"text",id:"location",className:"SearchLocation-input",placeholder:"Where do you want to go?",value:e,onChange:this.handleChange}),r.a.createElement("button",{disabled:e.length<3,className:"SearchLocation-button"},"Search"))}}]),t}(n.Component)),g=a(41),E=a.n(g),O=function(){var e=Object(d.a)(l.a.mark(function e(t){var a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://maps.googleapis.com/maps/api/geocode/json?address=".concat(t,"&key=").concat("AIzaSyA69vxGrnuKKW6TptpElF7ubW_kfkAfXeE"),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),alert(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(l.a.mark(function e(t){var a,n,r,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t,console.log(i),a=i.trim().toLowerCase().replace(/[^\w^\s]/g,"").replace(/[\s]/g,"+"),e.next=3,O(a);case 3:return n=e.sent,r=n.results[0],s=r.address_components,c=s.findIndex(function(e){return"country"===e.types[0]}),o={id:E()(),address:r.formatted_address,lat:r.geometry.location.lat,lng:r.geometry.location.lng,countryCode:r.address_components[c].short_name},e.abrupt("return",o);case 8:case"end":return e.stop()}var s,i},e)}));return function(t){return e.apply(this,arguments)}}(),j=a(2),k=a.n(j),N=function(){var e=Object(d.a)(l.a.mark(function e(t,a){var n,r,c,o,s=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:"",r=n?",".concat(n):n,e.prev=2,e.next=5,fetch("/forecast/".concat("af7ed457f45189bf8c17d9a92c8e6d8b","/").concat(t,",").concat(a).concat(r));case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark(function e(t,a){var n,r,c,o,s,i,u,h=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>2&&void 0!==h[2]?h[2]:"",e.next=3,N(t,a,n);case 3:return r=e.sent,e.prev=4,c=r.currently.temperature||!1,o=k.a.unix(r.currently.time).format("YYYY"),s=r.daily.data[0]||r.hourly.data[0],i={id:E()(),summary:s.summary,icon:s.icon,high:s.temperatureHigh,low:s.temperatureLow,current:c||s.temperature,year:o},e.abrupt("return",i);case 12:return e.prev=12,e.t0=e.catch(4),console.log("Failed: ",e.t0),u={id:E()(),summary:void 0,icon:void 0,high:void 0,low:void 0,current:void 0,year:void 0},e.abrupt("return",u);case 17:case"end":return e.stop()}},e,null,[[4,12]])}));return function(t,a){return e.apply(this,arguments)}}(),x=a(108),W=a.n(x),L=(a(129),function(e){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.props.weather,a=t.year,n=t.summary,c=t.icon,o=t.high,s=t.low,i=t.current;return r.a.createElement("div",{className:"WeatherCard"},r.a.createElement("h4",{className:"WeatherCard-year"},a),r.a.createElement("p",{className:"WeatherCard-summary"},"".concat(n)),r.a.createElement(W.a,{className:"WeatherCard-icon",color:"white",icon:(e=c,void 0!==e?e.toUpperCase().replace("-","_").replace("-","_"):e),autoplay:!0,style:{width:"150px"}}),r.a.createElement("p",{className:"WeatherCard-high WeatherCard-temp"},"High: ".concat(o)),r.a.createElement("p",{className:"WeatherCard-low WeatherCard-temp"},"Low: ".concat(s)),r.a.createElement("p",{className:"WeatherCard-current WeatherCard-temp"},"Current: ".concat(i)))}}]),t}(n.Component)),P=(a(130),a(109)),V=a.n(P),D=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(f.a)(t).call(this,e))).state={currentDate:k()(),pastWeather:[],currentWeather:{},hasLoaded:!1},a.clickRemove=a.clickRemove.bind(Object(b.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark(function e(){var t,a,n,r,c,o,s,i,u,h,d,p;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.pastOne,n=t.pastTwo,r=t.pastThree,c=this.props.spotInfo,o=c.lat,s=c.lng,e.next=4,C(o,s,a);case 4:return i=e.sent,e.next=7,C(o,s,n);case 7:return u=e.sent,e.next=10,C(o,s,r);case 10:return h=e.sent,e.next=13,C(o,s);case 13:d=e.sent,(p=[]).push(i,u,h),p.reverse(),this.setState({pastWeather:p,currentWeather:d,hasLoaded:!0});case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clickRemove",value:function(){var e=this.props;(0,e.removeLocation)(e.id)}},{key:"render",value:function(){var e=this.props.spotInfo,t=e.address,a=e.countryCode,n=this.state.pastWeather.map(function(e){return r.a.createElement(L,{key:e.id,weather:e})}),c=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"VacationSpot-past"},n),r.a.createElement("div",{className:"VacationSpot-current"},r.a.createElement(L,{weather:this.state.currentWeather}))),o=r.a.createElement("div",{className:"VacationSpot-loading-container"},r.a.createElement(V.a,{className:"VacationSpot-loader",type:"line-scale",style:{transform:"scale(2.5)"},active:!0}));return r.a.createElement("div",{className:"VacationSpot"},r.a.createElement("div",{className:"VacationSpot-info-container"},r.a.createElement("img",{src:"https://www.countryflags.io/".concat(a,"/flat/64.png"),alt:"",className:"VacationSpot-img"}),r.a.createElement("h3",{className:"VacationSpot-title"},t),r.a.createElement("h3",null,this.props.date.format("dddd, MMMM Do YYYY")),r.a.createElement("button",{className:"VacationSpot-remove",onClick:this.clickRemove},"X")),r.a.createElement("div",{className:"VacationSpot-container"},this.state.hasLoaded?c:o))}}]),t}(n.Component),I=(a(132),a(110)),Y=(a(204),function(e,t){return k()(e).subtract(t,"years").unix()}),_=(a(205),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(f.a)(t).call(this,e))).state={userPlaces:[],date:k()(),focused:!1},a.addLocation=a.addLocation.bind(Object(b.a)(a)),a.removeLocation=a.removeLocation.bind(Object(b.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"addLocation",value:function(){var e=Object(d.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:a=e.sent,this.setState(function(e){var t=[].concat(Object(h.a)(e.userPlaces),[a]);return window.localStorage.setItem("userPlaces",JSON.stringify(t)),{userPlaces:t}});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"removeLocation",value:function(e){var t=this.state.userPlaces.filter(function(t){return e!==t.id});this.setState({userPlaces:t})}},{key:"componentDidMount",value:function(){var e=JSON.parse(window.localStorage.getItem("userPlaces"))||[];this.setState({userPlaces:e})}},{key:"componentDidUpdate",value:function(e,t){t.userPlaces.length!==this.state.userPlaces.length&&window.localStorage.setItem("userPlaces",JSON.stringify(this.state.userPlaces))}},{key:"render",value:function(){var e=this,t=this.state.userPlaces.map(function(t){return r.a.createElement(D,{spotInfo:t,key:t.id,id:t.id,removeLocation:e.removeLocation,pastOne:Y(e.state.date,1),pastTwo:Y(e.state.date,2),pastThree:Y(e.state.date,3),date:e.state.date})});return r.a.createElement("div",null,r.a.createElement("h1",{className:"WeatherVacation-title"},"Decide where your next vacation will be."),r.a.createElement("h4",{className:"WeatherVacation-sub"},"Just pick the date you are planning to travel and we will show you how the weather was the past 3 years the same date."),r.a.createElement("div",{className:"WeatherVacation-input-container"},r.a.createElement(w,{addLocation:this.addLocation}),r.a.createElement(I.SingleDatePicker,{date:this.state.date,onDateChange:function(t){return e.setState({date:t})},focused:this.state.focused,onFocusChange:function(t){var a=t.focused;return e.setState({focused:a})},id:"calendar"})),t)}}]),t}(n.Component));var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:_})))};a(212),a(213),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.2f1caaf3.chunk.js.map