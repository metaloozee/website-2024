"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { User, Globe, CodeXml, CornerDownLeft } from "lucide-react";

import { motion } from "framer-motion";
import MessageGroup from "@/components/Message";

export default function IndexPage() {
  return (
    <section className="relative px-4 flex items-center justify-center container max-w-2xl space-y-14 py-10">
      <motion.ul
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.3,
        }}
        initial="hidden"
        animate="show"
        className="space-y-10 mb-20"
      >
        <MessageGroup
          messages={[
            {
              key: "intro",
              content: <>hey there, im ayan</>,
            },
            {
              key: "short-about-me",
              content: (
                <>
                  im an eighteen-year-old programming enthusiast that is
                  passionate about both web development and artificial
                  intelligence. my drive comes from a never-ending curiosity.
                </>
              ),
            },
            {
              key: "note",
              content: (
                <p className="italic">
                  p.s. try asking me anything about me below :3
                </p>
              ),
            },
          ]}
        />
      </motion.ul>

      <div className="fixed inset-x-0 bottom-0">
        <div className="relative container flex gap-2 w-full grow overflow-hidden p-10 max-w-2xl">
          <Input placeholder="what have you made so far?" />
          <Button>
            <CornerDownLeft className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
