// Where teams use NeuroVision. Shown on the Examples page (the former Use cases page).
// Pictures: the supplied example ads in phone frames, a website, a shop and the
// NeuroVision-designed Oh Belly cans, all supplied for illustration.
import type { ComponentType } from "react";
import { sitePath } from "./site-path";
import { creativeExamples } from "./creative-examples";
import { LayoutIcon, PackageIcon, ShelfIcon, WindowIcon } from "./brand-icons";

const phones = [creativeExamples[0].recreated, creativeExamples[2].recreated, creativeExamples[1].original];

function PhoneArt() {
  return <div className="use-case-phones">
    {phones.map((asset, index) => <span className={`use-case-phone phone-${index + 1}`} key={asset.src}>
      <span className="phone-screen">
        <span className="phone-post-head" aria-hidden="true"><i /><b /><small /></span>
        <img src={sitePath(asset.src)} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" />
        <span className="phone-post-foot" aria-hidden="true"><i /><i /><i /><b /><small /></span>
      </span>
    </span>)}
  </div>;
}

const useCases: { id: string; label: string; copy: string; tasks: string[]; Icon: ComponentType<{ size?: number }>; art: () => React.ReactNode }[] = [
  {
    id: "campaigns", label: "Campaigns & ads", Icon: WindowIcon,
    copy: "Compare ads before you commit to media spend. Check whether the product, headline, logo and call to action stand out as intended.",
    tasks: ["Review a campaign concept", "Compare social ads", "Check brand and CTA visibility", "Share clear findings with the team"],
    art: PhoneArt,
  },
  {
    id: "websites", label: "Websites & UX", Icon: LayoutIcon,
    copy: "Upload a page screenshot to review its visual hierarchy. Check whether the main message and next action are easy to find.",
    tasks: ["Review landing-page hierarchy", "Check whether key buttons stand out", "Compare hero and navigation options", "Review the order of information"],
    art: () => <img src={sitePath("/assets/use-cases/website-laptop.webp")} alt="A laptop showing a pink chocolate-bar landing page, supplied for illustration" width={1000} height={628} loading="lazy" />,
  },
  {
    id: "shelf", label: "Digital shelf", Icon: ShelfIcon,
    copy: "Compare your product with the listings around it, or simulate a placement in a marketplace, store-shelf, out-of-home or mall layout. Check what stands out and whether important details remain readable in a thumbnail.",
    tasks: ["Compare search-result thumbnails", "Compare products with their competitors", "Simulate a placement and test the effect of position", "Check titles, badges and product images", "Review new listing images"],
    art: () => <img src={sitePath("/assets/use-cases/shelf-desktop.webp")} alt="A desktop screen showing an online sunglasses shop with one listing highlighted" width={900} height={743} loading="lazy" />,
  },
  {
    id: "packaging", label: "Packaging & product", Icon: PackageIcon,
    copy: "Compare packaging concepts before production. Check brand visibility and information order, then explore whether the claims are clear with AI audience feedback.",
    tasks: ["Compare packaging layouts", "Check claim readability", "Check consistency across a product range", "Test recognition at realistic scale"],
    art: () => <img src={sitePath("/assets/use-cases/packaging-cans.webp")} alt="Three Oh Belly probiotic soda cans: cucumber lime, ginger lemon and strawberry basil" width={960} height={638} loading="lazy" />,
  },
];

export function UseCaseList() {
  return <section className="use-case-list" id="use-cases"><div className="container">
    <div className="section-head"><div><h2>Where teams use NeuroVision.</h2></div><p>Check ads, websites, product listings and packaging before they reach your audience.</p></div>
    <div className="use-case-cards">
      {useCases.map((item, index) => <article className={`use-case-card use-${item.id}${index % 2 ? " reverse" : ""}`} key={item.id}>
        <figure className="use-case-media"><item.art /></figure>
        <div className="use-case-copy">
          <span className="use-case-icon"><item.Icon size={30} /></span>
          <h2>{item.label}</h2>
          <p>{item.copy}</p>
          <ul className="use-case-tasks">{item.tasks.map(task => <li key={task}>{task}</li>)}</ul>
        </div>
      </article>)}
    </div>
  </div></section>;
}
