import{d as c,r as i,g as p,u as l,b as v,o as m}from"./index-De2IGXFy.js";const C=c({__name:"index",setup(u){let r=i([{title:"购物",start:"2021-11-11 10:00:00",end:"2021-11-11 12:00:00",editable:!0},{title:"学习",start:"2021-11-15 08:00:00",end:"2021-11-15 16:00:00"}]),a=e=>{let t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"吃饭"};r.value.push(t)},s=e=>{let t=document.createElement("div"),n=e.timeText.split(" - "),d=n[0]?.replace("上午","").replace("下午","").replace("时",""),o=n[1]?.replace("上午","").replace("下午","").replace("时","");return t.innerHTML=`
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>开始时间: ${d}</div>
         <div>结束时间: ${o}</div>
         <div>标题: ${e.event._def.title}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=v("wn-calendar");return m(),p(n,{events:l(r),eventContent:l(s),onDateClick:l(a)},null,8,["events","eventContent","onDateClick"])}}});export{C as default};
