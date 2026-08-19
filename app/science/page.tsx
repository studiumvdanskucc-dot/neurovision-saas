import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { ScienceLoop } from "./science-experience";

export const metadata: Metadata = {
  title: "Science & Validation",
  description:
    "The scientific evidence, closed-loop workflow and Aarhus University validation programme behind NeuroVision.",
};

const references = [
  {
    id: "ref-bruce-tsotsos",
    lead: "Bruce & Tsotsos, 2009",
    text: "Bruce, N. D. B., & Tsotsos, J. K. Saliency, attention, and visual search: An information theoretic approach. Journal of Vision, 9(3), Article 5.",
    href: "https://doi.org/10.1167/9.3.5",
  },
  {
    id: "ref-bylinskii",
    lead: "Bylinskii et al., 2019",
    text: "Bylinskii, Z., Judd, T., Oliva, A., Torralba, A., & Durand, F. What do different evaluation metrics tell us about saliency models? IEEE TPAMI, 41(3), 740-757.",
    href: "https://doi.org/10.1109/TPAMI.2018.2815601",
  },
  {
    id: "ref-horton",
    lead: "Horton, 2023",
    text: "Horton, J. J. Large language models as simulated economic agents: What can we learn from Homo silicus? NBER Working Paper 31122.",
    href: "https://doi.org/10.3386/w31122",
  },
  {
    id: "ref-itti-koch",
    lead: "Itti & Koch, 2001",
    text: "Itti, L., & Koch, C. Computational modelling of visual attention. Nature Reviews Neuroscience, 2(3), 194-203.",
    href: "https://doi.org/10.1038/35058500",
  },
  {
    id: "ref-deepgaze-ii",
    lead: "Kümmerer et al., 2016",
    text: "Kümmerer, M., Wallis, T. S. A., & Bethge, M. DeepGaze II: Reading fixations from deep features trained on object recognition.",
    href: "https://doi.org/10.48550/arXiv.1610.01563",
  },
  {
    id: "ref-deepgaze-iie",
    lead: "Linardos et al., 2021",
    text: "Linardos, A., Kümmerer, M., Press, O., & Bethge, M. DeepGaze IIE: Calibrated prediction in and out-of-domain for state-of-the-art saliency modeling.",
    href: "https://doi.org/10.48550/arXiv.2105.12441",
  },
  {
    id: "ref-mei",
    lead: "Mei et al., 2024",
    text: "Mei, Q., Xie, Y., Yuan, W., & Jackson, M. O. A Turing test of whether AI chatbots are behaviorally similar to humans. PNAS, 121(9), e2313925121.",
    href: "https://doi.org/10.1073/pnas.2313925121",
  },
  {
    id: "ref-park",
    lead: "Park et al., 2024",
    text: "Park, J. S., et al. LLM agents grounded in self-reports enable general-purpose simulation of individuals.",
    href: "https://doi.org/10.48550/arXiv.2411.10109",
  },
  {
    id: "ref-tatler",
    lead: "Tatler et al., 2011",
    text: "Tatler, B. W., Hayhoe, M. M., Land, M. F., & Ballard, D. H. Eye guidance in natural vision: Reinterpreting salience. Journal of Vision, 11(5), Article 5.",
    href: "https://doi.org/10.1167/11.5.5",
  },
];

export default function Science() {
  return (
    <>
      <Header />
      <main>
        <section className="sv-hero">
          <div className="sv-orb sv-orb-a" />
          <div className="sv-orb sv-orb-b" />
          <div className="container sv-hero-grid">
            <div className="sv-hero-copy">
              <p className="kicker">Science &amp; validation</p>
              <h1>A closed loop from human attention to better creative.</h1>
              <p className="sv-lead">
                NeuroVision connects predictive attention, structured audience
                simulation and constrained creative regeneration—then measures the
                new version against the original. The result is a decision trail,
                not a black-box opinion.
              </p>
              <div className="sv-status-row">
                <span><i /> Aarhus validation active</span>
                <span>Planned readout · late August 2026</span>
              </div>
              <p className="sv-citation-line">
                Early gaze is shaped by visual saliency and scene structure, while
                task and context increasingly influence what happens next{" "}
                <a href="#ref-itti-koch">(Itti &amp; Koch, 2001)</a>{" "}
                <a href="#ref-tatler">(Tatler et al., 2011)</a>.
              </p>
            </div>

            <aside className="sv-hero-model" aria-label="NeuroVision evidence loop summary">
              <span className="sv-hero-model-label">Evidence loop</span>
              <div className="sv-process-loop">
                <span className="sv-process-ring" aria-hidden="true" />
                <span className="sv-process-arrow sv-process-arrow-a" aria-hidden="true">→</span>
                <span className="sv-process-arrow sv-process-arrow-b" aria-hidden="true">→</span>
                <span className="sv-process-arrow sv-process-arrow-c" aria-hidden="true">→</span>
                <span className="sv-process-arrow sv-process-arrow-d" aria-hidden="true">→</span>
                <div className="sv-process-center">
                  <small>NeuroVision</small>
                  <strong>Measure.<br />Learn.<br />Improve.</strong>
                </div>
                <ol>
                  <li className="sv-process-node sv-process-node-a"><i>01</i><b>See</b></li>
                  <li className="sv-process-node sv-process-node-b"><i>02</i><b>Understand</b></li>
                  <li className="sv-process-node sv-process-node-c"><i>03</i><b>Improve</b></li>
                  <li className="sv-process-node sv-process-node-d"><i>04</i><b>Prove again</b></li>
                </ol>
              </div>
            </aside>
          </div>
        </section>

        <ScienceLoop />

        <section className="section sv-evidence" id="evidence">
          <div className="container">
            <div className="section-head sv-section-head">
              <div>
                <p className="kicker">The science, narrowed down</p>
                <h2>Three claims. Three different evidence standards.</h2>
              </div>
              <p>
                Attention, interpretation and improvement should not be compressed
                into one “AI score.” Each layer answers a different question and
                must be tested differently.
              </p>
            </div>
            <div className="sv-evidence-grid">
              <article>
                <span>01 · Attention</span>
                <h3>Early visual selection is measurable.</h3>
                <p>
                  Contrast, colour, faces, text, objects and spatial structure help
                  guide the opening moments of attention. Task and prior knowledge
                  also matter, especially as viewing continues.
                </p>
                <div className="sv-inline-refs">
                  <a href="#ref-itti-koch">Itti &amp; Koch, 2001</a>
                  <a href="#ref-bruce-tsotsos">Bruce &amp; Tsotsos, 2009</a>
                  <a href="#ref-tatler">Tatler et al., 2011</a>
                </div>
              </article>
              <article>
                <span>02 · Prediction</span>
                <h3>Fixation density can be modelled and benchmarked.</h3>
                <p>
                  Modern saliency models estimate a probability distribution over
                  likely human fixations. They are evaluated on unseen images and
                  with multiple metrics because no single metric tells the whole story.
                </p>
                <div className="sv-inline-refs">
                  <a href="#ref-deepgaze-ii">Kümmerer et al., 2016</a>
                  <a href="#ref-deepgaze-iie">Linardos et al., 2021</a>
                  <a href="#ref-bylinskii">Bylinskii et al., 2019</a>
                </div>
              </article>
              <article>
                <span>03 · Interpretation</span>
                <h3>Agentic surveys need human calibration.</h3>
                <p>
                  Synthetic agents can reproduce useful aggregate patterns, but
                  they can also compress variance or amplify bias. NeuroVision uses
                  them for structured screening and compares them with human responses.
                </p>
                <div className="sv-inline-refs">
                  <a href="#ref-horton">Horton, 2023</a>
                  <a href="#ref-mei">Mei et al., 2024</a>
                  <a href="#ref-park">Park et al., 2024</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section sv-control">
          <div className="container">
            <div className="sv-control-head">
              <div>
                <p className="kicker light">Why NeuroVision is different</p>
                <h2>Control the model, the evidence and the data path.</h2>
              </div>
              <p>
                Our advantage is not simply speed. It is a research-led system built
                for organisations that care where the model runs, what trained it and
                how sensitive creative data is handled.
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
                <span>10<sup>6+</sup></span>
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

        <section className="section sv-aarhus" id="aarhus-study">
          <div className="container">
            <div className="sv-aarhus-top">
              <div>
                <p className="kicker light">Aarhus University · study in progress</p>
                <h2>Our most rigorous evaluation to date.</h2>
                <p>
                  The programme tests the entire chain—not only whether a heatmap
                  looks plausible, but whether NeuroVision aligns with measured
                  human gaze, human interpretation and improved creative outcomes.
                </p>
              </div>
              <aside>
                <span>Pre-declared primary target</span>
                <strong>≥ 0.93 <em>SIM</em></strong>
                <p>Mean overlap of normalised fixation-density maps on a locked static-ad benchmark.</p>
                <small>Target—not yet a published result.</small>
              </aside>
            </div>

            <div className="sv-study-grid">
              <article>
                <span>Study stream A</span>
                <h3>Attention fidelity</h3>
                <p>
                  Compare NeuroVision predictions with human EyeLink fixation-density
                  maps across a locked set of static advertisements.
                </p>
                <ul>
                  <li>Full 0-2,000 ms view</li>
                  <li>Early 0-800 ms / first fixations</li>
                  <li>SIM primary; CC, NSS and AUC-Judd secondary</li>
                  <li>Brand, product, headline and CTA AOIs</li>
                </ul>
              </article>
              <article>
                <span>Study stream B</span>
                <h3>Survey fidelity</h3>
                <p>
                  Compare agentic audience outputs with independent human survey
                  responses—not only averages, but rankings and response distributions.
                </p>
                <ul>
                  <li>Identical questions and answer options</li>
                  <li>Demographic audience cells</li>
                  <li>Error, distribution and ranking agreement</li>
                  <li>Calibration subset and independent holdout</li>
                </ul>
              </article>
              <article>
                <span>Study stream C</span>
                <h3>Closed-loop uplift</h3>
                <p>
                  Diagnose, regenerate and re-test under the same brand constraints
                  to show whether the measured outcome improves—not merely the aesthetic.
                </p>
                <ul>
                  <li>Original versus regenerated creative</li>
                  <li>Locked logo, packshot and legal elements</li>
                  <li>Fresh or balanced participant exposure</li>
                  <li>Attention, clarity, compliance, time and cost</li>
                </ul>
              </article>
            </div>

            <div className="sv-method-strip">
              <span><b>Ground truth</b> Human gaze + human surveys</span>
              <span><b>Benchmark</b> Locked before scoring</span>
              <span><b>Uncertainty</b> 95% confidence intervals</span>
              <span><b>Ceiling</b> Human-to-human consistency</span>
              <span><b>Readout</b> Late August 2026</span>
            </div>
          </div>
        </section>

        <section className="sv-position">
          <div className="container sv-position-grid">
            <div><p className="kicker">Our scientific position</p><h2>A fast layer before expensive research—not a replacement for every human study.</h2></div>
            <div>
              <p>
                NeuroVision is built for rapid screening, comparison and creative
                improvement. It predicts population-level patterns; it does not
                guarantee how one person will look, feel or buy.
              </p>
              <p>
                Public claims will be tied to the specific benchmark, metric and
                confidence interval used. That is why we say “fixation-density
                overlap on a locked dataset,” not “93% the same as real people.”
              </p>
            </div>
          </div>
        </section>

        <section className="section sv-references" id="references">
          <div className="container">
            <div className="sv-references-head">
              <div><p className="kicker">Selected references</p><h2>The research behind the page.</h2></div>
              <p>
                A focused reading list from the broader NeuroVision literature review.
                DOI links open the original publication or record.
              </p>
            </div>
            <ol className="sv-reference-list">
              {references.map((reference, index) => (
                <li id={reference.id} key={reference.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{reference.lead}</strong><p>{reference.text}</p><a href={reference.href} target="_blank" rel="noreferrer">Open source ↗</a></div>
                </li>
              ))}
            </ol>
            <div className="sv-reference-cta">
              <p>Want to see the science applied to your own creative?</p>
              <Link className="btn primary" href="/how-it-works">Explore the workflow →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
