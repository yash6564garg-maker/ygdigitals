import { Globe, Bot, Video } from "lucide-react";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";

const aiServices: CardItem[] = [
  {
    id: "ai-websites",
    title: "AI Websites",
    description:
      "High-performance, intelligent web experiences tailored for conversion. We build stunning interfaces that adapt and convert.",
    imgSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200",
    icon: <Globe size={32} />,
    linkHref: "/services/ai-websites",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Autonomous systems that handle your operations 24/7 with zero friction. Connect your data and let neural networks do the heavy lifting.",
    imgSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200",
    icon: <Bot size={32} />,
    linkHref: "#",
  },
  {
    id: "ai-ugc",
    title: "AI UGC Videos",
    description:
      "Hyper-realistic, synthetic user-generated content that scales your brand. Create endless permutations of video marketing without a camera.",
    imgSrc:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200",
    icon: <Video size={32} />,
    linkHref: "#",
  },
];

export default function ExpandingCardsDemo() {
  return (
    <section className="flex w-full flex-col items-center justify-center space-y-8 bg-transparent p-4 md:p-8 my-10" id="services">
      <div className="text-center fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2 text-white text-center">
          Our AI Services
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400 mx-auto">
          Deploy intelligent systems designed for scale and aesthetics.
        </p>
      </div>
      <ExpandingCards items={aiServices} defaultActiveIndex={1} className="fade-in delay-1 mt-10" />
    </section>
  );
}
