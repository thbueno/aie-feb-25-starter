import { openai } from "@ai-sdk/openai";
import { generateText, tool } from "ai";
import "dotenv/config";
import { z } from "zod";
 
const main = async () => {
    const result = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: "What's 10 + 5?",
      tools: {
        addNumbers: tool({
          description: "Add two numbers together",
          parameters: z.object({
            num1: z.number(),
            num2: z.number(),
          }),
          execute: async ({ num1, num2 }) => {
            return num1 + num2;
          },
        }),
      },
    });
    console.log(result.toolResults);
  };
   
  main();
