import { About3 } from "@/components/ui/about-3";
import { Command, Infinity, Hexagon, Triangle, Cpu, Network } from "lucide-react";

export default function AboutDemo() {
  return (
    <About3
      title="About YG Digitals"
      description="We are a vanguard AI agency operating at the intersection of stark minimalism and advanced neural architecture. Our mission is to transform traditional businesses into autonomous, self-scaling entities. Every pixel is intentional. Every workflow is optimized."
      mainImage={{
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
        alt: "Neural Architecture",
      }}
      secondaryImage={{
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
        alt: "Digital Infrastructure",
      }}
      breakout={{
        title: "Autonomous Growth",
        description:
          "Scale your business without scaling your headcount. Deploy AI systems that never sleep, never stop learning, and never compromise on quality.",
        buttonText: "Book a Strategy Call",
        buttonUrl: "#contact",
      }}
      companiesTitle="Valued by forward-thinking companies"
      companies={[
        { icon: <Command size={28} />, name: "Arc" },
        { icon: <Hexagon size={28} />, name: "Descript" },
        { icon: <Triangle size={28} />, name: "Mercury" },
        { icon: <Infinity size={28} />, name: "Ramp" },
        { icon: <Cpu size={28} />, name: "Retool" },
        { icon: <Network size={28} />, name: "Watershed" }
      ]}
      achievementsTitle="Our Scale in Numbers"
      achievementsDescription="We don't just build websites. We build complete algorithmic infrastructures that drive measurable, predictable revenue."
      achievements={[
        { label: "Systems Deployed", value: "300+" },
        { label: "Client Revenue", value: "$10M+" },
        { label: "Automation ROI", value: "400%" },
        { label: "System Uptime", value: "99.9%" },
      ]}
    />
  );
};
