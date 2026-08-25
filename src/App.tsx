import {AtlasPages} from "./atlas-pages"
import { useState } from "react";

export default function App(){
  const branches = [
    { id: "shop", domain: "shop.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com", title: "Shop Branch - 330 Designs", subtitle: "Printify Store - All Brands Separated", desc: "Budget Buster, Daily Finds, Creative Ads, Atlas OS - CREATE IN PRINTIFY - 330 Designs total", color: "#a2006d", image: "/images/branch-shop.png", badge: "SHOP ONLY" },
    { id: "atlas", domain: "atlas.mimiscozycorner.com", url: "#atlas", title: "Atlas OS + Sec 8 Resources", subtitle: "Manifesting + Housing Guides + Budget Help", desc: "Spiritual, Divine, Healing in Progress, Sec 8 voucher guides, housing scripts, Budget Buster - No designs, just help!", color: "#6a00ff", image: "/images/branch-atlas.png", badge: "ATLAS OS" },
    { id: "daily", domain: "daily.mimiscozycorner.com", url: "#atlas-daily", title: "Mimi's Daily Finds", subtitle: "Soft Life + Mom Life + Bookish", desc: "Soft life, cozy, bookish, cozy reader club, mom fuel, blessed & stressed - In Shop", color: "#ff69b4", image: "/images/branch-budget.png", badge: "DAILY FINDS" },
    { id: "budget", domain: "budget.mimiscozycorner.com", url: "#atlas-budget", title: "Budget Buster", subtitle: "Save Money Finds - Coupon Queen", desc: "Dollar deals, coupon queen, broke but cozy, budget breakdown - 3 Protected PDFs", color: "#0f5ca8", image: "/images/branch-budget.png", badge: "BUDGET BUSTER" },
    { id: "housing-public", domain: "Housing Resources", url: "#atlas-housing", title: "Section 8 Housing Guides", subtitle: "Voucher Help - Public Resources", desc: "Housing Choice Voucher guides, scripts, how to apply - Public help (not private addresses)", color: "#0f5ca8", image: "/images/branch-housing.png", badge: "PUBLIC GUIDE" },
    { id: "creative", domain: "Creative Ads", url: "#atlas-creative", title: "Creative Ads", subtitle: "Ad Templates & Marketing", desc: "50 Ad Templates, marketing resources, Canva templates - Protected", color: "#ff1493", image: "/images/branch-shop.png", badge: "CREATIVE ADS" },
    { id: "printify", domain: "mimis-cozy-corner.printify.me", url: "https://mimis-cozy-corner.printify.me", title: "Live Pop-Up Store", subtitle: "5 Products Live - Direct Printify", desc: "Direct Printify store - 5 products published live - No custom domain yet", color: "#10b981", image: "/images/branch-live-white.png", badge: "LIVE 5" },
  ];

  const [showHousing, setShowHousing] = useState(false);
  const housingPrivate = [
    { order: 1, addr: "395 University Ave", phone: "(585) 632-7374 Peter Schick", note: "Call First" },
    { order: 2, addr: "25 Peck St", phone: "(414) 238-5245", note: "Call First" },
    { order: 3, addr: "100 Lyndhurst St", phone: "(585) 623-8283 DiGennaro", note: "Call First" },
    { order: 4, addr: "152 Rosedale St", phone: "Waiting 2nd message", note: "Follow Up" },
    { order: 5, addr: "306 Filon Ave", phone: "Donald Walker Owner", note: "Send Message" },
    { order: 6, addr: "207 Lux St", phone: "Roc Top Properties", note: "Waiting return" },
  ];

  return (
    <div style={{background:"#fffaf5", minHeight:"100vh", fontFamily:"system-ui"}}>
      <div style={{background:"#ff00ff", padding:"0", textAlign:"center", borderBottom:"4px solid #a2006d"}}>
        <img src="/images/mimi-banner-magenta.png" alt="Mimi's Cozy Corner" style={{width:"100%", maxWidth:"1400px", height:"auto", display:"block", margin:"0 auto"}} />
      </div>
      <div style={{background:"white", borderBottom:"3px solid #ff00ff", padding:"14px 16px", textAlign:"center"}}>
        <h1 style={{fontSize:"28px", fontWeight:900, margin:"8px 0 4px", background:"linear-gradient(90deg, #ff00ff 0%, #a2006d 30%, #6a00ff 60%, #00d4ff 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" as any}}>mimiscozycorner.com</h1>
        <p style={{fontSize:"13px", color:"#ff00ff", margin:"0", fontWeight:800}}>MAIN WEBSITE - One Website, Separated Brands - 330 Designs</p>
      </div>
      <div style={{maxWidth:"1150px", margin:"0 auto", padding:"16px"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:"18px"}}>
          {branches.map(b=>(
            <div key={b.id} style={{background:"white", borderRadius:"18px", overflow:"hidden", boxShadow:"0 6px 16px rgba(0,0,0,0.1)", borderTop:`5px solid ${b.color}`}}>
              <div style={{height:"320px", background:"white", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", padding:"8px"}}>
                <img src={b.image} alt={b.title} style={{width:"100%", height:"100%", objectFit:"contain"}} />
              </div>
              <div style={{padding:"16px", background:"#fef2f8"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <div style={{fontWeight:900, fontSize:"15px", color:"#a2006d"}}>{b.title}</div>
                  <span style={{fontSize:"9px", background:b.color, color:"white", padding:"4px 10px", borderRadius:"12px", fontWeight:800}}>{b.badge}</span>
                </div>
                <div style={{fontSize:"12px", color:b.color, fontWeight:800, marginTop:"4px"}}>{b.subtitle}</div>
                <div style={{fontSize:"11px", color:"#666", marginTop:"6px"}}>{b.desc}</div>
                <div style={{fontSize:"10px", color:"#999", marginTop:"6px", fontFamily:"monospace"}}>{b.domain}</div>
                {b.url.startsWith("#") ? (
                  <button onClick={()=>{window.location.hash=b.url}} style={{marginTop:"12px", width:"100%", background:b.color, color:"white", border:"none", padding:"12px", borderRadius:"10px", fontWeight:800, fontSize:"12px", cursor:"pointer"}}>OPEN → {b.title}</button>
                ) : (
                  <a href={b.url} target="_blank" rel="noopener" style={{marginTop:"12px", display:"block", background:b.color, color:"white", textAlign:"center", padding:"12px", borderRadius:"10px", fontWeight:800, fontSize:"12px", textDecoration:"none"}}>OPEN → {b.title}</a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:"30px", background:"#111", color:"#fff", padding:"20px", borderRadius:"12px", border:"2px solid #ff00ff"}}>
          <h3 style={{color:"#ff00ff"}}>🔒 Private Housing Tracker - Rochester (6 Properties)</h3>
          <p style={{fontSize:"12px", color:"#aaa"}}>PRIVATE - Do not share publicly - 10-year residency</p>
          <button onClick={()=>setShowHousing(!showHousing)} style={{background:showHousing?"#444":"#ff00ff", color:"white", border:"none", padding:"10px 20px", borderRadius:"8px", marginTop:"10px", cursor:"pointer"}}>{showHousing?"HIDE ▼":"SHOW PRIVATE 6 PROPERTIES →"}</button>
          {showHousing && (
            <div style={{marginTop:"15px", background:"#222", padding:"15px", borderRadius:"8px"}}>
              {housingPrivate.map(h=>(<div key={h.order} style={{borderBottom:"1px solid #333", padding:"10px 0", fontSize:"13px"}}><b style={{color:"#ff00ff"}}>{h.order}. {h.addr}</b> - {h.phone} - <span style={{color:"#00ffff"}}>{h.note}</span></div>))}
            </div>
          )}
        </div>
      </div>
      <AtlasPages />
      <div style={{width:"100%", marginTop:"40px", cursor:"pointer"}} onClick={()=>window.open("https://shop.mimiscozycorner.com","_blank")}><img src="/images/mimi-banner-magenta.png" alt="Shop" style={{width:"100%", height:"auto", display:"block"}} /></div>
      <div style={{display:"flex", justifyContent:"center", gap:"15px", padding:"20px", background:"#0a0a0f", flexWrap:"wrap" as any}}>
        <button onClick={()=>window.location.hash="#atlas"} style={{background:"#6a00ff", color:"white", padding:"12px 24px", borderRadius:"8px", border:"none", fontWeight:"bold", cursor:"pointer"}}>Atlas OS - All Resources</button>
        <button onClick={()=>window.location.hash="#atlas-budget"} style={{background:"#ff00ff", color:"white", padding:"12px 24px", borderRadius:"8px", border:"none", fontWeight:"bold", cursor:"pointer"}}>Budget Busters</button>
        <button onClick={()=>window.open("https://shop.mimiscozycorner.com","_blank")} style={{background:"#00ffff", color:"black", padding:"12px 24px", borderRadius:"8px", border:"none", fontWeight:"bold", cursor:"pointer"}}>Shop 330 Designs →</button>
      </div>
    </div>
  );
}
