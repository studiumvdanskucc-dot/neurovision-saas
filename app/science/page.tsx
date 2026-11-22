import type { Metadata } from "next";
import { GazeStudyArt, RedesignStudyArt, SurveyStudyArt } from "../science-art";
import { EyeIcon, EyesIcon, LockIcon, RangeIcon, SurveyIcon, TeamIcon } from "../brand-icons";
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
          <div className="container sv-hero-grid">
            <div className="sv-hero-copy">
              <p className="kicker">Science &amp; validation</p>
              <h1>How we test what we predict.</h1>
              <p className="sv-lead">
                Three questions matter: where do people look, what do they understand, and does a new version do better? Each one has its own test.
              </p>
              <div className="sv-status-row">
                <span>Results so far: positive</span>
                <span>Full publication early 2027</span>
              </div>
              <p className="sv-citation-line">
                What catches the eye first depends on what stands out. What happens next depends on the viewer’s goals and the context{" "}
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


    <section className="section release-note"><div className="container">
        <div className="release-card">
          <h2>Why we’re releasing now</h2>
          <p>Our validation studies with university researchers will be officially published in early 2027. So far, every result has been positive. That’s why we’re releasing NeuroVision now: to give the industry access to state-of-the-art prediction intelligence today, not in a year.</p>
        </div>
      </div></section>

      <section className="section science-foundations" id="evidence"><div className="container">
        <div className="section-head"><div><h2>The concepts, in plain words</h2></div><p>Three ideas behind NeuroVision, and what each one means for your work.</p></div>
        <div className="concept-cards">
          <article className="concept-card concept-eye">
            <span className="concept-icon" aria-hidden="true"><EyesIcon size={24} /></span>
            <h3>What catches the eye?</h3>
            <p>In the first second, people notice what stands out: strong contrast, colour, faces and text. Scientists call this <em>visual saliency</em>. After that, what people are looking for, and where they are, matter more <a href="#ref-itti-koch">(Itti &amp; Koch, 2001)</a> <a href="#ref-bruce-tsotsos">(Bruce &amp; Tsotsos, 2009)</a> <a href="#ref-tatler">(Tatler et al., 2011)</a>.</p>
            <p className="practical-meaning"><b>In practice</b>A bold background can steal attention from your product. Attention analysis shows whether your message gets enough of it.</p>
          </article>
          <article className="concept-card concept-heat">
            <span className="concept-icon" aria-hidden="true"><EyeIcon size={24} /></span>
            <h3>What does a heatmap show?</h3>
            <p>A heatmap shows where many people are likely to look. It doesn’t show the exact path of one person’s eyes. Warm colours mean more attention <a href="#ref-deepgaze-ii">(Kümmerer et al., 2016)</a> <a href="#ref-deepgaze-iie">(Linardos et al., 2021)</a>.</p>
            <p>To trust a heatmap, it must be checked against real eye-tracking, on images the model has never seen, using more than one score <a href="#ref-bylinskii">(Bylinskii et al., 2019)</a>.</p>
            <p className="practical-meaning"><b>In practice</b>Use it to compare what stands out. Seeing a headline isn’t the same as understanding or believing it.</p>
          </article>
          <article className="concept-card concept-survey">
            <span className="concept-icon" aria-hidden="true"><SurveyIcon size={24} /></span>
            <h3>What can AI audience feedback tell you?</h3>
            <p>AI profiles answer your questions the way a chosen audience might. Research shows this can reflect real behaviour, especially when the profiles are based on real people <a href="#ref-horton">(Horton, 2023)</a> <a href="#ref-mei">(Mei et al., 2024)</a> <a href="#ref-park">(Park et al., 2024)</a>.</p>
            <p>It can’t replace a real panel, though: it can miss variety and carry bias. That’s why our studies compare AI answers with real people’s answers.</p>
            <p className="practical-meaning"><b>In practice</b>Use it to screen for clarity, trust and relevance, and to decide what to ask real customers.</p>
          </article>
        </div>
      </div></section>

    <ScienceLoop />

    <section className="section validation-section" id="aarhus-study"><div className="container">
      <div className="section-head"><div><h2>The validation programme</h2></div><p>We test three things: do our heatmaps match where people really look, do AI answers match what real people say, and does a redesigned creative actually do better?</p></div>
      <p className="validation-status"><span aria-hidden="true" />So far, every result has been positive. The full studies will be officially published in early 2027.</p>

      <div className="study-cards">
        <article className="study-card study-a">
          <GazeStudyArt />
          <div className="study-body">
            <p className="study-label">Study A · Attention</p>
            <h3>Do our heatmaps match where real people look?</h3>
            <ol className="study-steps">
              <li><b>Record real eyes.</b> People view a fixed set of ads while an EyeLink eye tracker records where their eyes go.</li>
              <li><b>Look at two moments.</b> The first glance (up to 0.8 seconds) and the full view (2 seconds).</li>
              <li><b>Overlay the maps.</b> We lay the NeuroVision heatmap over the real gaze map and measure how much they overlap.</li>
            </ol>
            <p className="study-goal"><b>What counts as a pass</b>An overlap score (SIM) of at least 0.93, fixed before testing. Results so far are positive; the published figures follow in early 2027. SIM measures how much two maps overlap, so it isn’t the same as “93% accuracy”.</p>
            <details className="study-details"><summary>Technical details</summary>
              <p><strong>Viewing windows.</strong> The full window is 0–2,000 milliseconds. The early window is 0–800 milliseconds or the first fixations.</p>
              <p><strong>Primary metric.</strong> SIM measures the overlap between normalised fixation-density maps. The predeclared target is a mean SIM of at least 0.93 on the locked benchmark. This target was fixed before testing; SIM is not the same as a “93% accuracy” claim.</p>
              <p><strong>Supporting measures.</strong> CC checks how the maps vary together; NSS evaluates predicted saliency at human fixation locations; AUC-Judd evaluates how the map distinguishes fixated locations from other image locations. We also inspect areas of interest (AOIs): the brand, product, headline and CTA. Multiple measures help avoid relying on one score <a href="#ref-bylinskii">(Bylinskii et al., 2019)</a>.</p>
            </details>
          </div>
        </article>

        <article className="study-card study-b">
          <SurveyStudyArt />
          <div className="study-body">
            <p className="study-label">Study B · Audience</p>
            <h3>Do AI answers match what real people say?</h3>
            <ol className="study-steps">
              <li><b>Same questions.</b> Real participants and AI profiles from the same audience groups answer the same questionnaire, with the same options.</li>
              <li><b>More than an average.</b> We compare the spread of answers and the order in which each group ranks the creatives.</li>
              <li><b>Tune, then check fresh.</b> We adjust for differences on one part of the data, then test on a separate part we never tuned on.</li>
            </ol>
            <p className="study-goal"><b>What counts as a pass</b>The AI panel ranks creatives the way people do, across audience groups, on data it has not seen before.</p>
            <details className="study-details"><summary>Technical details</summary>
              <p><strong>Like-for-like questions.</strong> The study uses identical questionnaires and defined demographic groups for the human and simulated samples.</p>
              <p><strong>More than an average.</strong> We examine error in average responses, the distribution of answers and agreement in how creatives are ranked.</p>
              <p><strong>Separate calibration and evaluation.</strong> One subset is used to identify and adjust systematic differences. An independent holdout checks whether those adjustments carry over to data not used for calibration.</p>
            </details>
          </div>
        </article>

        <article className="study-card study-c">
          <RedesignStudyArt />
          <div className="study-body">
            <p className="study-label">Study C · Improvement</p>
            <h3>Does a redesigned creative actually do better?</h3>
            <ol className="study-steps">
              <li><b>A fair brief.</b> Logos, packshots and legal text are locked. We decide in advance which parts may change.</li>
              <li><b>Fresh eyes.</b> Each participant sees only the original or the new version, so nobody is influenced by having seen both.</li>
              <li><b>Results that matter.</b> Attention on the important parts, message clarity, brand fit, time and cost.</li>
            </ol>
            <p className="study-goal"><b>What counts as a pass</b>The new version does better on these measures. A new look on its own is not evidence of improvement.</p>
            <details className="study-details"><summary>Technical details</summary>
              <p><strong>A fair creative brief.</strong> Logos, packshots and legal elements are locked. The editable parts are defined before regeneration.</p>
              <p><strong>A fair exposure.</strong> Fresh participants or balanced assignments limit the effect of having already seen another version of the same ad.</p>
              <p><strong>Outcomes that matter.</strong> The comparison includes attention on the intended elements, message clarity, brand compliance, time and cost. A visual redesign alone is not evidence of improvement.</p>
            </details>
          </div>
        </article>
      </div>

      <div className="study-rules">
        <h3>How we keep ourselves honest</h3>
        <div>
          <article><span aria-hidden="true"><LockIcon size={22} /></span><h4>Rules fixed first</h4><p>The test images and scoring rules are locked before scoring, so the test can’t be reshaped around a good result.</p></article>
          <article><span aria-hidden="true"><RangeIcon size={22} /></span><h4>Uncertainty shown</h4><p>Scores come with 95% confidence intervals, never as a single number presented as certain.</p></article>
          <article><span aria-hidden="true"><TeamIcon size={22} /></span><h4>People as the yardstick</h4><p>How consistent people are with each other sets what the data can support. Published claims will name the dataset, metric and uncertainty <a href="#ref-bylinskii">(Bylinskii et al., 2019)</a>.</p></article>
        </div>
      </div>
    </div></section>

    <section className="section science-position soft-section"><div className="reading-width"><h2>What the evidence can tell us</h2><p>NeuroVision helps teams screen, compare and improve creative while changes are still easy to make. It predicts patterns across audiences; it does not guarantee what any individual will notice, feel or buy.</p><p>For consequential launch decisions, combine these findings with human research or real campaign testing. The research cited here explains the scientific foundations; it is not, by itself, a validation of NeuroVision’s performance.</p></div></section>

    <WhyDifferent />

    <section className="section science-references" id="references"><div className="reading-width"><div className="section-head"><div><h2>References</h2></div><p>Every source cited on this page. Links open the original publication or its record.</p></div><ol className="reference-list">{references.map((reference,index)=><li id={reference.id} key={reference.id}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{reference.lead}</strong><p>{reference.text}</p><a href={reference.href} target="_blank" rel="noreferrer">Read the source →</a></div></li>)}</ol><Link className="text-link" href="/how-it-works">See the science in the workflow →</Link></div></section>
  </main><Footer /></>;
}
