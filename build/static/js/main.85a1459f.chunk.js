(this["webpackJsonptemp-caster"]=this["webpackJsonptemp-caster"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(8),r=i.n(a),s=(i(13),i(3)),l=i(4),u=i(2),h=i(6),d=i(5),o=(i(14),i(15),i(0)),j=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={temperature:null,cloudCover:null,humidity:null,precipitation:null,uvIndex:null,visibility:null,weatherCode:null,weatherDescription:null,realCity:"Nowhere"},n.updateCard=n.updateCard.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"updateCard",value:function(e,t){this.setState({temperature:e[0].temp_F,cloudCover:e[0].cloudcover,humidity:e[0].humidity,precipitation:e[0].precipInches,uvIndex:e[0].uvIndex,visibility:e[0].visibilityMiles,weatherCode:e[0].weatherCode,realCity:t})}},{key:"render",value:function(){return Object(o.jsx)("div",{children:"Nowhere"!==this.state.realCity&&Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:this.state.realCity}),Object(o.jsxs)("div",{className:"WeatherCard",children:[Object(o.jsx)("div",{className:"Box TemperatureBox",children:Object(o.jsxs)("h5",{children:[this.state.temperature," \xbaF"]})}),Object(o.jsx)("div",{className:"Box CloudCoverBox",children:Object(o.jsxs)("h5",{children:[this.state.cloudCover,"%"]})}),Object(o.jsx)("div",{className:"Box HumidityBox",children:Object(o.jsxs)("h5",{children:[this.state.humidity," %rh"]})}),Object(o.jsx)("div",{className:"Box PrecipitationBox",children:Object(o.jsxs)("h5",{children:[this.state.precipitation," in"]})}),Object(o.jsx)("div",{className:"Box UVIndexBox",children:Object(o.jsxs)("h5",{children:[this.state.uvIndex," kg/s^3"]})}),Object(o.jsx)("div",{className:"Box VisibilityBox",children:Object(o.jsxs)("h5",{children:[this.state.visibility," mi"]})})]})]})})}}]),i}(c.a.Component),b=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={city:null},n.card=c.a.createRef(),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.fetchCityWeather=n.fetchCityWeather.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target).get("city");document.getElementById("cityInput").value="",this.fetchCityWeather(t)}},{key:"fetchCityWeather",value:function(e){var t=this;fetch("https://wttr.in/"+e+"?format=j1").then((function(e){return e.json()})).then((function(e){var i=e.current_condition,n=e.nearest_area,c=n[0].areaName[0].value+", "+n[0].region[0].value+", "+n[0].country[0].value;t.card.current.updateCard(i,c)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"TempCaster"}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsxs)("label",{children:["City:",Object(o.jsx)("input",{id:"cityInput",name:"city",type:"text"})]}),Object(o.jsx)("input",{type:"submit",value:"Submit"})]}),Object(o.jsx)(j,{ref:this.card})]})}}]),i}(c.a.Component),v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.85a1459f.chunk.js.map