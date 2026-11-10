import { TopBanner } from "@/components/sections/TopBanner";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TagMarquee } from "@/components/sections/TagMarquee";
import { Statement } from "@/components/sections/Statement";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { Studio } from "@/components/sections/Studio";
import { Influencer } from "@/components/sections/Influencer";
import { UgcCreator } from "@/components/sections/UgcCreator";
import { Portfolio } from "@/components/sections/Portfolio";
import { Photos } from "@/components/sections/Photos";
import { Feedbacks } from "@/components/sections/Feedbacks";
import { Faq } from "@/components/sections/Faq";
import { WhyUgc } from "@/components/sections/WhyUgc";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ProposalPopup } from "@/components/sections/ProposalPopup";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-40">
        <TopBanner />
        <Header />
      </div>
      <main>
        <Hero />
        <TagMarquee />
        <Statement />
        <Brands />
        <About />
        <Studio />
        <Influencer />
        <UgcCreator />
        <Portfolio />
        <Photos />
        <Feedbacks />
        <Faq />
        <WhyUgc />
        <Contact />
      </main>
      <Footer />
      <ProposalPopup />
      <WhatsAppFloat />
    </>
  );
}
