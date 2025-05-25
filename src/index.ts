import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import 'dotenv/config'
 
const main = async () => {
  const result = await generateText({
    model: openai('gpt-4o-mini'),
    messages: [
      {
        role: 'user',
        content: 'You are a helpful assistant that can answer questions and help with tasks.',
      },
    ],
  })
  console.log(result.text)
}
 
main()
