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
    <section className="relative px-4 h-screen flex items-center justify-center container max-w-2xl space-y-14 py-10">
      <motion.ul
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.3,
        }}
        initial="hidden"
        animate="show"
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
              key: "cards",
              isGroup: true,
              content: (
                <div className="flex gap-2 flex-wrap">
                  <Button
                    className="cursor-pointer"
                    variant={"secondary"}
                    asChild
                  >
                    <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
                      <CardHeader className="p-4">
                        <p className="text-sm italic">about-me</p>
                      </CardHeader>
                    </Card>
                  </Button>
                  <Button
                    className="cursor-pointer"
                    variant={"secondary"}
                    asChild
                  >
                    <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
                      <CardHeader className="p-4">
                        <p className="text-sm italic">what-have-i-done</p>
                      </CardHeader>
                    </Card>
                  </Button>
                  <Button
                    className="cursor-pointer"
                    variant={"secondary"}
                    asChild
                  >
                    <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
                      <CardHeader className="p-4">
                        <p className="text-sm italic">how-do-you-contact-me</p>
                      </CardHeader>
                    </Card>
                  </Button>
                </div>
              ),
            },
          ]}
        />
      </motion.ul>
    </section>
  );
}
