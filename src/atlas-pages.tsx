export const AtlasPages = () => {
  const hash = window.location.hash;
  
  if (hash === '#atlas-budget') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px"}}>
        <h1 style={{color:"#ff00ff"}}>💰 Budget Buster</h1>
        <p>Big Savings • Smart Finds • Happy Wallets!</p>
        <div style={{marginTop:"30px"}}>
          <h3>📄 Guides & Resources (Downloadable - Not Shareable)</h3>
          <div style={{background:"#222", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>✅ Budget Planner PDF - <a href="#" style={{color:"#ff00ff"}}>Download</a> (Protected)</p>
            <p>✅ Money Saving Tips - <a href="#" style={{color:"#ff00ff"}}>Download</a> (Protected)</p>
            <p>✅ Coupon Guide - <a href="#" style={{color:"#ff00ff"}}>Download</a> (Protected)</p>
          </div>
          <button onClick={()=>window.location.hash="#atlas"} style={{marginTop:"20px", background:"#ff00ff", color:"#fff", padding:"10px 20px", border:"none", borderRadius:"8px"}}>← Back to Atlas OS</button>
        </div>
      </div>
    )
  }
  if (hash === '#atlas-housing') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px"}}>
        <h1 style={{color:"#00ffff"}}>🏠 Section 8 Housing</h1>
        <p>Helping Families Find a Place to Call Home</p>
        <div style={{marginTop:"30px"}}>
          <h3>📄 Housing Resources (Downloadable - Not Shareable)</h3>
          <div style={{background:"#222", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>✅ Voucher Application Guide - <a href="#" style={{color:"#00ffff"}}>Download</a></p>
            <p>✅ Housing Search Scripts - <a href="#" style={{color:"#00ffff"}}>Download</a></p>
            <p>✅ Landlord Letter Templates - <a href="#" style={{color:"#00ffff"}}>Download</a></p>
          </div>
          <button onClick={()=>window.location.hash="#atlas"} style={{marginTop:"20px", background:"#00ffff", color:"#000", padding:"10px 20px", border:"none", borderRadius:"8px"}}>← Back to Atlas OS</button>
        </div>
      </div>
    )
  }
  if (hash === '#atlas-creative') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px"}}>
        <h1 style={{color:"#ff1493"}}>🎨 Creative Ads</h1>
        <p>Ad Templates & Marketing Resources</p>
        <div style={{marginTop:"30px"}}>
          <h3>📄 Ad Templates (Downloadable - Not Shareable)</h3>
          <div style={{background:"#222", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>✅ 50 Ad Templates PDF - <a href="#" style={{color:"#ff1493"}}>Download</a></p>
            <p>✅ Canva Templates - <a href="#" style={{color:"#ff1493"}}>Download</a></p>
          </div>
          <button onClick={()=>window.location.hash="#atlas"} style={{marginTop:"20px", background:"#ff1493", color:"#fff", padding:"10px 20px", border:"none", borderRadius:"8px"}}>← Back to Atlas OS</button>
        </div>
      </div>
    )
  }
  if (hash === '#atlas') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px"}}>
        <h1 style={{color:"#fff", textAlign:"center"}}>Atlas OS - Products</h1>
        <p style={{textAlign:"center", color:"#aaa"}}>Branched from mimiscozycorner.com</p>
        <div style={{display:"grid", gap:"20px", marginTop:"30px"}}>
          <div onClick={()=>window.location.hash="#atlas-budget"} style={{background:"#222", padding:"24px", borderRadius:"12px", border:"2px solid #ff00ff", cursor:"pointer"}}>
            <h3 style={{color:"#ff00ff"}}>💰 Budget Buster</h3>
            <p>Save Money Finds, Budget Tips, Guides</p>
            <span style={{color:"#ff00ff"}}>View →</span>
          </div>
          <div onClick={()=>window.location.hash="#atlas-housing"} style={{background:"#222", padding:"24px", borderRadius:"12px", border:"2px solid #00ffff", cursor:"pointer"}}>
            <h3 style={{color:"#00ffff"}}>🏠 Section 8 Housing</h3>
            <p>Housing Choice Voucher Guides, Application Help</p>
            <span style={{color:"#00ffff"}}>View →</span>
          </div>
          <div onClick={()=>window.location.hash="#atlas-creative"} style={{background:"#222", padding:"24px", borderRadius:"12px", border:"2px solid #ff1493", cursor:"pointer"}}>
            <h3 style={{color:"#ff1493"}}>🎨 Creative Ads</h3>
            <p>Ad Templates, Creative Designs</p>
            <span style={{color:"#ff1493"}}>View →</span>
          </div>
        </div>
        <button onClick={()=>window.location.hash=""} style={{marginTop:"30px", background:"#444", color:"#fff", padding:"10px 20px", border:"none", borderRadius:"8px"}}>← Back to Main</button>
      </div>
    )
  }
  return null;
}
