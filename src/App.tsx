import { useState, useEffect } from "react";

const PRODUCTS=[
{id:"twin-story",title:"The Twin Story Method™",sub:"Finding Faith in Nothing - 83 Page Workbook",desc:"Twin Story = public vs private - 50 day journal, 10 day challenge, cards, tracker",color:"#1a1a2e",accent:"#d4af37",icon:"📖",badge:"NEW",pages:3,pdfs:["twin-story-method-workbook.pdf"]},
{id:"budget",title:"Budget Buster",sub:"Save $500/mo - Coupon Queen",desc:"Dollar deals, coupon stacking, meal $100/wk, savings tracker",color:"#0f5ca8",accent:"#00d4ff",icon:"💰",badge:"BUDGET",pages:2,pdfs:["budget-buster-complete.pdf"]},
{id:"housing",title:"Section 8 Housing Guides",sub:"Rochester Voucher Help",desc:"How to apply, docs, scripts that work",color:"#0f5ca8",accent:"#00ffff",icon:"🏠",badge:"HOUSING",pages:2,pdfs:["section8-complete.pdf","housing-guide.pdf","housing-scripts.pdf"]},
{id:"daily",title:"Mimi's Daily Finds",sub:"Soft Life + Mom Life + Bookish",desc:"Cozy reader club, mom fuel, blessed & stressed",color:"#ff69b4",accent:"#ff1493",icon:"☕",badge:"DAILY",pages:1,pdfs:["daily-finds-workbook.pdf"]},
{id:"creative",title:"Creative Ads",sub:"50 Ad Templates",desc:"Marketing resources, Canva templates",color:"#ff1493",accent:"#ff00ff",icon:"🎨",badge:"ADS",pages:1,pdfs:["creative-ads-workbook.pdf","ad-templates.pdf"]},
{id:"manifest",title:"Manifesting",sub:"Divine + Healing",desc:"Spiritual divine healing in progress",color:"#6a00ff",accent:"#d4af37",icon:"✨",badge:"HEALING",pages:1,pdfs:["manifesting-workbook.pdf"]},
];

function Viewer({p,onBack}:{p:any,onBack:()=>void}){
const [pg,setPg]=useState(1); const total=p.pages; const prog=(pg/total)*100;
useEffect(()=>window.scrollTo(0,0),[pg]);
const content:any={
"twin-story":{1:{t:"Intro - Finding Faith in Nothing",c:["Twin Story = Story you tell vs Story you live","Public story (Instagram) vs Private 2am story","Healing when they meet","WRITE: What does faith in nothing mean to you right now?"]},2:{t:"Journal + 10-Day Challenge",c:["Day1 Sit 5min nothing","Day2 Letter to Nothing","Day3 Do thing you stopped believing","Day4 Tell private story","Day5 Fast from fixing"]},3:{t:"Certificate + Your PDFs",c:["I completed Twin Story Method","All PDFs below are Protected - Do Not Share"]}},
"budget":{1:{t:"Save $500/mo Plan",c:["Income: Paycheck $___ Side $___ Total $___","Fixed bills <50% income","Grocery $100/wk Aldi Dollar Tree","WRITE: My why for saving?"]},2:{t:"Coupons + Tracker + PDFs",c:["DG $5 off $25 Sat + mfr coupons = $12 for $25","Fetch + Ibotta $20/mo","PDFs below - Protected"]}},
"housing":{1:{t:"How To Apply - Rochester",c:["RHA 675 W Main (585)697-3434","Docs: ID SS Income 4 stubs","Waiting CLOSED check 1st 9am"]},2:{t:"Scripts + Tracker + PDFs",c:["Script: Hi voucher 2BR accept? $1500 14607","Follow up 3 days","PDFs below - Protected"]}},
};
const cur = (content[p.id] && content[p.id][pg]) || {t:`${p.title} - Page ${pg}`,c:[p.desc, "Realistic info - fill blanks, take action", "Protected"]};
return(
<div style={{minHeight:"100vh",background:"#faf8f3"}}>
<div style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(12px)",borderBottom:"1px solid #e2dccc"}}>
<div style={{maxWidth:"1280px",margin:"0 auto",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:"12px"}}><div style={{width:"40px",height:"40px",borderRadius:"8px",background:`linear-gradient(135deg, ${p.accent}, #f4d35e)`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#fff"}}>TS</div><div><div style={{fontSize:"11px",color:"#666",textTransform:"uppercase"}}>{p.title}</div><div style={{fontWeight:700,color:"#1a1a2e"}}>{cur.t}</div></div></div>
<div style={{display:"flex",gap:"12px",alignItems:"center"}}><button onClick={()=>setPg(Math.max(1,pg-1))} disabled={pg===1} style={{padding:"8px 16px",borderRadius:"8px",border:"1px solid #e2dccc",background:pg===1?"#eee":"#fff",cursor:"pointer"}}>← Prev</button><span>{pg} / {total}</span><button onClick={()=>setPg(Math.min(total,pg+1))} disabled={pg===total} style={{padding:"8px 16px",borderRadius:"8px",border:"none",background:`linear-gradient(135deg, ${p.accent}, #e8d084)`,fontWeight:700,cursor:"pointer"}}>Next →</button></div>
</div><div style={{height:"6px",background:"rgba(212,175,55,0.2)"}}><div style={{height:"100%",width:`${prog}%`,background:`linear-gradient(90deg, ${p.accent}, #f4d35e)`,transition:"width 0.5s"}}></div></div>
</div>
<div style={{paddingTop:"110px",paddingBottom:"100px",maxWidth:"900px",margin:"0 auto",paddingLeft:"16px",paddingRight:"16px"}}>
<div style={{background:"#fff",borderRadius:"16px",padding:"32px",border:"1px solid #e2dccc",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
<h1 style={{fontSize:"28px",color:"#1a1a2e",marginBottom:"8px"}}>{p.icon} {cur.t}</h1><p style={{color:p.color,fontWeight:700,marginBottom:"24px"}}>{p.sub}</p>
{cur.c.map((l:string,i:number)=><div key={i} style={{marginTop:"14px",background:l.includes("___")||l.startsWith("WRITE")?"#f0ede5":"transparent",padding:l.includes("___")||l.startsWith("WRITE")?"14px":"0",borderRadius:"8px",borderLeft:l.includes("___")?`3px solid ${p.accent}`:"none"}}><p style={{margin:0,lineHeight:1.6}}>{l}</p>{(l.includes("___")||l.startsWith("WRITE"))&&<textarea placeholder="Write here..." style={{width:"100%",marginTop:"8px",minHeight:"50px",border:"1.5px solid #d4af37",borderRadius:"6px",padding:"8px"}}></textarea>}</div>)}
{pg===total&&<div style={{marginTop:"32px",padding:"20px",background:"#1a1a2e",borderRadius:"12px",color:"#fff"}}><h3 style={{color:"#d4af37",marginTop:0}}>📄 Your PDFs - Protected - Do Not Share</h3>{p.pdfs.map((pdf:string)=><p key={pdf} style={{margin:"10px 0"}}>✅ <a href={`/pdfs/${pdf}`} target="_blank" rel="noopener" style={{color:"#d4af37",fontWeight:700}}>{pdf} - Open / Download</a></p>)}<button onClick={onBack} style={{marginTop:"16px",background:"#d4af37",color:"#1a1a2e",border:"none",padding:"12px 24px",borderRadius:"8px",fontWeight:700,cursor:"pointer"}}>← Back to All Products</button></div>}
</div></div>
<div style={{position:"fixed",bottom:0,left:0,right:0,background:"rgba(255,255,255,0.95)",borderTop:"1px solid #e2dccc",padding:"12px",display:"flex",justifyContent:"space-between",zIndex:40}}><button onClick={()=>setPg(Math.max(1,pg-1))} disabled={pg===1} style={{padding:"10px 16px",borderRadius:"8px",border:"1px solid #e2dccc",background:"#fff"}}>← Previous</button><span style={{fontSize:"12px",color:"#666"}}>{pg} / {total}</span><button onClick={()=>setPg(Math.min(total,pg+1))} disabled={pg===total} style={{padding:"10px 16px",borderRadius:"8px",border:"none",background:"#1a1a2e",color:"#fff"}}>Next →</button></div>
</div>
);
}

export default function App(){
const [hash,setHash]=useState(typeof window!=='undefined'?window.location.hash:"");
useEffect(()=>{const h=()=>setHash(window.location.hash); window.addEventListener("hashchange",h); return()=>window.removeEventListener("hashchange",h)},[]);
const id=hash.replace("#product-","").replace("#","");
const cur=PRODUCTS.find(p=>p.id===id);
if(cur) return <Viewer p={cur} onBack={()=>{window.location.hash=""; setHash(""); window.scrollTo(0,0);}} />;
return(
<div style={{background:"#fffaf5",minHeight:"100vh",fontFamily:"system-ui"}}>
<div style={{background:"#ff00ff",padding:0,textAlign:"center",borderBottom:"4px solid #a2006d"}}><img src="/images/mimi-banner-magenta.png" alt="Mimi" style={{width:"100%",maxWidth:"1400px",margin:"0 auto",display:"block"}} /></div>
<div style={{background:"white",borderBottom:"3px solid #ff00ff",padding:"14px",textAlign:"center"}}><h1 style={{fontSize:"28px",fontWeight:900,margin:"8px 0 4px",background:"linear-gradient(90deg,#ff00ff,#6a00ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" as any}}>mimiscozycorner.com</h1><p style={{fontSize:"13px",color:"#ff00ff",fontWeight:800,margin:0}}>ALL PRODUCTS - No Atlas OS - Just Products</p><p style={{fontSize:"11px",color:"#666",margin:"4px 0 0"}}>{PRODUCTS.length} Workbooks - Page-by-page like Twin Story - Real PDFs - Protected</p></div>
<div style={{maxWidth:"1150px",margin:"0 auto",padding:"16px",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"18px"}}>
{PRODUCTS.map(p=><div key={p.id} style={{background:"white",borderRadius:"18px",overflow:"hidden",boxShadow:"0 6px 16px rgba(0,0,0,0.1)",borderTop:`5px solid ${p.color}`}}>
<div style={{height:"220px",background:"#faf8f3",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:"48px"}}>{p.icon}</div><div style={{fontWeight:900,color:p.color,marginTop:"8px"}}>{p.title}</div><div style={{fontSize:"11px",color:"#666"}}>{p.sub}</div></div></div>
<div style={{padding:"16px",background:"#fef2f8"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontWeight:900,fontSize:"14px",color:"#a2006d"}}>{p.title}</div><span style={{fontSize:"9px",background:p.color,color:"white",padding:"4px 10px",borderRadius:"12px",fontWeight:800}}>{p.badge}</span></div><div style={{fontSize:"11px",color:"#666",marginTop:"6px"}}>{p.desc}</div><div style={{fontSize:"10px",color:p.color,marginTop:"6px",fontWeight:700}}>{p.pages} pages • {p.pdfs.length} PDFs • Prev/Next →</div><button onClick={()=>{window.location.hash=`#product-${p.id}`; setHash(`#product-${p.id}`); window.scrollTo(0,0);}} style={{marginTop:"12px",width:"100%",background:p.color,color:"white",border:"none",padding:"12px",borderRadius:"10px",fontWeight:800,fontSize:"12px",cursor:"pointer"}}>OPEN WORKBOOK →</button></div>
</div>)}
</div>
<div style={{width:"100%",marginTop:"40px",cursor:"pointer"}} onClick={()=>window.open("https://shop.mimiscozycorner.com","_blank")}><img src="/images/mimi-banner-magenta.png" alt="Shop" style={{width:"100%",height:"auto",display:"block"}} /></div>
<div style={{display:"flex",justifyContent:"center",gap:"15px",padding:"20px",background:"#0a0a0f",flexWrap:"wrap" as any}}><span style={{color:"#fff",fontSize:"12px"}}>All {PRODUCTS.length} products on main website - No Atlas OS - Each workbook Prev/Next + Progress bar + Real PDFs</span></div>
</div>
);
}
