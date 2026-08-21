import { useState } from 'react'
import { Link, Route, Switch } from 'wouter'
import { ArrowRight, BadgeDollarSign, Check, House, Menu, X, Mail, Sparkles, Monitor, Home as HomeIcon, ShoppingBag, LayoutDashboard, Box, Factory, FileCode } from 'lucide-react'
import avatar from './assets/mimi-avatar.png'
import creativeAdsLogo from './assets/mimis-creative-ads-logo.png'
import laTambora from './assets/la-tambora-sample.jpg'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">Mimi's Cozy Corner</Link>
        <nav className={open ? "nav open" : "nav"}>
          <Link href="/"><House size={16}/> Home</Link>
          <Link href="/dashboard"><LayoutDashboard size={16}/> Atlas Dashboard</Link>
          <Link href="/blueprints"><FileCode size={16}/> Blueprints</Link>
          <Link href="/products"><Box size={16}/> Products</Link>
          <Link href="/product-factory"><Factory size={16}/> Factory</Link>
          <Link href="/creative-ads"><BadgeDollarSign size={16}/> Ads $25</Link>
          <Link href="/contact"><Mail size={16}/> Contact</Link>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  )
}
function Footer() { return <footer className="footer"><div className="container"><p>© 2026 Mimi's Cozy Corner • Atlas OS Lite Inside • Ads $25</p></div></footer> }

function Home() {
  return (
    <>
      <Header/>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">NOW WITH ATLAS OS LITE BUILT-IN</div>
              <h1>Cozy Corner meets Atlas OS</h1>
              <p>Your $25 ads business now has a full product system: Blueprints, Products, and Factory - inspired by Atlas OS.</p>
              <div className="cta-row" style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:20}}>
                <Link className="button primary" href="/dashboard">Open Atlas Dashboard <ArrowRight size={18}/></Link>
                <Link className="button secondary" href="/creative-ads">Ads $25 Sample</Link>
              </div>
            </div>
            <div className="avatar-card"><img src={avatar} alt="Mimi"/><div className="avatar-chip"><Sparkles size={15}/> Atlas OS Inside</div></div>
          </div>
        </section>
        <section style={{padding:'40px 0'}}><div className="container" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:16}}>
          <Link href="/dashboard" style={{background:'#0a0a0a', color:'white', padding:20, borderRadius:16}}><h3>📊 Dashboard</h3><p>Your cozy command center</p></Link>
          <Link href="/blueprints" style={{background:'white', padding:20, borderRadius:16, border:'1px solid #eee'}}><h3>📘 Blueprints</h3><p>Templates for products</p></Link>
          <Link href="/products" style={{background:'#F0F7FF', padding:20, borderRadius:16}}><h3>📦 Products</h3><p>Your product vault</p></Link>
          <Link href="/product-factory" style={{background:'#FFF0F5', padding:20, borderRadius:16}}><h3>🏭 Product Factory</h3><p>Build new products with AI</p></Link>
        </div></div></section>
      </main>
      <Footer/>
    </>
  )
}

// === ATLAS OS PAGES INCORPORATED ===

function Dashboard() {
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero" style={{background:'#0a0a0a', color:'white', minHeight:'70vh'}}>
          <div className="container">
            <h1 style={{fontSize:42}}><LayoutDashboard style={{display:'inline'}}/> Atlas Dashboard</h1>
            <p style={{opacity:0.7}}>Incorporated from Atlas OS sprint-2.8.1 - now inside Cozy Corner</p>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:16, marginTop:30}}>
              <div style={{background:'#151515', padding:20, borderRadius:12}}><h3>3 Products</h3><p style={{opacity:0.6}}>Active in vault</p></div>
              <div style={{background:'#151515', padding:20, borderRadius:12}}><h3>12 Blueprints</h3><p style={{opacity:0.6}}>Ready to use</p></div>
              <div style={{background:'#151515', padding:20, borderRadius:12}}><h3>$25 Ad System</h3><p style={{opacity:0.6}}>Mimi's Creative Ads</p></div>
            </div>
            <div style={{marginTop:30, display:'flex', gap:12, flexWrap:'wrap'}}>
              <Link href="/product-factory" className="button primary" style={{background:'white', color:'black'}}>Go to Factory →</Link>
              <Link href="/blueprints" className="button secondary" style={{border:'1px solid #333'}}>View Blueprints</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

function Blueprints() {
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <div className="container">
            <h1><FileCode size={28} style={{display:'inline'}}/> Blueprints</h1>
            <p>This was giving you 404 in Atlas OS - now fixed and inside Cozy Corner!</p>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:20, marginTop:30}}>
              <div style={{background:'white', border:'1px solid #eee', padding:24, borderRadius:16}}>
                <h3>SaaS Starter Blueprint</h3>
                <p style={{opacity:0.7, fontSize:14}}>Auth, billing, dashboard. Built for Atlas OS.</p>
                <Link href="/product-factory" style={{color:'#7EB8FF', fontSize:14, fontWeight:'bold'}}>Use Blueprint →</Link>
              </div>
              <div style={{background:'white', border:'1px solid #eee', padding:24, borderRadius:16}}>
                <h3>Ecom Store Blueprint</h3>
                <p style={{opacity:0.7, fontSize:14}}>Products, cart, Stripe - ready to sell.</p>
                <Link href="/product-factory" style={{color:'#7EB8FF', fontSize:14, fontWeight:'bold'}}>Use Blueprint →</Link>
              </div>
              <div style={{background:'white', border:'2px dashed #ddd', padding:24, borderRadius:16}}>
                <h3>+ Create Blueprint</h3>
                <p style={{opacity:0.7, fontSize:14}}>Save your best work as template</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

function Products() {
  const products = [
    {name: "La Tambora Ad Kit", status: "Active", price: "$25"},
    {name: "Dominican Flavor Pack", status: "Draft", price: "$15"},
    {name: "Atlas OS Lite Template", status: "Active", price: "$0"},
  ]
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero" style={{background:'#F0F7FF'}}>
          <div className="container">
            <h1><Box size={28} style={{display:'inline'}}/> Products</h1>
            <p>Your product vault - incorporated from app/(dashboard)/products</p>
            <div style={{display:'grid', gap:12, marginTop:20}}>
              {products.map(p => (
                <div key={p.name} style={{background:'white', padding:16, borderRadius:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div><strong>{p.name}</strong><div style={{fontSize:12, opacity:0.6}}>{p.status} • {p.price}</div></div>
                  <Link href="/product-factory"><button style={{padding:'6px 12px', borderRadius:8, border:'1px solid #ddd', background:'white'}}>Edit</button></Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

function ProductFactory() {
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero" style={{background:'#FFF0F5'}}>
          <div className="container" style={{maxWidth:700}}>
            <h1><Factory size={28} style={{display:'inline'}}/> Product Factory</h1>
            <p>Build products with AI - Atlas OS feature now in Cozy Corner</p>
            <div style={{background:'white', padding:24, borderRadius:16, marginTop:20, boxShadow:'0 4px 20px rgba(0,0,0,0.05)'}}>
              <label style={{fontWeight:'bold'}}>Product Name</label>
              <input placeholder="e.g. Cozy Ad Template for Restaurants" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:8}}/>
              <label style={{fontWeight:'bold', marginTop:16, display:'block'}}>Blueprint</label>
              <select style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:8}}>
                <option>SaaS Starter</option>
                <option>Ecom Store</option>
                <option>Mimi's $25 Ad Template</option>
              </select>
              <button className="button primary" style={{width:'100%', marginTop:20, justifyContent:'center'}}>Generate Product with AI ✨</button>
              <p style={{fontSize:12, opacity:0.5, marginTop:12, textAlign:'center'}}>This is frontend demo - connect Supabase later for full Atlas OS power</p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

function CreativeAds() {
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <div className="container" style={{maxWidth:720}}>
            <div style={{textAlign:'center'}}><img src={creativeAdsLogo} alt="logo" style={{maxWidth:220, margin:'0 auto 20px', borderRadius:12}}/><h1>Mimi's Creative Ads - $25</h1></div>
            <div style={{background:'white', borderRadius:20, padding:24, marginTop:20}}>
              <img src={laTambora} alt="La Tambora" style={{width:'100%', borderRadius:16, marginBottom:20}}/>
              <h2 style={{textAlign:'center'}}>🇩🇴🔥 REAL DOMINICAN FLAVOR. REAL GOOD.</h2>
              <p style={{textAlign:'center'}}>📲 Follow @LATAMBORA405</p>
              <div style={{background:'#FFF7F0', border:'2px dashed #FF9A6A', borderRadius:16, padding:24, textAlign:'center', marginTop:20}}>
                <h2>✨ LIKE THIS AD? $25!</h2>
                <Link href="/contact" className="button primary">📩 Message Me <ArrowRight size={18}/></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
function Contact() { return <><Header/><main><section className="page-hero"><div className="container" style={{maxWidth:600, textAlign:'center'}}><h1>Contact Mimi</h1><p>DM @mimis_corner_co • Atlas OS + Ads</p></div></section></main><Footer/></> }

export default function App() {
  return (
    <Switch>
      <Route path="/"><Home/></Route>
      <Route path="/dashboard"><Dashboard/></Route>
      <Route path="/blueprints"><Blueprints/></Route>
      <Route path="/products"><Products/></Route>
      <Route path="/product-factory"><ProductFactory/></Route>
      <Route path="/creative-ads"><CreativeAds/></Route>
      <Route path="/atlas-os"><Dashboard/></Route>
      <Route path="/housing"><div><Header/><main><section className="page-hero"><div className="container"><h1>Housing</h1><p>Coming soon</p></div></section></main><Footer/></div></Route>
      <Route path="/finds"><div><Header/><main><section className="page-hero"><div className="container"><h1>Finds</h1><p>Coming soon</p></div></section></main><Footer/></div></Route>
      <Route path="/contact"><Contact/></Route>
      <Route><Home/></Route>
    </Switch>
  )
}