(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[195],{5075:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(9496),i=n(5924),r=n(6623),o=n(4475),s=n(45),c=n(1163);const l={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},u=n.p+"assets/images/microsoftstore-fb41aba6f4e35062a932c7ea0c262e79.png",d=n.p+"assets/images/auth-6bedf945c3099c3e33dbecb64b897721.png",p=n.p+"assets/images/social-fad8f662e0df8e943d5e784d0fabec9a.png",h=n.p+"assets/images/library-d9a36b99f31825858286ff83af8a2223.png",m=n.p+"assets/images/enrichments-00b2a20e33ab751f0f41984b9faad113.png",g=n.p+"assets/images/opensource-43e5ec3ce9906d480315f65ceaaa9156.png",f=[{title:"Easy to Use \ud83e\udd1d",img:u,description:a.createElement(a.Fragment,null,"No need to compile shit. As a certified Microsoft Partner our Client Application is officially available for everyone in"," ",a.createElement("a",{href:"https://www.microsoft.com/en-us/p/crackpipe/9pmjlf08x8p0"},"the Microsoft Store"),".")},{title:"Your Platform - Your Rules \ud83d\udc51",img:d,description:a.createElement(a.Fragment,null,"No Cloud Bullshit. Everything is Selfhosted. It's your games and you can decide who can download and play them.")},{title:"Social Features \ud83d\udc65",img:p,description:a.createElement(a.Fragment,null,"Stay up to Date. Track your play times, keep up to date with what your friends are playing and mark completed games as finished.")},{title:"Good Looking \u2728",img:h,description:a.createElement(a.Fragment,null,"Don't get lost. Browse, Sort and Filter your game library using an epic user interface")},{title:"Enriched with Metadata \ud83d\udcdc",img:m,description:a.createElement(a.Fragment,null,"Enrich all your games with juicy metadata. Unlock the full power of Crackpipe and"," ",a.createElement("a",{href:"https://rawg.io/login/?forward=developer"},"sign up for a free RAWG API Key"),".")},{title:"Open Source \ud83d\udcc2",img:g,description:a.createElement(a.Fragment,null,a.createElement("a",{href:"/docs/contribute"},"Contribute to our project.")," Endlessly extend the features and capabilities of it!")}];function v(e){let{title:t,img:n,description:r}=e;return a.createElement("div",{className:(0,i.Z)("col col--4")},a.createElement("div",{className:"text--center"},a.createElement("img",{src:n})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,r)))}function b(){return a.createElement("section",{className:l.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},f.map(((e,t)=>a.createElement(v,(0,c.Z)({key:t},e)))))))}var E=n(6667);const y={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function k(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:(0,i.Z)("hero hero--primary",y.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:y.buttons},a.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Introduction"))))}function w(){E.init("K6k7j6GHClhh"),E.trackViews();const{siteConfig:e}=(0,o.Z)();return a.createElement(s.Z,{title:`${e.title}`,description:"A decentralized gaming platform for alternatively obtained games"},a.createElement(k,null),a.createElement("main",null,a.createElement(b,null)))}},6667:function(e,t){!function(e){"use strict";function t(e){return(e=location.search.match(e))&&e[2]||void 0}function n(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language}function a(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}}function i(){return document.referrer||void 0}function r(){return t(u)}function o(){return t(p)}function s(){return t(d)}function c(){return location.pathname||""}var l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=/[?&](ref|source|utm_source)=([^?&]+)/,d=/[?&](utm_campaign)=([^?&]+)/,p=/[?&](utm_medium)=([^?&]+)/,h={stop:function(){}},m=(g.prototype.track=function(e){this.canTrack()&&(e=l({pid:this.projectID,pg:this.activePage,lc:n(),tz:a(),ref:i(),so:r(),me:o(),ca:s()},e),this.sendRequest("custom",e))},g.prototype.trackPageViews=function(e){var t,n,a;return this.canTrack()?(this.pageData||(null!=(this.pageViewsOptions=e)&&e.unique||(n=setInterval(this.trackPathChange,2e3)),null!=e&&e.noHeartbeat||(setTimeout(this.heartbeat,3e3),t=setInterval(this.heartbeat,28e3)),a=c(),this.pageData={path:a,actions:{stop:function(){clearInterval(n),clearInterval(t)}}},this.trackPage(a,null==e?void 0:e.unique)),this.pageData.actions):h},g.prototype.getPerformanceStats=function(){var e;return this.canTrack()&&!this.perfStatsCollected&&null!=(e=window.performance)&&e.getEntriesByType&&(e=window.performance.getEntriesByType("navigation")[0])?(this.perfStatsCollected=!0,{dns:e.domainLookupEnd-e.domainLookupStart,tls:e.secureConnectionStart?e.requestStart-e.secureConnectionStart:0,conn:e.secureConnectionStart?e.secureConnectionStart-e.connectStart:e.connectEnd-e.connectStart,response:e.responseEnd-e.responseStart,render:e.domComplete-e.domContentLoadedEventEnd,dom_load:e.domContentLoadedEventEnd-e.responseEnd,page_load:e.loadEventStart,ttfb:e.responseStart-e.requestStart}):{}},g.prototype.heartbeat=function(){var e;(null!=(e=this.pageViewsOptions)&&e.heartbeatOnBackground||"hidden"!==document.visibilityState)&&(e={pid:this.projectID},this.sendRequest("hb",e))},g.prototype.checkIgnore=function(e){var t,n=null==(t=this.pageViewsOptions)?void 0:t.ignore;if(Array.isArray(n))for(var a=0;a<n.length;++a){if(n[a]===e)return!0;if(n[a]instanceof RegExp&&n[a].test(e))return!0}return!1},g.prototype.trackPathChange=function(){var e;this.pageData&&(e=c(),this.pageData.path!==e)&&this.trackPage(e,!1)},g.prototype.trackPage=function(e,t){var c;void 0===t&&(t=!1),this.pageData&&(this.pageData.path=e,this.checkIgnore(e)||(this.activePage=e,c=this.getPerformanceStats(),t={pid:this.projectID,lc:n(),tz:a(),ref:i(),so:r(),me:o(),ca:s(),unique:t,pg:e,perf:c},this.sendRequest("",t)))},g.prototype.debug=function(e){var t;null!=(t=this.options)&&t.debug&&console.log("[Swetrix]",e)},g.prototype.canTrack=function(){var e;return null!=(e=this.options)&&e.disabled?(this.debug("Tracking disabled: the 'disabled' setting is set to true."),!1):"undefined"==typeof window?(this.debug("Tracking disabled: script does not run in browser environment."),!1):null!=(e=this.options)&&e.respectDNT&&"1"===(null==(e=window.navigator)?void 0:e.doNotTrack)?(this.debug("Tracking disabled: respecting user's 'Do Not Track' preference."),!1):!(!(null!=(e=this.options)&&e.debug||"localhost"!==(null===location||void 0===location?void 0:location.hostname)&&"127.0.0.1"!==(null===location||void 0===location?void 0:location.hostname)&&""!==(null===location||void 0===location?void 0:location.hostname))||null!==navigator&&void 0!==navigator&&navigator.webdriver&&(this.debug("Tracking disabled: navigation is automated by WebDriver."),1))},g.prototype.sendRequest=function(e,t){var n=(null==(n=this.options)?void 0:n.apiURL)||"https://api.swetrix.com/log",a=new XMLHttpRequest;a.open("POST","".concat(n,"/").concat(e),!0),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify(t))},g);function g(e,t){this.projectID=e,this.options=t,this.pageData=null,this.pageViewsOptions=null,this.perfStatsCollected=!1,this.activePage=null,this.trackPathChange=this.trackPathChange.bind(this),this.heartbeat=this.heartbeat.bind(this)}e.LIB_INSTANCE=null,e.init=function(t,n){return e.LIB_INSTANCE||(e.LIB_INSTANCE=new m(t,n)),e.LIB_INSTANCE},e.track=function(t){e.LIB_INSTANCE&&e.LIB_INSTANCE.track(t)},e.trackViews=function(t){return new Promise((function(n){e.LIB_INSTANCE?"undefined"==typeof document||"complete"===document.readyState?n(e.LIB_INSTANCE.trackPageViews(t)):window.addEventListener("load",(function(){n(e.LIB_INSTANCE.trackPageViews(t))})):n(h)}))},Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);