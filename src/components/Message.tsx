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
import { motion } from "framer-motion";
import { ReactNode } from "react";

const groupVariant = {
  hidden: { opacity: 0, x: -5 },
  show: { opacity: 1, x: 0 },
};
const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function MessageBubble({
  isGroup,
  content,
}: {
  isGroup?: boolean;
  content: ReactNode;
}) {
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
        <CardHeader className="p-4 text-sm">{content}</CardHeader>
      </Card>
    </motion.div>
  );
}

export default function MessageGroup({
  messages,
}: {
  messages: Array<{ key: string; content: ReactNode }>;
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
      className="flex gap-3 md:gap-5 justify-start items-end"
    >
      <Avatar>
        <AvatarImage src="https://github.com/metaloozee.png" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2">
        {messages.map(({ key: id, content }, i) => (
          <MessageBubble key={id} content={content} />
        ))}
      </div>
    </motion.li>
  );
}
