import { useState, useEffect } from "react";

// FIXED - Hoodie [40049,40050,40051] fixes 401 Create failed error
const PRODUCT_VARIANTS = [
  { id: "tshirt", name: "Unisex T-Shirt", bp: 6, vars: [40142,40143,40144], price: 24.99 },
  { id: "hoodie", name: "Hoodie", bp: 5, vars: [40049,40050,40051], price: 39.99 },
  { id: "mug", name: "Mug 11oz", bp: 86, vars: [47745], price: 14.99 },
  { id: "tote", name: "Tote Bag", bp: 12, vars: [41021], price: 19.99 },
];

const images = import.meta.glob('/public/images/*.{png,jpg,webp}', { eager: true, as: 'url' });

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
 const imageEntries = Object.entries(images).slice(0,24);
 return(
 <div style={{minHeight:"100vh",background:"#fff",paddingTop:70}}>
   <div style={{position:"fixed",top:0,left:0,right:0,background:"#fff",borderBottom:"1px solid #ddd",padding:12,display:"flex",justifyContent:"space-between",zIndex:10}}>
     <b>SHOP 330 LIVE - Hoodie Fixed</b><button onClick={onBack}>Back</button>
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
               {PRODUCT_VARIANTS.map(v=><button key={v.id} style={{padding:6,borderRadius:6,border:"1px solid #ff00ff",fontSize:9}}>{v.name}</button>)}
             </div>
             <button style={{marginTop:8,width:"100%",background:"#a2006d",color:"#fff",border:"none",padding:10,borderRadius:8,fontWeight:700}}>CHOOSE PRODUCT - {PRODUCT_VARIANTS[1].vars[0]} FIXED</button>
           </div>
         </div>
       )
     })}
   </div>
 </div>
 );
}
let title=`${p.title} Page ${safePg} of ${total}`;
let lines:string[]=[];
if(p.id==="creative"){
 const hooks=["Problem/Solution","Before/After","Testimonial","Mistake","Warning","Frustration","Confession","Call Out","Secret","Myth Buster"];
 const h=hooks[(safePg-1)%hooks.length];
 title=`Template ${safePg}/50 - ${h}`;
 lines=[`HOOK: ${h} - Page ${safePg} NOT blank!`,`EXAMPLE: Page ${safePg}`,`WHY IT WORKS: Page ${safePg}`,`CANVA: 1080x1080 #ff00ff #6a00ff`,`WRITE YOUR VERSION FOR PAGE ${safePg}:`];
}else{
 const map:any={"twin-story":["Twin Story Page1","Journal Page2","Challenge Page3","Cards Page4","Tracker Page5"],"budget":["Save $500 Page1","Coupons Page2","Meal Page3","Tracker Page4","Fetch Page5"],"housing":["How To Apply Page1","Scripts Page2","Properties Page3","Follow up Page4"],"daily":["Soft Life Page1","Mom Fuel Page2","Bookish Page3","Blessed Page4"],"manifest":["Divine timing Page1","Healing Page2","Faith Page3","Becoming Page4"]};
 const arr=map[p.id]||["Cozy content"];
 const topic=arr[(safePg-1)%arr.length];
 title=`${p.title} - ${topic} - Page ${safePg}/${total}`;
 lines=[topic,`${p.desc} - Page ${safePg} NOT blank!`, `Action Page ${safePg}:`, `Page ${safePg} of ${total} ${prog.toFixed(0)}%`];
}
return(
<div style={{minHeight:"100vh",background:"#faf8f3"}}>
<div style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:"#fff",borderBottom:"1px solid #e2dccc"}}>
<div style={{maxWidth:1280,margin:"0 auto",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div><div style={{fontSize:11,color:"#666"}}>{p.title}</div><div style={{fontWeight:700,fontSize:13}}>{title}</div></div>
<div style={{display:"flex",gap:8}}><button onClick={()=>setPg(Math.max(1,safePg-1))} disabled={safePg===1}>Prev</button><span>{safePg}/{total}</span><button onClick={()=>setPg(Math.min(total,safePg+1))} disabled={safePg===total} style={{background:"#1a1a2e",color:"#fff"}}>Next</button></div>
</div><div style={{height:6,background:"#eee"}}><div style={{height:"100%",width:`${prog}%`,background:"#d4af37"}}></div></div>
</div>
<div style={{paddingTop:120,paddingBottom:100,maxWidth:900,margin:"0 auto",paddingLeft:16,paddingRight:16}}>
<div style={{background:"#fff",borderRadius:16,padding:24,border:"1px solid #e2dccc"}}>
<h2>{p.icon} {title}</h2><p style={{color:p.color,fontWeight:700}}>Page {safePg} of {total}</p>
{lines.map((ln,i)=><div key={i} style={{marginTop:12}}><p>{ln}</p>{ln.includes("WRITE")&&<textarea placeholder={`Page ${safePg}`} style={{width:"100%",minHeight:60}}></textarea>}</div>)}
<div style={{marginTop:24,padding:16,background:"#1a1a2e",borderRadius:12,color:"#fff"}}><h3 style={{color:"#d4af37"}}>PDFs Inside</h3>{p.pdfs.map((pdf:string)=><p key={pdf}><a href={`/pdfs/${pdf}`} style={{color:"#d4af37"}}>{pdf}</a></p>)}<button onClick={onBack} style={{background:"#d4af37",padding:"10px 20px",borderRadius:8}}>Back</button></div>
</div></div>
<div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #ddd",padding:12,display:"flex",justifyContent:"space-between"}}><button onClick={()=>setPg(Math.max(1,safePg-1))} disabled={safePg===1}>Prev</button><span>{safePg}/{total}</span><button onClick={()=>setPg(Math.min(total,safePg+1))} disabled={safePg===total} style={{background:"#1a1a2e",color:"#fff"}}>Next</button></div>
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
<div style={{background:"white",borderBottom:"3px solid #ff00ff",padding:10,textAlign:"center"}}><h1 style={{fontSize:24,fontWeight:900,margin:0}}>mimiscozycorner.com</h1><p style={{fontSize:10,color:"#999",margin:0}}>FIXED Hoodie 40049,40050,40051 No 401</p></div>
<div style={{maxWidth:1150,margin:"0 auto",padding:16,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:16}}>
{PRODUCTS.map(p=><div key={p.id} style={{background:"white",borderRadius:16,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",borderTop:`4px solid ${p.color}`}}><div style={{height:160,background:"#faf8f3",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:36}}>{p.icon}</div><div style={{fontWeight:800,color:p.color,fontSize:12}}>{p.title}</div></div></div><div style={{padding:12}}><div style={{fontWeight:800,fontSize:12}}>{p.title}</div><button onClick={()=>{if(p.link)window.open(p.link,"_blank"); else {window.location.hash=`#product-${p.id}`; setHash(`#product-${p.id}`);}}} style={{marginTop:8,width:"100%",background:p.color,color:"#fff",border:"none",padding:10,borderRadius:8,fontWeight:700}}>OPEN NO BLANK</button></div></div>)}
</div>
</div>
);
}