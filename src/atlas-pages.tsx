import { useEffect, useState } from 'react'
const ATLAS_PRODUCTS = [
  { id: "budget", title: "Budget Buster", icon: "💰", color: "#0f5ca8", desc: "Save Money Finds - Dollar deals, coupon queen, broke but cozy", pdfs: ["budget-planner.pdf","money-saving.pdf","coupon-guide.pdf"] },
  { id: "housing", title: "Section 8 Housing Guides", icon: "🏠", color: "#0f5ca8", desc: "Voucher Guides - Public Help - How to apply, scripts", pdfs: ["housing-guide.pdf","housing-scripts.pdf"] },
  { id: "daily", title: "Mimi's Daily Finds", icon: "☕", color: "#ff69b4", desc: "Soft Life, Mom Life, Bookish, Cozy Reader Club", pdfs: [] },
  { id: "creative", title: "Creative Ads", icon: "🎨", color: "#ff1493", desc: "50 Ad Templates - Marketing Resources", pdfs: ["ad-templates.pdf"] },
  { id: "manifest", title: "Atlas OS - Manifesting", icon: "✨", color: "#6a00ff", desc: "Spiritual, Divine, Healing in Progress", pdfs: [] },
]
export const AtlasPages = () => {
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash : '')
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const go = (h: string) => { window.location.hash = h; setHash(h); window.scrollTo(0,0) }
  const current = ATLAS_PRODUCTS.find(p => hash === `#atlas-${p.id}`)
  if (current) {
    return (
      <div style={{padding:"40px", maxWidth:"900px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px", marginTop:"20px"}}>
        <h1 style={{color: current.color}}>{current.icon} {current.title}</h1>
        <p>{current.desc}</p>
        <div style={{marginTop:"30px"}}>
          <h3>📄 Resources (Protected - Do Not Share)</h3>
          <div style={{background:"#222", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            {current.pdfs.length > 0 ? current.pdfs.map(pdf => (
              <p key={pdf}>✅ {pdf} - <a href={`/pdfs/${pdf}`} target="_blank" rel="noopener" style={{color: current.color, fontWeight:"bold"}}>Open / Download</a></p>
            )) : <p>Coming soon - This brand is in SHOP - shop.mimiscozycorner.com</p>}
          </div>
          <button onClick={()=>go('#atlas')} style={{marginTop:"20px", background: current.color, color:"#fff", padding:"12px 24px", border:"none", borderRadius:"8px", cursor:"pointer"}}>← Back to Atlas OS</button>
        </div>
      </div>
    )
  }
  if (hash === '#atlas') {
    return (
      <div style={{padding:"40px", maxWidth:"1000px", margin:"0 auto", background:"#111", color:"#fff", borderRadius:"16px", marginTop:"20px"}}>
        <h1 style={{color:"#fff", textAlign:"center"}}>Atlas OS - Resources (No designs, just help!)</h1>
        <p style={{textAlign:"center", color:"#aaa"}}>Manifesting + Housing Guides + Budget Help - Separated Brands</p>
        <p style={{textAlign:"center", color:"#6a00ff", fontWeight:"bold"}}>{ATLAS_PRODUCTS.length} Resources - Shop has 330 Designs separately</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:"20px", marginTop:"30px"}}>
          {ATLAS_PRODUCTS.map(p => (
            <div key={p.id} onClick={()=>go(`#atlas-${p.id}`)} style={{background:"#222", padding:"24px", borderRadius:"12px", border:`2px solid ${p.color}`, cursor:"pointer"}}>
              <h3 style={{color:p.color}}>{p.icon} {p.title}</h3>
              <p style={{color:"#ccc", fontSize:"13px"}}>{p.desc}</p>
              <span style={{color:p.color, fontWeight:"bold"}}>{p.pdfs.length > 0 ? `${p.pdfs.length} PDFs →` : 'View →'}</span>
            </div>
          ))}
        </div>
        <button onClick={()=>go('')} style={{marginTop:"30px", background:"#444", color:"#fff", padding:"12px 24px", border:"none", borderRadius:"8px", cursor:"pointer"}}>← Back to Main</button>
      </div>
    )
  }
  return null;
}
