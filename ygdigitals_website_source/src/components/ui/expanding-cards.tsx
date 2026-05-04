"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; 

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    defaultActiveIndex,
  );
  
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};
    
    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul
      className={cn(
        "w-full max-w-6xl gap-4",
        "grid",
        "h-[600px] md:h-[500px]",
        "transition-all duration-700 ease-in-out",
        className,
      )}
      style={{
        ...gridStyle,
        ...(isDesktop 
          ? { gridTemplateRows: '1fr' }
          : { gridTemplateColumns: '1fr' }
        )
      }}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black text-white shadow-lg",
            "md:min-w-[80px]",
            "min-h-0 min-w-0"
          )}
          onMouseEnter={() => handleInteraction(index)}
          onFocus={() => handleInteraction(index)}
          onClick={() => {
            if (activeIndex === index && item.linkHref && item.linkHref !== "#") {
              window.location.href = item.linkHref;
            } else {
              handleInteraction(index);
            }
          }}
          tabIndex={0}
          data-active={activeIndex === index}
        >
          <img
            src={item.imgSrc}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 scale-110 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 opacity-80 group-data-[active=true]:opacity-90" />

          <article
            className="absolute inset-0 flex flex-col justify-end gap-2 p-6"
          >
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-rotate-90 text-xl font-bold uppercase tracking-wider text-white opacity-100 transition-all duration-300 ease-out block group-data-[active=true]:opacity-0 whitespace-nowrap">
              {item.title}
            </h3>

            <div className="text-[#00f0ff] opacity-0 transition-all duration-300 delay-75 ease-out group-data-[active=true]:opacity-100 mb-2">
              {item.icon}
            </div>

            <h3 className="text-3xl font-bold text-white opacity-0 transition-all duration-300 delay-150 ease-out group-data-[active=true]:opacity-100">
              {item.title}
            </h3>

            <p className="w-full max-w-sm text-base text-zinc-300 opacity-0 transition-all duration-300 delay-225 ease-out group-data-[active=true]:opacity-100">
              {item.description}
            </p>

            {item.linkHref && item.linkHref !== "#" && (
              <div className="opacity-0 transition-all duration-300 delay-300 ease-out group-data-[active=true]:opacity-100 mt-2">
                <a 
                  href={item.linkHref} 
                  className="inline-flex items-center justify-center rounded-lg text-sm font-bold h-10 px-6 py-2 bg-[#00f0ff] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:-translate-y-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                </a>
              </div>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";
