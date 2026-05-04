import { Button } from "@/components/ui/button";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src?: string;
    alt?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    icon: React.ReactNode;
    name: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

export const About3 = ({
  title,
  description,
  mainImage,
  secondaryImage,
  breakout,
  companiesTitle,
  companies,
  achievementsTitle,
  achievementsDescription,
  achievements,
}: About3Props) => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col items-center justify-center text-center gap-5 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{title}</h1>
          <p className="text-zinc-400 text-lg max-w-3xl">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3 fade-in delay-1">
          <img
            src={mainImage?.src}
            alt={mainImage?.alt}
            className="size-full max-h-[620px] rounded-3xl object-cover lg:col-span-2 border border-white/10"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-3xl bg-black/40 border border-white/10 p-7 md:w-1/2 lg:w-auto backdrop-blur-sm">
              <div className="text-left">
                <p className="mb-2 text-2xl font-bold text-white tracking-tight">{breakout?.title}</p>
                <p className="text-zinc-400">{breakout?.description}</p>
              </div>
              <div className="mr-auto mt-4">
                <InteractiveHoverButton text={breakout?.buttonText || "Learn More"} href={breakout?.buttonUrl} classes="font-bold" />
              </div>
            </div>
            <img
              src={secondaryImage?.src}
              alt={secondaryImage?.alt}
              className="grow basis-0 rounded-3xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto border border-white/10"
            />
          </div>
        </div>
        <div className="py-24 fade-in">
          <p className="text-center text-zinc-500 uppercase tracking-widest text-sm font-bold">{companiesTitle} </p>
          <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-16 opacity-60">
            {companies?.map((company, idx) => (
              <div className="flex items-center gap-2 text-white" key={company.name + idx}>
                {company.icon}
                <span className="font-bold tracking-tight text-xl">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-black border border-white/10 p-10 md:p-16 fade-in shadow-[0_0_50px_rgba(0,240,255,0.03)]">
          <div className="flex flex-col gap-4 text-center md:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-zinc-400">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-10 text-center relative z-10">
            {achievements?.map((item, idx) => (
              <div className="flex flex-col gap-3" key={item.label + idx}>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">{item.label}</p>
                <span className="text-5xl font-bold md:text-6xl text-white tracking-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] md:block"></div>
        </div>
      </div>
    </section>
  );
};
