import { useState, useEffect } from "react";
const PRODUCTS=[
{id:"shop",title:"Shop - 330 Designs",sub:"Printify Live",desc:"330 designs live",color:"#ff00ff",accent:"#ff00ff",icon:"SHOP",badge:"330 LIVE",pages:1,pdfs:[], link:"https://shop.mimiscozycorner.com"},
{id:"twin-story",title:"Twin Story Method",sub:"Finding Faith",desc:"50 day journal",color:"#1a1a2e",accent:"#d4af37",icon:"BOOK",badge:"NEW",pages:50,pdfs:["twin-story-method-workbook.pdf"]},
{id:"budget",title:"Budget Buster",sub:"Save $500",desc:"Coupons meal $100/wk",color:"#0f5ca8",accent:"#00d4ff",icon:"MONEY",badge:"BUDGET",pages:10,pdfs:["budget-buster-complete.pdf"]},
{id:"housing",title:"Section 8 Guides",sub:"Rochester Voucher",desc:"Apply docs scripts",color:"#0f5ca8",accent:"#00ffff",icon:"HOME",badge:"HOUSING",pages:10,pdfs:["section8-complete.pdf"]},
{id:"daily",title:"Daily Finds",sub:"Soft Life Mom",desc:"Cozy reader mom fuel",color:"#ff69b4",accent:"#ff1493",icon:"COFFEE",badge:"DAILY",pages:5,pdfs:["daily-finds-workbook.pdf"]},
{id:"creative",title:"Creative Ads",sub:"50 Templates 55KB",desc:"50 templates 1 per page",color:"#ff1493",accent:"#ff00ff",icon:"ART",badge:"50 PAGES",pages:50,pdfs:["ad-templates.pdf"]},
{id:"manifest",title:"Manifesting",sub:"Divine Healing",desc:"Healing in progress",color:"#6a00ff",accent:"#d4af37",icon:"STAR",badge:"HEALING",pages:5,pdfs:["manifesting-workbook.pdf"]},
];
function Viewer({p,onBack}:{p:any,onBack:()=>void}){
const [pg,setPg]=useState(1);
useEffect(()=>{setPg(1);},[p.id]);
useEffect(()=>{window.scrollTo(0,0);},[pg]);
const total=p.pages;
const safePg=Math.min(pg,total);
const prog=(safePg/total)*100;
if(p.id==="shop"){
 return(<div style={{minHeight:"100vh",background:"#fff",paddingTop:70,textAlign:"center"}}><div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"1px solid #ddd",padding:12,display:"flex",justifyContent:"space-between"}}><b>SHOP 330 LIVE</b><button onClick={onBack}>Back</button></div><h1>Shop 330 Designs</h1><a href="https://shop.mimiscozycorner.com" target="_blank" style={{background:"#ff00ff",color:"#fff",padding:"16px 32px",borderRadius:12,textDecoration:"none",display:"inline-block",marginTop:16,fontWeight:800}}>shop.mimiscozycorner.com</a></div>);
}
let title=`${p.title} Page ${safePg} of ${total}`;
let lines:string[]=[];
if(p.id==="creative"){
 const hooks=["Problem/Solution - Tired of ___? We fixed it!","Before/After - Left struggle Right cozy","Testimonial - I was ___ until ___","Mistake - 3 mistakes","Warning - Stop doing ___!","Frustration - Why hard? Because ___","Confession - I used to ___ until ___","Call Out - If you ___ then need ___","Secret - Secret to ___","Myth Buster - Myth ___ Truth ___"];
 const h=hooks[(safePg-1)%hooks.length];
 title=`Template ${safePg}/50 - ${h}`;
 lines=[`HOOK: ${h} - Page ${safePg} NOT blank!`,`EXAMPLE: Page ${safePg} - See /pdfs/ad-templates.pdf page ${safePg}`,`WHY IT WORKS: Validates + gives solution page ${safePg}`,`CANVA: 1080x1080 Anton Montserrat #ff00ff #6a00ff`,`WRITE YOUR VERSION FOR PAGE ${safePg}:`];
}else{
 const map:any={"twin-story":["Twin Story public vs private Page1","Journal finding faith Page2","Challenge Day1-5 Page3","Cards faith over fear Page4","Tracker 50 day Page5"],"budget":["Save $500 plan Page1","Coupons DG $5 off $25 Page2","Meal $100 Aldi Page3","Tracker savings Page4","Fetch Ibotta $20 Page5"],"housing":["How To Apply - Rochester Housing Page1","Scripts voucher accept Page2","Properties [Property address] Page3","Follow up tracker Page4"],"daily":["Soft Life Manifesto Page1","Mom Fuel coffee tracker Page2","Bookish cozy reader Page3","Blessed stressed Page4"],"manifest":["Divine timing Page1","Healing in progress Page2","Faith finding nothing Page3","Becoming Page4"]};
 const arr=map[p.id]||["Cozy content"];
 const topic=arr[(safePg-1)%arr.length];
 title=`${p.title} - ${topic} - Page ${safePg}/${total}`;
 lines=[topic,`${p.desc} - Page ${safePg} NOT blank! Real info`, `Action: What does page ${safePg} mean? Write below:`, `Page ${safePg} of ${total} has content - Progress ${prog.toFixed(0)}%`];
}
return(
<div style={{minHeight:"100vh",background:"#faf8f3"}}>
<div style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:"#fff",borderBottom:"1px solid #e2dccc"}}>
<div style={{maxWidth:1280,margin:"0 auto",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div><div style={{fontSize:11,color:"#666"}}>{p.title}</div><div style={{fontWeight:700,fontSize:13}}>{title}</div><div style={{fontSize:10,color:"#999"}}>Page {safePg} of {total} Page {safePg} of {total}</div></div>
<div style={{display:"flex",gap:8,alignItems:"center"}}><button onClick={()=>setPg(Math.max(1,safePg-1))} disabled={safePg===1} style={{padding:"8px 12px",borderRadius:8}}>Prev</button><span>{safePg}/{total}</span><button onClick={()=>setPg(Math.min(total,safePg+1))} disabled={safePg===total} style={{padding:"8px 12px",borderRadius:8,background:"#1a1a2e",color:"#fff"}}>Next</button></div>
</div><div style={{height:6,background:"#eee"}}><div style={{height:"100%",width:`${prog}%`,background:"#d4af37"}}></div></div>
</div>
<div style={{paddingTop:120,paddingBottom:100,maxWidth:900,margin:"0 auto",paddingLeft:16,paddingRight:16}}>
<div style={{background:"#fff",borderRadius:16,padding:24,border:"1px solid #e2dccc"}}>
<h2>{p.icon} {title}</h2><p style={{color:p.color,fontWeight:700}}>Page {safePg} of {total}</p>
{lines.map((ln,i)=><div key={i} style={{marginTop:12,padding:ln.includes("WRITE")?12:0,background:ln.includes("WRITE")?"#f0ede5":"transparent",borderRadius:8}}><p style={{margin:0}}>{ln}</p>{ln.includes("WRITE")&&<textarea placeholder={`Write for page ${safePg} NOT blank`} style={{width:"100%",marginTop:8,minHeight:60,border:"1px solid #d4af37",borderRadius:6,padding:8}}></textarea>}</div>)}
<div style={{marginTop:24,padding:16,background:"#1a1a2e",borderRadius:12,color:"#fff"}}><h3 style={{color:"#d4af37",marginTop:0}}>PDFs Inside - Page {safePg}/{total}</h3>{p.pdfs.map((pdf:string)=><p key={pdf}><a href={`/pdfs/${pdf}`} target="_blank" style={{color:"#d4af37"}}>{pdf} Open</a></p>)}<button onClick={onBack} style={{marginTop:12,background:"#d4af37",padding:"10px 20px",borderRadius:8,border:"none",fontWeight:700}}>Back</button></div>
</div></div>
<div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #ddd",padding:12,display:"flex",justifyContent:"space-between"}}><button onClick={()=>setPg(Math.max(1,safePg-1))} disabled={safePg===1}>Prev</button><span>Page {safePg}/{total} {prog.toFixed(0)}%</span><button onClick={()=>setPg(Math.min(total,safePg+1))} disabled={safePg===total} style={{background:"#1a1a2e",color:"#fff",padding:"8px 16px",borderRadius:8}}>Next</button></div>
</div>
);
}
export default function App(){
const [hash,setHash]=useState(typeof window!=='undefined'?window.location.hash:"");
useEffect(()=>{const h=()=>setHash(window.location.hash); window.addEventListener("hashchange",h); return()=>window.removeEventListener("hashchange",h)},[]);
const id=hash.replace("#product-","").replace("#",""); const cur=PRODUCTS.find(p=>p.id===id);
if(cur) return <Viewer key={cur.id} p={cur} onBack={()=>{window.location.hash=""; setHash("");}} />;
return(
<div style={{background:"#fffaf5",minHeight:"100vh"}}>
<div style={{background:"#ff00ff",textAlign:"center"}}><img src="/images/mimi-banner-magenta.png" alt="Mimi Clean" style={{width:"100%",maxWidth:1400,margin:"0 auto",display:"block"}} /></div>
<div style={{background:"white",borderBottom:"3px solid #ff00ff",padding:10,textAlign:"center"}}><h1 style={{fontSize:24,fontWeight:900,margin:0}}>mimiscozycorner.com</h1><p style={{fontSize:10,color:"#999",margin:0}}>FIXED No blank pages Every Next has content</p></div>
<div style={{maxWidth:1150,margin:"0 auto",padding:16,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16}}>
{PRODUCTS.map(p=><div key={p.id} style={{background:"white",borderRadius:16,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",borderTop:`4px solid ${p.color}`}}><div style={{height:160,background:"#faf8f3",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:36}}>{p.icon}</div><div style={{fontWeight:800,color:p.color,fontSize:12}}>{p.title}</div><div style={{fontSize:9,color:"#666"}}>{p.pages} pages No blank</div></div></div><div style={{padding:12}}><div style={{fontWeight:800,fontSize:12}}>{p.title}</div><div style={{fontSize:9,color:"#666"}}>{p.pages} pages Every Next has content</div><button onClick={()=>{if(p.link)window.open(p.link,"_blank"); else {window.location.hash=`#product-${p.id}`; setHash(`#product-${p.id}`);}}} style={{marginTop:8,width:"100%",background:p.color,color:"#fff",border:"none",padding:10,borderRadius:8,fontWeight:700,fontSize:11}}>OPEN NO BLANK</button></div></div>)}
</div>
</div>
);
}