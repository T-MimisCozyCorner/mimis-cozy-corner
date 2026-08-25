import { useEffect, useState } from 'react'

export const AtlasPages = () => {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = (h: string) => {
    window.location.hash = h
    setHash(h)
    window.scrollTo(0,0)
  }

  if (hash === '#atlas-budget') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px", marginTop:"20px"}}>
        <h1 style={{color:"#ff00ff"}}>💰 Budget Buster</h1>
        <p>Big Savings • Smart Finds • Happy Wallets!</p>
        <div style={{marginTop:"30px"}}>
          <h3>📄 Guides & Resources (Downloadable - Protected)</h3>
          <div style={{background:"#222", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>✅ Budget Planner PDF - <a href="/pdfs/budget-planner.pdf" download style={{color:"#ff00ff", cursor:"pointer"}}>Download</a> (Protected - No Sharing)</p>
            <p>✅ Money Saving Tips - <a href="/pdfs/money-saving.pdf" download style={{color:"#ff00ff", cursor:"pointer"}}>Download</a> (Protected)</p>
            <p>✅ Coupon Guide - <a href="/pdfs/coupon-guide.pdf" download style={{color:"#ff00ff", cursor:"pointer"}}>Download</a> (Protected)</p>
          </div>
          <button onClick={()=>go('#atlas')} style={{marginTop:"20px", background:"#ff00ff", color:"#fff", padding:"12px 24px", border:"none", borderRadius:"8px", cursor:"pointer"}}>← Back to Atlas OS</button>
        </div>
      </div>
    )
  }
  if (hash === '#atlas-housing') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px", marginTop:"20px"}}>
        <h1 style={{color:"#00ffff"}}>🏠 Section 8 Housing</h1>
        <p>Helping Families Find a Place to Call Home</p>
        <div style={{marginTop:"30px"}}>
          <h3>📄 Housing Resources (Protected PDFs)</h3>
          <div style={{background:"#222", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>✅ Voucher Application Guide - <a href="/pdfs/housing-guide.pdf" download style={{color:"#00ffff", cursor:"pointer"}}>Download</a></p>
            <p>✅ Housing Search Scripts - <a href="/pdfs/housing-scripts.pdf" download style={{color:"#00ffff", cursor:"pointer"}}>Download</a></p>
          </div>
          <button onClick={()=>go('#atlas')} style={{marginTop:"20px", background:"#00ffff", color:"#000", padding:"12px 24px", border:"none", borderRadius:"8px", cursor:"pointer"}}>← Back to Atlas OS</button>
        </div>
      </div>
    )
  }
  if (hash === '#atlas-creative') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px", marginTop:"20px"}}>
        <h1 style={{color:"#ff1493"}}>🎨 Creative Ads</h1>
        <p>Ad Templates & Marketing Resources</p>
        <div style={{marginTop:"30px"}}>
          <h3>📄 Ad Templates (Protected)</h3>
          <div style={{background:"#222", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>✅ 50 Ad Templates - <a href="/pdfs/ad-templates.pdf" download style={{color:"#ff1493", cursor:"pointer"}}>Download</a></p>
          </div>
          <button onClick={()=>go('#atlas')} style={{marginTop:"20px", background:"#ff1493", color:"#fff", padding:"12px 24px", border:"none", borderRadius:"8px", cursor:"pointer"}}>← Back to Atlas OS</button>
        </div>
      </div>
    )
  }
  if (hash === '#atlas') {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px", marginTop:"20px"}}>
        <h1 style={{color:"#fff", textAlign:"center"}}>Atlas OS - Products</h1>
        <p style={{textAlign:"center", color:"#aaa"}}>Branched from mimiscozycorner.com - No designs, just help!</p>
        <div style={{display:"grid", gap:"20px", marginTop:"30px"}}>
          <div onClick={()=>go('#atlas-budget')} style={{background:"#222", padding:"24px", borderRadius:"12px", border:"2px solid #ff00ff", cursor:"pointer"}}>
            <h3 style={{color:"#ff00ff"}}>💰 Budget Buster</h3>
            <p>Save Money Finds, Budget Tips, Guides</p>
            <span style={{color:"#ff00ff", fontWeight:"bold"}}>View →</span>
          </div>
          <div onClick={()=>go('#atlas-housing')} style={{background:"#222", padding:"24px", borderRadius:"12px", border:"2px solid #00ffff", cursor:"pointer"}}>
            <h3 style={{color:"#00ffff"}}>🏠 Section 8 Housing</h3>
            <p>Housing Choice Voucher Guides, Application Help</p>
            <span style={{color:"#00ffff", fontWeight:"bold"}}>View →</span>
          </div>
          <div onClick={()=>go('#atlas-creative')} style={{background:"#222", padding:"24px", borderRadius:"12px", border:"2px solid #ff1493", cursor:"pointer"}}>
            <h3 style={{color:"#ff1493"}}>🎨 Creative Ads</h3>
            <p>Ad Templates, Creative Designs</p>
            <span style={{color:"#ff1493", fontWeight:"bold"}}>View →</span>
          </div>
        </div>
        <button onClick={()=>go('')} style={{marginTop:"30px", background:"#444", color:"#fff", padding:"12px 24px", border:"none", borderRadius:"8px", cursor:"pointer"}}>← Back to Main</button>
      </div>
    )
  }
  return null;
}
