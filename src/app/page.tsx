"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

import { CornerDownLeft, User } from "lucide-react";

import { motion } from "framer-motion";
import MessageGroup from "@/components/Message";

import { useChat } from "ai/react";
import { useScrollAnchor } from "@/lib/hooks/use-scroll-anchor";

export default function IndexPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
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
        className="space-y-10 mb-20"
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
                "im an eighteen-year-old programming enthusiast that is passionate about both web development and artificial intelligence. my drive comes from a never-ending curiosity.",
            },
            {
              key: "note",
              content: "*p.s. try asking me anything about me below :3*",
            },
          ]}
        />

        {messages.map((m) => {
          if (m.role === "user") {
            return (
              <div
                key={m.id}
                className="flex flex-row-reverse justify-start items-end gap-3 md:gap-5"
              >
                <Avatar>
                  <AvatarFallback>
                    <User className="size-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                  <Card className="flex flex-col">
                    <CardHeader className="p-4">
                      <p className="text-sm">{m.content}</p>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            );
          } else {
            return (
              <MessageGroup
                key={m.id}
                messages={[
                  {
                    key: m.id,
                    content: m.content,
                  },
                ]}
              />
            );
          }
        })}
      </motion.ul>

      <div className="fixed inset-x-0 bottom-0">
        <form
          onSubmit={handleSubmit}
          className="relative container flex gap-2 w-full grow overflow-hidden p-10 max-w-2xl"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="what have you made so far?"
          />
          <Button type="submit">
            <CornerDownLeft className="size-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
