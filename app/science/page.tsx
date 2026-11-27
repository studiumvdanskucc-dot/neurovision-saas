import type { Metadata } from "next";
import { GazeStudyArt, RedesignStudyArt, SurveyStudyArt } from "../science-art";
import { EyeIcon, EyesIcon, LockIcon, SurveyIcon } from "../brand-icons";
import Link from "next/link";
import { Cite, ReferenceList } from "./references";
import { Footer, Header } from "../site-shell";
import { WhyDifferent } from "../why-different";
import { ScienceLoop } from "./science-experience";

export const metadata: Metadata = {
  title: "Science & Validation",
  description:
    "The research behind NeuroVision's attention prediction and AI audience feedback, and how we validate each layer against recorded human gaze and human responses.",
};

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
                <span>Validation in progress</span>
                <span>Measured results planned for early 2027</span>
              </div>
              <p className="sv-citation-line">
                What catches the eye first depends on what stands out. What happens next depends on the viewer’s goals and the context{" "}
                <Cite ids={["ref-itti-koch", "ref-tatler"]} />.
              </p>
              <nav className="research-nav" aria-label="Science sections"><a href="#evidence">Foundations</a><a href="#closed-loop">Workflow</a><a href="#aarhus-study">Validation</a><a href="#model">Model</a><a href="#references">References</a></nav>
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
          <p>Our validation studies with university researchers are under way, and we plan to publish the measured results in early 2027. We’re releasing NeuroVision now to give the industry access to state-of-the-art prediction intelligence today, rather than in a year.</p>
        </div>
      </div></section>

      <section className="section science-foundations" id="evidence"><div className="container">
        <div className="section-head"><div><h2>Science &amp; validation</h2></div><p>On a refill pack, <b>“50%”</b> can catch the eye while <b>“less plastic”</b> goes unread. NeuroVision helps creative teams answer three questions before launch: Where will people look? What might they take the message to mean? Does the redesign close the gap?</p></div>
        <div className="concept-cards">
          <article className="concept-card concept-eye">
            <span className="concept-icon" aria-hidden="true"><EyesIcon size={24} /></span>
            <h3>What catches the eye?</h3>
            <p>Differences in brightness, colour and orientation make a feature stand out from its surroundings. This is <em>visual salience</em>.</p>
            <p>But gaze is not driven by salience alone: a viewer’s goal also shapes where they look. Someone searching for a particular object may fixate different parts of a scene than someone freely viewing the same scene <Cite ids={["ref-itti-koch", "ref-bruce-tsotsos", "ref-tatler", "ref-murlidaran"]} />.</p>
            <p className="practical-meaning"><b>In practice</b>A bright shelf label may draw a passing glance. A shopper searching for “decaf” may go straight to the product name.</p>
          </article>
          <article className="concept-card concept-heat">
            <span className="concept-icon" aria-hidden="true"><EyeIcon size={24} /></span>
            <h3>What does a heatmap show?</h3>
            <p>A predictive heatmap estimates <b>fixation density</b>: where looks are likely to cluster across viewers. Warmer colours mean higher predicted density within that map.</p>
            <p>It does not show an individual’s exact sequence of eye movements, reading time or comprehension; these require separate measurements <Cite ids={["ref-deepgaze-ii", "ref-deepgaze-iie"]} />.</p>
            <p className="practical-meaning"><b>In practice</b>To compare two packs, measure the share of predicted fixations on “less plastic” in each layout. Two patches can look equally red on separately scaled heatmaps and still represent different values.</p>
          </article>
          <article className="concept-card concept-survey">
            <span className="concept-icon" aria-hidden="true"><SurveyIcon size={24} /></span>
            <h3>What can AI audience feedback tell you?</h3>
            <p>AI profiles suggest plausible interpretations of a message. Language models can reproduce some patterns in human responses. Grounding profiles in people’s own interviews or survey answers can improve agreement on some questions, although simulations can still understate disagreement and miss differences between audience members <Cite ids={["ref-horton", "ref-mei", "ref-park"]} />.</p>
            <p>Recent research also highlights why synthetic respondents should not automatically be treated as substitutes for real survey participants <Cite ids={["ref-pew", "ref-oetzel"]} />.</p>
            <p className="practical-meaning"><b>In practice</b>If an AI profile reads a pack as “half price”, you have a specific interpretation to test with shoppers. Ask an unprompted question: <i>What did the 50% refer to?</i></p>
          </article>
        </div>
      </div></section>

    <ScienceLoop />

    <section className="section validation-section" id="aarhus-study"><div className="container">
      <div className="section-head"><div><h2>The validation programme</h2></div><p>We test three things: do our heatmaps match where people really look, do AI answers match what real people say, and does a redesigned creative actually do better?</p></div>
      <p className="validation-status"><span aria-hidden="true" />Studies under way. We plan to publish the measured results in early 2027.</p>

      <div className="benchmark-context">
        <div className="benchmark-copy">
          <h3>From state-of-the-art research to applied creative intelligence</h3>
          <p>Recent saliency benchmarks demonstrate how far predictive visual-attention modelling has advanced. On the <b>20 November 2026 MIT300 leaderboard snapshot</b>, DeepGaze MSDB achieved the highest fixation-map overlap among submitted models, with a SIM score of 0.7518. The November addition xSoyelNet-ML scored 0.6954 <Cite ids={["ref-msdb", "ref-mit-tuebingen"]} />.</p>
          <p>Advertising requires an additional level of analysis. The 2026 <b>AdGaze-3500</b> benchmark examines viewing time across brand, text and image regions in 3,531 advertisements. Its associated SIGN model predicts viewing time, highlighting the importance of evaluating attention at the level of commercially meaningful regions <Cite ids={["ref-adgaze", "ref-sign"]} />.</p>
          <p className="benchmark-bridge"><b>NeuroVision brings these developments into practical creative evaluation:</b> moving beyond whole-image saliency to examine whether attention reaches the brand, product, headline and call to action, what audiences understand, and whether a redesign improves the intended outcome.</p>
        </div>
        <aside className="benchmark-figures" aria-label="Independent benchmark figures">
          <p className="benchmark-flag">Independent benchmarks · not NeuroVision results</p>
          <dl>
            <div><dt>0.7518</dt><dd>SIM, DeepGaze MSDB<small>MIT300, 20 Nov 2026 snapshot</small></dd></div>
            <div><dt>0.6954</dt><dd>SIM, xSoyelNet-ML<small>MIT300, November 2026 addition</small></dd></div>
            <div><dt>3,531</dt><dd>advertisements<small>AdGaze-3500, viewing time by region</small></dd></div>
          </dl>
          <p className="benchmark-caveat">MIT300 results are independent benchmark results for other models. They are not NeuroVision scores and are not directly comparable with our advertising validation target.</p>
        </aside>
      </div>

      <div className="study-cards">
        <article className="study-card study-a" id="study-a">
          <GazeStudyArt />
          <div className="study-body">
            <p className="study-label"><span className="study-number">A</span>Study A · Attention prediction</p>
            <h3>Do our heatmaps match recorded gaze?</h3>
            <p>People freely view static advertisements held out of model development while an EyeLink eye tracker records their gaze.</p>
            <p>We compare each NeuroVision prediction with the human fixation map over the <b>full two seconds</b>, then score the <b>first 800 milliseconds</b> separately. We exclude the fixation imposed by the starting cross; the first two subsequent fixations provide an additional check.</p>
            <div className="study-goal"><b>Primary target</b><p>A predeclared mean <strong>SIM of at least 0.93</strong> across the locked advertisement set in the two-second viewing window.</p><p>SIM measures shared probability mass: after each map is normalised to one, we sum the smaller of the two values at every location.</p></div>
            <p className="study-caveat">0.93 is our <b>predefined validation target</b>, not an observed result or a claim of “93% accuracy”. It cannot be compared directly with MIT300 results, because the images, datasets, map processing and scoring protocols differ. We plan to publish the measured results in early 2027.</p>
            <details className="study-details"><summary>Technical details</summary>
              <p>We fix map resolution and smoothing before scoring. Supporting metrics include:</p>
              <ul>
                <li><strong>CC (Correlation Coefficient):</strong> the correlation between predicted and human fixation-density maps.</li>
                <li><strong>NSS (Normalized Scanpath Saliency):</strong> the standardised predicted saliency at human fixation locations.</li>
                <li><strong>AUC-Judd:</strong> how well predicted saliency distinguishes fixated from non-fixated locations.</li>
              </ul>
              <p>We also compare against a simple centre-bias baseline.</p>
              <p>For commercially relevant areas of interest (AOIs), we examine the brand, product, headline and call to action. We report the proportion of viewers who looked at each area and their time to first fixation.</p>
              <p>This multi-metric approach avoids relying on a single measure of predictive performance <Cite ids={["ref-bylinskii"]} />.</p>
            </details>
          </div>
        </article>

        <article className="study-card study-b" id="study-b">
          <SurveyStudyArt />
          <div className="study-body">
            <p className="study-label"><span className="study-number">B</span>Study B · Audience simulation</p>
            <h3>Do AI and human audiences rank the same designs highest?</h3>
            <p>Real participants answer questionnaires on their phones. AI profiles matched to the same audience groups receive the same advertisements, questions and response options. Both groups evaluate and rank the same creative alternatives.</p>
            <p>We calibrate on one set of campaigns, freeze the model and prompts, and then evaluate on <b>different campaigns that were not used during calibration</b>.</p>
            <div className="study-goal"><b>What counts as success?</b><p>The AI panel must reproduce both:</p><ul><li>The <strong>ranking of designs</strong>, evaluated using Spearman’s rank correlation.</li><li>The <strong>distribution and spread of answers</strong>, evaluated using Jensen–Shannon distance.</li></ul><p>Acceptable thresholds are established before evaluation. Results are reported separately by audience group wherever the human sample permits.</p></div>
            <p>This distinction matters commercially: an AI model might identify the same winning design as real participants while completely missing the fact that a substantial proportion of the audience misunderstood its message.</p>
            <p className="study-context">Recent research in synthetic populations, consumer pricing and public-opinion simulation highlights why agreement on averages alone is insufficient <Cite ids={["ref-horton", "ref-mei", "ref-park", "ref-oetzel", "ref-pew"]} />.</p>
          </div>
        </article>

        <article className="study-card study-c" id="study-c">
          <RedesignStudyArt />
          <div className="study-body">
            <p className="study-label"><span className="study-number">C</span>Study C · Creative improvement<span className="study-status">Planned confirmation study</span></p>
            <h3>Does the redesign solve the original problem?</h3>
            <p>In the planned confirmation study, fresh viewers are randomly assigned to see either the original creative or its redesigned version.</p>
            <p>The brief, logo, packshot and legal copy remain fixed. Only the elements agreed upon in advance may change. This isolates the effect of the redesign and avoids introducing unnecessary differences between the two versions.</p>
            <p className="study-context">A 2026 eye-tracking experiment found that AI-refined advertisements could attract more fixations without necessarily gaining preference. This illustrates why increased attention alone should not automatically be interpreted as improved creative effectiveness <Cite ids={["ref-goncalves"]} />.</p>
            <div className="study-goal"><b>What counts as success?</b><p>The primary outcome is defined by the original creative problem. For example, with a refill pack, the primary outcome could be the percentage of shoppers who correctly explain “50% less plastic” without prompting.</p><p>Before testing, we establish the minimum meaningful improvement and any acceptable trade-off, such as reduced brand visibility. We report the difference between versions in percentage points, alongside production time and cost.</p></div>
            <p className="study-caveat">The redesign is considered successful only if it improves the predefined outcome. A visually different or more attractive design is not sufficient evidence on its own.</p>
          </div>
        </article>
      </div>

      <div className="study-rules">
        <span className="study-rules-icon" aria-hidden="true"><LockIcon size={22} /></span>
        <div>
          <h3>How we keep ourselves honest</h3>
          <p>Test assets, exclusions, map settings and scoring rules are locked before evaluation. We report effect estimates with <b>95% confidence intervals</b>, and compare model–human agreement with the agreement between independent groups of human viewers.</p>
          <p>Every published result identifies its dataset, metric and test conditions. Predictive performance is reported with its uncertainty, never as a universal accuracy claim <Cite ids={["ref-bylinskii"]} />.</p>
        </div>
      </div>
    </div></section>

    <section className="section science-position soft-section"><div className="reading-width"><h2>What the evidence can tell us</h2><p>These tests can show which design gets the brand seen, which makes the offer clearer and whether changing one helped or hurt the other.</p><p>That gives creative teams an evidence-based reason to choose their next version while changes are still easy to make.</p><p>A claim about sales lift requires campaign or purchase data.</p><p>NeuroVision predicts patterns across audiences. It does not guarantee what any individual will notice, understand, feel or buy.</p></div></section>


    <WhyDifferent id="model" />

    <section className="section science-references" id="references"><div className="reading-width"><div className="section-head"><div><h2>References</h2></div><p>Every source cited on this page, grouped by topic. Links open the original publication or its official record.</p></div><ReferenceList /><Link className="text-link" href="/how-it-works">See the science in the workflow →</Link></div></section>
  </main><Footer /></>;
}
