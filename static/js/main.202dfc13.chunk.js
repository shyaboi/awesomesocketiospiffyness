(this.webpackJsonpsocketiostuff=this.webpackJsonpsocketiostuff||[]).push([[0],{34:function(e,t,n){e.exports=n(73)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},70:function(e,t){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(28),c=n.n(o),i=(n(39),n(40),n(11)),r=n(29),u=n(30),l=n(6),m=n(33),h=n(32),f=(n(41),n(31)),d=n.n(f),g=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={messages:[]},e.sendMessage=e.sendMessage.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.socket=d()("https://thawing-cliffs-13077.herokuapp.com/"),this.socket.on("message",(function(t){e.setState({messages:[t].concat(Object(i.a)(e.state.messages))})}))}},{key:"sendMessage",value:function(e){var t=e.target.value;if(13===e.keyCode&&t){var n={body:t,from:"shyaboi"};this.setState({messages:[n].concat(Object(i.a)(this.state.messages))}),this.socket.emit("message",n)}}},{key:"render",value:function(){return s.a.createElement("div",null,"shyaboi",s.a.createElement("input",{type:"text",placeholder:"message here",onKeyUp:this.sendMessage}),this.state.messages.map((function(e){return s.a.createElement("p",null,e.body,"-from-",e.from)}))," ")}}]),n}(s.a.Component);var p=function(){return s.a.createElement("div",null,s.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.202dfc13.chunk.js.map