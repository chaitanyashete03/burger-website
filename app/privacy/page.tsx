import SectionReveal from "@/components/SectionReveal";
import GlassCard from "@/components/GlassCard";

export const metadata = { title: "Privacy Policy | Kangen Burgers" };

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen py-20 px-4">
      <SectionReveal className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            <p>Your privacy is important to us. It is Kangen Burgers&apos; policy to respect your privacy regarding any information we may collect from you across our website, https://www.kangenburgers.com, and other sites we own and operate.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Use of Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
            </ul>
          </div>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
