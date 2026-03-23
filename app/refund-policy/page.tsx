import SectionReveal from "@/components/SectionReveal";
import GlassCard from "@/components/GlassCard";

export const metadata = { title: "Refund Policy | Kangen Burgers" };

export default function RefundPolicy() {
  return (
    <div className="bg-background min-h-screen py-20 px-4">
      <SectionReveal className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Refund & Cancellation Policy</h1>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            <p>We strive to provide the best quality food and customer experience. However, if there&apos;s an issue with your order, please read our policies regarding cancellations and refunds below.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Order Cancellations</h2>
            <p>Orders can only be cancelled within 5 minutes of placing them. Since food preparation starts immediately, we cannot accept cancellations beyond this timeframe.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Refunds</h2>
            <p>Refunds will only be processed if:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>The wrong item was delivered to you</li>
              <li>The quality of the food was significantly compromised upon delivery</li>
            </ul>
            <p>Approved refunds will take 3-5 business days to reflect in your original payment method.</p>
          </div>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
