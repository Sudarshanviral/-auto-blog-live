import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import { getAllBlogs, getFeaturedBlogs } from '../lib/blogs'
import { NICHES } from '../lib/niches'
import Link from 'next/link'

export default function Home() {
  const allBlogs = getAllBlogs()
  const featured = allBlogs.slice(0, 3)
  const recent = allBlogs.slice(3, 9)
  const hasBlogs = allBlogs.length > 0

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '4rem 1.5rem', borderBottom: '4px solid var(--accent)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="fade-up">
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: '1rem' }}>
                  🤖 AI AUTO-BLOG • हर 3 घंटे में नया पोस्ट
                </div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  10 Niches.<br />
                  <span style={{ color: 'var(--accent)' }}>Infinite</span> Content.
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '500px' }}>
                  AI द्वारा automatically generate और publish होने वाला blog। DeepSeek V3 content लिखता है, Gemini images बनाता है — सब ₹0 में।
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                  {['🤖 DeepSeek V3', '🖼️ Gemini Images', '⚡ GitHub Actions', '🚀 Vercel Free'].map(item => (
                    <span key={item} style={{ padding: '0.35rem 0.8rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.6)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Live Niche Counter */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {NICHES.slice(0, 6).map((niche, i) => (
                  <Link key={niche.id} href={`/${niche.slug}`} style={{ textDecoration: 'none' }}>
                    <div 
                      style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s', animationDelay: `${i * 0.1}s` }}
                      className="fade-up"
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = niche.accentColor }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    >
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{niche.emoji}</div>
                      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.85rem', fontWeight: 700, color: niche.accentColor }}>{niche.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Niches Horizontal Scroll */}
        <section style={{ padding: '2rem 1.5rem', background: '#f5f0e8', borderBottom: '1px solid #e8e3db' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ overflowX: 'auto', display: 'flex', gap: '1rem', paddingBottom: '0.5rem' }}>
              {NICHES.map(niche => (
                <Link key={niche.id} href={`/${niche.slug}`} style={{ textDecoration: 'none', flexShrink: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: 'var(--ink)', borderRadius: '2px', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <span>{niche.emoji}</span>
                    <span style={{ color: niche.accentColor, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{niche.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        {hasBlogs && featured.length > 0 && (
          <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 900 }}>Featured Posts</h2>
              <div style={{ flex: 1, height: '1px', background: '#e0dbd3' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>LATEST AI-GENERATED</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {featured.map((blog, i) => (
                <div key={blog.slug} className={`fade-up-delay-${i}`}>
                  <BlogCard blog={blog} size={i === 0 ? 'large' : 'normal'} />
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* No blogs yet */}
        {!hasBlogs && (
          <section style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ padding: '3rem', background: '#f5f0e8', border: '2px dashed #d0c9be', borderRadius: '4px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', marginBottom: '1rem' }}>Blog Ready है!</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>GitHub Actions setup होते ही हर 3 घंटे में auto blog generate होगा।</p>
              <code style={{ display: 'block', background: 'var(--ink)', color: '#7ef7a0', padding: '1rem', borderRadius: '4px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', textAlign: 'left' }}>
                npm run generate<br/>
                # या GitHub Actions wait करें
              </code>
            </div>
          </section>
        )}
        
        {/* Recent Posts Grid */}
        {recent.length > 0 && (
          <section style={{ padding: '0 1.5rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700 }}>Recent Posts</h2>
              <div style={{ flex: 1, height: '1px', background: '#e0dbd3' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {recent.map(blog => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </section>
        )}
        
        {/* Niche Sections */}
        <section style={{ padding: '3rem 1.5rem', background: '#f0ebe3', borderTop: '1px solid #e0dbd3' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.5rem', textAlign: 'center' }}>सभी 10 Niches</h2>
            <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '2.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>
              TOP HIGH-DEMAND NICHES OF 2026
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
              {NICHES.map(niche => (
                <Link key={niche.id} href={`/${niche.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: 'var(--ink)', padding: '1.5rem', borderRadius: '4px', transition: 'transform 0.2s', border: `1px solid rgba(255,255,255,0.05)` }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = niche.accentColor }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{niche.emoji}</div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: niche.accentColor, marginBottom: '0.25rem' }}>{niche.name}</h3>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>{niche.hindiName}</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{niche.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
