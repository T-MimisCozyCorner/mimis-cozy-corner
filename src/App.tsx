import { useState } from "react";

export default function App(){
  const branches = [
    { 
      id: "shop", 
      domain: "shop.mimiscozycorner.com", 
      url: "https://shop.mimiscozycorner.com", 
      title: "Shop Branch", 
      subtitle: "Mimi's Cozy Corner - Custom Designs", 
      desc: "Main Shop - 330 Designs - Budget Buster, Daily Finds, Creative Ads, Atlas OS",
      color: "#ff00ff",
      image: "/images/branch-shop.png",
      badge: "SHOP ONLY" 
    },
    { 
      id: "budget", 
      domain: "budget.mimiscozycorner.com", 
      url: "https://shop.mimiscozycorner.com?brand=budget", 
      title: "Budget Buster", 
      subtitle: "Big Savings • Smart Finds • Happy Wallets!", 
      desc: "Save Money Finds - Dollar deals, coupon queen, broke but cozy",
      color: "#0f5ca8",
      image: "/images/branch-budget.png",
      badge: "SAVE MONEY" 
    },
    { 
      id: "housing", 
      domain: "Rochester Content", 
      url: "#housing", 
      title: "Section 8 Housing", 
      subtitle: "Helping Families Find a Place to Call Home", 
      desc: "Housing Choice Voucher - Guidance Resources Support Hope - 6 Properties",
      color: "#0f5ca8",
      image: "/images/branch-housing.png",
      badge: "VOUCHER APPROVED" 
    },
    { 
      id: "atlas", 
      domain: "atlas.mimiscozycorner.com", 
      url: "https://shop.mimiscozycorner.com?brand=atlas", 
      title: "Atlas OS", 
      subtitle: "Manifesting + Sec 8 Guides", 
      desc: "Spiritual, Divine, Healing in Progress - Sec 8 voucher guides, housing scripts, manifesting",
      color: "#6a00ff",
      image: "/images/branch-atlas.png",
      badge: "ATLAS OS" 
    },
    { 
      id: "live-white", 
      domain: "mimis-cozy-corner.printify.me", 
      url: "https://mimis-cozy-corner.printify.me", 
      title: "Mimi's Cozy Corner - Live", 
      subtitle: "Custom Designs for Cozy Mamas", 
      desc: "Live Pop-Up Store - Dream Design Create - 5 Products Live",
      color: "#ff00ff",
      image: "/images/branch-live-white.png",
      badge: "LIVE POP-UP" 
    },
    { 
      id: "live-magenta", 
      domain: "mimiscozycorner.com", 
      url: "https://mimiscozycorner.com", 
      title: "Main Hub", 
      subtitle: "Custom Designs for Cozy Mamas - Magenta Edition", 
      desc: "Main Website - One Website, Separated Brands - Let's Make Something Cozy!",
      color: "#ff00ff",
      image: "/images/branch-live-magenta.png",
      badge: "MAIN HUB" 
    },
  ];

  const [showHousing, setShowHousing] = useState(false);

  return (
    <div style={{background:"#fffaf5", minHeight:"100vh", fontFamily:"system-ui"}}>
      <div style={{background:"#ff00ff", padding:"0", textAlign:"center", borderBottom:"4px solid #a2006d"}}>
        <img src="/images/mimi-banner-magenta.png" alt="Mimi's Cozy Corner" style={{width:"100%", maxWidth:"1400px", height:"auto", display:"block", margin:"0 auto"}} />
      </div>
      
      <div style={{background:"white", borderBottom:"3px solid #ff00ff", padding:"14px 16px", textAlign:"center"}}>
        <h1 style={{
          fontSize:"28px", 
          fontWeight:900, 
          margin:"8px 0 4px",
          background:"linear-gradient(90deg, #ff00ff 0%, #a2006d 30%, #6a00ff 60%, #00d4ff 100%)",
          WebkitBackgroundClip:"text",
          WebkitTextFillColor:"transparent",
          backgroundClip:"text",
        }}>
          mimiscozycorner.com
        </h1>
        <p style={{fontSize:"13px", color:"#ff00ff", margin:"0", fontWeight:800}}>MAIN WEBSITE - Banner Colors - All Logos!</p>
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
                {b.id==="housing" ? (
                  <button onClick={()=>setShowHousing(!showHousing)} style={{marginTop:"12px", width:"100%", background:b.color, color:"white", border:"none", padding:"12px", borderRadius:"10px", fontWeight:800, fontSize:"12px", cursor:"pointer"}}>{showHousing?"HIDE ▼":"SHOW 6 PROPERTIES →"}</button>
                ) : (
                  <a href={b.url} target="_blank" rel="noopener" style={{marginTop:"12px", display:"block", background:b.color, color:"white", textAlign:"center", padding:"12px", borderRadius:"10px", fontWeight:800, fontSize:"12px", textDecoration:"none"}}>OPEN →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* Social Links - All Connected */}
      <div style={{display:"flex", justifyContent:"center", gap:"15px", padding:"20px", background:"#0a0a0f", flexWrap:"wrap"}}>
        <a href="https://www.facebook.com/share/19bE8F6Vo8/?mibextid=wwXIfr" target="_blank" style={{color:"#ff00ff", fontWeight:"bold", textDecoration:"none", background:"#1a1a1a", padding:"10px 15px", borderRadius:"20px"}}>📘 Facebook</a>
        <a href="https://www.instagram.com/mimis_corner_co?igsh=MXczaGt4dW55M2Z1ag==" target="_blank" style={{color:"#ff00ff", fontWeight:"bold", textDecoration:"none", background:"#1a1a1a", padding:"10px 15px", borderRadius:"20px"}}>📸 Instagram @mimis_corner_co</a>
        <a href="https://www.tiktok.com/@mimis_cozy_corner" target="_blank" style={{color:"#00ffff", fontWeight:"bold", textDecoration:"none", background:"#1a1a1a", padding:"10px 15px", borderRadius:"20px"}}>🎵 TikTok @mimis_cozy_corner</a>
        <a href="https://www.threads.com/@helppeople2plan" target="_blank" style={{color:"white", fontWeight:"bold", textDecoration:"none", background:"#1a1a1a", padding:"10px 15px", borderRadius:"20px"}}>🧵 Threads @helppeople2plan</a>
        <a href="https://pin.it/1CsxMmUad" target="_blank" style={{color:"#ff1493", fontWeight:"bold", textDecoration:"none", background:"#1a1a1a", padding:"10px 15px", borderRadius:"20px"}}>📌 Pinterest</a>
        <a href="https://v.lemon8-app.com/s/OgjcZeTveY" target="_blank" style={{color:"#ffff00", fontWeight:"bold", textDecoration:"none", background:"#1a1a1a", padding:"10px 15px", borderRadius:"20px"}}>🍋 Lemon8</a>
      </div>

      {/* Bottom Shop Banner - All links to shop */}
<div style={{width:"100%", marginTop:"40px", cursor:"pointer"}} onClick={()=>window.open("https://shop.mimiscozycorner.com","_blank")}>
  <img 
    src="/images/mimi-banner-magenta.png" 
    alt="Shop Mimi's Cozy Corner" 
    style={{width:"100%", height:"auto", display:"block"}}
  />
</div>

<div style={{display:"flex", justifyContent:"center", gap:"15px", padding:"20px", background:"#0a0a0f"}}>
  <button onClick={()=>window.open("https://shop.mimiscozycorner.com?brand=budget")} style={{background:"#ff00ff", color:"white", padding:"12px 24px", borderRadius:"8px", border:"none", fontWeight:"bold"}}>Budget Busters</button>
  <button onClick={()=>window.open("https://shop.mimiscozycorner.com?brand=shop")} style={{background:"#00ffff", color:"black", padding:"12px 24px", borderRadius:"8px", border:"none", fontWeight:"bold"}}>Mimi's Shop</button>
  <button onClick={()=>window.open("https://shop.mimiscozycorner.com")} style={{background:"#ff1493", color:"white", padding:"12px 24px", borderRadius:"8px", border:"none", fontWeight:"bold"}}>All Products →</button>
</div>
    </div>
  );
}
