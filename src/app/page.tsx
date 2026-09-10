import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Flavors } from "@/components/Flavors";
import { Benefits } from "@/components/Benefits";
import { Ways } from "@/components/Ways";
import { Story } from "@/components/Story";
import { Events } from "@/components/Events";
import { Locations } from "@/components/Locations";
import { InstagramGrid } from "@/components/InstagramGrid";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee tone="fita" />
        <Flavors />
        <Marquee reverse tone="sol" />
        <Benefits />
        <Ways />
        <Story />
        <Events />
        <Locations />
        <InstagramGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
