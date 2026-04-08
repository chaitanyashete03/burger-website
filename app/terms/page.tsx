import SectionReveal from "../../components/SectionReveal";
import GlassCard from "../../components/GlassCard";

export const metadata = { title: "Terms of Service | Kangen Burgers" };

export default function TermsOfService() {
  return (
    <div className="bg-background min-h-screen py-20 px-4">
      <SectionReveal className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            <p>By accessing the website at https://www.kangenburgers.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Kangen Burgers&apos; website for personal, non-commercial transitory viewing only.</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Disclaimer</h2>
            <p>The materials on Kangen Burgers&apos; website are provided on an &apos;as is&apos; basis. Kangen Burgers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>
        </GlassCard>
      </SectionReveal>
    </div>
  );
}
