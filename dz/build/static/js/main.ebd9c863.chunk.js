(this.webpackJsonpdz=this.webpackJsonpdz||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.b9122894.svg"},21:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c);n(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(5),u=n(6),i=n(8),s=n(7),m=n(11),p=n(1),h=n(19),E=n.n(h);n(27);var f=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,r.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"#ffd700"}},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442")),r.a.createElement("div",{className:"headerBlock"},r.a.createElement(m.b,{to:"/sign_up"},r.a.createElement("button",null,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement(m.b,{to:"/sign_in"},r.a.createElement("button",null,"\u0412\u043e\u0439\u0442\u0438")))))},b=(n(33),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={values:{},keys:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.exchangeratesapi.io/latest?base=RUB").then((function(e){return e.json()})).then((function(t){e.setState({values:t.rates,keys:Object.keys(t.rates)})}),(function(e){}))}},{key:"render",value:function(){var e=this.state,t=e.values,n=e.keys;return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("div",{className:"moneyBlock"},r.a.createElement("p",{className:"text"},"\u0412\u0430\u043b\u044e\u0442\u0430 ",e,": 1 ",e," -> ",(1/t[e]).toFixed(2)," RUB"))})))}}]),n}(r.a.Component)),v=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(b,null)}}]),n}(r.a.Component),d=(n(34),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={name:"",surname:"",login:"",password:"",image:null},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state;e.name,e.surname,e.login,e.password;return r.a.createElement("div",{className:"regList"},r.a.createElement("h2",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("input",{className:"textInput",type:"text",placeholder:"\u0418\u043c\u044f"}),r.a.createElement("input",{className:"textInput",type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),r.a.createElement("input",{className:"textInput",type:"text",placeholder:"Login"}),r.a.createElement("input",{className:"textInput",type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),r.a.createElement("input",{type:"image"}),r.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}}]),n}(r.a.Component)),j=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(d,null)}}]),n}(r.a.Component),O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("p",null,"\u0412\u0445\u043e\u0434")}}]),n}(r.a.Component),y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(f,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/sign_up"},r.a.createElement(j,null)),r.a.createElement(p.a,{path:"/sign_in"},r.a.createElement(O,null)),r.a.createElement(p.a,{path:"/exchange"},r.a.createElement(v,null)),r.a.createElement(p.a,{path:"/"},r.a.createElement(v,null))))}}]),n}(a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.ebd9c863.chunk.js.map