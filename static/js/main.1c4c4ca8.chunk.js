(this["webpackJsonpbase-react"]=this["webpackJsonpbase-react"]||[]).push([[0],[,function(t,e,a){t.exports={statistic__list:"StatisticsStyles_statistic__list__W1zri",statistic__item:"StatisticsStyles_statistic__item__IDcdN",statistic__name:"StatisticsStyles_statistic__name__1_xvm",statistic__value:"StatisticsStyles_statistic__value__PC-yx"}},,,,,,function(t,e,a){t.exports={button:"FeedbackStyles_button__K1kKy"}},function(t,e,a){t.exports={section__title:"SectionStyles_section__title__hWmgZ"}},function(t,e,a){t.exports={notification__message:"NotificationStyles_notification__message__bgqo9"}},,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(3),c=a.n(i),r=(a(17),a(4)),o=a(5),l=a(6),_=a(11),m=a(10),u=a(7),b=a.n(u);function v(t){var e=t.options,a=t.onLeaveFeedback;return s.a.createElement(s.a.Fragment,null,Object.entries(e).map((function(t){return s.a.createElement("button",{key:t[0],type:"button",onClick:a,name:t[0],value:t[1],className:b.a.button},t[0])})))}var d=a(8),p=a.n(d);function f(t){var e=t.title,a=t.children;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{className:p.a.section__title},e),a)}var E=a(1),k=a.n(E);function g(t){var e=t.options,a=t.total,n=t.positiveFeedback;return s.a.createElement("ul",{className:k.a.statistic__list},Object.entries(e).map((function(t){return s.a.createElement("li",{className:k.a.statistic__item,key:t[0]},s.a.createElement("p",{className:k.a.statistic__name},t[0],":"),s.a.createElement("p",{className:k.a.statistic__value},t[1]))})),s.a.createElement("li",{className:k.a.statistic__item},s.a.createElement("p",{className:k.a.statistic__name},"Total:"),s.a.createElement("p",{className:k.a.statistic__value},a)),s.a.createElement("li",{className:k.a.statistic__item},s.a.createElement("p",{className:k.a.statistic__name},"Positive feedback:"),s.a.createElement("p",{className:k.a.statistic__value},n,"%")))}var F=a(9),N=a.n(F);function y(t){var e=t.message;return s.a.createElement("p",{className:N.a.notification__message},e)}var h=function(t){Object(_.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=(t.state.good/t.countTotalFeedback()*100).toFixed(1);return Number(e)},t.onLeaveFeedback=function(e){var a=e.target.name;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,{title:"Please leave feedback"},s.a.createElement(v,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})),s.a.createElement(f,{title:"Statistic"},this.countTotalFeedback()>0?s.a.createElement(g,{options:this.state,total:this.countTotalFeedback(),positiveFeedback:this.countPositiveFeedbackPercentage()}):s.a.createElement(y,{message:"No feedback given"})))}}]),a}(n.Component);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.1c4c4ca8.chunk.js.map