import { useParams } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Policies() {
  const { policyType } = useParams<{ policyType: string }>();

  const policies: Record<string, { title: string; content: string }> = {
    terms: {
      title: 'Terms & Conditions',
      content: `
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using FluentEdge services, you accept and agree to be bound by these Terms and Conditions.</p>
        
        <h2>2. Services</h2>
        <p>FluentEdge provides online test preparation coaching for IELTS, TOEFL, PTE, CELPIP, and GRE. Services include live online classes, study materials, and personalized feedback.</p>
        
        <h2>3. Payment Terms</h2>
        <p>Course fees must be paid in full or according to the agreed payment plan. All fees are non-refundable except as stated in our Refund Policy.</p>
        
        <h2>4. Student Responsibilities</h2>
        <p>Students are expected to attend classes regularly, complete assignments, and maintain respectful communication with the instructor.</p>
        
        <h2>5. Intellectual Property</h2>
        <p>All course materials, including but not limited to videos, documents, and resources, are the intellectual property of FluentEdge and may not be shared or distributed without permission.</p>
        
        <h2>6. Limitation of Liability</h2>
        <p>While we strive to help students achieve their target scores, we cannot guarantee specific test results. Individual results may vary.</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly, including name, email, phone number, and payment information when you register for our services.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to provide services, process payments, communicate with you, and improve our services.</p>
        
        <h2>3. Information Sharing</h2>
        <p>We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>
        
        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
        
        <h2>5. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>
        
        <h2>6. Cookies</h2>
        <p>We use cookies to enhance your experience. You can choose to disable cookies through your browser settings.</p>
      `
    },
    refund: {
      title: 'Refund Policy',
      content: `
        <h2>1. Refund Eligibility</h2>
        <p>Refunds may be requested within 7 days of course enrollment, provided no more than 2 classes have been attended.</p>
        
        <h2>2. Refund Process</h2>
        <p>To request a refund, contact us via email with your enrollment details. Refunds will be processed within 14 business days.</p>
        
        <h2>3. Partial Refunds</h2>
        <p>If more than 2 classes have been attended, a partial refund may be considered on a case-by-case basis.</p>
        
        <h2>4. Non-Refundable Items</h2>
        <p>Study materials, mock tests, and one-on-one sessions are non-refundable once accessed.</p>
        
        <h2>5. Payment Plan Cancellation</h2>
        <p>If you cancel a payment plan, you remain responsible for payments for classes already attended.</p>
        
        <h2>6. Special Circumstances</h2>
        <p>Refunds may be considered in special circumstances such as medical emergencies or other unforeseen situations. Contact us to discuss.</p>
      `
    }
  };

  const policy = policies[policyType || 'terms'] || policies.terms;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-blue-900 mb-8">{policy.title}</h1>
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: policy.content }} />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-blue-900 mb-4">Last updated: January 2024</p>
          <p className="text-blue-900">
            If you have questions about these policies, please{' '}
            <a href="/contact" className="text-blue-900 hover:text-blue-800">contact us</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

