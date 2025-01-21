import TelegramBot from 'node-telegram-bot-api';

// Токен бота, полученный через BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;  // Лучше использовать переменные окружения
const chatId = process.env.TELEGRAM_CHAT_ID;  // Также chat_id из Telegram

// Создаем экземпляр бота
const bot = new TelegramBot(token);

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, phone } = req.body;
  
      console.log('Received data:', { name, phone });
  
      // Проверка на обязательные поля
      if (!name || !phone ) {
        return res.status(400).json({ success: false, message: 'Все поля обязательны для заполнения' });
      }
  
      const message = `
        Новый запрос:
        Имя: ${name}
        Телефон: ${phone}
      `;
  
      console.log('Message to send:', message);  // Логирование отправляемого сообщения
  
      try {
        const response = await bot.sendMessage(chatId, message);
        console.log('Message sent successfully:', response);  // Логирование успешной отправки
        return res.status(200).json({ success: true, message: 'Данные успешно отправлены в Telegram' });
      } catch (error) {
        console.error('Error sending message to Telegram:', error);  // Логирование ошибки
        return res.status(500).json({ success: false, message: 'Произошла ошибка при отправке данных' });
      }
    } else {
      return res.status(405).json({ success: false, message: 'Метод не поддерживается' });
    }
}