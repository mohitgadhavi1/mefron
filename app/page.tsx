import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { Industries } from "@/components/Industries";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Stats />
      <Services />
      <Advantages />
      <Industries />
      <ContactCTA />
    </div>
  );
}
