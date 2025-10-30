"use client";

import Image from "next/image";
import f1GPTLogo from "./assets/f1GPTLogo.jpeg";
import { useChat } from "ai/react";
import { Message } from "ai";

// shadcn/ui
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// custom
import Bubble from "./comonents/Bubble";
import LoadingBubble from "./comonents/LoadingBubble";
import PromptSuggestionsRow from "./comonents/PromptSuggestionsRow";

const Home = () => {
  const { append, isLoading, messages, input, handleInputChange, handleSubmit } =
    useChat();

  const noMessages = !messages || messages.length === 0;

  const handlePrompt = (promptText: string) => {
    append({
      content: promptText,
      role: "user",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl border">
        <CardHeader className="flex flex-col items-center gap-2">
          <Image
            src={f1GPTLogo}
            width={80}
            height={80}
            alt="GPT logo"
            className="rounded-full shadow-md"
          />
          <h1 className="text-xl font-semibold">UFC Chatbot</h1>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <ScrollArea className="h-[400px] pr-2">
            {noMessages ? (
              <div className="flex flex-col items-center justify-center text-center h-full gap-3 text-muted-foreground">
                <p className="text-lg font-medium">
                  The best place for UFC questions
                </p>
                <PromptSuggestionsRow onPromptClick={handlePrompt} />
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {messages.map((message: Message, index: number) => (
                  <Bubble key={`message-${index}`} message={message} />
                ))}
                {isLoading && <LoadingBubble />}
              </div>
            )}
          </ScrollArea>

          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center gap-2 pt-2"
          >
            <Input
              className="flex-1"
              onChange={handleInputChange}
              value={input}
              placeholder="Ask me anything about UFC..."
            />
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
