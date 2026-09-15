type WhyDifferentProps = {
  id?: string;
};

export function WhyDifferent({ id }: WhyDifferentProps) {
  return (
    <section className="section sv-control" id={id}>
      <div className="container">
        <div className="sv-control-head">
          <div>
            <h2>Why NeuroVision is different.</h2>
          </div>
        </div>
        <div className="sv-control-grid">
          <article>
            <span>EU</span>
            <div><h3>Our model, hosted in Europe.</h3></div>
            <p>
              We develop our own attention model and run it on European servers.
              That gives us direct control over its performance and development.
            </p>
          </article>
          <article>
            <span className="sv-network-icon" aria-hidden="true">
              <em /><em /><em /><em />
              <i /><i /><i /><i /><i />
            </span>
            <div><h3>Millions of research data points.</h3></div>
            <p>
              Our model draws on gaze and fixation data collected with devices
              including EyeLink 1000, and on research data collected at Aarhus University.
            </p>
          </article>
          <article>
            <span>API</span>
            <div><h3>Connect your own API keys.</h3></div>
            <p>
              Use supported providers under your own contracts and billing.
              Choose the setup that fits your organisation’s data policies.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
