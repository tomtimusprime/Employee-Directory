(this["webpackJsonpPokedex-App"]=this["webpackJsonpPokedex-App"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=(a(12),a(1)),i=a(2),m=a(4),l=a(3),u=(a(13),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t="".concat(((e=this.props.id)<10&&(e="00"+e),e>=10&&e<100&&(e="0"+e),"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(e,".png")));return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},"Name: ",this.props.name),r.a.createElement("h1",{className:"Pokecard-data"},"Type: ",this.props.type),r.a.createElement("h1",{className:"Pokecard-data"},"Desk Number: ",this.props.exp),r.a.createElement("img",{src:t,alt:this.props.name}))}}]),a}(n.Component)),p=(a(14),[{id:4,name:"Charmander",type:"fire",desknumber:62},{id:7,name:"Squirtle",type:"water",desknumber:63},{id:11,name:"Metapod",type:"bug",desknumber:72},{id:12,name:"Butterfree",type:"flying",desknumber:178},{id:25,name:"Pikachu",type:"electric",desknumber:112},{id:39,name:"Jigglypuff",type:"normal",desknumber:95},{id:94,name:"Gengar",type:"poison",desknumber:225},{id:133,name:"Eevee",type:"normal",desknumber:65}]),d=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).compareProps=function(){return function(e,t){var a=0;return e.type>t.type?a=1:e.type<t.type&&(a=-1),a}},n.handleReset=function(){n.setState({pokemon:p})},n.handleSort=function(){var e=n.state.pokemon.slice().sort(n.compareProps());n.setState({pokemon:e})},n.state={search:"",pokemon:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({pokemon:p})}},{key:"updateSearch",value:function(e){var t=p.filter((function(t){return t.name.toLowerCase().startsWith(e.target.value.toLowerCase())}));this.setState({pokemon:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Pokedex"},r.a.createElement("h1",{className:"center"},"Employee Directory"),r.a.createElement("div",{className:"searchBar"},r.a.createElement("label",null,"Search: "),r.a.createElement("input",{className:"center",type:"text",onChange:this.updateSearch.bind(this)})),r.a.createElement("br",null),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.handleSort},"Sort by Type"),r.a.createElement("button",{onClick:this.handleReset},"Reset Sort")),r.a.createElement("div",{className:"Pokedex-cards"},this.state.pokemon.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,type:e.type,exp:e.desknumber,key:e.id})}))))}}]),a}(n.Component),h=(a(15),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9e9fa5dc.chunk.js.map