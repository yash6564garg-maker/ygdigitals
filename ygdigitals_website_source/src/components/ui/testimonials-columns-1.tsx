"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-white/5 bg-[#111] shadow-lg max-w-xs w-full hover:border-[#00f0ff]/20 transition-colors" key={i}>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} className="fill-[#00f0ff] text-[#00f0ff]" />
                    ))}
                  </div>
                  <div className="text-white text-sm leading-relaxed mb-6">"{text}"</div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-white tracking-tight leading-5 text-sm">{name}</div>
                      <div className="text-[#888888] leading-5 text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
