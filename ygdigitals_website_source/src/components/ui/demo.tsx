'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-[80vh] border-none bg-transparent relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight tracking-tight">
            We Build the AI That <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#00ff9d]">
              Builds Your Business.
            </span>
          </h1>
          <p className="mt-4 text-neutral-400 max-w-lg text-lg mb-8 mx-auto md:mx-0">
            Automate workflows, generate scalable content, and deploy intelligent websites with Apple-level minimalism and sci-fi futurism.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded hover:bg-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300">
              Book a Free Strategy Call
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[400px]">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
