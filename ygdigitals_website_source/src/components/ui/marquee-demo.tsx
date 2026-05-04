"use client";

import * as React from "react";
import { Player } from "@remotion/player";
import { PerspectiveMarquee } from "@/components/ui/remocn-perspective-marquee";

function usePrefersDark() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isDark;
}

export function PerspectiveMarqueeScene({ isDark }: { isDark?: boolean }) {
  const prefersDark = usePrefersDark();
  const darkTheme = isDark !== undefined ? isDark : prefersDark;
  
  return (
    <PerspectiveMarquee
      items={["Trusted by Innovators", "10x Revenue Growth", "24/7 AI Automation", "Next-Gen Web Experiences"]}
      rotateY={-28}
      rotateX={8}
      perspective={1200}
      pixelsPerFrame={2}
      background={darkTheme ? "#080808" : "#fafafa"}
      fadeColor={darkTheme ? "#080808" : "#fafafa"}
      color={darkTheme ? "#fafafa" : "#171717"}
    />
  );
}

export default function Demo() {
  const isDark = usePrefersDark();

  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: isDark ? "#080808" : "#fafafa" }}
    >
      <Player
        component={PerspectiveMarqueeScene}
        inputProps={{ isDark }}
        durationInFrames={240}
        fps={30}
        compositionWidth={1280}
        compositionHeight={200}
        style={{ width: "100%", height: "200px" }}
        controls={false}
        autoPlay
        loop
        clickToPlay={false}
      />
    </div>
  );
}
