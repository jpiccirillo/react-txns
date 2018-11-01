(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(62),i=a.n(o),s=(a(70),a(9)),l=a(14),c=a(11),u=a(10),d=a(12),m=(a(72),30),h={year:"2-digit",month:"numeric",day:"numeric"};function p(e,t){return(Math.random()*(t-e+1)+e).toFixed(2)}function v(e){for(var t=[],a=new Date,n=0;n<e;n++)t.push(new Date(a.setDate(a.getDate()+1)).toLocaleDateString("en-US",h));return t}var y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={ledger:[],history:{labels:v(m),datasets:[e.initNetWorth()]},active:["0"],data:{labels:v(m),datasets:[]}},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=0;this.timer=setInterval(function(){return 15===++t&&window.clearInterval(e.timer),e.increment(e.state)},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"incrementLabels",value:function(e,t){var a=e;return a.push(t),a.shift(),a}},{key:"makeNewArray",value:function(e,t){for(var a=[],n=0;n<m;n++)a.push(e);return a.push(t),a}},{key:"initNetWorth",value:function(){return{label:"Net Worth",data:this.makeNewArray(3e3,3e3),borderColor:"gainsboro",backgroundColor:"rgba(0, 0, 0, 0)"}}},{key:"processNetWorth",value:function(e,t){var a=e.history.datasets.slice(0),n=a[0].data.slice(0),r=n[n.length-1],o=0;return o="debit"==t.type?r-+t.amount:"neither"==t.type?r:r+ +t.amount,n.push(o),n.shift(),a[0].data=n,a}},{key:"increment",value:function(){var e=this.returnColors(),t=this.state,a=this.state.active,n=function(e){var t=new Date(e[e.length-1]);return new Date(t.setDate(t.getDate()+1)).toLocaleDateString("en-US",h)}(t.data.labels),r=this.incrementLabels(t.data.labels,n),o=this.decide(this.returnCats(),n),i=t.ledger.slice(0);i.push(o);var s=t.data.datasets.slice(0);if(a.includes(o.title))s.forEach(function(e,t){var a=s[t].data.slice(0);e.label===o.title?(a.push(o.amount),console.log("adding expense to "+o.title+" category")):a.push(0),a.shift(),s[t].data=a});else{a.push(o.title),s.forEach(function(e,t){var a=s[t].data.slice(0);a.push(0),a.shift(),s[t].data=a});var l={label:o.title,data:this.makeNewArray(0,o.amount),borderColor:e[o.title],backgroundColor:"rgba(0, 0, 0, 0)"};s.push(l)}this.setState({data:Object.assign({},t.data,{datasets:s,labels:r}),ledger:i,history:Object.assign({},t.history,{datasets:this.processNetWorth(t,o),labels:r})})}},{key:"decide",value:function(e,t){var a=Object.keys(e),n=a.reduce(function(e,t){return+e+ +t},0),r=0,o=[];return a.some(function(e,t){return o[t]=0===t?+a[t]:+a[t]+ +o[t-1],r=e,p(0,n)<o[t]}),e[r].times+=1,console.log(e),function(e,t){var a=e.vendors[Math.floor(p(0,e.vendors.length-1))];return{type:e.type,date:new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"}),amount:String(p(e.min,e.max)),vendor:a,title:e.title}}(e[r],t)}},{key:"tick",value:function(){this.setState({category:this.decide(this.returnCats()),txns:this.increment()})}},{key:"returnCats",value:function(){var e=this.returnColors();return{10:{title:"gym payment",display:"Pay gym membership",color:e["gym payment"],button:!1,times:0,vendors:["Anytime Fitness"],min:50,max:50,type:"debit"},31:{title:"alcohol/bars",display:"Go to a bar",color:e["alcohol/bars"],button:!0,times:0,vendors:["Workhorse Bar","drink.well.","The Parlor","Weather Up"],min:5,max:50,type:"debit"},32:{title:"groceries",display:"Pick up groceries",color:e.groceries,button:!0,times:0,vendors:["Fresh Plus Grocery","Trader Joe's","Whole Foods Great Hills Rd","Dierbergs"],min:10,max:80,type:"debit"},50:{title:"coffeeshop",display:"Grab a coffee",color:e.coffeeshop,button:!0,times:0,vendors:["Quacks 43rd St Bakery","Thunderbird Coffee","Epoch North Loop","Flightpath Coffeehouse","Dolce Vita","Monkey Nest Coffee"],min:1.25,max:15,type:"debit"},13:{title:"gas/fuel",display:"Get gas",color:e["gas/fuel"],button:!0,times:0,vendors:["Shell 4429 Duval St","Texaco Austin 5301 N Lamar","Exxon","North Loop Food Store","Chevron Airport Blvd","Gulf Gas Station"],min:30,max:40,type:"debit"},4:{title:"cellphone",display:"Pay cellphone bill",color:e.cellphone,button:!1,times:0,vendors:["ATT Thank you for your Online Payment"],min:64,max:66,type:"debit"},35:{title:"restaurant",display:"Go out to eat",color:e.restaurant,button:!0,times:0,vendors:["Foreign & Domestic","East Side Pies","Phara's","Uchiko","Chipotle","Freebirds Airport Blvd","Biscuits and Groovy","Gordeaux's Donuts","Habesha Ethiopian Restaurant and Bar","Tyson's Tacos"],min:12,max:50,type:"debit"},0:{title:"invest",display:"Invest money",color:e.invest,button:!0,times:0,vendors:["Vanguard Investing","Discover Online Banking"],min:100,max:1e4,type:"neither"},2:{title:"income",display:"Earn some income",color:e.income,button:!0,times:0,vendors:["Freelancing","Car washes","Gave haircut","Tutored"],min:100,max:1e3,type:"credit"}}}},{key:"returnColors",value:function(){return{"alcohol/bars":"#A40E4C","gas/fuel":"#2C2C54",groceries:"#ACC3A6",coffeeshop:"#F5D6BA","gym payment":"#F49D6E",restaurant:"rgba(60, 110, 113, 1)",invest:"#A7B0CA",cellphone:"#A5D86B",income:"#8EDCE6"}}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),f=a(63),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),t}(n.Component);b.defaultProps={displayTitle:!1,displayLegend:!0,legendPosition:"bottom",titleSize:25};var g=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this)),console.log(e),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if("networth"===this.props.type)var e=this.props.chartData.history;else e=this.props.chartData.data;return console.log(this.props),r.a.createElement("div",null,r.a.createElement(f.a,{data:e,height:200,options:{type:"line",animation:{duration:100,display:"linear"},responsive:!0,maintainAspectRatio:!1,legend:{labels:{usePointStyle:!0},display:!1,position:this.props.legendPosition}}}))}}]),t}(b),E={title:"Net Worth Over Time",type:"networth"},k={title:"Transactions Over Time",leftOfTitle:"May 30, 2018",type:"line"},O=function(e){return r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"titleHolder"},r.a.createElement("span",null,r.a.createElement("b",null,e.first)),r.a.createElement("span",null,e.second)))},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={properties:e},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{first:this.props.config.leftOfTitle,second:this.props.config.title}),r.a.createElement(g,{chartData:this.props.data,type:this.props.config.type}))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"makeButtons",value:function(){var e=[],t=this.returnCats();for(var a in t)if(t[a].button){var n={backgroundColor:t[a].color,border:"solid 1px "+t[a].color};e.push(r.a.createElement("a",{href:"#",style:n,className:"square_btn",key:a},t[a].display))}return e}},{key:"makeTxns",value:function(){var e=[],t=this.state.ledger,a=this.returnColors();for(var n in t){var o={color:a[t[n].title],borderBottom:"1px dotted gainsboro"};e.push(r.a.createElement("tr",{href:"#",style:o,className:"ledgerRow",key:n},r.a.createElement("td",null,t[n].date),r.a.createElement("td",null,t[n].amount),r.a.createElement("td",null,t[n].title),r.a.createElement("td",null,t[n].vendor)))}return e}},{key:"render",value:function(){var e=this.state;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container-2-left"},r.a.createElement("div",null,r.a.createElement(C,{config:k,data:e})),r.a.createElement("div",null,r.a.createElement(O,{first:"",second:"Add a Transaction:"}),r.a.createElement("div",{className:"buttonHolder"},this.makeButtons()))),r.a.createElement("div",{className:"grid-container-2-right"},r.a.createElement("div",null,r.a.createElement(C,{config:k,data:e})),r.a.createElement("div",null,r.a.createElement(O,{second:"Ledger of Transactions"}),r.a.createElement("div",{className:"ledgerTable"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"date"},"Date"),r.a.createElement("th",{className:"amount"},"Amount"),r.a.createElement("th",{className:"category"},"Category"),r.a.createElement("th",{className:"vendor"},"Vendor")),this.makeTxns()))))),r.a.createElement("div",{className:"grid-container-1"},r.a.createElement("div",null,r.a.createElement(C,{config:E,data:e}))))}}]),t}(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a(217)},70:function(e,t,a){},72:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.dd2d7e54.chunk.js.map