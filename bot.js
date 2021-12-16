require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
const { user } = require("./database");
const {
  handleCreateUser,
  handleVote,
  handleCheckUser,
} = require("./handlers/index.js");

bot.command("toxic", async (ctx) => {
  if (ctx.message.reply_to_message) {
    const info = ctx.message.reply_to_message.from;
    const check = await handleCheckUser(user, info.id);

    if (check) {
      await handleVote(user, info.id);
      // ??
      ctx.reply(
        `@${ctx.message.from.username} выбрал токсиком дня ❌@${ctx.message.reply_to_message.from.username}❌\n${ctx.message.reply_to_message.from.first_name}, да ты сегодня в ударе!`
      );
    } else {
      await handleCreateUser(user, info);
      ctx.reply(
        `@${ctx.message.from.username} выбрал токсиком дня ❌@${ctx.message.reply_to_message.from.username}❌\n${ctx.message.reply_to_message.from.first_name}, да ты сегодня в ударе!`
      );
      // ??
    }
  } else {
    ctx.reply(
      `@${ctx.message.from.username}, отправлять команду нужно в ответ на сообщение одного из пользователей!`
    );
  }
});
bot.launch();
