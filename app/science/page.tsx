import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-shell";
import { WhyDifferent } from "../why-different";
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
  return <><Header /><main id="main-content">
        <section className="sv-hero">
          <div className="sv-orb sv-orb-a" />
          <div className="sv-orb sv-orb-b" />
          <div className="container sv-hero-grid">
            <div className="sv-hero-copy">
              <p className="kicker">Science &amp; validation</p>
              <h1>How we test what we predict.</h1>
              <p className="sv-lead">
                Where do people look? What do they understand? Does a new design
                improve the outcome? NeuroVision connects these questions in one
                workflow, with a separate evidence standard for each step.
              </p>
              <div className="sv-status-row">
                <span>Aarhus validation programme</span>
                <span>Results not yet published here</span>
              </div>
              <p className="sv-citation-line">
                Early gaze is shaped by visual saliency and scene structure, while
                task and context increasingly influence what happens next{" "}
                <a href="#ref-itti-koch">(Itti &amp; Koch, 2001)</a>{" "}
                <a href="#ref-tatler">(Tatler et al., 2011)</a>.
              </p>
              <nav className="research-nav" aria-label="Science sections"><a href="#evidence">Foundations</a><a href="#closed-loop">Workflow</a><a href="#aarhus-study">Validation</a><a href="#references">References</a></nav>
            </div>

            <aside className="sv-hero-model" aria-label="NeuroVision evidence loop summary">
              <div className="sv-process-loop">
                <span className="sv-process-ring" aria-hidden="true" />
                <span className="sv-process-arrow sv-process-arrow-a" aria-hidden="true">→</span>
                <div className="sv-process-center">
                  <strong>Test.<br />Learn.<br />Repeat.</strong>
                </div>
                <ol>
                  <li className="sv-process-node sv-process-node-a"><a href="#research-see"><i>01</i><b>See</b></a></li>
                  <li className="sv-process-node sv-process-node-b"><a href="#research-understand"><i>02</i><b>Understand</b></a></li>
                  <li className="sv-process-node sv-process-node-c"><a href="#research-improve"><i>03</i><b>Improve</b></a></li>
                  <li className="sv-process-node sv-process-node-d"><a href="#research-re-test"><i>04</i><b>Re-test</b></a></li>
                </ol>
              </div>
            </aside>
          </div>
        </section>


    <section className="section science-foundations" id="evidence"><div className="reading-width">
      <div className="section-head"><div><h2>Scientific foundations</h2></div><p>Attention is a starting point. Understanding the message and improving the creative are separate steps.</p></div>
      <article className="science-chapter"><h3>What guides visual attention?</h3><p>Contrast, colour, faces, text and the arrangement of objects help guide our opening glance. This is often called <em>visual saliency</em>: how much something stands out in a scene. Our goals, experience and the context also shape what we look at <a href="#ref-itti-koch">(Itti &amp; Koch, 2001)</a> <a href="#ref-bruce-tsotsos">(Bruce &amp; Tsotsos, 2009)</a> <a href="#ref-tatler">(Tatler et al., 2011)</a>.</p><p className="practical-meaning"> A striking background can compete with the product. Attention analysis helps you check whether the intended message has enough visual presence.</p></article>
      <article className="science-chapter"><h3>What does a heatmap predict?</h3><p>Modern models estimate how likely different parts of an image are to receive a fixation — a brief pause of the eyes. A heatmap makes that distribution visible. It describes a pattern across viewers, rather than the exact path of one person’s eyes <a href="#ref-deepgaze-ii">(Kümmerer et al., 2016)</a> <a href="#ref-deepgaze-iie">(Linardos et al., 2021)</a>.</p><p>To know whether a model is useful, its predictions need to be compared with human eye-tracking on images it has not been evaluated or tuned on. Different metrics reveal different strengths and errors; one attractive map or headline score is not enough <a href="#ref-bylinskii">(Bylinskii et al., 2019)</a>.</p><p className="practical-meaning"> Use the map to compare visual hierarchy. Looking at a headline does not, by itself, show that someone understood or believed it.</p></article>
      <article className="science-chapter"><h3>What can AI audience feedback tell us?</h3><p>AI agents can answer structured questions from selected audience profiles. Research explores when these simulations reflect aspects of human behaviour, including the role of grounding agents in information about real people <a href="#ref-horton">(Horton, 2023)</a> <a href="#ref-mei">(Mei et al., 2024)</a> <a href="#ref-park">(Park et al., 2024)</a>.</p><p>That does not make simulated answers interchangeable with a human research panel. They can miss variation and reflect bias. NeuroVision uses them to explore possible interpretations; comparison and calibration against human responses form a separate part of our validation programme.</p><p className="practical-meaning"> Screen for clarity, trust and relevance. Use the findings to prioritise ideas and decide what to ask real customers.</p></article>
    </div></section>

    <ScienceLoop />

    <section className="section validation-section" id="aarhus-study"><div className="reading-width">
      <div className="section-head"><div><h2>The Aarhus validation programme</h2></div><p>We are evaluating three links in the chain: the predicted attention, the simulated interpretation and the effect of changing the creative.</p></div>
      <p className="validation-status">Programme described here; results and an updated readout date are pending publication on this page.</p>
      <article className="study-chapter"><h3>A. Do predictions match human gaze?</h3><p>We compare NeuroVision heatmaps with eye movements recorded using EyeLink equipment, across a fixed set of static ads. We look at both the opening glance and the full viewing window.</p><div className="research-method"><h4>How we measure it</h4><div><p><strong>Viewing windows.</strong> The full window is 0–2,000 milliseconds. The early window is 0–800 milliseconds or the first fixations.</p><p><strong>Primary metric.</strong> SIM measures the overlap between normalised fixation-density maps. The predeclared target is a mean SIM of at least 0.93 on the locked benchmark. This is a target, not an achieved result or a “93% accuracy” claim.</p><p><strong>Supporting measures.</strong> CC checks how the maps vary together; NSS evaluates predicted saliency at human fixation locations; AUC-Judd evaluates how the map distinguishes fixated locations from other image locations. We also inspect areas of interest (AOIs): the brand, product, headline and CTA. Multiple measures help avoid relying on one score <a href="#ref-bylinskii">(Bylinskii et al., 2019)</a>.</p></div></div></article>
      <article className="study-chapter"><h3>B. Do simulated and human answers agree?</h3><p>AI profiles and independent human participants receive the same questions and answer options. We check whether they rank the creatives similarly, and whether the pattern of answers agrees across audience groups.</p><div className="research-method"><h4>How we measure it</h4><div><p><strong>Like-for-like questions.</strong> The study uses identical questionnaires and defined demographic groups for the human and simulated samples.</p><p><strong>More than an average.</strong> We examine error in average responses, the distribution of answers and agreement in how creatives are ranked.</p><p><strong>Separate calibration and evaluation.</strong> One subset is used to identify and adjust systematic differences. An independent holdout checks whether those adjustments carry over to data not used for calibration.</p></div></div></article>
      <article className="study-chapter"><h3>C. Does the revised design improve the outcome?</h3><p>We compare original and regenerated creatives under the same brand constraints. The question is whether important elements receive more attention and the message becomes clearer.</p><div className="research-method"><h4>How we measure it</h4><div><p><strong>A fair creative brief.</strong> Logos, packshots and legal elements are locked. The editable parts are defined before regeneration.</p><p><strong>A fair exposure.</strong> Fresh participants or balanced assignments limit the effect of having already seen another version of the same ad.</p><p><strong>Outcomes that matter.</strong> The comparison includes attention on the intended elements, message clarity, brand compliance, time and cost. A visual redesign alone is not evidence of improvement.</p></div></div></article>
      <div className="research-method study-method"><h3>How we keep the benchmark accountable</h3><div><p><strong>Lock the benchmark.</strong> The evaluation set and scoring rules are fixed before scoring, so the test cannot be reshaped around a favourable result.</p><p><strong>Show uncertainty.</strong> Report 95% confidence intervals alongside the scores, rather than presenting a single number as certain.</p><p><strong>Compare people with people.</strong> Human-to-human consistency provides context for what the dataset can support. Published claims will name the dataset, metric and uncertainty used <a href="#ref-bylinskii">(Bylinskii et al., 2019)</a>.</p></div></div>
    </div></section>

    <section className="section science-position soft-section"><div className="reading-width"><h2>What the evidence can tell us</h2><p>NeuroVision helps teams screen, compare and improve creative while changes are still easy to make. It predicts patterns across audiences; it does not guarantee what any individual will notice, feel or buy.</p><p>For consequential launch decisions, combine these findings with human research or real campaign testing. The research cited here explains the scientific foundations; it is not, by itself, a validation of NeuroVision’s performance.</p></div></section>

    <WhyDifferent />

    <section className="section science-references" id="references"><div className="reading-width"><div className="section-head"><div><h2>References</h2></div><p>Every source cited on this page. Links open the original publication or its record.</p></div><ol className="reference-list">{references.map((reference,index)=><li id={reference.id} key={reference.id}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{reference.lead}</strong><p>{reference.text}</p><a href={reference.href} target="_blank" rel="noreferrer">Read the source ↗</a></div></li>)}</ol><Link className="text-link" href="/how-it-works">See the science in the workflow →</Link></div></section>
  </main><Footer /></>;
}
