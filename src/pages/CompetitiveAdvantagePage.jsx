import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Diamond, TrendingUp, Layers } from 'lucide-react';

const advantages = [
  {
    icon: <TrendingUp size={28} />,
    title: '1. Valuable',
    description: 'We provide immense value by offering a wide range of products sourced from China, tailored specifically to the unique needs of each client. Our order-based model ensures you only pay for what you need, eliminating unnecessary inventory costs. This saves time and money while meeting your exact demands. Additionally, our logistics expertise streamlines the entire process, ensuring fast, reliable deliveries.',
    tag: 'Value Creation',
  },
  {
    icon: <Diamond size={28} />,
    title: '2. Rare',
    description: 'Our on-demand business model and customized logistics make us stand out. While many operate with large inventories or fixed offerings, we offer flexibility—adapting to your needs rather than imposing a one-size-fits-all solution. Furthermore, our deep understanding of the Tunisian B2B market and its specific challenges gives us a rare advantage in delivering practical, efficient solutions.',
    tag: 'Market Rarity',
  },
  {
    icon: <Shield size={28} />,
    title: '3. Inimitable',
    description: 'We build and maintain strong supplier relationships in China—a network that is difficult for competitors to replicate. Over the years, we’ve cultivated connections ensuring top quality and compliance. Our adaptable logistics system, fine-tuned through years of experience and careful planning, is a process shaped by industry expertise that cannot be easily imitated by newcomers.',
    tag: 'Barriers to Entry',
  },
  {
    icon: <Layers size={28} />,
    title: '4. Organized',
    description: 'Our business is structured to fully leverage these strengths. We have dedicated teams for sourcing, logistics, and customer service working in harmony to handle every order smoothly from start to finish. Whether working with customs brokers or selecting the right shipping method, every aspect of our process is organized to provide the most seamless and cost-effective service.',
    tag: 'Operational Execution',
  },
];

const comparisonRows = [
  { attr: 'Yingli Solar Exclusivity', us: true, typical: false },
  { attr: 'Order-Based (No Min. Inventory)', us: true, typical: false },
  { attr: 'End-to-End (Source → Customs)', us: true, typical: false },
  { attr: 'Multilingual (4 Languages)', us: true, typical: false },
  { attr: 'Verified Suppliers Only', us: true, typical: false },
  { attr: 'Tunisia-Based Operations', us: true, typical: false },
];

export default function CompetitiveAdvantagePage() {
  return (
    <main style={{ paddingTop: '6rem', position: 'relative', zIndex: 10 }}>
      {/* Hero */}
      <section className="ca-hero section">
        <div className="container">
          <div className="section-label-center">Our Competitive Advantage</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)' }}>
            What Makes Us <span>Different</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto 4rem' }}>
            At Sino-Tunisian Commercial Cooperation, we leverage a unique approach that combines flexibility, market expertise, and strategic partnerships. Here is how we differentiate ourselves through the <strong>VRIO Framework</strong>.
          </p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="ca-grid">
            {advantages.map((adv, i) => (
              <div key={i} className={`glass-panel ca-card sustained`}>
                <div className="ca-icon">{adv.icon}</div>
                <div className="ca-tag">{adv.tag}</div>
                <h3 className="ca-title">{adv.title}</h3>
                <p className="ca-desc">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section comparison-section">
        <div className="container">
          <h2 className="section-title">Us vs. <span>Typical Intermediaries</span></h2>
          <div className="table-wrap glass-panel">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Sino Tunisian CC</th>
                  <th>Typical Intermediary</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.attr}</td>
                    <td className={row.us ? 'tick' : 'cross'}>{row.us ? '✓' : '✗'}</td>
                    <td className={row.typical ? 'tick' : 'cross'}>{row.typical ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box glass-panel">
            <h2>Why You Must Work With Us</h2>
            <p>
              Our approach doesn't just solve the logistical challenges of importing from China—it creates an opportunity for your business to thrive. With a strong foundation in supply chain flexibility, cost efficiency, and market knowledge, we offer a service that adapts as your business evolves.
            </p>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.1rem' }}>
              We're not just your supplier—we're your strategic partner, focused on driving growth and success through tailored solutions.
            </p>
            <Link to="/#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Partner With Us <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Sino Tunisian Commercial Cooperation · ahmed@sinotuncc.com · +216 52 773 919</p>
        </div>
      </footer>

      <style>{`
        .ca-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 700px) {
          .ca-grid { grid-template-columns: 1fr; }
        }
        .ca-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: var(--transition);
        }
        .ca-card:hover {
          transform: translateY(-4px);
          border-color: rgba(207,165,112,0.3);
        }
        .ca-card.sustained {
          border-color: rgba(207,165,112,0.2);
        }
        .ca-icon {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: rgba(207,165,112,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }
        .ca-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-accent);
        }
        .ca-card.temporary .ca-tag {
          color: #a0aec0;
        }
        .ca-title {
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .ca-desc {
          color: var(--color-text-muted);
          font-size: 0.93rem;
          line-height: 1.7;
        }
        .comparison-section { padding-top: 0; }
        .table-wrap {
          overflow-x: auto;
          border-radius: 12px;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .comparison-table th {
          padding: 1.25rem 1.5rem;
          text-align: left;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          border-bottom: 1px solid var(--color-border);
        }
        .comparison-table th:nth-child(2),
        .comparison-table th:nth-child(3) {
          text-align: center;
        }
        .comparison-table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        .comparison-table td.tick {
          text-align: center;
          color: var(--color-accent);
          font-size: 1.25rem;
          font-weight: 700;
        }
        .comparison-table td.cross {
          text-align: center;
          color: rgba(255,255,255,0.25);
          font-size: 1.25rem;
        }
        .comparison-table tr:hover td {
          background: rgba(255,255,255,0.02);
        }
        .cta-section { padding-top: 0; padding-bottom: 6rem; }
        .cta-box {
          padding: 4rem 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          background: rgba(207,165,112,0.04) !important;
          border-color: rgba(207,165,112,0.2) !important;
        }
        .cta-box h2 {
          font-size: 2rem;
          font-weight: 700;
        }
        .cta-box p {
          color: var(--color-text-muted);
          max-width: 480px;
        }
        .site-footer {
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-size: 0.875rem;
          position: relative;
          z-index: 10;
          background: rgba(10,15,26,0.9);
        }
        .section-label-center {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          text-align: center;
          margin-bottom: 0.75rem;
        }
        .section-subtitle {
          text-align: center;
          color: var(--color-text-muted);
          margin: 0 auto 3rem;
          font-size: 1rem;
          line-height: 1.8;
        }
      `}</style>
    </main>
  );
}
