(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=a(23),l=a(18),s=a(6),m=a(7),u=a(9),h=a(8),d=(a(29),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={teamName:""},e.handleChange=function(t){e.setState({teamName:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addPlayer(e.state.teamName),e.setState({teamName:""})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{autoComplete:"off",id:"signup-form",onSubmit:this.handleSubmit,className:""},r.a.createElement("input",{name:"TeamName",onChange:this.handleChange,value:this.state.teamName,type:"text",placeholder:"Team Name"}),r.a.createElement("input",{id:"signup-btn",type:"submit",value:"submit",className:"btn btn-warning "})))}}]),a}(n.Component)),p=(a(30),function(e){var t=e.teamName;return r.a.createElement("div",{id:"show-card",className:" "},r.a.createElement("h5",{className:" content"}," ",t))}),f=(a(31),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"roster"},this.props.players.map((function(e,t){return r.a.createElement(p,{teamName:e.team,key:t,id:e.id,players:e})})))}}]),a}(n.Component)),y=(a(32),function(e){return r.a.createElement("div",{id:"match-border"},r.a.createElement("span",{onClick:function(){e.remove(e.matches.L2[e.index].id),e.win(e.matches.L2[e.index].id,e.players.length)},className:"btn"},e.matches.L1[e.index].team),r.a.createElement("span",{onClick:function(){e.remove(e.matches.L1[e.index].id),e.win(e.matches.L1[e.index].id,e.players.length)},className:"btn "},e.matches.L2[e.index].team))}),b=(a(33),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={started:!1},e.startTournament=function(){e.props.match(),e.setState((function(e){return{started:!0}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.matches.L1;return e=this.state.started?r.a.createElement("div",{id:"matches",className:" "},a.map((function(e,a){return r.a.createElement(y,{matches:t.props.matches,remove:t.props.remove,players:t.props.players,key:a,index:a,win:t.props.win})}))):r.a.createElement("h1",null,"Game Not Started"),r.a.createElement("div",{id:"match-container",className:"mb-5 "},r.a.createElement("button",{className:"mb-5 btn btn-warning",onClick:function(){return t.startTournament()},id:"start"},"Generate Matches"),e)}}]),a}(n.Component)),v=a(13),E=(a(34),function(){return r.a.createElement("div",{id:"nav-container"},r.a.createElement(v.b,{to:"/"},r.a.createElement("button",{className:"btn btn-warning"}," Restart ")),r.a.createElement(v.b,{to:"/match"},r.a.createElement("button",{className:"start btn btn-warning"},"Start ")))}),g=function(e){return e.sort((function(){return Math.random()-.5})),e},w=function(e){for(var t=[],a=[],n=0;n<e.length;n++)n%2===0?t.push(e[n]):n%2!==0&&a.push(e[n]);return t.length>0&&a.length>0&&(t.length>a.length?a.push({team:"BYE",winToken:!1,played:!1,id:100}):t.length<a.length&&t.push({team:"BYE",winToken:!1,played:!1,id:100})),[g(t),g(a)]},N=a(1),k=(a(40),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).placeHolderData=[{team:"teamName",winToken:!1,played:!1,id:Math.random()},{team:"aojnsj",winToken:!1,played:!1,id:Math.random()},{team:"askdnlkann",winToken:!1,played:!1,id:Math.random()},{team:"NIN",winToken:!1,played:!1,id:Math.random()},{team:"obek",winToken:!1,played:!1,id:Math.random()}],e.state={players:[],currentMatches:{},roster:[]},e.addPlayer=function(t){e.setState((function(e){return{players:[].concat(Object(l.a)(e.players),[{team:t,winToken:!1,played:!1,id:e.players.length+1}]),roster:[].concat(Object(l.a)(e.roster),[{team:t,winToken:!1,played:!1,id:e.players.length+1}])}}))},e.remove=function(t){console.log(t),e.setState((function(e){return{players:e.players.filter((function(e){return e.id!==t}))}}))},e.win=function(t,a){if(2===e.state.players.length){var n=e.state.players.find((function(e){return e.id!==t})).team;alert(n+" is the winner")}},e.clearPlayer=function(){e.setState((function(e){return{players:[],currentMatches:{},roster:[]}}))},e.match=function(){var t=w(e.state.players),a=Object(o.a)(t,2),n=a[0],r=a[1];e.addMatch(n,r)},e.addMatch=function(t,a){e.setState((function(e){return{currentMatches:{L1:t,L2:a}}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,null,r.a.createElement(N.c,null,r.a.createElement("div",{id:"app-container",className:"container-fluid"},r.a.createElement(N.a,{exact:!0,path:"/"},r.a.createElement("div",{id:"home-container",className:""},r.a.createElement("section",{id:"form-container"},r.a.createElement(d,{addPlayer:this.addPlayer})," ")," ",r.a.createElement("section",{id:"roster-container"},r.a.createElement("h2",null,"Roster"),r.a.createElement("p",null,"Teams: ",this.state.players.length),r.a.createElement(f,{players:this.state.roster}),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.clearPlayer()}},"Clear Players ",r.a.createElement("i",{className:"fa fa-minus-circle"}))),r.a.createElement(E,{id:"nav"}))),r.a.createElement(N.a,{exact:!0,path:"/match"},r.a.createElement("section",{id:"match-wrapper"},r.a.createElement(b,{remove:this.remove,players:this.state.players,matches:this.state.currentMatches,match:this.match,win:this.win})),r.a.createElement(E,null)))))}}]),a}(n.Component));a(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.500a06da.chunk.js.map