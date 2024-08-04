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

import { User, Globe, CodeXml } from "lucide-react";

export default function IndexPage() {
  return (
    <section className="px-4 container max-w-2xl space-y-14 py-10">
      <div className="flex justify-start items-end gap-5">
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/metaloozee.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
            <CardHeader className="p-4">
              <p className="text-sm">hey there, im ayan</p>
            </CardHeader>
          </Card>
          <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
            <CardHeader className="p-4">
              <p className="text-sm">
                im an eighteen-year-old programming enthusiast that is
                passionate about both web development and artificial
                intelligence. my drive comes from a never-ending curiosity.
              </p>
            </CardHeader>
          </Card>
          <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
            <CardHeader className="p-4">
              <p className="text-sm italic">
                (ask anything about me below or use the pre-made prompts)
              </p>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-start items-end gap-5">
        <Avatar className="size-8">
          <AvatarFallback>
            <User className="size-4" />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <Card className="flex flex-col">
            <CardHeader className="p-4">
              <p className="text-sm">what have you made so far?</p>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="flex justify-start items-end gap-5">
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/metaloozee.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <Card className="bg-zinc-900/50 flex flex-col max-w-fit">
            <CardHeader className="p-4">
              <p className="text-sm">
                here are some of my cool projects -
              </p>
            </CardHeader>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Card className="bg-zinc-900/50 flex flex-col justify-between max-w-xs">
              <CardHeader className="p-4">
                <CardTitle>quickvid</CardTitle>
                <CardDescription className="text-xs">
                    quickvid is an open sourced web application in which one can
                    summarize hour-long youtube videos, verify the authenticity
                    of the video and chat with it based on the video&apos;s
                    context.
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-4">
                <Button className="w-full">
                  <Globe className="size-5" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-900/50 flex flex-col justify-between max-w-xs">
              <CardHeader className="p-4">
                <CardTitle>learnify</CardTitle>
                <CardDescription className="text-xs">
                    learnify is a personalized learning platform designed to
                    enhance the learning experience for both teachers and
                    students.
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-4">
                <Button className="w-full">
                  <CodeXml className="size-5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
