import { useState, useEffect } from "react";

const PRODUCT_VARIANTS = [
  { id: "tshirt", name: "Unisex T-Shirt", bp: 6, vars: [40142,40143,40144], price: 24.99 },
  { id: "hoodie", name: "Hoodie", bp: 5, vars: [40049,40050,40051], price: 39.99 },
  { id: "mug", name: "Mug 11oz", bp: 86, vars: [47745], price: 14.99 },
  { id: "tote", name: "Tote Bag", bp: 12, vars: [41021], price: 19.99 },
];

const images = import.meta.glob('/public/images/*.{png,jpg,webp}', { eager: true, as: 'url' });

const PRODUCTS=[
{id:"shop",title:"Shop - 330 Designs",sub:"Printify Live",desc:"330 designs live",color:"#ff00ff",accent:"#ff00ff",icon:"SHOP",badge:"330 LIVE",pages:1,pdfs:[], link:"https://shop.mimiscozycorner.com"},
{id:"twin-story",title:"Twin Story Method",sub:"83-Page Interactive Workbook",desc:"Intro + 50 spreads + 365 prompts + 30-day challenge + cards + tracker",color:"#1a1a2e",accent:"#d4af37",icon:"BOOK",badge:"ORIGINAL 83 PG",pages:83,pdfs:["The_Twin_Story_Method.html","The_Twin_Story_Method_Printable.pdf"]},
{id:"budget",title:"Budget Buster",sub:"Save $500",desc:"Coupons meal $100/wk",color:"#0f5ca8",accent:"#00d4ff",icon:"MONEY",badge:"BUDGET",pages:10,pdfs:["budget-buster-complete.pdf"]},
{id:"housing",title:"Section 8 Guides",sub:"Rochester Voucher",desc:"Apply docs scripts",color:"#0f5ca8",accent:"#00ffff",icon:"HOME",badge:"HOUSING",pages:10,pdfs:["section8-complete.pdf"]},
{id:"daily",title:"Daily Finds",sub:"Soft Life Mom",desc:"Cozy reader mom fuel",color:"#ff69b4",accent:"#ff1493",icon:"COFFEE",badge:"DAILY",pages:5,pdfs:["daily-finds-workbook.pdf"]},
{id:"creative",title:"Creative Ads",sub:"50 Templates",desc:"50 templates 1 per page",color:"#ff1493",accent:"#ff00ff",icon:"ART",badge:"50 PAGES",pages:50,pdfs:["ad-templates.pdf"]},
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
 const imageEntries = Object.entries(images).slice(0,24);
 return(
 <div style={{minHeight:"100vh",background:"#fff",paddingTop:70}}>
   <div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"1px solid #ddd",padding:12,display:"flex",justifyContent:"space-between",zIndex:10}}>
     <b>SHOP 330 LIVE</b><button onClick={onBack}>Back</button>
   </div>
   <div style={{maxWidth:1200,margin:"0 auto",padding:16,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:16}}>
     {imageEntries.map(([path, url]:any)=>{
       const name = path.split('/').pop() || "design";
       return(
         <div key={path} style={{border:"1px solid #eee",borderRadius:16,overflow:"hidden"}}>
           <img src={url as string} style={{width:"100%",height:200,objectFit:"contain",background:"#fef2f8"}} />
           <div style={{padding:12}}>
             <div style={{fontWeight:700,fontSize:12}}>{name.replace('.png','').slice(0,30)}</div>
             <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginTop:8}}>
               {PRODUCT_VARIANTS.map(v=><button key={v.id} style={{padding:6,borderRadius:6,border:"1px solid #ff00ff",fontSize:9}}>{v.name} ${v.price}</button>)}
             </div>
             <button style={{marginTop:8,width:"100%",background:"#a2006d",color:"#fff",border:"none",padding:10,borderRadius:8,fontWeight:700}}>CHOOSE PRODUCT</button>
           </div>
         </div>
       )
     })}
   </div>
 </div>
 );
}

if(p.id==="twin-story"){
 let pageTitle = "";
 let pageDesc = "";
 if(safePg<=5){ pageTitle=`Page ${safePg}: Intro + Philosophy`; pageDesc="Twin Story Method philosophy - public vs private story, faith finding framework"; }
 else if(safePg<=55){ pageTitle=`Page ${safePg}: Twin Story Journal Spread ${safePg-5}/50`; pageDesc="50 spreads journaling - Public story vs Private story - voice-to-text, dropdown prompts, typeable areas"; }
 else if(safePg===56){ pageTitle="Page 56: 365 Prompts Interactive Dropdown"; pageDesc="365 prompts with interactive dropdown selector"; }
 else if(safePg<=66){ pageTitle=`Page ${safePg}: 30-Day Challenge - Day ${safePg-56}/10`; pageDesc="30-Day Challenge - daily actions"; }
 else if(safePg<=71){ pageTitle=`Page ${safePg}: Twin Story Cards - Card ${safePg-66}/5`; pageDesc="Twin Story Cards - affirmation cards"; }
 else if(safePg<=81){ pageTitle=`Page ${safePg}: Reflection Tracker - Week ${safePg-71}/10`; pageDesc="Reflection Tracker - track progress"; }
 else if(safePg===82){ pageTitle="Page 82: About the Author"; pageDesc="About Mimi - your story"; }
 else { pageTitle="Page 83: Continue Your Practice"; pageDesc="Continue your practice - next steps"; }

 return(
 <div style={{minHeight:"100vh",background:"#faf8f3"}}>
 <div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"1px solid #e2dccc",padding:"12px 16px",display:"flex",justifyContent:"space-between",zIndex:10}}>
   <div><div style={{fontSize:11,color:"#666"}}>Twin Story Method - 83 Pages</div><div style={{fontWeight:700}}>{pageTitle}</div></div>
   <div style={{display:"flex",gap:8,alignItems:"center"}}><button onClick={()=>setPg(Math.max(1,safePg-1))} disabled={safePg===1}>Prev</button><span>{safePg}/83</span><button onClick={()=>setPg(Math.min(83,safePg+1))} disabled={safePg===83} style={{background:"#1a1a2e",color:"#fff",padding:"8px 12px",borderRadius:8}}>Next</button><button onClick={onBack}>Back</button></div>
 </div>
 <div style={{height:6,background:"#eee",marginTop:62}}><div style={{height:"100%",width:`${prog}%`,background:"#d4af37"}}></div></div>
 <div style={{maxWidth:900,margin:"0 auto",padding:20}}>
   <div style={{background:"#fff",borderRadius:16,padding:24,border:"1px solid #e2dccc"}}>
     <h2>📖 {pageTitle}</h2>
     <p style={{color:"#1a1a2e"}}>{pageDesc}</p>
     <p><b>Structure from your original:</b> Pages 1-5 Intro, 6-55 Journal (50 spreads), 56: 365 Prompts, 57-66: 30-Day Challenge, 67-71: Cards, 72-81: Tracker, 82: About, 83: Continue</p>
     <div style={{marginTop:16,background:"#faf8f3",padding:16,borderRadius:12,border:"1px solid #d4af37"}}>
       <h4>Interactive Features (from HTML version):</h4>
       <ul>
         <li>🎤 Voice-to-text journaling</li>
         <li>📋 Dropdown prompt selectors</li>
         <li>⌨️ Typeable text areas</li>
         <li>🔗 Clickable navigation</li>
       </ul>
       <textarea placeholder={`Journal for ${pageTitle}...`} style={{width:"100%",minHeight:120,border:"1px solid #d4af37",borderRadius:8,padding:12,marginTop:8}}></textarea>
     </div>
   </div>
   <div style={{marginTop:16,background:"#1a1a2e",color:"#fff",padding:16,borderRadius:12}}>
     <h3 style={{color:"#d4af37",marginTop:0}}>Original Files - 83 Page Workbook</h3>
     <p><a href="/The_Twin_Story_Method.html" target="_blank" style={{color:"#d4af37"}}>→ Open Interactive HTML (FULL features - voice, dropdowns)</a></p>
     <p><a href="/The_Twin_Story_Method_Printable.pdf" target="_blank" style={{color:"#d4af37"}}>→ Download Printable PDF (83 pages)</a></p>
     <p style={{fontSize:11,color:"#aaa"}}>For printing: Use browser Print {'>'} Save as PDF on HTML file to generate fully formatted version</p>
   </div>
   <iframe src="/The_Twin_Story_Method.html" style={{width:"100%",height:"70vh",border:"1px solid #d4af37",borderRadius:16,marginTop:16}} title="Original Workbook" />
 </div>
 </div>
 );
}

let title = `${p.title} - Page ${safePg}`;
let lines: string[] = [p.desc, `Content for page ${safePg} of ${total}`];

return(
<div style={{minHeight:"100vh",background:"#faf8f3"}}>
<div style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:"#fff",borderBottom:"1px solid #e2dccc"}}>
<div style={{maxWidth:1280,margin:"0 auto",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div><div style={{fontSize:11,color:"#666"}}>{p.title}</div><div style={{fontWeight:700,fontSize:13}}>{title}</div><div style={{fontSize:10,color:"#999"}}>Page {safePg} of {total}</div></div>
<div style={{display:"flex",gap:8,alignItems:"center"}}><button onClick={()=>setPg(Math.max(1,safePg-1))} disabled={safePg===1} style={{padding:"8px 12px",borderRadius:8}}>Prev</button><span>{safePg}/{total}</span><button onClick={()=>setPg(Math.min(total,safePg+1))} disabled={safePg===total} style={{padding:"8px 12px",borderRadius:8,background:"#1a1a2e",color:"#fff"}}>Next</button></div>
</div><div style={{height:6,background:"#eee"}}><div style={{height:"100%",width:`${prog}%`,background:"#d4af37"}}></div></div>
</div>
<div style={{paddingTop:120,paddingBottom:100,maxWidth:900,margin:"0 auto",paddingLeft:16,paddingRight:16}}>
<div style={{background:"#fff",borderRadius:16,padding:24,border:"1px solid #e2dccc"}}>
<h2>{p.icon} {title}</h2>
<p style={{color:p.color,fontWeight:700}}>Page {safePg} of {total}</p>
{lines.map((ln,i)=><div key={i} style={{marginTop:12}}><p>{ln}</p></div>)}
<div style={{marginTop:24,padding:16,background:"#1a1a2e",borderRadius:12,color:"#fff"}}><button onClick={onBack} style={{background:"#d4af37",padding:"10px 20px",borderRadius:8,border:"none",fontWeight:700}}>Back to Library</button></div>
</div></div>
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
<div style={{background:"#ff00ff",textAlign:"center"}}><img src="/images/mimi-banner-magenta.png" alt="Mimi" style={{width:"100%",maxWidth:1400,margin:"0 auto",display:"block"}} /></div>
<div style={{background:"white",borderBottom:"3px solid #ff00ff",padding:10,textAlign:"center"}}><h1 style={{fontSize:24,fontWeight:900,margin:0}}>mimiscozycorner.com</h1><p style={{fontSize:10,color:"#999",margin:0}}>Original 83-Page Workbook - Clean</p></div>
<div style={{maxWidth:1150,margin:"0 auto",padding:16,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16}}>
{PRODUCTS.map(p=><div key={p.id} style={{background:"white",borderRadius:16,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",borderTop:`4px solid ${p.color}`}}><div style={{height:160,background:"#faf8f3",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:36}}>{p.icon}</div><div style={{fontWeight:800,color:p.color,fontSize:12}}>{p.title}</div><div style={{fontSize:9,color:"#666"}}>{p.pages} pages - {p.badge}</div></div></div><div style={{padding:12}}><div style={{fontWeight:800,fontSize:12}}>{p.title}</div><div style={{fontSize:9,color:"#666"}}>{p.sub}</div><button onClick={()=>{if(p.link)window.open(p.link,"_blank"); else {window.location.hash=`#product-${p.id}`; setHash(`#product-${p.id}`);}}} style={{marginTop:8,width:"100%",background:p.color,color:"#fff",border:"none",padding:10,borderRadius:8,fontWeight:700,fontSize:11}}>OPEN ORIGINAL</button></div></div>)}
</div>
</div>
);
}