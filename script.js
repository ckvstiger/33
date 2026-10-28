// 打字效果
const lines=["熱愛商業經營 📊","探索電子商務 🛒","擁抱智慧科技 🤖","未來的數位商管跨領域人才 🚀"];
let li=0,ci=0,del=false;const t=document.getElementById('typed');
(function type(){const s=lines[li];t.textContent=s.slice(0,ci);
if(!del&&ci<s.length)ci++;else if(del&&ci>0)ci--;else{del=!del;if(!del)li=(li+1)%lines.length;}
setTimeout(type,del?40:ci===s.length?1600:110);})();

// 粒子網路背景
const c=document.getElementById('bg'),x=c.getContext('2d');let P=[];
function resize(){c.width=innerWidth;c.height=innerHeight;P=Array.from({length:Math.min(90,innerWidth/14)},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}))}
resize();addEventListener('resize',resize);
(function draw(){x.clearRect(0,0,c.width,c.height);
P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>c.width)p.vx*=-1;if(p.y<0||p.y>c.height)p.vy*=-1;
x.fillStyle='#00f0ff';x.beginPath();x.arc(p.x,p.y,1.6,0,7);x.fill();
for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){x.strokeStyle=`rgba(139,92,246,${1-d/130})`;x.lineWidth=.6;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke();}}});
requestAnimationFrame(draw);})();

// 捲動顯示 + 技能條
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('show');
e.target.querySelectorAll('.bar i').forEach(b=>b.style.width=b.dataset.v+'%');
e.target.querySelectorAll('.pct').forEach(p=>{let n=0;const v=+p.dataset.v;const iv=setInterval(()=>{p.textContent=(n=Math.min(v,n+1))+'%';if(n>=v)clearInterval(iv)},20)});
io.unobserve(e.target);}),{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// 卡片 3D 傾斜
document.querySelectorAll('.tilt').forEach(card=>{
card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
card.style.transform=`perspective(800px) rotateY(${dx*14}deg) rotateX(${-dy*14}deg) translateY(-8px)`});
card.addEventListener('mouseleave',()=>card.style.transform='')});
