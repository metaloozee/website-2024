"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

import { useScrollAnchor } from "@/lib/hooks/use-scroll-anchor";
import { useState } from "react";
import MessageGroup, { MessageCard } from "@/components/Message";

export default function IndexPage() {
  const [aboutMe, setAboutMe] = useState(false);
  const [projects, setProjects] = useState(false);
  const [arts, setArts] = useState(false);

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
              content:
                "*p.s. to know more about me or what i do, click on the buttons on the left :3*",
            },
          ]}
        />

        {aboutMe && (
          <>
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
                  content:
                    "Now, with my sights set on the ever-expanding horizons of computer science, I'm carving out my niche in the realms of full-stack development and artificial intelligence. While pursuing my formal education in computer science, I'm not content with classroom learning alone. My insatiable curiosity drives me to delve deep into the foundations of AI, mastering complex subjects like [linear-algebra](https://en.wikipedia.org/wiki/Linear_algebra), [machine-learning](https://en.wikipedia.org/wiki/Machine_learning), and [deep-learning](https://en.wikipedia.org/wiki/Deep_learning).",
                },
                {
                  key: "about-3",
                  content:
                    "With a solid foundation in design, a growing expertise in full-stack development, and a deepening understanding of AI, I'm not just preparing for the future of technology - I'm actively shaping it and I'm excited to see where my next \"big thing\" will take me as I continue to evolve, innovate, and inspire in the world of computer science and AI.",
                },
              ]}
            />
          </>
        )}

        {projects && (
          <>
            <MessageGroup
              user
              messages={[
                {
                  key: "projects",
                  content: "what have you done in life?",
                },
              ]}
            />

            <MessageGroup
              messages={[
                {
                  key: "project-1",
                  content:
                    "My portfolio of software projects is diverse and extensive. I've developed everything from [Discord-bots](https://www.google.com/search?q=what+are+discord+bots) to [web-applications](https://en.wikipedia.org/wiki/Web_application), including one that was instrumental in my exam preparation.",
                },
                {
                  key: "project-2",
                  content:
                    "While I continuously develop and release various projects in my spare time, I'm not entirely satisfied with all of them. However, there's one particular project that stands out and fills me with pride.",
                },
              ]}
            >
              <MessageCard
                title="QuickVid"
                description="QuickVid is an open sourced web application in which one can Summarize hour-long youtube videos, Verify the authenticity of the video and Chat with it based on the video's context."
                footerUrl="https://quickvid.vercel.app/"
              />
            </MessageGroup>
          </>
        )}

        {arts && (
          <>
            <MessageGroup
              user
              messages={[
                {
                  key: "arts",
                  content: "show me the cool arts you were bragging about",
                },
              ]}
            />

            <MessageGroup
              messages={[
                {
                  key: "art-1",
                  content: "![cypher](assets/cypher.png)",
                },
                {
                  key: "art-2",
                  content: "![nadeshot](assets/nadeshot.png)",
                },
                {
                  key: "art-3",
                  content: "![mongraal](assets/mongraal.png)",
                },
                {
                  key: "art-4",
                  content: "![florida mutineers](assets/florida.png)",
                },
              ]}
            />
          </>
        )}
      </motion.ul>

      <motion.div
        transition={{
          delay: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0"
      >
        <div className="relative flex flex-wrap gap-5 w-auto grow overflow-hidden max-w-sm justify-end">
          <Button
            onClick={() => setAboutMe(true)}
            disabled={!!aboutMe}
            variant={"secondary"}
          >
            about-me
          </Button>
          <Button
            onClick={() => setProjects(true)}
            disabled={!!projects}
            variant={"secondary"}
          >
            what-have-i-done
          </Button>
          <Button
            onClick={() => setArts(true)}
            disabled={!!arts}
            variant={"secondary"}
          >
            art
          </Button>
          <Button variant={"secondary"}>get-in-touch-with-me</Button>
        </div>
      </motion.div>
    </section>
  );
}
