type WhyDifferentProps = { id?: string };

export function WhyDifferent({ id }: WhyDifferentProps) {
  return <section className="section difference-section" id={id}><div className="container">
    <div className="section-head"><p className="kicker">Why NeuroVision is different</p><h2>Our own model.<br />A stronger foundation.</h2><p>Research, infrastructure and data control are part of the product from the start.</p></div>
    <div className="difference-grid">
      <article><span className="difference-icon" aria-hidden="true">EU</span><h3>Built by us.<br />Deployed in Europe.</h3><p>Our proprietary attention model runs on European infrastructure. We control its development, performance and scientific roadmap.</p></article>
      <article><span className="difference-icon network-icon" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M8 9 20 20 32 9M8 31 20 20 32 31M8 9v22m24-22v22" stroke="currentColor" strokeWidth="1.5"/><circle cx="8" cy="9" r="3" fill="currentColor"/><circle cx="32" cy="9" r="3" fill="currentColor"/><circle cx="20" cy="20" r="4" fill="currentColor"/><circle cx="8" cy="31" r="3" fill="currentColor"/><circle cx="32" cy="31" r="3" fill="currentColor"/></svg></span><h3>Millions of research-grade data points.</h3><p>Gaze and fixation signals captured with high-end devices, including EyeLink 1000, and data collected at Aarhus University inform our model.</p></article>
      <article><span className="difference-icon" aria-hidden="true">API</span><h3>Your keys.<br />Your provider choice.</h3><p>Connect supported providers with your own API keys, under your agreements and billing. Processing and retention depend on the providers and configuration you choose.</p></article>
    </div>
  </div></section>;
}
