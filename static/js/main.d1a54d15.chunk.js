(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(63),i=n.n(o),l=(n(70),n(9)),s=n(10),c=n(12),u=n(11),d=n(13),m=(n(72),n(73),n(40)),h=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e)),console.log(e),n.state={chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{pointStyle:"line",label:"Marilyn",borderColor:"#f87979",backgroundColor:"rgb(0, 0, 0, 0)",data:[0,10,5,2,20,30,45]},{pointStyle:"line",label:"Greg",borderColor:"#f73979",backgroundColor:"rgb(0, 0, 0, 0)",data:[0,2,15,5,10,3,10]},{pointStyle:"line",label:"Jeffrey",borderColor:"#f18979",backgroundColor:"rgb(0, 0, 0, 0)",data:[0,18,15,12,120,50,35]}]}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"})}}]),t}(a.Component);h.defaultProps={displayTitle:!1,displayLegend:!0,legendPosition:"bottom",titleSize:25};var p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"line-chart"},r.a.createElement(m.b,{data:this.state.chartData,height:200,options:{type:"line",animation:{duration:0},responsive:!0,maintainAspectRatio:!1,legend:{labels:{usePointStyle:!0},display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),t}(h),f={title:"Net Worth Over Time"},v={title:"Transactions Over Time",leftOfTitle:"May 30, 2018"},b={title:"Spending in Each Category"},y={10:{title:"gym payment",display:"Pay gym membership",color:"#F49D6E",times:0,vendors:["Anytime Fitness"],min:50,max:50},11:{title:"Alcohol and bars",display:"Go to a bar",color:"#A40E4C",times:0,vendors:["Workhorse Bar","drink.well.","The Parlor","Weather Up"],min:5,max:50},32:{title:"Groceries",display:"Pick up groceries",color:"#ACC3A6",times:0,vendors:["Fresh Plus Grocery","Trader Joe's","Whole Foods Great Hills Rd","Dierbergs"],min:10,max:80},12:{title:"Coffee Shop",display:"Grab a coffee",color:"#F5D6BA",times:0,vendors:["Quacks 43rd St Bakery","Thunderbird Coffee","Epoch North Loop","Flightpath Coffeehouse","Dolce Vita","Monkey Nest Coffee"],min:1.25,max:15},13:{title:"Gas / Fuel",display:"Get gas",color:"#2C2C54",times:0,vendors:["Shell 4429 Duval St","Texaco Austin 5301 N Lamar","Exxon","North Loop Food Store","Chevron Airport Blvd","Gulf Gas Station"],min:30,max:40},14:{title:"Cellphone",display:"Pay cellphone bill",color:"#A5D86B",times:0,vendors:["ATT Thanks for your Online Payment"],min:64,max:66},35:{title:"Restaurants",display:"Go out to eat",color:"rgba(60, 110, 113, 1)",times:0,vendors:["Foreign & Domestic","East Side Pies","Phara's","Uchiko","Chipotle","Freebirds Airport Blvd","Biscuits and Groovy","Gordeaux's Donuts","Habesha Ethiopian Restaurant and Bar","Tyson's Tacos"],min:12,max:50},5:{title:"Invest Money",display:"Invest money",color:"#A7B0CA",times:0,vendors:["Vanguard Investing","Discover Online Banking"],min:100,max:1e4},20:{title:"Income",display:"Earn some income",color:"#8EDCE6",times:0,vendors:["Freelancing"],min:100,max:1e4}},g=function(e){return r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"titleHolder"},r.a.createElement("span",null,r.a.createElement("b",null,e.first)),r.a.createElement("span",null,e.second)))},E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={properties:e},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{first:this.props.config.leftOfTitle,second:this.props.config.title}),r.a.createElement(p,null))}}]),t}(a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"makeButtons",value:function(){var e=[];for(var t in y){console.log(y[t]);var n={backgroundColor:y[t].color,border:"solid 1px "+y[t].color};e.push(r.a.createElement("a",{href:"#",style:n,className:"square_btn"},y[t].display))}return e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"grid-container-2"},r.a.createElement("div",null,r.a.createElement(E,{config:v})),r.a.createElement("div",null,r.a.createElement(g,{first:"",second:"Add a Transaction:"}),r.a.createElement("div",{className:"buttonHolder"},this.makeButtons()))),r.a.createElement("div",{className:"grid-container-3"},r.a.createElement("div",null,r.a.createElement(E,{config:f})),r.a.createElement("div",null,r.a.createElement(E,{config:b}))),r.a.createElement("div",{className:"grid-container-1"},r.a.createElement("div",null,r.a.createElement(E,{config:f}))))}}]),t}(a.Component);function O(e,t){return Math.random()*(t-e+1)+e}function j(){var e=Object.keys(y),t=O(0,e.reduce(function(e,t){return+e+ +t},0)),n=0,a=[];return e.some(function(r,o){return a[o]=0===o?+e[o]:+e[o]+ +a[o-1],n=r,t<a[o]}),y[n].times+=1,function(e){var t=O(e.min,e.max).toFixed(2),n=e.vendors[Math.floor(O(0,e.vendors.length-1))];return"$"+t+" at "+n}(y[n])}var C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={category:j()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({category:j()})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"It is ",String(this.state.category),"."))}}]),t}(a.Component),x=k;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,n){e.exports=n(217)},70:function(e,t,n){},72:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},73:function(e,t,n){}},[[65,2,1]]]);
//# sourceMappingURL=main.d1a54d15.chunk.js.map