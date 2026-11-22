"use client";

// One stage for the five tools, in the style of the tabbed product tours on
// Linear, Vercel and Apple pages: a row of tabs with progress bars that move
// on by themselves on large screens, and a panel whose illustration plays a
// short animation when it appears. The tour pauses on hover or keyboard focus,
// stops for good once someone picks a tab, and never moves with reduced motion.
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import { AbTestArt, AttentionArt, ShelfArt, StudioArt, SurveyArt } from "./feature-art";
import { tools } from "./tools";
import { ANALYSIS_TOKENS, STUDIO_GENERATE_TOKENS, STUDIO_OPTIMISE_TOKENS, SURVEY_QUESTIONS, TOKEN_PRICE_CENTS, euros, surveyTokens } from "./token-pricing-data";

const STEP_MS = 8000;
const price = (tokens: number) => euros(tokens * TOKEN_PRICE_CENTS);

const panels: { title: ReactNode; copy: string; cost?: ReactNode; href: string; link: string; art: ReactNode }[] = [
  {
    title: <>Find what gets <em>noticed.</em></>,
    copy: "Check whether the product, headline and logo stand out. Our attention model predicts where people look first, without eye-tracking equipment.",
    cost: <><b>{ANALYSIS_TOKENS} tokens</b> per image, {price(ANALYSIS_TOKENS)}</>,
    href: "/how-it-works#attention", link: "Explore attention prediction", art: <AttentionArt />,
  },
  {
    title: <>Look beyond the first <em>glance.</em></>,
    copy: "Ask AI audience profiles about clarity, trust and relevance. Catch what a heatmap cannot show: the wrong language for a market, a joke that misses, a message nobody can repeat.",
    cost: <><b>From {surveyTokens(25)} tokens</b> for 25 profiles, {price(surveyTokens(25))}, up to {SURVEY_QUESTIONS} questions each</>,
    href: "/how-it-works#audience", link: "Explore audience surveys", art: <SurveyArt />,
  },
  {
    title: <>Make the next version <em>count.</em></>,
    copy: "Optimise the creative you have, or generate a new one from a brief. Your brand rules stay in place, and every run ends with a re-analysis so you can compare it with the original.",
    cost: <><b>{STUDIO_OPTIMISE_TOKENS} tokens</b> to optimise, {price(STUDIO_OPTIMISE_TOKENS)} · <b>{STUDIO_GENERATE_TOKENS}</b> to generate, {price(STUDIO_GENERATE_TOKENS)}</>,
    href: "/how-it-works#improve", link: "Explore Generative Studio", art: <StudioArt />,
  },
  {
    title: <>Pick the stronger <em>version.</em></>,
    copy: "Put two creatives side by side with the goal you care about. NeuroVision checks both on the same measures and names the stronger one, so you know which to develop.",
    href: "/how-it-works#compare", link: "Explore A/B Testing", art: <AbTestArt />,
  },
  {
    title: <>See it where it <em>competes.</em></>,
    copy: "Your product never appears alone. Place it in a marketplace, store-shelf, out-of-home or mall layout next to the products it has to beat, and see whether it still gets picked out.",
    href: "/how-it-works#shelf", link: "Explore Digital Shelf", art: <ShelfArt />,
  },
];

export function ToolShowcase() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [inView, setInView] = useState(false);
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setArmed(!reduce);
    if (!reduce && window.matchMedia("(min-width: 900px) and (hover: hover)").matches) setAuto(true);
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) setSeen(true);
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const choose = (index: number) => {
    setAuto(false);
    setActive(index);
    tabs.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = panels.length - 1;
    const next = event.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : event.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : event.key === "Home" ? 0 : event.key === "End" ? last : null;
    if (next === null) return;
    event.preventDefault();
    choose(next);
    tabs.current[next]?.focus();
  };

  const playing = auto && inView;
  const className = ["showcase", `tool-${tools[active].key}`, playing && "is-playing", armed && "is-armed", seen && "is-seen"].filter(Boolean).join(" ");

  return <div ref={root} className={className} style={{ "--step-ms": `${STEP_MS}ms` } as CSSProperties}>
    <div className="showcase-tabs" role="tablist" aria-label="NeuroVision tools">
      {tools.map((tool, index) => <button
        key={tool.key}
        ref={node => { tabs.current[index] = node; }}
        type="button"
        role="tab"
        id={`tool-tab-${tool.key}`}
        aria-selected={index === active}
        aria-controls={`tool-panel-${tool.key}`}
        tabIndex={index === active ? 0 : -1}
        className={`showcase-tab tool-${tool.key}${index === active ? " is-active" : ""}`}
        onClick={() => choose(index)}
        onKeyDown={onKeyDown}
      >
        <span className="showcase-tab-icon"><tool.Icon size={18} /></span>
        <span className="showcase-tab-text"><b>{tool.name}</b><small>{tool.tagline}</small></span>
        <span className="showcase-progress" aria-hidden="true">{index === active && <i key={`${active}-${playing}`} onAnimationEnd={() => setActive(current => (current + 1) % panels.length)} />}</span>
      </button>)}
    </div>

    <div className="showcase-stage">
      {auto && <button type="button" className="showcase-pause" onClick={() => setAuto(false)} aria-label="Stop the automatic tour"><span aria-hidden="true">❚❚</span></button>}
      {panels.map((panel, index) => {
        const tool = tools[index];
        return <div
          key={tool.key}
          role="tabpanel"
          id={`tool-panel-${tool.key}`}
          aria-labelledby={`tool-tab-${tool.key}`}
          className={`showcase-panel tool-${tool.key}${index === active ? " is-active" : ""}`}
          inert={index !== active}
        >
          <div className="feature-copy">
            <h3>{panel.title}</h3>
            <p>{panel.copy}</p>
            {panel.cost && <p className="feature-cost">{panel.cost}</p>}
            <Link className="text-link" href={panel.href}>{panel.link} <span aria-hidden="true">→</span></Link>
          </div>
          {panel.art}
        </div>;
      })}
    </div>
  </div>;
}
