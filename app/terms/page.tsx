import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for codecamp.asia — AI-powered character and mascot creation platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using codecamp.asia (the &quot;Service&quot;), you agree to be
        bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these
        Terms, please do not use the Service. These Terms apply to all users,
        including visitors, registered users, and subscribers.
      </p>
      <p>
        The Service is operated by codecamp.asia (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
        using the Service, you confirm that you are at least 13 years old and
        have the legal capacity to enter into these Terms.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        codecamp.asia provides an AI-powered platform for creating custom
        characters, mascots, and avatars (collectively, &quot;Characters&quot;). Users can
        generate, customize, and export Characters in various formats, including
        PNG, SVG, and GIF, subject to their subscription plan.
      </p>
      <p>
        We reserve the right to modify, suspend, or discontinue any aspect of
        the Service at any time with reasonable notice to subscribers.
      </p>

      <h2>3. User Accounts and Registration</h2>
      <p>
        To access certain features of the Service, you must create an account.
        You agree to:
      </p>
      <ul>
        <li>Provide accurate, current, and complete information during registration</li>
        <li>Maintain the security of your account credentials</li>
        <li>Promptly notify us of any unauthorized use of your account</li>
        <li>Be responsible for all activity that occurs under your account</li>
        <li>Not share your account with others or create multiple accounts</li>
      </ul>
      <p>
        We reserve the right to terminate accounts that violate these Terms or
        are inactive for an extended period.
      </p>

      <h2>4. Subscription and Billing</h2>
      <p>
        codecamp.asia offers subscription-based plans (Free, Pro, and Business).
        Paid subscriptions are processed through <strong>Paddle</strong>, which
        acts as our Merchant of Record. All payment processing, tax collection,
        and billing disputes are handled by Paddle.
      </p>
      <ul>
        <li>
          <strong>Free Plan:</strong> Available at no cost with limited features
          as described on our pricing page.
        </li>
        <li>
          <strong>Paid Plans:</strong> Charged on a monthly or annual basis as
          selected at checkout.
        </li>
        <li>
          <strong>Auto-renewal:</strong> Paid subscriptions automatically renew
          at the end of each billing period unless cancelled.
        </li>
        <li>
          <strong>Price changes:</strong> We will provide at least 30 days
          notice before any price increase. Continued use after the notice
          period constitutes acceptance of the new price.
        </li>
        <li>
          <strong>Taxes:</strong> Prices may be subject to VAT, GST, or other
          applicable taxes depending on your jurisdiction, handled by Paddle.
        </li>
      </ul>

      <h2>5. User Content and Intellectual Property</h2>
      <h3>5.1 Characters You Create</h3>
      <p>
        <strong>You own the Characters you create</strong> using the Service,
        subject to your subscription plan:
      </p>
      <ul>
        <li>
          <strong>Free Plan:</strong> Personal use only. Exported Characters
          include a watermark. Commercial use is not permitted.
        </li>
        <li>
          <strong>Pro and Business Plans:</strong> You receive a full commercial
          license to use your generated Characters for any lawful purpose,
          including commercial applications.
        </li>
      </ul>

      <h3>5.2 Our Intellectual Property</h3>
      <p>
        The Service, including all software, algorithms, UI/UX designs, and
        underlying AI models, remains the exclusive property of codecamp.asia.
        Nothing in these Terms grants you ownership of the Service itself.
      </p>

      <h3>5.3 License Grant to Us</h3>
      <p>
        By using the Service, you grant us a limited, non-exclusive,
        royalty-free license to process your inputs (text descriptions, style
        preferences) solely to provide the Service to you. We do not use your
        specific inputs to train our AI models without your explicit consent.
      </p>

      <h2>6. Acceptable Use Policy</h2>
      <p>You agree not to use the Service to create Characters that:</p>
      <ul>
        <li>Infringe on any third party&apos;s intellectual property rights</li>
        <li>Contain hate speech, discriminatory content, or harassment</li>
        <li>Depict child sexual abuse material or non-consensual content</li>
        <li>Are deceptive, defamatory, or fraudulent</li>
        <li>Violate any applicable law or regulation</li>
        <li>Are intended to impersonate real individuals without consent</li>
      </ul>
      <p>
        We reserve the right to remove any content and terminate accounts that
        violate this Acceptable Use Policy without refund.
      </p>

      <h2>7. Termination and Cancellation</h2>
      <p>
        You may cancel your subscription at any time through your account
        dashboard or by contacting us at{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a>. Upon
        cancellation:
      </p>
      <ul>
        <li>
          Your subscription will remain active until the end of the current
          billing period.
        </li>
        <li>No refunds will be issued for the remaining subscription period unless covered by our Refund Policy.</li>
        <li>
          Your account will be downgraded to the Free plan at the end of the
          billing period.
        </li>
      </ul>
      <p>
        We reserve the right to suspend or terminate your account immediately if
        you violate these Terms, with or without notice.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
        OF ANY KIND, EITHER EXPRESS OR IMPLIED. We do not warrant that the
        Service will be uninterrupted, error-free, or that generated Characters
        will meet your specific requirements. AI-generated content is inherently
        unpredictable.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, codecamp.asia SHALL NOT BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE. Our total
        liability to you for any claims related to the Service shall not exceed
        the amount you paid to us in the three months preceding the claim.
      </p>

      <h2>10. Modifications to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify registered
        users via email or prominent notice on the Service at least 14 days
        before any material changes take effect. Continued use of the Service
        after changes become effective constitutes acceptance of the revised
        Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the <strong>Republic of Kazakhstan</strong>, without regard to
        its conflict of law provisions. Any disputes arising from these Terms
        shall be subject to the exclusive jurisdiction of the courts of the
        Republic of Kazakhstan.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        If you have questions about these Terms, please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a>
        <br />
        <strong>Website:</strong> codecamp.asia
      </p>
    </LegalLayout>
  );
}
