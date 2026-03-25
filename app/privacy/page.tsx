import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for codecamp.asia — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This Privacy Policy explains how codecamp.asia (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collects, uses, and protects your personal information when you
        use our Service. We are committed to protecting your privacy and
        complying with applicable data protection laws, including the General
        Data Protection Regulation (GDPR).
      </p>

      <h2>1. Information We Collect</h2>
      <h3>1.1 Account Information</h3>
      <p>When you register, we collect:</p>
      <ul>
        <li>Email address</li>
        <li>Name (if provided)</li>
        <li>Password (stored in hashed form, never in plain text)</li>
        <li>Profile preferences</li>
      </ul>

      <h3>1.2 Payment Information</h3>
      <p>
        All payment processing is handled by <strong>Paddle</strong>, our
        Merchant of Record. We do not store credit card numbers or banking
        information on our servers. Paddle may collect your billing address,
        payment method, and transaction history in accordance with{" "}
        <a
          href="https://www.paddle.com/legal/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paddle&apos;s Privacy Policy
        </a>
        .
      </p>

      <h3>1.3 Usage Data</h3>
      <p>We automatically collect:</p>
      <ul>
        <li>IP address and approximate location</li>
        <li>Browser type and version</li>
        <li>Pages visited and features used</li>
        <li>Character generation inputs (text prompts, style selections)</li>
        <li>Session duration and interaction patterns</li>
        <li>Device information (type, operating system)</li>
      </ul>

      <h3>1.4 Communications</h3>
      <p>
        If you contact our support team, we retain records of that
        correspondence to provide better service.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, operate, and improve the Service</li>
        <li>Process payments and manage your subscription</li>
        <li>Send transactional emails (receipts, password resets, account notices)</li>
        <li>Send product updates and marketing emails (with your consent)</li>
        <li>Detect and prevent fraud, abuse, and security incidents</li>
        <li>Comply with legal obligations</li>
        <li>Analyze usage patterns to improve our AI models and features</li>
      </ul>
      <p>
        <strong>Legal basis (GDPR):</strong> We process your data on the basis
        of contract performance, legitimate interests, legal compliance, and
        consent (where applicable).
      </p>

      <h2>3. Third-Party Services</h2>
      <p>We work with the following third-party services:</p>
      <ul>
        <li>
          <strong>Paddle</strong> — Payment processing and subscription
          management (Merchant of Record)
        </li>
        <li>
          <strong>Analytics providers</strong> — We may use privacy-respecting
          analytics tools to understand how users interact with the Service
        </li>
        <li>
          <strong>Cloud infrastructure providers</strong> — For hosting and
          computing resources (subject to appropriate data processing agreements)
        </li>
      </ul>
      <p>
        We ensure all third-party processors have appropriate data protection
        agreements in place.
      </p>

      <h2>4. Cookies and Tracking</h2>
      <p>We use cookies and similar technologies for:</p>
      <ul>
        <li>
          <strong>Essential cookies:</strong> Required for the Service to
          function (authentication, session management)
        </li>
        <li>
          <strong>Analytics cookies:</strong> To understand usage patterns (with
          your consent where required)
        </li>
        <li>
          <strong>Preference cookies:</strong> To remember your settings and
          preferences
        </li>
      </ul>
      <p>
        You can manage cookies through your browser settings. Disabling certain
        cookies may affect Service functionality.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your personal data for as long as your account is active or as
        needed to provide the Service. Specifically:
      </p>
      <ul>
        <li>Account data: Retained until account deletion + 30 days</li>
        <li>Generated Characters: Retained for your account lifetime</li>
        <li>Payment records: Retained for 7 years (legal requirement)</li>
        <li>Usage logs: Retained for 12 months</li>
        <li>Support communications: Retained for 3 years</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>
        Under GDPR and applicable privacy laws, you have the following rights:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> Request a copy of your personal data
        </li>
        <li>
          <strong>Rectification:</strong> Correct inaccurate or incomplete data
        </li>
        <li>
          <strong>Erasure:</strong> Request deletion of your data (&quot;right to be
          forgotten&quot;)
        </li>
        <li>
          <strong>Portability:</strong> Receive your data in a machine-readable
          format
        </li>
        <li>
          <strong>Restriction:</strong> Request that we restrict processing of
          your data
        </li>
        <li>
          <strong>Objection:</strong> Object to processing based on legitimate
          interests
        </li>
        <li>
          <strong>Withdraw consent:</strong> Withdraw marketing consent at any
          time
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a>. We
        will respond within 30 days.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        Our Service is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under 13. If you
        believe we have inadvertently collected such information, please contact
        us immediately at{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a> and we
        will delete it promptly.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries other than
        your country of residence, including countries that may not have the
        same data protection laws as your jurisdiction. We ensure adequate
        protection through Standard Contractual Clauses (SCCs) or other
        approved transfer mechanisms where required.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement industry-standard security measures including encryption in
        transit (TLS) and at rest, access controls, and regular security audits.
        However, no method of transmission over the Internet is 100% secure, and
        we cannot guarantee absolute security.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of material changes via email or a prominent notice on our website. We
        encourage you to review this policy periodically.
      </p>

      <h2>11. Contact Information</h2>
      <p>
        For privacy-related questions, requests, or complaints, contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a>
        <br />
        <strong>Website:</strong> codecamp.asia
      </p>
      <p>
        If you are in the EU/EEA and believe we have not adequately addressed
        your privacy concerns, you have the right to lodge a complaint with your
        local data protection authority.
      </p>
    </LegalLayout>
  );
}
