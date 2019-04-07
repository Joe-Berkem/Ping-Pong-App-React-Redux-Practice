(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(33)},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),c=t.n(l),i=t(1),u=function(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("h1",null,"PingPong"))},m=function(e){var n=e.winner,t=e.p1Name,a=e.p2Name;return 0===n?null:r.a.createElement("h2",{className:"jumbotron dark-text App"},1===n?t:a," wins!")},o=Object(i.b)(function(e){return{winner:e.winner,p1Name:e.p1Name,p2Name:e.p2Name}})(m),s=function(e){var n=e.handleReset;return r.a.createElement("button",{className:"btn btn-danger",onClick:n},"Reset")},p=Object(i.b)(null,function(e){return{handleReset:function(){return e({type:"reset"})}}})(s),y=function(e){var n=e.history;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"History"))),r.a.createElement("tbody",null,n.map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("th",{scope:"row"},"#"),r.a.createElement("td",null,e))})))},b=Object(i.b)(function(e){return{history:e.history}})(y),h=function(e){var n=e.player1Serving,t=e.score,a=e.winner,l=e.handlePlayerIncrement,c=e.name;return r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("p",null,c," ",n&&r.a.createElement("span",{className:"pull-right label label-primary"},"Serving")),r.a.createElement("p",{className:"well dark-text"},t),0===a?r.a.createElement("button",{onClick:l,className:"btn btn-primary"},"+"):null)},g=Object(i.b)(function(e){return{score:e.player1,player1Serving:e.player1Serving,winner:e.winner,history:e.history,name:e.p1Name}},function(e){return{handlePlayerIncrement:function(){return e({type:"incrementPlayer1"})}}})(h),E=Object(i.b)(function(e){return{score:e.player2,player1Serving:!e.player1Serving,winner:e.winner,history:e.history,name:e.p2Name}},function(e){return{handlePlayerIncrement:function(){return e({type:"incrementPlayer2"})}}})(h),d=t(15),v=t(16),N=t(21),f=t(17),S=t(20),O=t(2),w=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(N.a)(this,Object(f.a)(n).call(this,e))).state={p1Name:"",p2Name:"",winningScore:21,alternateEvery:5},t.handleChangeP1Name=t.handleChangeP1Name.bind(Object(O.a)(Object(O.a)(t))),t.handleChangeP2Name=t.handleChangeP2Name.bind(Object(O.a)(Object(O.a)(t))),t.handleChangeWinningScore=t.handleChangeWinningScore.bind(Object(O.a)(Object(O.a)(t))),t.handleChangeAlternateEvery=t.handleChangeAlternateEvery.bind(Object(O.a)(Object(O.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(O.a)(Object(O.a)(t))),t}return Object(S.a)(n,e),Object(v.a)(n,[{key:"handleChangeP1Name",value:function(e){this.setState({p1Name:e.currentTarget.value})}},{key:"handleChangeP2Name",value:function(e){this.setState({p2Name:e.currentTarget.value})}},{key:"handleChangeWinningScore",value:function(e){this.setState({winningScore:e.currentTarget.value})}},{key:"handleChangeAlternateEvery",value:function(e){this.setState({alternateEvery:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.submitSettings(this.state)}},{key:"render",value:function(){var e=this.state,n=e.p1Name,t=e.p2Name,a=e.winningScore,l=e.alternateEvery;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Player 1 Name"),r.a.createElement("input",{className:"form-control",onChange:this.handleChangeP1Name,value:n,type:"text"}),r.a.createElement("label",null,"Player 2 Name"),r.a.createElement("input",{className:"form-control",onChange:this.handleChangeP2Name,value:t,type:"text"}),r.a.createElement("label",null,"Winning Score"),r.a.createElement("input",{className:"form-control",onChange:this.handleChangeWinningScore,value:a,type:"number"}),r.a.createElement("label",null,"Alternate Every"),r.a.createElement("input",{className:"form-control",onChange:this.handleChangeAlternateEvery,value:l,type:"number"})),r.a.createElement("button",{className:"btn btn-primary"},"Start Game"))}}]),n}(a.Component),j=Object(i.b)(function(e){return{p1Name:e.p1Name,p2Name:e.p1Name,winningScore:e.winningScore,alternateEvery:e.alternateEvery}},function(e){return{submitSettings:function(n){return e({type:"submit",p1Name:(t=n).p1Name,p2Name:t.p2Name,winningScore:t.winningScore,alternateEvery:t.alternateEvery});var t}}})(w),C=(t(31),function(e){var n=e.handleReset;return r.a.createElement("button",{className:"btn btn-primary reset-settings-button",onClick:n},"Reset Settings")}),P=Object(i.b)(null,function(e){return{handleReset:function(){return e({type:"resetSettings"})}}})(C),k=function(e){var n=e.settingsCompleted;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement(g,{name:"Player 1"}),r.a.createElement(E,{name:"Player 2"})),r.a.createElement(o,null),r.a.createElement("hr",null),r.a.createElement(p,null),r.a.createElement(P,null),r.a.createElement(b,null)):r.a.createElement(j,null))},_=Object(i.b)(function(e){return{settingsCompleted:e.settingsCompleted}})(k),R=(t(32),t(7)),T={player1:0,player2:0,player1Serving:!0,winner:0,history:[],settingsCompleted:!1,p1Name:"",p2Name:"",winningScore:21,alternateEvery:5},x=t(18),A=t(19),I=t(3),D=function(e){return(e.player1+e.player2)%e.alternateEvery===0?Object(I.a)({},e,{player1Serving:e.player1Serving=!e.player1Serving}):e},W=function(e){return e.player1>=e.winningScore&&(e.player1+e.player2)%2===0?Object(I.a)({},e,{player1Serving:e.player1Serving=!e.player1Serving}):e},X=function(e){return 1===e.winner||2===e.winner?Object(I.a)({},e,{history:[].concat(Object(A.a)(e.history),["".concat(e.p1Name," = ").concat(e.player1," | ").concat(e.p2Name," = ").concat(e.player2)])}):e},F=function(e,n){switch(n.type){case"incrementPlayer1":return X(function(e){return e.player1>=e.winningScore&&e.player1-e.player2>1?Object(I.a)({},e,{winner:e.winner=1}):e}(W(D(function(e){return Object(I.a)({},e,{player1:e.player1+1})}(e)))));case"incrementPlayer2":return X(function(e){return e.player2>=e.winningScore&&e.player2-e.player1>1?Object(I.a)({},e,{winner:e.winner=2}):e}(W(D(function(e){return Object(I.a)({},e,{player2:e.player2+1})}(e)))));case"reset":return Object(I.a)({},e,{player1:0,player2:0,player1Serving:!0,winner:0});case"submit":return function(e){return Object(I.a)({},e,{settingsCompleted:!0})}(function(e,n){n.type;var t=Object(x.a)(n,["type"]);return Object(I.a)({},e,t)}(e,n));case"resetSettings":return Object(I.a)({},e,{settingsCompleted:!1});default:return e}},J=Object(R.b)(F,T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(i.a,{store:J},r.a.createElement("body",null,r.a.createElement(_,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.94f53f53.chunk.js.map