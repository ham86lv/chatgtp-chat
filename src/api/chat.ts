import axios from "axios";
import { ChatGPTResponse } from "../interfaces";

const urlApi = "https://api.openai.com/v1/completions";

const CHAT_GPT_API_KEY = "";

export const fetchMockChatGPTResponse = (
  message: string
): Promise<{ data: ChatGPTResponse }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { reply: `Відповідь на запитання: "${message}"` } });
    }, 2000);
  });
};

export const fetchChatGPTResponse = async (
  message: string
): Promise<string> => {
  try {
    const response = await axios.post(
      urlApi,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHAT_GPT_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error("Помилка при отриманні відповіді");
  }
};
