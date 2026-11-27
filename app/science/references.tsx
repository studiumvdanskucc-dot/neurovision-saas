// References for the Science & validation page, grouped in three categories and
// numbered continuously. In-text citations use <Cite>, which links each source
// to its entry by id, so numbers, citations and links always correspond.
import { Fragment } from "react";
import { sitePath } from "../site-path";

export type Reference = {
  id: string;
  cite: string;
  authors: string;
  year: string;
  title: string;
  venue?: string;
  note?: string;
  href: string;
  linkLabel?: string;
};

export const referenceGroups: { title: string; items: Reference[] }[] = [
  {
    title: "Current benchmarks and advertising research",
    items: [
      { id: "ref-mit-tuebingen", cite: "MIT/Tübingen, 2026", authors: "MIT/Tübingen Saliency Benchmark", year: "2026", title: "MIT300 fixation-prediction leaderboard", note: "Snapshot consulted 20 November 2026. Benchmark leaderboard, not a peer-reviewed publication.", href: "https://saliency.tuebingen.ai/results.html", linkLabel: "View the leaderboard" },
      { id: "ref-msdb", cite: "Kümmerer et al., 2025", authors: "Kümmerer, M., Khanuja, H. S., & Bethge, M.", year: "2025", title: "Modeling Saliency Dataset Bias", venue: "ICCV. DeepGaze MSDB.", href: "https://arxiv.org/abs/2505.10169" },
      { id: "ref-adgaze", cite: "Ye & Wedel, 2026a", authors: "Ye, J., & Wedel, M.", year: "2026a", title: "AdGaze-3500: Evaluating Large Multimodal Models’ Ability to Predict Human Attention to Ads", venue: "CVPR Workshops.", href: "https://openaccess.thecvf.com/content/CVPR2026W/DataMFM/papers/Ye_AdGaze-3500_Evaluating_Large_Multimodal_Models_Ability_to_Predict_Human_Attention_CVPRW_2026_paper.pdf" },
      { id: "ref-sign", cite: "Ye & Wedel, 2026b", authors: "Ye, J., & Wedel, M.", year: "2026b", title: "SIGN: A Statistically-Informed Gaze Network for Gaze Time Prediction and Inference", venue: "CVPR Workshops.", href: "https://openaccess.thecvf.com/content/CVPR2026W/GAZE/html/Ye_SIGN_A_Statistically-Informed_Gaze_Network_for_Gaze_Time_Prediction_and_CVPRW_2026_paper.html" },
      { id: "ref-goncalves", cite: "Gonçalves et al., 2026", authors: "Gonçalves et al.", year: "2026", title: "Eye-Tracking Analysis of Visual Attention and Preference in Human-Created, AI-Generated, and AI-Refined Human Advertisements", venue: "Sensors, 26(20), 6411.", href: "https://doi.org/10.3390/s26206411" },
    ],
  },
  {
    title: "Visual attention, eye tracking and model validation",
    items: [
      { id: "ref-murlidaran", cite: "Murlidaran & Eckstein, 2026", authors: "Murlidaran, S., & Eckstein, M. P.", year: "2026", title: "Eye Movements During Free Viewing to Maximize Scene Understanding", venue: "Nature Communications, 17, 940.", note: "Published online December 2025.", href: "https://doi.org/10.1038/s41467-025-67673-w" },
      { id: "ref-deepgaze-iie", cite: "Linardos et al., 2021", authors: "Linardos, A., Kümmerer, M., Press, O., & Bethge, M.", year: "2021", title: "DeepGaze IIE: Calibrated Prediction in and Out-of-Domain for State-of-the-Art Saliency Modeling", venue: "ICCV.", href: "https://arxiv.org/abs/2105.12441" },
      { id: "ref-bylinskii", cite: "Bylinskii et al., 2019", authors: "Bylinskii, Z., Judd, T., Oliva, A., Torralba, A., & Durand, F.", year: "2019", title: "What Do Different Evaluation Metrics Tell Us About Saliency Models?", venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence, 41(3), 740–757.", href: "https://doi.org/10.1109/TPAMI.2018.2815601" },
      { id: "ref-deepgaze-ii", cite: "Kümmerer et al., 2016", authors: "Kümmerer, M., Wallis, T. S. A., & Bethge, M.", year: "2016", title: "DeepGaze II: Reading Fixations from Deep Features Trained on Object Recognition", venue: "arXiv:1610.01563.", href: "https://arxiv.org/abs/1610.01563" },
      { id: "ref-judd", cite: "Judd et al., 2009", authors: "Judd, T., Ehinger, K., Durand, F., & Torralba, A.", year: "2009", title: "Learning to Predict Where Humans Look", venue: "ICCV.", href: "https://people.csail.mit.edu/tjudd/WherePeopleLook/Docs/wherepeoplelook.pdf" },
      { id: "ref-tatler", cite: "Tatler et al., 2011", authors: "Tatler, B. W., Hayhoe, M. M., Land, M. F., & Ballard, D. H.", year: "2011", title: "Eye Guidance in Natural Vision: Reinterpreting Salience", venue: "Journal of Vision, 11(5), Article 5.", href: "https://doi.org/10.1167/11.5.5" },
      { id: "ref-bruce-tsotsos", cite: "Bruce & Tsotsos, 2009", authors: "Bruce, N. D. B., & Tsotsos, J. K.", year: "2009", title: "Saliency, Attention, and Visual Search: An Information Theoretic Approach", venue: "Journal of Vision, 9(3), Article 5.", href: "https://doi.org/10.1167/9.3.5" },
      { id: "ref-itti-koch", cite: "Itti & Koch, 2001", authors: "Itti, L., & Koch, C.", year: "2001", title: "Computational Modelling of Visual Attention", venue: "Nature Reviews Neuroscience, 2(3), 194–203.", href: "https://doi.org/10.1038/35058500" },
    ],
  },
  {
    title: "AI audience simulation and human-response validity",
    items: [
      { id: "ref-park", cite: "Park et al., 2024, revised 2026", authors: "Park, J. S., Zou, C. Q., Kamphorst, J., et al.", year: "2024; revised 16 November 2026", title: "AI Simulations Grounded in Rich Self-Reports Increase Accuracy and Reduce Distortion", venue: "arXiv, version 4.", href: "https://arxiv.org/abs/2411.10109v4" },
      { id: "ref-oetzel", cite: "Oetzel & Maiberger, 2026", authors: "Oetzel & Maiberger", year: "2026", title: "How Price Sensitive Is AI? Benchmarking LLM-Generated Willingness to Pay in Pricing Analytics", venue: "Journal of Marketing Analytics.", href: "https://doi.org/10.1057/s41270-026-00542-7" },
      { id: "ref-pew", cite: "Pew Research Center, 2026", authors: "Pew Research Center", year: "September 2026", title: "Can AI Stand In for Human Survey-Takers? Not Really", href: "https://www.pewresearch.org/data-labs/2026/09/30/can-ai-stand-in-for-human-survey-takers-not-really/" },
      { id: "ref-horton", cite: "Horton et al., 2023, revised 2026", authors: "Horton, J. J., Filippas, A., & Manning, B. S.", year: "2023; revised February 2026", title: "Large Language Models as Simulated Economic Agents: What Can We Learn from Homo Silicus?", venue: "NBER Working Paper 31122.", href: "https://doi.org/10.3386/w31122" },
      { id: "ref-mei", cite: "Mei et al., 2024", authors: "Mei, Q., Xie, Y., Yuan, W., & Jackson, M. O.", year: "2024", title: "A Turing Test of Whether AI Chatbots Are Behaviorally Similar to Humans", venue: "Proceedings of the National Academy of Sciences, 121(9), e2313925121.", href: "https://doi.org/10.1073/pnas.2313925121" },
    ],
  },
];

const allReferences = referenceGroups.flatMap(group => group.items);
const byId = new Map(allReferences.map((reference, index) => [reference.id, { reference, number: index + 1 }]));

/** In-text citation: (Author, year; Author, year), each linked to its reference. */
export function Cite({ ids, page = false }: { ids: string[]; page?: boolean }) {
  return <span className="cite">(
    {ids.map((id, index) => {
      const entry = byId.get(id);
      if (!entry) throw new Error(`Unknown reference: ${id}`);
      // From another page (the shared "Why NeuroVision is different" section), link to the Science page.
      const href = page ? sitePath(`/science/#${id}`) : `#${id}`;
      return <Fragment key={id}>{index > 0 && "; "}<a href={href}>{entry.reference.cite}</a></Fragment>;
    })}
  )</span>;
}

export function ReferenceList() {
  let number = 0;
  return <div className="reference-groups">
    {referenceGroups.map((group, groupIndex) => <section className="reference-group" key={group.title} aria-labelledby={`ref-group-${groupIndex}`}>
      <h3 id={`ref-group-${groupIndex}`}><span>{String.fromCharCode(65 + groupIndex)}</span>{group.title}</h3>
      <ol className="reference-list">
        {group.items.map(reference => {
          number += 1;
          return <li id={reference.id} key={reference.id}>
            <span>{String(number).padStart(2, "0")}</span>
            <div>
              <p className="reference-entry">{reference.authors} ({reference.year}). <em>{reference.title}.</em>{reference.venue && <> {reference.venue}</>}</p>
              {reference.note && <p className="reference-note">{reference.note}</p>}
              <a href={reference.href} target="_blank" rel="noreferrer">{reference.linkLabel ?? "Read the source"} <span aria-hidden="true">→</span></a>
            </div>
          </li>;
        })}
      </ol>
    </section>)}
  </div>;
}
