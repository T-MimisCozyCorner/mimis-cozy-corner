import { useState } from "react";

export default function App(){
  const branches = [
    { 
      id: "shop", 
      domain: "shop.mimiscozycorner.com", 
      url: "https://shop.mimiscozycorner.com",
      title: "Shop Branch", 
      subtitle: "Printify Store - 330 Designs",
      desc: "Budget Buster, Daily Finds, Creative Ads, Atlas OS - CREATE IN PRINTIFY button - All products separated",
      color: "#a2006d",
      emoji: "🛍️",
      badge: "SHOP ONLY"
    },
    { 
      id: "atlas", 
      domain: "atlas.mimiscozycorner.com", 
      url: "https://shop.mimiscozycorner.com?brand=atlas",
      title: "Atlas OS + Sec 8", 
      subtitle: "Manifesting + Housing Guides",
      desc: "Spiritual, Divine, Healing in Progress, Sec 8 voucher guides, housing scripts",
      color: "#6a00ff",
      emoji: "✨",
      badge: "COMING SOON"
    },
    { 
      id: "daily", 
      domain: "daily.mimiscozycorner.com", 
      url: "https://shop.mimiscozycorner.com?brand=daily",
      title: "Mimi's Daily Finds", 
      subtitle: "Soft Life + Mom Life",
      desc: "Soft life, cozy, bookish, cozy reader club, mom fuel, blessed & stressed",
      color: "#ff69b4",
      emoji: "☕",
      badge: "IN SHOP"
    },
    { 
      id: "budget", 
      domain: "budget.mimiscozycorner.com", 
      url: "https://shop.mimiscozycorner.com?brand=budget",
      title: "Budget Buster", 
      subtitle: "Save Money Finds",
      desc: "Dollar deals, coupon queen, broke but cozy, budget breakdown",
      color: "#0f5ca8",
      emoji: "💰",
      badge: "IN SHOP"
    },
    { 
      id: "housing", 
      domain: "Housing Tracker", 
      url: "#housing",
      title: "Rochester Content - Housing", 
      subtitle: "Sec 8 Voucher - 6 Properties",
      desc: "Housing Choice Voucher - 10-year residency - 395 University, 25 Peck, 100 Lyndhurst, 152 Rosedale, 306 Filon, 207 Lux",
      color: "#0f5ca8",
      emoji: "🏠",
      badge: "PRIVATE"
    },
    { 
      id: "printify", 
      domain: "mimis-cozy-corner.printify.me", 
      url: "https://mimis-cozy-corner.printify.me",
      title: "Live Pop-Up Store", 
      subtitle: "5 Products Live",
      desc: "Direct Printify store - 5 products published live - No custom domain",
      color: "#10b981",
      emoji: "🌐",
      badge: "LIVE"
    },
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
      <div style={{background:"white", borderBottom:"4px solid #a2006d", padding:"18px 16px", textAlign:"center"}}>
        <h1 style={{color:"#a2006d", fontSize:"24px", fontWeight:900, margin:"14px 0 4px"}}>mimiscozycorner.com</h1>
        <p style={{fontSize:"13px", color:"#666", margin:"0", fontWeight:600}}>MAIN WEBSITE - One Website, Separated Brands</p>
        <p style={{fontSize:"11px", color:"#999", margin:"4px 0 0"}}>Main hub branches to each product • shop.mimiscozycorner.com = Printify branch ONLY</p>
      </div>

      <div style={{maxWidth:"1100px", margin:"0 auto", padding:"16px"}}>
        <div style={{background:"white", borderRadius:"12px", padding:"12px", border:"1px solid #e5e7eb", marginBottom:"16px", display:"flex", gap:"8px", flexWrap:"wrap", justifyContent:"center"}}>
          <span style={{background:"#a2006d", color:"white", padding:"6px 12px", borderRadius:"20px", fontSize:"11px", fontWeight:800}}>MAIN: mimiscozycorner.com</span>
          <span style={{background:"#f3f4f6", color:"#374151", padding:"6px 12px", borderRadius:"20px", fontSize:"11px", fontWeight:700, border:"1px solid #e5e7eb"}}>SHOP BRANCH: shop.mimiscozycorner.com = Budget Buster, Daily Finds, Creative Ads, Atlas OS + CREATE</span>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"14px"}}>
          {branches.map(b=>(
            <div key={b.id} style={{background:"white", borderRadius:"14px", overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.06)", borderTop:`4px solid ${b.color}`}}>
              <div style={{height:"80px", background:"#fef2f8", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"36px"}}>{b.emoji}</div>
              <div style={{padding:"14px"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <div style={{fontWeight:900, fontSize:"13px"}}>{b.title}</div>
                  <span style={{fontSize:"9px", background: b.badge==="SHOP ONLY"?"#a2006d":b.badge==="LIVE"?"#10b981":"#f3f4f6", color:b.badge==="SHOP ONLY"||b.badge==="LIVE"?"white":"#666", padding:"3px 7px", borderRadius:"10px", fontWeight:800}}>{b.badge}</span>
                </div>
                <div style={{fontSize:"11px", color:"#a2006d", fontWeight:700, marginTop:"2px"}}>{b.subtitle}</div>
                <div style={{fontSize:"10px", color:"#666", marginTop:"6px", lineHeight:"1.4", height:"32px", overflow:"hidden"}}>{b.desc}</div>
                <div style={{fontSize:"10px", color:"#999", marginTop:"6px", fontFamily:"monospace"}}>{b.domain}</div>
                {b.id==="housing" ? (
                  <button onClick={()=>setShowHousing(!showHousing)} style={{marginTop:"10px", width:"100%", background:b.color, color:"white", border:"none", padding:"9px", borderRadius:"8px", fontWeight:800, fontSize:"11px", cursor:"pointer"}}>{showHousing?"HIDE HOUSING ▼":"SHOW 6 PROPERTIES →"}</button>
                ) : (
                  <a href={b.url} target="_blank" rel="noopener" style={{marginTop:"10px", display:"block", background:b.color, color:"white", textAlign:"center", padding:"9px", borderRadius:"8px", fontWeight:800, fontSize:"11px", textDecoration:"none"}}>OPEN {b.domain.toUpperCase()} →</a>
                )}
              </div>
            </div>
          ))}
        </div>

        {showHousing && (
          <div style={{marginTop:"14px", background:"white", borderRadius:"12px", padding:"14px", border:"2px solid #0f5ca8"}}>
            <h3 style={{margin:"0 0 8px", fontSize:"14px", color:"#0f5ca8"}}>🏠 Rochester Content - 6 Properties - Housing Choice Voucher</h3>
            <div style={{display:"grid", gap:"8px"}}>
              {housing.map(h=>(
                <div key={h.order} style={{display:"flex", gap:"10px", background:"#f8fafc", padding:"8px 10px", borderRadius:"8px", border:"1px solid #e2e8f0"}}>
                  <div style={{background:h.note==="Call First"?"#0f5ca8":h.note==="Follow Up"?"#f59e0b":"#10b981", color:"white", borderRadius:"6px", width:"50px", textAlign:"center", padding:"4px", fontSize:"9px", fontWeight:800}}>{h.note}<br/>{h.order}</div>
                  <div><div style={{fontWeight:800, fontSize:"12px"}}>{h.addr}</div><div style={{fontSize:"11px", color:"#0f5ca8"}}>{h.phone}</div></div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{marginTop:"16px", background:"#111", color:"white", borderRadius:"12px", padding:"14px"}}>
          <div style={{fontSize:"12px", fontWeight:800}}>✅ Architecture - Separated Correctly</div>
          <div style={{fontSize:"11px", marginTop:"8px", lineHeight:"1.6", opacity:0.9}}>
            <div><b style={{color:"#ff69b4"}}>mimiscozycorner.com (MAIN)</b> = This hub - Links to branches - NO CREATE button, NO 330 designs here</div>
            <div><b style={{color:"#ff69b4"}}>shop.mimiscozycorner.com (BRANCH)</b> = Budget Buster, Daily Finds, Creative Ads, Atlas OS separated + CREATE IN PRINTIFY + Image Generator - Shop ONLY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
