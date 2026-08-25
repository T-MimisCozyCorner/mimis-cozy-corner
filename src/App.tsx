import { useState, useEffect } from "react";

const PRODUCT_VARIANTS = [
  { id: "tshirt", name: "Unisex T-Shirt", bp: 6, vars: [40142,40143,40144], price: 24.99 },
  { id: "hoodie", name: "Hoodie", bp: 5, vars: [40049,40050,40051], price: 39.99 },
  { id: "mug", name: "Mug 11oz", bp: 86, vars: [47745], price: 14.99 },
  { id: "tote", name: "Tote Bag", bp: 12, vars: [41021], price: 19.99 },
];

const images = import.meta.glob('/public/images/*.{png,jpg,webp}', { eager: true, as: 'url' });

const PRODUCTS=[
{id:"shop",title:"Shop - 330 Designs",sub:"Printify Live",desc:"330 designs live on shop.mimiscozycorner.com",color:"#ff00ff",accent:"#ff00ff",icon:"🛍️",badge:"330 LIVE",pages:1,pdfs:[], link:"https://shop.mimiscozycorner.com"},
{id:"twin-story",title:"Twin Story Method",sub:"83-Page Interactive Workbook",desc:"Finding Faith - 50 spreads journal + 365 prompts + 30-day challenge + cards + tracker",color:"#1a1a2e",accent:"#d4af37",icon:"📖",badge:"ORIGINAL 83 PG",pages:83,pdfs:["The_Twin_Story_Method.html","The_Twin_Story_Method_Printable.pdf"]},
{id:"budget",title:"Budget Buster",sub:"Save $500 This Month",desc:"Coupons, meal plan $100/wk, bills, side hustles",color:"#0f5ca8",accent:"#00d4ff",icon:"💰",badge:"BUDGET",pages:10,pdfs:["budget-buster-complete.pdf"]},
{id:"housing",title:"Section 8 Guides",sub:"Rochester Voucher",desc:"Rochester Housing Authority - apply, docs, scripts, inspection",color:"#0f5ca8",accent:"#00ffff",icon:"🏠",badge:"HOUSING",pages:10,pdfs:["section8-complete.pdf"]},
{id:"daily",title:"Daily Finds",sub:"Soft Life Mom",desc:"Cozy reader mom fuel - daily cozy finds",color:"#ff69b4",accent:"#ff1493",icon:"☕",badge:"DAILY",pages:5,pdfs:["daily-finds-workbook.pdf"]},
{id:"creative",title:"Creative Ads",sub:"50 Ad Templates",desc:"50 hooks - 1 per page - Problem/Solution, Before/After etc",color:"#ff1493",accent:"#ff00ff",icon:"🎨",badge:"50 PAGES",pages:50,pdfs:["ad-templates.pdf"]},
{id:"manifest",title:"Manifesting",sub:"Divine Healing",desc:"Healing in progress - manifesting journal",color:"#6a00ff",accent:"#d4af37",icon:"⭐",badge:"HEALING",pages:5,pdfs:["manifesting-workbook.pdf"]},
];

function Viewer({p,onBack}:{p:any,onBack:()=>void}){
const [pg,setPg]=useState(1);
const [answers,setAnswers]=useState<Record<number,string>>({});
useEffect(()=>{setPg(1); setAnswers({});},[p.id]);
useEffect(()=>{window.scrollTo(0,0);},[pg]);
const total=p.pages;
const safePg=Math.min(Math.max(1,pg),total);
const prog=(safePg/total)*100;

// SHOP
if(p.id==="shop"){
 const imageEntries = Object.entries(images).slice(0,32);
 return(
 <div style={{minHeight:"100vh",background:"#fff",paddingTop:70}}>
   <div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"2px solid #ff00ff",padding:12,display:"flex",justifyContent:"space-between",zIndex:10}}>
     <div><b>SHOP 330 LIVE</b><div style={{fontSize:10,color:"#666"}}>mimiscozycorner.com shop</div></div><button onClick={onBack} style={{background:"#ff00ff",color:"#fff",border:"none",padding:"8px 16px",borderRadius:8}}>Back</button>
   </div>
   <div style={{maxWidth:1200,margin:"0 auto",padding:16,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:16}}>
     {imageEntries.map(([path, url]:any)=>{
       const name = (path.split('/').pop()||"").replace('.png','').slice(0,28);
       return(
         <div key={path} style={{border:"1px solid #ffd6f0",borderRadius:16,overflow:"hidden"}}>
           <img src={url as string} style={{width:"100%",height:200,objectFit:"contain",background:"#fff0f8"}} />
           <div style={{padding:12}}>
             <div style={{fontWeight:700,fontSize:11}}>{name}</div>
             <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginTop:8}}>
               {PRODUCT_VARIANTS.map(v=><div key={v.id} style={{border:"1px solid #ff00ff",borderRadius:6,padding:4,textAlign:"center",fontSize:8}}>{v.name}<br/>${v.price}</div>)}
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

// TWIN STORY 83 PAGES - ORIGINAL
if(p.id==="twin-story"){
 let title=""; let desc=""; let prompt="";
 if(safePg<=5){ title=`Intro + Philosophy - Page ${safePg}/5`; desc="Twin Story Method - Public vs Private story, faith finding framework, how to use voice-to-text, dropdowns"; prompt="What is your public story vs private story right now?"; }
 else if(safePg<=55){ const s=safePg-5; title=`Twin Story Journal - Spread ${s}/50 - Page ${safePg}`; desc=`Journal Spread ${s} - Public story on left, Private story on right - Finding Faith`; prompt=`Day ${s}: Write your public story vs private story. Where is fear vs faith?`; }
 else if(safePg===56){ title="365 Prompts - Interactive Dropdown - Page 56"; desc="365 prompts with interactive dropdown selector - pick a prompt daily"; prompt="Choose a prompt from 365 list and journal"; }
 else if(safePg<=66){ const d=safePg-56; title=`30-Day Challenge - Day ${d}/10 - Page ${safePg}`; desc=`30-Day Challenge Day ${d} - daily faith action`; prompt=`Challenge Day ${d}: Action step for today`; }
 else if(safePg<=71){ const c=safePg-66; title=`Twin Story Cards - Card ${c}/5 - Page ${safePg}`; desc=`Affirmation Card ${c} - Faith over Fear`; prompt=`Card ${c}: Write your affirmation`; }
 else if(safePg<=81){ const w=safePg-71; title=`Reflection Tracker - Week ${w}/10 - Page ${safePg}`; desc=`Weekly reflection tracker - progress Week ${w}`; prompt=`Week ${w} reflection: What changed?`; }
 else if(safePg===82){ title="About the Author - Page 82"; desc="About Mimi Stewart - Rochester mom, author"; prompt="Your story matters"; }
 else { title="Continue Your Practice - Page 83"; desc="Continue your practice - next steps, resources"; prompt="What's next in your faith journey?"; }
 return(
 <div style={{minHeight:"100vh",background:"#faf8f3"}}>
 <div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"1px solid #e2dccc",padding:"10px 16px",display:"flex",justifyContent:"space-between",zIndex:50}}>
   <div><div style={{fontSize:10,color:"#666"}}>Twin Story Method - 83 Pages Original</div><div style={{fontWeight:800,fontSize:13}}>{title}</div><div style={{fontSize:10,color:"#999"}}>{desc.slice(0,60)}</div></div>
   <div style={{display:"flex",gap:6,alignItems:"center"}}><button onClick={()=>setPg(Math.max(1,safePg-1))} disabled={safePg===1} style={{padding:"8px 10px",borderRadius:8}}>Prev</button><span style={{fontSize:12}}>{safePg}/83</span><button onClick={()=>setPg(Math.min(83,safePg+1))} disabled={safePg===83} style={{background:"#1a1a2e",color:"#fff",padding:"8px 12px",borderRadius:8}}>Next</button><button onClick={onBack} style={{marginLeft:6}}>Back</button></div>
 </div>
 <div style={{height:6,background:"#eee",marginTop:62}}><div style={{height:"100%",width:`${prog}%`,background:"#d4af37",transition:"width 0.3s"}}></div></div>
 <div style={{maxWidth:900,margin:"0 auto",padding:16}}>
   <div style={{background:"#fff",borderRadius:16,padding:20,border:"1px solid #e2dccc",borderLeft:`4px solid ${p.accent}`}}>
     <h2 style={{marginTop:0}}>📖 {title}</h2>
     <p style={{color:"#555"}}>{desc}</p>
     <p style={{fontSize:12,background:"#faf8f3",padding:10,borderRadius:8}}><b>Original Structure:</b> 1-5 Intro, 6-55 Journal (50 spreads), 56: 365 Prompts Dropdown, 57-66: 30-Day Challenge (10 days), 67-71: Cards (5), 72-81: Tracker (10 weeks), 82: About, 83: Continue</p>
     <div style={{marginTop:16,background:"#faf8f3",border:"1px solid #d4af37",borderRadius:12,padding:16}}>
       <h4 style={{marginTop:0}}>Journal Prompt - {prompt}</h4>
       <textarea value={answers[safePg]||""} onChange={e=>setAnswers({...answers,[safePg]:e.target.value})} placeholder={prompt} style={{width:"100%",minHeight:140,border:"1px solid #d4af37",borderRadius:8,padding:12}}></textarea>
       <div style={{marginTop:8,display:"flex",gap:8}}><button style={{background:"#d4af37",border:"none",padding:"8px 12px",borderRadius:8}}>🎤 Voice-to-text</button><button style={{border:"1px solid #d4af37",padding:"8px 12px",borderRadius:8}}>📋 Prompts</button></div>
     </div>
   </div>
   <div style={{marginTop:16,background:"#1a1a2e",color:"#fff",padding:16,borderRadius:12}}>
     <h3 style={{color:"#d4af37",margin:"0 0 8px 0"}}>Original Files - 83 Pages</h3>
     <a href="/The_Twin_Story_Method.html" target="_blank" style={{color:"#d4af37",display:"block",margin:"4px 0"}}>→ Open Interactive HTML (FULL - voice, dropdowns, typeable)</a>
     <a href="/The_Twin_Story_Method_Printable.pdf" target="_blank" style={{color:"#d4af37",display:"block",margin:"4px 0"}}>→ Download Printable PDF (83 pages)</a>
     <div style={{fontSize:10,color:"#aaa",marginTop:8}}>Tip: Open HTML in Chrome/Safari → Print → Save as PDF for fully formatted version</div>
   </div>
   <iframe src="/The_Twin_Story_Method.html" style={{width:"100%",height:"70vh",border:"1px solid #d4af37",borderRadius:16,marginTop:16,background:"#fff"}} title="Twin Story Original" />
 </div>
 <div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #ddd",padding:10,display:"flex",justifyContent:"space-between"}}><button onClick={()=>setPg(Math.max(1,safePg-1))}>Prev</button><span>Page {safePg}/83 - {prog.toFixed(0)}%</span><button onClick={()=>setPg(Math.min(83,safePg+1))} style={{background:"#1a1a2e",color:"#fff",padding:"8px 16px",borderRadius:8}}>Next</button></div>
 </div>
 );
}

// BUDGET BUSTER - WORKING WORKBOOK
if(p.id==="budget"){
 const budgetPages=[
 {t:"Save $500 This Month - Overview",d:"How to save $500 in 30 days - breakdown",q:"Where will your $500 come from?"},
 {t:"Meal Plan $100/week - Week 1",d:"$100 grocery plan - Aldi, Walmart, coupons - Rochester stores",q:"List your Week 1 meals $100"},
 {t:"Coupons & Cashback",d:"Ibotta, Fetch, coupons.com - stack savings",q:"What coupons will you use this week?"},
 {t:"Bills Audit - Cut $150",d:"Phone, internet, subscriptions - call scripts to lower bills",q:"Which bill will you call to lower today?"},
 {t:"Side Hustles $200",d:"Facebook Marketplace, plasma, surveys - quick $200",q:"Which side hustle will you start?"},
 {t:"No-Spend Challenge",d:"7-day no-spend - rules, tracker",q:"Track your no-spend days"},
 {t:"Grocery Hacks Rochester",d:"Wegmans, Tops, Price Rite - Rochester specific deals",q:"Where will you shop this week?"},
 {t:"Meal Prep Sunday",d:"Batch cooking - save time & money",q:"What will you prep Sunday?"},
 {t:"$500 Tracker",d:"Tracker sheet - daily $ savings",q:"How much saved today?"},
 {t:"Next Month Plan",d:"Keep saving - build emergency fund",q:"Plan for next month"},
 ];
 const bp=budgetPages[safePg-1]||budgetPages[0];
 return(
 <div style={{minHeight:"100vh",background:"#f0f8ff"}}>
 <div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:`3px solid ${p.accent}`,padding:"10px 16px",display:"flex",justifyContent:"space-between",zIndex:50}}>
   <div><div style={{fontSize:10,color:"#666"}}>Budget Buster - 10 Pages</div><div style={{fontWeight:800}}>{bp.t}</div></div>
   <div><span>{safePg}/10 </span><button onClick={()=>setPg(Math.max(1,safePg-1))}>Prev</button><button onClick={()=>setPg(Math.min(10,safePg+1))} style={{background:p.color,color:"#fff",marginLeft:4,padding:"6px 10px",borderRadius:8}}>Next</button><button onClick={onBack} style={{marginLeft:8}}>Back</button></div>
 </div>
 <div style={{height:6,background:"#e0f0ff",marginTop:60}}><div style={{height:"100%",width:`${prog}%`,background:p.accent}}></div></div>
 <div style={{maxWidth:800,margin:"0 auto",padding:16}}>
   <div style={{background:"#fff",borderRadius:16,padding:20,borderLeft:`4px solid ${p.accent}`}}>
     <h2>💰 Page {safePg}: {bp.t}</h2><p>{bp.d}</p>
     <div style={{background:"#f0f8ff",padding:12,borderRadius:8,marginTop:12}}><b>Action:</b> {bp.q}</div>
     <textarea value={answers[safePg]||""} onChange={e=>setAnswers({...answers,[safePg]:e.target.value})} placeholder={bp.q} style={{width:"100%",minHeight:120,marginTop:12,border:`1px solid ${p.accent}`,borderRadius:8,padding:12}}></textarea>
     {safePg===1&&<div style={{marginTop:12,background:"#e8f5e9",padding:12,borderRadius:8}}><b>$500 Breakdown:</b> Bills $150 + Groceries $100 + Side Hustles $200 + No-Spend $50 = $500</div>}
     {safePg===9&&<div style={{marginTop:12}}><b>Savings Tracker:</b><div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginTop:8}}>{Array.from({length:30}).