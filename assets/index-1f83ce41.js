import{_ as b,o as m,c as w,a as x}from"./index-f33278ac.js";const B={name:"canvasBg",mounted(){this.init()},methods:{init(){let n=this.$refs.canvas,s=n.getContext("2d"),l=n.width=this.$refs.canvasBg.clientWidth,f=n.height=this.$refs.canvasBg.clientHeight,d=217,c=[],u=0,_=1400,o=document.createElement("canvas"),h=o.getContext("2d");o.width=50,o.height=50;let e=o.width/2,r=h.createRadialGradient(e,e,0,e,e,e);r.addColorStop(.025,"#fff"),r.addColorStop(.1,"hsl("+d+", 61%, 33%)"),r.addColorStop(.25,"hsl("+d+", 64%, 6%)"),r.addColorStop(1,"transparent"),h.fillStyle=r,h.beginPath(),h.arc(e,e,e,0,Math.PI*2),h.fill();function i(t,a){if(arguments.length<2&&(a=t,t=0),t>a){let p=a;a=t,t=p}return Math.floor(Math.random()*(a-t+1))+t}let g=function(){this.orbitRadius=i(l/2-50),this.radius=i(100,this.orbitRadius)/10,this.orbitX=l/2,this.orbitY=f/2,this.timePassed=i(0,_),this.speed=i(this.orbitRadius)/4e5,this.alpha=i(2,10)/10,u++,c[u]=this};g.prototype.draw=function(){let t=Math.sin(this.timePassed+1)*this.orbitRadius+this.orbitX,a=Math.cos(this.timePassed)*this.orbitRadius/2+this.orbitY,p=i(10);p===1&&this.alpha>0?this.alpha-=.05:p===2&&this.alpha<1&&(this.alpha+=.05),s.globalAlpha=this.alpha,s.drawImage(o,t-this.radius/2,a-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(let t=0;t<_;t++)new g;function v(){s.globalCompositeOperation="source-over",s.globalAlpha=.8,s.fillStyle="hsla("+d+", 64%, 6%, 1)",s.fillRect(0,0,l,f),s.globalCompositeOperation="lighter";for(let t=1,a=c.length;t<a;t++)c[t].draw();window.requestAnimationFrame(v)}v()}}},C={class:"canvasBg",ref:"canvasBg"},S={ref:"canvas"};function R(n,s,l,f,d,c){return m(),w("div",C,[x("canvas",S,null,512)],512)}const y=b(B,[["render",R],["__scopeId","data-v-a5098107"]]);export{y as default};
