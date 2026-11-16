// Illustrative artwork for A/B Testing and Digital Shelf. Drawn in CSS with
// placeholder shapes, so no brand, client project or measured result is implied.

export function AbTestArt({ frame = "feature-media" }: { frame?: "feature-media" | "layer-media" }) {
  return <figure className={`${frame} ab-paper`}>
    <div className="ab-pair">
      <div className="ab-card">
        <span className="ab-tag">A</span>
        <div className="ab-poster ab-poster-a" aria-hidden="true"><i /><i /><i /><b /><em /></div>
      </div>
      <div className="ab-card is-winner">
        <span className="ab-tag">B</span>
        <div className="ab-poster ab-poster-b" aria-hidden="true"><em /><b /><i /></div>
      </div>
    </div>
    <div className="ab-result"><span>Completed</span><span>Winner: Design B</span></div>
    <p className="ab-goal">Goal: more people notice the product first.</p>
    <figcaption>Illustrative A/B result, not a measured outcome</figcaption>
  </figure>;
}

const templates = ["Marketplace", "Store shelf", "Out-of-home", "Mall"];
const listings = ["LIME", "PURE", "BERRY", "CITRUS"];

export function ShelfArt({ frame = "feature-media" }: { frame?: "feature-media" | "layer-media" }) {
  return <div className={`${frame} shelf-art amazon-shelf shelf-feature`}>
    <div className="shelf-templates">{templates.map((name, index) => <span className={index === 0 ? "on" : undefined} key={name}>{name}</span>)}</div>
    <header><b>shop</b><span className="static-search">sparkling water</span><span>Search</span></header>
    <section>{listings.map((name, index) => <div className={index === 1 ? "winner" : ""} key={name}><i /><strong>{name}</strong><small>12-pack · 4.6 ★</small>{index === 1 && <><em>YOUR PRODUCT</em><u /></>}</div>)}</section>
    <aside>Illustrative shelf layout with placement templates</aside>
  </div>;
}
