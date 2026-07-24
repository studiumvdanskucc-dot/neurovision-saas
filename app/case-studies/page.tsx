import type { Metadata } from "next";
import { sitePath } from "../site-path";
import { Footer, Header } from "../site-shell";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See an illustrative NeuroVision workflow from attention prediction to an optimised creative.",
};

const steps = [
  ["01 / Original stimulus", "Start with the creative as the audience will meet it.", "Upload a campaign visual, website capture, package or product listing. NeuroVision keeps the original stimulus at the centre of every evaluation.", sitePath("/assets/hero-ad.webp"), "Original sample Zephyr Motors advertisement"],
  ["02 / Attention prediction", "See the hierarchy—not just the decoration.", "The predictive heatmap shows which elements are likely to attract early attention, what competes and what risks being missed.", sitePath("/assets/hero-heatmap.webp"), "Sample ad with predictive attention heatmap"],
  ["03 / Optimised variation", "Turn the finding into something your team can use.", "The new direction gives the product more presence, makes the headline easier to decode and brings the brand into the opening view.", sitePath("/assets/hero-optimised.webp"), "Optimised sample Zephyr Motors advertisement"],
];

export default function CaseStudies() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div><p className="kicker">Illustrative workflow</p><h1>One creative. Three layers of intelligence.</h1></div>
            <p className="lead">Follow a sample automotive campaign through NeuroVision—from its original hierarchy to predictive attention and a stronger generated variation. This demonstration is illustrative and does not represent measured commercial results.</p>
          </div>
        </section>
        <section className="inner-section">
          <div className="container">
            <div className="section-head">
              <div><p className="kicker">Zephyr Motors · product demonstration</p><h2>From broad concept to clearer creative decision.</h2></div>
              <p>The original communicates a premium, futuristic world, but attention competes across the headline, vehicle and brand.</p>
            </div>
            <div className="demo-list">
              {steps.map(([label,title,copy,image,alt]) => (
                <article className="demo-row" key={label}><div><span>{label}</span><h3>{title}</h3><p>{copy}</p></div><img src={image} alt={alt} /></article>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta"><div className="container"><p className="kicker light">Your creative is next</p><h2>Run the same loop with your own visual.</h2><p>Start with predictive attention, then add interpretation and optimisation when the project needs it.</p><div className="actions center"><a className="btn white" href="http://app.neurovision-ai.com/register">Try NeuroVision free ↗</a><a className="btn ghost" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20pilot">Discuss a pilot</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
