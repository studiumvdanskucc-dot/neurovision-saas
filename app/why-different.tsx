type WhyDifferentProps = {
  id?: string;
};

export function WhyDifferent({ id }: WhyDifferentProps) {
  return (
    <section className="section sv-control" id={id}>
      <div className="container">
        <div className="sv-control-head">
          <div>
            <p className="kicker light">Why NeuroVision is different</p>
            <h2>Our model. Our research. Your data control.</h2>
          </div>
          <p>
            Our own attention model, research-grade data and the option to connect
            your own API keys give you a clearer view of how your creative is tested.
          </p>
        </div>
        <div className="sv-control-grid">
          <article>
            <span>EU</span>
            <div><small>01 · Infrastructure</small><h3>Our own model, deployed in Europe.</h3></div>
            <p>
              NeuroVision’s proprietary attention model runs on European
              infrastructure—giving us tighter control over performance,
              deployment and the scientific roadmap.
            </p>
          </article>
          <article>
            <span className="sv-network-icon" aria-hidden="true">
              <em /><em /><em /><em />
              <i /><i /><i /><i /><i />
            </span>
            <div><small>02 · Research signal</small><h3>Millions of research-grade data points.</h3></div>
            <p>
              The model is informed by millions of gaze and fixation signals
              captured with research-grade devices, including EyeLink 1000, and
              strengthened by data collected at Aarhus University.
            </p>
          </article>
          <article>
            <span>API</span>
            <div><small>03 · Data control</small><h3>Bring your keys. Keep control in-house.</h3></div>
            <p>
              Connect supported providers with your own API keys so usage runs
              under your contracts, policies and billing—keeping the data path
              aligned with your organisation’s governance.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
