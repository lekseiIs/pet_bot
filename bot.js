require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
const { user, db } = require("./database");
const { handleCreateUser } = require("./handlers/index.js");

bot.command("toxic", async (ctx) => {
  if (ctx.message.reply_to_message) {
    const info = ctx.message.reply_to_message.from;
    handleCreateUser(user, info);
    ctx.reply(
      `@${ctx.message.from.username} выбрал токсиком дня ❌@${ctx.message.reply_to_message.from.username}❌\n${ctx.message.reply_to_message.from.first_name}, да ты сегодня в ударе!`
    );
  } else {
    ctx.reply(
      `@${ctx.message.from.username}, отправлять команду нужно в ответ на сообщение одного из пользователей!`
    );
  }
});
bot.launch();
