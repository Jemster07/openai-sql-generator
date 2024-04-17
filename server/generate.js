import openaiClient from "./api.js";

const generate = async (userPrompt) => {
  const messages = [
    { role: "system", content: `You are a translator from plain English to SQL.` },
    { role: "user", content: `Convert the following natural language description into a SQL query: \n\nshow all elements from the table users.` },
    { role: "assistant", content: `SELECT * FROM users;` },
    { role: "user", content: `Convert the following natural language description into a SQL query: \n\n${userPrompt}.` },
  ];
  const response = await openaiClient.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
  });

  return response.data.choices[0].message.content;
};

export default generate;