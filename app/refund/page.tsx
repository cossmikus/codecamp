import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for mascotcraft.ai — 14-day money-back guarantee for first-time subscribers.",
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy">
      <p>
        At mascotcraft.ai, we want you to be completely satisfied with your
        subscription. This Refund Policy explains when and how you can request a
        refund. All refunds are processed through{" "}
        <strong>Paddle</strong>, our Merchant of Record.
      </p>

      <h2>1. 14-Day Money-Back Guarantee</h2>
      <p>
        We offer a <strong>14-day money-back guarantee</strong> for first-time
        paid subscribers to mascotcraft.ai. If you are not satisfied with your
        subscription for any reason, you may request a full refund within 14
        days of your initial payment.
      </p>
      <p>
        This guarantee applies to:
      </p>
      <ul>
        <li>First-time Pro plan subscriptions</li>
        <li>First-time Business plan subscriptions</li>
        <li>Both monthly and annual billing options</li>
      </ul>

      <h2>2. How to Request a Refund</h2>
      <p>To request a refund, please follow these steps:</p>
      <ul>
        <li>
          Send an email to{" "}
          <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a> with
          the subject line &quot;Refund Request&quot;
        </li>
        <li>
          Include your registered email address and the reason for your refund
          request
        </li>
        <li>
          Our team will review your request and respond within 2 business days
        </li>
      </ul>
      <p>
        You can also contact our support team directly through the{" "}
        <Link href="/contact">Contact page</Link>.
      </p>

      <h2>3. Refund Processing</h2>
      <p>
        Approved refunds are processed by Paddle, our payment processor. Once
        approved:
      </p>
      <ul>
        <li>
          Refunds are typically processed within <strong>5–10 business days</strong>
        </li>
        <li>
          The refund will be returned to your original payment method
        </li>
        <li>
          Processing time may vary depending on your bank or card issuer
        </li>
        <li>
          You will receive an email confirmation from Paddle once the refund is
          processed
        </li>
      </ul>

      <h2>4. Eligibility Requirements</h2>
      <p>To be eligible for a refund under our money-back guarantee:</p>
      <ul>
        <li>
          The request must be made within <strong>14 days</strong> of the
          initial payment
        </li>
        <li>
          It must be your <strong>first paid subscription</strong> to
          mascotcraft.ai
        </li>
        <li>
          Your account must be in good standing (not suspended for policy
          violations)
        </li>
      </ul>

      <h2>5. Non-Refundable Scenarios</h2>
      <p>Refunds will <strong>not</strong> be issued in the following cases:</p>
      <ul>
        <li>
          Renewal charges — refunds do not apply to subscription renewals (only
          the initial purchase)
        </li>
        <li>
          Accounts suspended or terminated due to violations of our{" "}
          <Link href="/terms">Terms of Service</Link>
        </li>
        <li>
          Requests made after the 14-day guarantee window has expired
        </li>
        <li>
          Repeated refund requests (refund abuse)
        </li>
        <li>
          Partial refunds for unused time within a billing period (except where
          required by law)
        </li>
        <li>
          Add-ons or one-time purchases (if applicable in the future)
        </li>
      </ul>

      <h2>6. Refund Abuse Policy</h2>
      <p>
        Our money-back guarantee is designed to protect customers who genuinely
        try our service and are unsatisfied. We reserve the right to deny refund
        requests from accounts that we determine have abused our refund policy,
        including but not limited to subscribing and canceling repeatedly to
        obtain multiple refunds.
      </p>

      <h2>7. Annual Plan Refunds</h2>
      <p>
        For annual subscriptions, the 14-day money-back guarantee applies to the
        full annual payment. After 14 days, annual subscription fees are
        non-refundable. We recommend starting with a monthly plan if you are
        uncertain.
      </p>

      <h2>8. Subscription Cancellation</h2>
      <p>
        Requesting a refund does not automatically cancel your subscription. To
        cancel your subscription and prevent future charges, please also cancel
        through your account dashboard or notify us at{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a>.
      </p>

      <h2>9. Chargebacks</h2>
      <p>
        If you initiate a chargeback with your bank or credit card company
        before contacting us, we may be unable to process a direct refund. We
        encourage you to contact us first at{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a> —
        we&apos;re happy to resolve any issues quickly and directly.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Refund Policy at any time. Changes
        will be effective upon posting to this page. Material changes will be
        communicated via email with reasonable advance notice.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        For refund requests or questions about this policy, please contact:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:cossmikus@gmail.com">cossmikus@gmail.com</a>
        <br />
        <strong>Response time:</strong> Within 2 business days
      </p>
    </LegalLayout>
  );
}
