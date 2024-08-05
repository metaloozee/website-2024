"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import Link from "next/link";

import { MemoizedReactMarkdown } from "@/components/Markdown";
import remarkGfm from "remark-gfm";
import clsx from "clsx";

const groupVariant = {
  hidden: { opacity: 0, x: -5 },
  show: { opacity: 1, x: 0 },
};
const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function MessageBubble({ content }: { content: string }) {
  return (
    <motion.div
      transition={{
        type: "spring",
        mass: 1,
        damping: 100,
        stiffness: 500,
      }}
      variants={itemVariant}
    >
      <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
        <CardHeader className="p-4 text-sm">
          <MemoizedReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              li({ children }) {
                return <li className="list-inside list-disc">{children}</li>;
              },
              ul({ children }) {
                return <ul className="list-item">{children}</ul>;
              },
              ol({ children }) {
                return <ol className="list-item">{children}</ol>;
              },
              p({ children }) {
                return <p>{children}</p>;
              },
              a({ children, href }) {
                return <Link target="_blank" rel="noopener noreferrer" href={href as string} className="text-purple-300 bg-purple-50/10">{children}</Link>;
              },
            }}
          >
            {content.toLocaleLowerCase()}
          </MemoizedReactMarkdown>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export default function MessageGroup({
  messages,
  user,
}: {
  messages: Array<{ key: string; content: string }>;
  user?: boolean;
}) {
  return (
    <motion.li
      transition={{
        type: "spring",
        mass: 11,
        damping: 140,
        stiffness: 500,

        staggerChildren: 0.1,
      }}
      variants={groupVariant}
      className={clsx(
        "flex gap-3 md:gap-5 justify-start items-end",
        user && "flex-row-reverse"
      )}
    >
      <Avatar>
        {!user && <AvatarImage src="https://github.com/metaloozee.png" />}
        <AvatarFallback>
          <User className="size-4" />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2">
        {messages.map(({ key: id, content }, i) => (
          <MessageBubble key={id} content={content} />
        ))}
      </div>
    </motion.li>
  );
}
