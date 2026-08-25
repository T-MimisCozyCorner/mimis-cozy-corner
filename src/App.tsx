import { useState, useEffect } from "react";

const PRODUCTS=[
{id:"shop",title:"Shop - 330 Designs",sub:"Printify Live",desc:"330 designs live",color:"#ff00ff",accent:"#ff00ff",icon:"🛍️",badge:"330 LIVE",pages:1,pdfs:[] as string[],link:"https://shop.mimiscozycorner.com"},
{id:"twin-story",title:"Twin Story Method",sub:"83-Page Interactive Workbook",desc:"Finding Faith - 50 spreads + 365 prompts + 30-day challenge",color:"#1a1a2e",accent:"#d4af37",icon:"📖",badge:"ORIGINAL 83 PG",pages:83,pdfs:["The_Twin_Story_Method.html"]},
{id:"budget",title:"Budget Buster",sub:"Save $500 This Month",desc:"Coupons, meal plan $100/wk, bills, side hustles",color:"#0f5ca8",accent:"#00d4ff",icon:"💰",badge:"BUDGET",pages:10,pdfs:[] as string[]},
{id:"housing",title:"Section 8 Guides",sub:"Rochester Voucher",desc:"RHA apply, docs, scripts, inspection",color:"#0f5ca8",accent:"#00ffff",icon:"🏠",badge:"HOUSING",pages:10,pdfs:[] as string[]},
{id:"daily",title:"Daily Finds",sub:"Soft Life Mom",desc:"Cozy finds",color:"#ff69b4",accent:"#ff1493",icon:"☕",badge:"DAILY",pages:5,pdfs:[] as string[]},
{id:"creative",title:"Creative Ads",sub:"50 Ad Templates",desc:"50 hooks",color:"#ff1493",accent:"#ff00ff",icon:"🎨",badge:"50 PAGES",pages:50,pdfs:[] as string[]},
{id:"manifest",title:"Manifesting",sub:"Divine Healing",desc:"Healing",color:"#6a00ff",accent:"#d4af37",icon:"⭐",badge:"HEALING",pages:5,pdfs:[] as string[]},
];

function Viewer({p,onBack}:{p:any,onBack:()=>void}){
const [pg,setPg]=useState(1);
const [answers,setAnswers]=useState<Record<number,string>>({});
useEffect(()=>{setPg(1); setAnswers({});},[p.id]);
const total=p.pages;
const safePg=Math.min(Math.max(1,pg),total);
const prog=(safePg/total)*100;

if(p.id==="shop"){
 return(<div style={{minHeight:"100vh",background:"#fff",paddingTop:70}}><div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"2px solid #ff00ff",padding:12,display:"flex",justifyContent:"space-between"}}><b>SHOP 330 LIVE</b><button onClick={onBack} style={{background:"#ff00ff",color:"#fff",border:"none",padding:"8px 16px",borderRadius:8}}>Back</button></div><div style={{padding:40,textAlign:"center"}}><h1>Shop 330 Designs</h1><p>Live at shop.mimiscozycorner.com - Hoodie variant 40049 fixed</p><button onClick={()=>window.open("https://shop.mimiscozycorner.com","_blank")} style={{background:"#ff00ff",color:"#fff",padding:"12px 24px",borderRadius:8,border:"none"}}>OPEN SHOP</button></div></div>);
}

let title=""; let desc=""; let prompt="";
if(p.id==="twin-story"){
 if(safePg<=5){ title=`Intro - Page ${safePg}/5`; desc="Public vs Private story, faith finding framework"; prompt="Public vs Private story?"; }
 else if(safePg<=55){ const s=safePg-5; title=`Journal Spread ${s}/50 - Page ${safePg}`; desc=`Spread ${s} - Public left, Private right`; prompt=`Day ${s}: Fear vs Faith?`; }
 else if(safePg===56){ title="365 Prompts - Dropdown - Page 56"; desc="365 prompts dropdown"; prompt="Choose prompt"; }
 else if(safePg<=66){ const d=safePg-56; title=`30-Day Challenge Day ${d}/10 - Page ${safePg}`; desc=`Challenge Day ${d}`; prompt=`Action Day ${d}`; }
 else if(safePg<=71){ const c=safePg-66; title=`Cards Card ${c}/5 - Page ${safePg}`; desc=`Card ${c}`; prompt=`Card ${c} affirmation`; }
 else if(safePg<=81){ const w=safePg-71; title=`Tracker Week ${w}/10 - Page ${safePg}`; desc=`Week ${w}`; prompt=`Week ${w} reflection`; }
 else if(safePg===82){ title="About Author - Page 82"; desc="Mimi Stewart Rochester mom"; prompt="Your story"; }
 else { title="Continue - Page 83"; desc="Next steps"; prompt="What's next?"; }
} else if(p.id==="budget"){
 const bp=["Save $500 Overview - Bills $150 + Groceries $100 + Hustles $200 + No-Spend $50","Meal Plan $100/week Week 1 - Aldi Walmart","Coupons & Cashback - Ibotta Fetch","Bills Audit Cut $150 - Scripts","Side Hustles $200 - Marketplace","No-Spend Challenge 7-day","Grocery Hacks Rochester - Wegmans Tops","Meal Prep Sunday","$500 Tracker - Daily","Next Month Plan"];
 const b=bp[safePg-1]; title=`Budget Buster - ${b}`; desc=b; prompt=b;
} else if(p.id==="housing"){
 const hp=["RHA Overview - 675 W Main St (585) 697-6100","How to Apply Step by Step - Portal waitlist 2-4yr","Documents Checklist - ID income certs","Income Limits 2024 Rochester - 30/50/80% AMI","Call Scripts - How to Call RHA","Inspection Checklist - HQS","Landlord Packet Rochester","Appeal & Denial - Legal Aid","Portability Move with Voucher","Next Steps Resources - 211 Legal Aid"];
 const h=hp[safePg-1]; title=`Section 8 - ${h}`; desc=h; prompt=h;
} else { title=`${p.title} - Page ${safePg}/${total}`; desc=p.desc; prompt=title; }

return(
<div style={{minHeight:"100vh",background:"#faf8f3"}}>
<div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:`2px solid ${p.accent}`,padding:"10px 16px",display:"flex",justifyContent:"space-between",zIndex:50}}>
<div><div style={{fontSize:10,color:"#666"}}>{p.title} {total}pg</div><div style={{fontWeight:800,fontSize:12}}>{title}</div></div>
<div><span>{safePg}/{total} </span><button onClick={()=>setPg(Math.max(1,safePg-1))}>Prev</button><button onClick={()=>setPg(Math.min(total,safePg+1))} style={{background:p.color,color:"#fff",marginLeft:4,padding:"6px 10px",borderRadius:8}}>Next</button><button onClick={onBack} style={{marginLeft:6}}>Back</button></div>
</div>
<div style={{height:6,background:"#eee",marginTop:56}}><div style={{height:"100%",width:`${prog}%`,background:p.accent}}></div></div>
<div style={{maxWidth:800,margin:"0 auto",padding:16}}>
<div style={{background:"#fff",borderRadius:16,padding:20,borderLeft:`4px solid ${p.accent}`}}>
<h2>{p.icon} {title}</h2><p style={{fontSize:13,color:"#555"}}>{desc}</p>
{p.id==="housing"&&safePg===1&&<div style={{background:"#fff3cd",padding:10,borderRadius:8,fontSize:12}}><b>RHA:</b> 675 W Main St Rochester 14611 (585) 697-6100 rochesterhousing.org</div>}
{p.id==="housing"&&safePg===5&&<div style={{background:"#e8f5e9",padding:10,borderRadius:8,fontSize:12,marginTop:8}}><b>Script:</b> Hi calling about Section 8 app name ___ applied ___ case # ___ check status?</div>}
{p.id==="budget"&&safePg===1&&<div style={{background:"#e8f5e9",padding:10,borderRadius:8,fontSize:12,marginTop:8}}><b>$500:</b> Bills $150 + Groceries $100 + Hustles $200 + NoSpend $50</div>}
<div style={{marginTop:12,background:"#faf8f3",border:`1px solid ${p.accent}`,borderRadius:12,padding:12}}>
<h4 style={{fontSize:12}}>{prompt}</h4>
<textarea value={answers[safePg]||""} onChange={e=>setAnswers({...answers,[safePg]:e.target.value})} placeholder={prompt} style={{width:"100%",minHeight:120,border:`1px solid ${p.accent}`,borderRadius:8,padding:10}}></textarea>
</div>
</div>
{p.id==="twin-story"&&<div style={{marginTop:12,background:"#1a1a2e",color:"#fff",padding:10,borderRadius:12,fontSize:12}}><a href="/The_Twin_Story_Method.html" target="_blank" style={{color:"#d4af37"}}>Open Interactive HTML Full</a> | <a href="/The_Twin_Story_Method_Printable.pdf" target="_blank" style={{color:"#d4af37"}}>Download PDF 83pg</a></div>}
</div>
<div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #ddd",padding:8,display:"flex",justifyContent:"space-between",fontSize:12}}><button onClick={()=>setPg(Math.max(1,safePg-1))}>Prev</button><span>{safePg}/{total} {prog.toFixed(0)}%</span><button onClick={()=>setPg(Math.min(total,safePg+1))} style={{background:p.color,color:"#fff",padding:"6px 12px",borderRadius:8}}>Next</button></div>
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
<div style={{background:"white",borderBottom:"3px solid #ff00ff",padding:"10px",textAlign:"center"}}><h1 style={{fontSize:20,fontWeight:900,margin:0}}>MIMISCOZYCORNER.COM</h1><p style={{fontSize:10,color:"#666",margin:0}}>Shop 330 • 83pg Original • Budget Working • Section8 Working</p></div>
<div style={{maxWidth:1200,margin:"0 auto",padding:16,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:14}}>
{PRODUCTS.map(p=><div key={p.id} style={{background:"white",borderRadius:14,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",borderTop:`4px solid ${p.color}`}}><div style={{height:100,background:`linear-gradient(135deg,#faf8f3,${p.color}18)`,display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:24}}>{p.icon}</div><div style={{fontWeight:800,color:p.color,fontSize:10}}>{p.title}</div><div style={{fontSize:8,color:"#666"}}>{p.pages}pg {p.badge}</div></div></div><div style={{padding:10}}><div style={{fontWeight:800,fontSize:11}}>{p.title}</div><div style={{fontSize:8,color:"#666"}}>{p.sub}</div><button onClick={()=>{if(p.link){window.open(p.link,"_blank");} else {window.location.hash=`#product-${p.id}`; setHash(`#product-${p.id}`);}}} style={{marginTop:8,width:"100%",background:p.color,color:"#fff",border:"none",padding:8,borderRadius:8,fontWeight:700,fontSize:10}}>OPEN</button></div></div>)}
</div>
</div>
);
}
