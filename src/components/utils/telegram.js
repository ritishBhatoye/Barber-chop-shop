import axios from 'axios';

export const sendTelegram = (message, chat = '-1001920730920') => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `https://api.telegram.org/bot6038684921:AAGRP-A482oSDy4uoCL0uFbt750fbEFz6EM/sendMessage`,
        {
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
          chat_id: chat,
          text: message,
        },
      )
      .then((response) => {
        if (!response.data.ok) {
          reject(response.data.result);
        }

        resolve({
          id: response.data.result.message_id,
          status: response.data.ok,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
