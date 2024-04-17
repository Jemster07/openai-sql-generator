import openaiClient from "./api.js";

const generate = async (userPrompt) => {
  const response = await openaiClient.chat.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Convert the following natural language description into a SQL query:\n\n${userPrompt}.`,
    max_tokens: 100,
    temperature: 0,
  });
  return response.data.choices[0].text;
};

export default generate;