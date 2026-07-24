import type { Metadata } from "next";
import { Footer, Header } from "../site-shell";
export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <><Header /><main className="legal"><div className="container legal-shell">
      <p className="kicker">Legal</p><h1>Privacy Policy</h1><p className="legal-date">Last updated: May 2026</p>
      <div className="legal-content">
        <section><h2>1. Introduction</h2><p>NeuroVision Technologies (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use and safeguard your personal data when you use our platform and services.</p></section>
        <section><h2>2. Data we collect</h2><p>We may collect account data, usage data, uploaded images and design files, and technical data such as browser type, device information, IP address and cookies.</p></section>
        <section><h2>3. How we use your data</h2><p>We use your data to provide and improve the Service, process your design analyses, communicate about your account, ensure platform security and comply with legal obligations.</p></section>
        <section><h2>4. Data storage &amp; security</h2><p>Your data is stored on secure servers with encryption at rest and in transit. We implement industry-standard security measures against unauthorized access, alteration or destruction.</p></section>
        <section><h2>5. Data retention</h2><p>We retain your data for as long as your account is active or as needed to provide services. Uploaded files may be retained for service improvement unless you request deletion.</p></section>
        <section><h2>6. Your rights (GDPR)</h2><p>If you are in the European Economic Area, you may access, rectify or erase your data, restrict or object to processing, and request data portability. Contact <a href="mailto:info@neurovision-ai.com">info@neurovision-ai.com</a>.</p></section>
        <section><h2>7. Cookies</h2><p>We use essential cookies to operate the platform and analytics cookies to understand usage patterns. You can manage cookies through your browser settings.</p></section>
        <section><h2>8. Third-party services</h2><p>We may use third-party services for analytics, hosting and payment processing. These services have their own privacy policies.</p></section>
        <section><h2>9. Changes</h2><p>We may update this policy from time to time and will notify you of significant changes via email or through the platform.</p></section>
      </div>
    </div></main><Footer /></>
  );
}
