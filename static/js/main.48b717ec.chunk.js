(window["webpackJsonpbrocoders-4"]=window["webpackJsonpbrocoders-4"]||[]).push([[0],{213:function(e,t,a){e.exports=a(398)},218:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),l=a.n(o),c=(a(218),a(54)),i=a(26),m=a(12),u=function(e){return{type:"CONTAINER_CHANGE_BUTTON_TEXT",payload:e}};function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={text:"start"};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={name:" ",timeToStart:" ",timeToStop:" ",timeToSpend:" "},E=Object(c.b)({mainContainer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTAINER_CHANGE_BUTTON_TEXT":return p({},e,{text:t.payload})}return e},stopwatch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STOPWATCH_NAME_TASK":return b({},e,{name:t.payload});case"GET_STOPWATCH_TIME_TO_START":return b({},e,{timeToStart:t.payload});case"GET_STOPWATCH_TIME_TO_END":return b({},e,{timeToStop:t.payload});case"GET_OPWATCH_TIME_TO_SPEND":return b({},e,{timeToSpend:t.payload})}return e}}),g=a(447),h=a(448),O=a(34),S=a(177),y=a(445),w=a(451),v=a(446),x=a(3),j=a(436),_=a(450);function k(e){var t=e.children,a=e.value,n=e.index,o=Object(x.a)(e,["children","value","index"]);return r.a.createElement(j.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),r.a.createElement(_.a,null,t))}var N=a(176),P=a.n(N),C=a(179),D=a(7),A=a(442),I=a(444),H=a(440),B=a(443),W=a(441),G=a(439),M=a(67),R=a.n(M),K=R.a[900],z=R.a[50],L=Object(C.a)(G.a)({color:K,backgroundColor:"white",boxShadow:"0 0  5px -1px grey"}),J=Object(D.a)((function(e){return{head:{color:e.palette.common.grey},body:{backgroundColor:z}}}))(H.a),U=Object(D.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(W.a);var X,F,Y,$,q,Q,V,Z=[(X=1,F="some name",Y="some time to start",$="some time to end",q="some time to spend",Q=r.a.createElement(L,null,"info"),V=r.a.createElement(L,null,"delete"),{number:X,nameTask:F,timeStart:Y,timeEnd:$,timeSpend:q,info:Q,buttonDelete:V})];var ee=Object(i.b)((function(e){return{name:e.stopwatch.name,timeToStart:e.stopwatch.timeToStart,timeToStop:e.stopwatch.timeToStop,timeToSpend:e.stopwatch.timeToSpend}}),{})((function(e){return r.a.createElement(A.a,null,r.a.createElement(B.a,null,r.a.createElement(W.a,null,r.a.createElement(J,null,"\u2116"),r.a.createElement(J,{align:"left"},"Task"),r.a.createElement(J,{align:"left"},"Time start"),r.a.createElement(J,{align:"left"},"Time end"),r.a.createElement(J,{align:"left"},"Time spend"),r.a.createElement(J,{align:"left"},"Info"),r.a.createElement(J,{align:"left"},"Delete"))),r.a.createElement(I.a,null,Z.map((function(e){return r.a.createElement(U,{key:e.number},r.a.createElement(J,{component:"th",scope:"row"},e.number),r.a.createElement(J,{align:"left"},e.nameTask),r.a.createElement(J,{align:"left"},e.timeStart),r.a.createElement(J,{align:"left"},e.timeEnd),r.a.createElement(J,{align:"left"},e.timeSpend),r.a.createElement(J,{align:"left"},e.info),r.a.createElement(J,{align:"left"},e.buttonDelete))}))))})),te=a(47);function ae(){return r.a.createElement(te.c,{width:1e3,height:350,data:[{name:"1","minute in this hourse":60},{name:"2","minute in this hourse":30},{name:"3","minute in this hourse":45}],margin:{top:50,right:0,bottom:0,left:0}},r.a.createElement(te.e,{dataKey:"name"}),r.a.createElement(te.f,null),r.a.createElement(te.d,null),r.a.createElement(te.b,{stroke:"#f5f5f5"}),r.a.createElement(te.a,{dataKey:"minute in this hourse",barSize:20,fill:"#413ea0"}))}var ne=P.a[500];function re(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var oe=Object(S.a)({tabs:{background:ne},tab:{minWidth:"50%"}});var le={setButtonText:u},ce=Object(i.b)((function(e){return{text:e.mainContainer.text}}),le)((function(e){var t=r.a.useState(0),a=Object(O.a)(t,2),n=a[0],o=a[1],l=oe();return r.a.createElement("div",null,r.a.createElement(y.a,{position:"static",component:"div"},r.a.createElement(w.a,{className:l.tabs,value:n,onChange:function(e,t){o(t)},"aria-label":"simple tabs example"},r.a.createElement(v.a,Object.assign({className:l.tab,label:"task log"},re(0))),r.a.createElement(v.a,Object.assign({className:l.tab,label:"task chart"},re(0))))),r.a.createElement(k,{value:n,index:0},r.a.createElement(ee,null)),r.a.createElement(k,{value:n,index:1},r.a.createElement(ae,null)))})),ie=a(178),me=a.n(ie),ue=a(400),se=a(449),pe=a(69),de=a.n(pe),Te=a(452),be=me.a[600],fe=R.a[900],Ee=Object(ue.a)({taskTimer:{borderRadius:"50%",boxShadow:"0 5px 10px 0px grey",width:"200px",height:"200px",display:"flex",alignItems:"center",margin:"30px 0"},timer:{color:fe,fontSize:"30px",margin:"auto"},buttonStopOrStart:{color:fe,boxShadow:"0 0  5px -1px grey",marginBottom:"30px"},taskContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},taskNameInput:{textAlignLast:"center",color:fe},modal:{width:"70%",padding:"15px",background:"white",height:"200px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50% , -50%)"},modalTitle:{color:be,fontSize:"20px",marginBottom:"15px"},modalText:{color:"grey"},modalButton:{color:fe,position:"absolute",right:"15px",bottom:"15px"}}),ge={setButtonText:u,getNameStopwatch:function(e){return{type:"GET_STOPWATCH_NAME_TASK",payload:e}},getTimeToStartStopwatch:function(e){return{type:"GET_STOPWATCH_TIME_TO_START",payload:e}},getTimeToStopStopwatch:function(e){return{type:"GET_STOPWATCH_TIME_TO_END",payload:e}},getTimeToSpendStopwatch:function(e){return{type:"GET_OPWATCH_TIME_TO_SPEND",payload:e}}},he=Object(i.b)((function(e){return{text:e.mainContainer.text,name:e.stopwatch.name,timeToStart:e.stopwatch.timeToStart,timeToStop:e.stopwatch.timeToStop,timeToSpend:e.stopwatch.timeToSpend}}),ge)((function(e){var t=Ee(),a=Object(n.useState)(0),o=Object(O.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(Date.now()),m=Object(O.a)(i,2),u=m[0],s=m[1],p=Object(n.useState)(!1),d=Object(O.a)(p,2),T=d[0],b=d[1],f=Object(n.useState)(""),E=Object(O.a)(f,2),g=E[0],h=E[1];return r.a.createElement("div",{className:t.taskContainer},r.a.createElement(se.a,{placeholder:"Name of your task",inputProps:{className:t.taskNameInput},margin:"normal",onChange:function(e){h(e.target.value)},value:g}),r.a.createElement(_.a,{className:t.taskTimer,children:r.a.createElement(_.a,{component:"span",className:t.timer},de.a.utc(l).format("HH:mm:ss"))}),r.a.createElement(G.a,{variant:"text",className:t.buttonStopOrStart,value:e.text,onClick:function(t){if(b(""===g),""!==g){"start"===t.currentTarget.value?(!function(){var e=Date.now();s(setInterval((function(){c(Date.now()-e)})))}(),e.getTimeToStartStopwatch(de()(Date.now()).format("LTS"))):(clearInterval(u),c(0),h(""),e.getNameStopwatch(g),e.getTimeToStopStopwatch(de()(Date.now()).format("LTS")),e.getTimeToSpendStopwatch(de.a.utc(l).format("HH:mm:ss")),Z.push({nameTask:e.name,number:Z.length+1,timeEnd:e.timeToStop,timeSpend:e.timeToSpend,timeStart:e.timeToStart,info:r.a.createElement(G.a,null,"info"),buttonDelete:r.a.createElement(G.a,null,"Delete")}));var a="start"===t.currentTarget.value?"stop":"start";e.setButtonText(a)}}},e.text),r.a.createElement(Te.a,{open:T},r.a.createElement("div",{className:t.modal},r.a.createElement("h3",{className:t.modalTitle}," Empty task name"),r.a.createElement("p",{className:t.modalText},"You are truing close your task without name? enter the title and try again!"),r.a.createElement(G.a,{onClick:function(){b(!1)},className:t.modalButton},"close"))))}));var Oe={setButtonText:u},Se=Object(i.b)((function(e){return{text:e.mainContainer.text}}),Oe)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null),r.a.createElement(h.a,{maxWidth:!1,style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(he,null),r.a.createElement(h.a,null,r.a.createElement(ce,null))))})),ye=Object(c.c)(E);var we=function(){return r.a.createElement(i.a,{store:ye},r.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[213,1,2]]]);
//# sourceMappingURL=main.48b717ec.chunk.js.map