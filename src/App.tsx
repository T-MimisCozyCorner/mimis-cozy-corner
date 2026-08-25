cat > src/App.tsx << 'EOF'
import { useState } from "react";
export default function App(){
  const branches = [
    { id: "shop", domain: "shop.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com", title: "Shop Branch", subtitle: "Printify Store - 330 Designs", desc: "Budget Buster, Daily Finds, Creative Ads, Atlas OS - CREATE button", color: "#a2006d", emoji: "🛍️", badge: "SHOP ONLY" },
    { id: "atlas", domain: "atlas.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com?brand=atlas", title: "Atlas OS + Sec 8", subtitle: "Manifesting + Housing", desc: "Spiritual, Divine, Healing in Progress, Sec 8 guides", color: "#6a00ff", emoji: "✨", badge: "COMING SOON" },
    { id: "daily", domain: "daily.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com?brand=daily", title: "Mimi's Daily Finds", subtitle: "Soft Life + Mom Life", desc: "Soft life, cozy, bookish, mom fuel", color: "#ff69b4", emoji: "☕", badge: "IN SHOP" },
    { id: "budget", domain: "budget.mimiscozycorner.com", url: "https://shop.mimiscozycorner.com?brand=budget", title: "Budget Buster", subtitle: "Save Money", desc: "Dollar deals, coupon queen", color: "#0f5ca8", emoji: "💰", badge: "IN SHOP" },
    { id: "housing", domain: "Housing Tracker", url: "#housing", title: "Housing Tracker", subtitle: "Sec 8 - 6 Properties", desc: "Rochester Content - 395 University etc", color: "#0f5ca8", emoji: "🏠", badge: "PRIVATE" },
    { id: "printify", domain: "mimis-cozy-corner.printify.me", url: "https://mimis-cozy-corner.printify.me", title: "Live Pop-Up", subtitle: "5 Products Live", desc: "Direct Printify store", color: "#10b981", emoji: "🌐", badge: "LIVE" },
  ];
  return (
    <div style={{background:"#fffaf5", minHeight:"100vh", fontFamily:"system-ui"}}>
      <div style={{background:"#ff00ff", padding:"0", textAlign:"center", borderBottom:"4px solid #a2006d"}}>
        <img src="/images/mimi-banner-magenta.png" alt="Mimi's Cozy Corner" style={{width:"100%", maxWidth:"1400px", height:"auto", display:"block", margin:"0 auto"}} />
      </div>
      <div style={{background:"white", padding:"12px", textAlign:"center", borderBottom:"3px solid #a2006d"}}>
        <h1 style={{color:"#a2006d", fontSize:"20px", fontWeight:900, margin:"6px 0"}}>mimiscozycorner.com</h1>
        <p style={{fontSize:"12px", color:"#666", margin:"0"}}>MAIN WEBSITE - One Website, Separated Brands</p>
      </div>
      <div style={{maxWidth:"1100px", margin:"0 auto", padding:"16px"}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"14px"}}>
          {branches.map(b=>(
            <div key={b.id} style={{background:"white", borderRadius:"14px", overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.06)", borderTop:`4px solid ${b.color}`}}>
              <div style={{height:"70px", background:"#fef2f8", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"32px"}}>{b.emoji}</div>
              <div style={{padding:"12px"}}>
                <div style={{fontWeight:900, fontSize:"12px"}}>{b.title} <span style={{fontSize:"8px", background:"#a2006d", color:"white", padding:"2px 6px", borderRadius:"8px"}}>{b.badge}</span></div>
                <div style={{fontSize:"10px", color:"#a2006d", fontWeight:700}}>{b.subtitle}</div>
                <a href={b.url} target="_blank" style={{marginTop:"8px", display:"block", background:b.color, color:"white", textAlign:"center", padding:"8px", borderRadius:"6px", fontWeight:800, fontSize:"10px", textDecoration:"none"}}>OPEN →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
EOF