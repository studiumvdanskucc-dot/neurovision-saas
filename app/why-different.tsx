// "Why NeuroVision is different", shown on the Science and About pages.
// Wording rules: the attention model builds on the published DeepGaze research;
// ImageNet, SALICON and MIT1003 are public datasets NeuroVision did not collect;
// SALICON annotations are mouse-based, not eye tracking; only the Aarhus
// University EyeLink 1000 recordings are NeuroVision's own (proprietary) data.
import { Cite } from "./science/references";

type WhyDifferentProps = {
  id?: string;
  /** Set on pages other than Science, so citations open the Science page's reference list. */
  citesOnSciencePage?: boolean;
};

const lineage = [
  { source: "ImageNet", what: "Learned visual representations", kind: "Public dataset" },
  { source: "SALICON", what: "Large-scale saliency annotations, collected with mouse tracking rather than eye tracking", kind: "Public dataset" },
  { source: "MIT1003", what: "Eye-tracking recordings with documented calibration procedures", kind: "Public dataset" },
  { source: "Aarhus University", what: "Gaze recordings with an EyeLink 1000, used for fine-tuning", kind: "Proprietary data" },
];

export function WhyDifferent({ id, citesOnSciencePage = false }: WhyDifferentProps) {
  return (
    <section className="section sv-control" id={id}>
      <div className="container">
        <div className="sv-control-head">
          <div>
            <h2>Why NeuroVision is different.</h2>
          </div>
        </div>
        <div className="sv-control-grid">
          <article className="sv-model-card">
            <span aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 12 24 24 36 12M24 24 36 36M24 24 12 36"/><circle cx="12" cy="12" r="4" fill="var(--paper)"/><circle cx="36" cy="12" r="4" fill="var(--paper)"/><circle cx="24" cy="24" r="5" fill="var(--paper)"/><circle cx="12" cy="36" r="4" fill="var(--paper)"/><circle cx="36" cy="36" r="4" fill="var(--paper)"/></svg>
            </span>
            <div><h3>Built on established attention research. Refined with proprietary gaze data.</h3></div>
            <p>
              Our attention model builds on the published DeepGaze training approach. It combines visual representations learned from ImageNet, large-scale saliency annotations from SALICON, collected by tracking mouse movements, and eye-tracking data from MIT1003, which was recorded with documented calibration procedures <Cite page={citesOnSciencePage} ids={["ref-judd", "ref-deepgaze-iie"]} />.
            </p>
            <p>
              We further fine-tuned the model using <strong>proprietary gaze recordings collected at Aarhus University with an EyeLink 1000</strong>.
            </p>
            <p>
              This combines established computational vision research with research-specific gaze recordings to develop a model adapted to our application.
            </p>
            <ol className="model-lineage" aria-label="Model foundations">
              {lineage.map(step => <li className={step.kind === "Proprietary data" ? "is-own" : undefined} key={step.source}><b>{step.source}</b><span>{step.what}</span><small>{step.kind}</small></li>)}
            </ol>
          </article>
          <article>
            <span>EU</span>
            <div><h3>European infrastructure. Direct model control.</h3></div>
            <p>
              Our attention model is deployed and maintained on European servers. This gives us direct control over the model version used to analyse creative assets and the infrastructure through which the analysis is delivered.
            </p>
          </article>
          <article>
            <span>API</span>
            <div><h3>Bring your own AI infrastructure</h3></div>
            <p>
              Use supported AI providers through your own API keys and billing arrangements. Requests follow the relevant provider agreements, data-processing terms and organisational policies.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
