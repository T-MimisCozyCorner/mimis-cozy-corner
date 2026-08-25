import { useState } from "react";

export default function App(){
  const branches = [
    { id: "shop", domain: "shop.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com", title: "Shop Branch", subtitle: "Printify Store - 330 Designs", desc: "Budget Buster, Daily Finds, Creative Ads, Atlas OS - CREATE IN PRINTIFY button - All products separated", color: "#a2006d", emoji: "🛍️", badge: "SHOP ONLY" },
    { id: "atlas", domain: "atlas.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com?brand=atlas", title: "Atlas OS + Sec 8", subtitle: "Manifesting + Housing Guides", desc: "Spiritual, Divine, Healing in Progress, Sec 8 voucher guides, housing scripts", color: "#6a00ff", emoji: "✨", badge: "COMING SOON" },
    { id: "daily", domain: "daily.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com?brand=daily", title: "Mimi's Daily Finds", subtitle: "Soft Life + Mom Life", desc: "Soft life, cozy, bookish, cozy reader club, mom fuel, blessed & stressed", color: "#ff69b4", emoji: "☕", badge: "IN SHOP" },
    { id: "budget", domain: "budget.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com?brand=budget", title: "Budget Buster", subtitle: "Save Money Finds", desc: "Dollar deals, coupon queen, broke but cozy, budget breakdown", color: "#0f5ca8", emoji: "💰", badge: "IN SHOP" },
    { id: "housing", domain: "Housing Tracker", url: "#housing", title: "Rochester Content - Housing", subtitle: "Sec 8 Voucher - 6 Properties", desc: "Housing Choice Voucher - 10-year residency - 395 University, 25 Peck, 100 Lyndhurst, 152 Rosedale, 306 Filon, 207 Lux", color: "#0f5ca8", emoji: "🏠", badge: "PRIVATE" },
    { id: "printify", domain: "mimis-cozy-corner.printify.me", url: "https://mimis-cozy-corner.printify.me", title: "Live Pop-Up Store", subtitle: "5 Products Live", desc: "Direct Printify store - 5 products published live - No custom domain", color: "#10b981", emoji: "🌐", badge: "LIVE" },
  ];

  const [showHousing, setShowHousing] = useState(false);
  const housing = [
    { order: 1, addr: "395 University Ave", phone: "(585) 632-7374 Peter Schick", note: "Call First" },
    { order: 2, addr: "25 Peck St", phone: "(414) 238-5245", note: "Call First" },
    { order: 3, addr: "100 Lyndhurst St", phone: "(585) 623-8283 DiGennaro", note: "Call First" },
    { order: 4, addr: "152 Rosedale St", phone: "Waiting 2nd message", note: "Follow Up" },
    { order: 5, addr: "306 Filon Ave", phone: "Donald Walker Owner", note: "Send Message" },
    { order: 6, addr: "207 Lux St", phone: "Roc Top Properties", note: "Waiting return" },
  ];

  return (
    <div style={{background:"#fffaf5", minHeight:"100vh", fontFamily:"system-ui"}}>
      {/* FULL MAGENTA BANNER */}
      <div style={{background:"#ff00ff", padding:"0", textAlign:"center", overflow:"hidden", borderBottom:"4px solid #a2006d"}}>
        <img 
          src="/images/mimi-banner-magenta.png" 
          alt="Mimi's Cozy Corner - Custom Designs for Cozy Mamas - Full Magenta Banner"
          style={{width:"100%", maxWidth:"1400px", height:"auto", display:"block", margin:"0 auto"}}
        />
      </div>
      
      <div style={{background:"white", borderBottom:"3px solid #a2006d", padding:"12px 16px", textAlign:"center"}}>
        <h1 style={{color:"#a2006d", fontSize:"20px", fontWeight:900, margin:"6px 0 2px"}}>mimiscozycorner.com</h1>
        <p style={{fontSize:"12px", color:"#666", margin:"0", fontWeight:600}}>MAIN WEBSITE - One Website, Separated Brands</p>
        <p style={{fontSize:"10px", color:"#999", margin:"2px 0 0"}}>Main hub branches to each product • shop.mimiscozycorner.com = Printify branch ONLY</p>
      </div>

      <div style={{maxWidth:"1100px", margin:"0 auto", padding:"16px"}}>
        <div style={{background:"white", borderRadius:"12px", padding:"12px", border:"1px solid #e5e7eb", marginBottom:"16px", display:"flex", gap:"8px", flexWrap:"wrap", justifyContent:"center"}}>
          <span style={{background:"#a2006d", color:"white", padding:"6px 12px", borderRadius:"20px", fontSize:"11px", fontWeight:800}}>MAIN: mimiscozycorner.com</span>
          <span style={{background:"#f3f4f6", color:"#374151", padding:"6px 12px", borderRadius:"20px", fontSize:"11px", fontWeight:700, border:"1px solid #e5e7eb"}}>SHOP BRANCH: shop.mimiscozycorner.com = Budget Buster, Daily Finds, Creative Ads, Atlas OS + CREATE</span>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"14px"}}>
          {branches.map(b=>(
            <div key={b.id} style={{background:"white", borderRadius:"14px", overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.06)", borderTop:`4px solid ${b.color}`}}>
              <div style={{height:"70px", background:"#fef2f8", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"32px"}}>{b.emoji}</div>
              <div style={{padding:"12px"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <div style={{fontWeight:900, fontSize:"12px"}}>{b.title}</div>
                  <span style={{fontSize:"8px", background: b.badge==="SHOP ONLY"?"#a2006d":b.badge==="LIVE"?"#10b981":"#f3f4f6", color:b.badge==="SHOP ONLY"||b.badge==="LIVE"?"white":"#666", padding:"2px 6px", borderRadius:"8px", fontWeight:800}}>{b.badge}</span>
                </div>
                <div style={{fontSize:"10px", color:"#a2006d", fontWeight:700, marginTop:"2px"}}>{b.subtitle}</div>
                <div style={{fontSize:"9px", color:"#666", marginTop:"4px", lineHeight:"1.3", height:"28px", overflow:"hidden"}}>{b.desc}</div>
                <div style={{fontSize:"8px", color:"#999", marginTop:"4px", fontFamily:"monospace"}}>{b.domain}</div>
                {b.id==="housing" ? (
                  <button onClick={()=>setShowHousing(!showHousing)} style={{marginTop:"8px", width:"100%", background:b.color, color:"white", border:"none", padding:"8px", borderRadius:"6px", fontWeight:800, fontSize:"10px", cursor:"pointer"}}>{showHousing?"HIDE ▼":"SHOW 6 PROPERTIES →"}</button>
                ) : (
                  <a href={b.url} target="_blank" rel="noopener" style={{marginTop:"8px", display:"block", background:b.color, color:"white", textAlign:"center", padding:"8px", borderRadius:"6px", fontWeight:800, fontSize:"10px", textDecoration:"none"}}>OPEN →</a>
                )}
              </div>
            </div>
          ))}
        </div>

        {showHousing && (
          <div style={{marginTop:"12px", background:"white", borderRadius:"10px", padding:"12px", border:"2px solid #0f5ca8"}}>
            <h3 style={{margin:"0 0 6px", fontSize:"13px", color:"#0f5ca8"}}>🏠 6 Properties - Housing Choice Voucher</h3>
            <div style={{display:"grid", gap:"6px"}}>
              {housing.map(h=>(
                <div key={h.order} style={{display:"flex", gap:"8px", background:"#f8fafc", padding:"6px 8px", borderRadius:"6px", border:"1px solid #e2e8f0"}}>
                  <div style={{background:h.note==="Call First"?"#0f5ca8":h.note==="Follow Up"?"#f59e0b":"#10b981", color:"white", borderRadius:"4px", width:"44px", textAlign:"center", padding:"3px", fontSize:"8px", fontWeight:800}}>{h.note}<br/>{h.order}</div>
                  <div><div style={{fontWeight:800, fontSize:"11px"}}>{h.addr}</div><div style={{fontSize:"10px", color:"#0f5ca8"}}>{h.phone}</div></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
