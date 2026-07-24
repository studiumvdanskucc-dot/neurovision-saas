import type { Metadata } from "next";
import { Footer, Header } from "../site-shell";
export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <><Header /><main className="legal"><div className="container legal-shell">
      <p className="kicker">Legal</p><h1>Terms of Use</h1><p className="legal-date">Last updated: May 2026</p>
      <div className="legal-content">
        <section><h2>1. Acceptance of terms</h2><p>By accessing or using the NeuroVision platform (&quot;Service&quot;), you agree to be bound by these Terms of Use. If you do not agree, do not use the Service.</p></section>
        <section><h2>2. Description of service</h2><p>NeuroVision provides a predictive cognitive modelling platform for design evaluation and optimisation, including attention prediction, interpretation simulation and design generation tools.</p></section>
        <section><h2>3. User accounts</h2><p>You are responsible for maintaining the confidentiality of your account credentials and agree to notify us immediately of unauthorized use.</p></section>
        <section><h2>4. Acceptable use</h2><p>You agree not to violate applicable law, infringe intellectual property rights, upload malicious content or attempt unauthorized access to the Service or its systems.</p></section>
        <section><h2>5. Intellectual property</h2><p>All Service content, features and functionality are owned by NeuroVision Technologies and protected by applicable intellectual property laws. You retain ownership of content you upload.</p></section>
        <section><h2>6. Limitation of liability</h2><p>NeuroVision outputs are estimations based on computational models and should not be treated as guarantees of real-world performance. The Service is provided &quot;as is&quot; without warranties of any kind.</p></section>
        <section><h2>7. Termination</h2><p>We may suspend or terminate access for conduct that we believe violates these Terms or is harmful to other users or the Service.</p></section>
        <section><h2>8. Changes to terms</h2><p>We may update these Terms from time to time. Continued use after changes constitutes acceptance of the revised Terms.</p></section>
      </div>
    </div></main><Footer /></>
  );
}
