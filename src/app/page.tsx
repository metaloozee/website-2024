"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import MessageGroup from "@/components/Message";

import { useScrollAnchor } from "@/lib/hooks/use-scroll-anchor";

export default function IndexPage() {
  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor();

  return (
    <section
      className="relative px-4 flex items-center justify-center container max-w-2xl space-y-14 py-10"
      ref={scrollRef}
    >
      <motion.ul
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.3,
        }}
        initial="hidden"
        animate="show"
        className="space-y-10 mb-40 md:mb-20"
      >
        <MessageGroup
          messages={[
            {
              key: "intro",
              content: "hey there, im ayan",
            },
            {
              key: "short-about-me",
              content:
                "im an eighteen-year-old programming enthusiast that is passionate about both full-stack-development and artificial-intelligence. my drive comes from a never-ending curiosity.",
            },
            {
              key: "note",
              content: "*p.s. to know more about me or what i do, click on the buttons below :3*",
            },
          ]}
        />
        <MessageGroup
          user
          messages={[
            {
              key: "about",
              content: "tell me more about yourself",
            },
          ]}
        />

        <MessageGroup
          messages={[
            {
              key: "about-1",
              content:
                "I stand at the intersection of academia and innovation, an 18-year-old computer science student from [Mumbai, India](https://en.wikipedia.org/wiki/Mumbai). My journey in technology is as diverse as it is promising. I started my creative path in the vibrant world of [e-sports](https://en.wikipedia.org/wiki/Esports), where I expressed my flair by designing eye-catching graphics for teams and communities.",
            },
            {
              key: "about-2",
              content: "Now, with my sights set on the ever-expanding horizons of computer science, I'm carving out my niche in the realms of full-stack development and artificial intelligence. While pursuing my formal education in computer science, I'm not content with classroom learning alone. My insatiable curiosity drives me to delve deep into the foundations of AI, mastering complex subjects like [linear-algebra](https://en.wikipedia.org/wiki/Linear_algebra), [machine-learning](https://en.wikipedia.org/wiki/Machine_learning), and [deep-learning](https://en.wikipedia.org/wiki/Deep_learning)."
            },
            {
              key: "about-3",
              content: "With a solid foundation in design, a growing expertise in full-stack development, and a deepening understanding of AI, I'm not just preparing for the future of technology - I'm actively shaping it and I'm excited to see where my next \"big thing\" will take me as I continue to evolve, innovate, and inspire in the world of computer science and AI."
            },
          ]}
        />
      </motion.ul>

      <motion.div 
        transition={{
          delay: 1
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-x-0 bottom-0"
      >
        <div className="relative container flex flex-wrap justify-center gap-5 w-full grow overflow-hidden p-10 max-w-2xl">
          <Button variant={"secondary"}>about-me</Button>
          <Button variant={"secondary"}>what-have-i-done</Button>
          <Button variant={"secondary"}>get-in-touch-with-me</Button>
        </div>
      </motion.div>
    </section>
  );
}
