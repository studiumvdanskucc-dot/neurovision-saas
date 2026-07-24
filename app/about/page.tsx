import type { Metadata } from "next";
import { sitePath } from "../site-path";
import { Footer, Header } from "../site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the multidisciplinary team building NeuroVision.",
};

const team = [
  ["Jakub Lenovsky", "Business development & partnerships", sitePath("/assets/jakub.jpeg")],
  ["Frantisek Hoza", "Platform engineering & architecture", sitePath("/assets/frantisek.jpeg")],
  ["Aleksandra Krolikowska", "Operations & international growth", sitePath("/assets/aleksandra.jpeg")],
  ["Alexia Sovar", "Market development & partnerships", sitePath("/assets/alexia.jpeg")],
  ["Maria Kostrzewa", "Behavioural research & business development", sitePath("/assets/maria.jpeg")],
];

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div><p className="kicker">About NeuroVision</p><h1>Creative intelligence should understand people.</h1></div>
            <p className="lead">We are building a new decision layer for creative work—one that connects visual neuroscience, behavioural insight and generative AI before a campaign, product or interface goes live.</p>
          </div>
        </section>
        <section className="inner-section">
          <div className="container inner-grid">
            <div className="brand-art" aria-hidden="true"><div /></div>
            <div className="inner-copy">
              <p className="kicker">Why we started</p>
              <h2>Design tools got faster. Understanding stayed fragmented.</h2>
              <p>Teams can create more visual content than ever, yet the hardest questions still arrive after launch: What did people notice? What did they understand? Which version should we back?</p>
              <p>NeuroVision brings those questions into one repeatable SaaS workflow. Upload a visual, predict attention, explore audience interpretation and turn the result into a stronger variation. The goal is not to replace creative judgment—it is to give that judgment better evidence.</p>
            </div>
          </div>
        </section>
        <section className="section team">
          <div className="container">
            <div className="section-head">
              <div><p className="kicker light">The people behind the platform</p><h2>A multidisciplinary team for a multidisciplinary problem.</h2></div>
              <p>NeuroVision combines product engineering, behavioural research, business development and design thinking across markets.</p>
            </div>
            <div className="team-grid">
              {team.map(([name, role, image]) => (
                <article key={name}><img src={image} alt={name} /><div><h3>{name}</h3><p>{role}</p></div></article>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta"><div className="container"><p className="kicker light">Build with us</p><h2>Bring predictive creative intelligence into your workflow.</h2><p>We welcome product feedback, research conversations, pilot projects and partnerships.</p><div className="actions center"><a className="btn white" href="mailto:info@neurovision-ai.com?subject=NeuroVision%20conversation">Start a conversation ↗</a><a className="btn ghost" href="http://app.neurovision-ai.com/register">Try the platform</a></div></div></section>
      </main>
      <Footer />
    </>
  );
}
