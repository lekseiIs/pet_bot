require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);
// const User = require("./models/user.js");

bot.command("toxic", (ctx) => {
  console.log(ctx.message);
  if (ctx.message.reply_to_message) {
    ctx.reply(
      `@${ctx.message.from.username} выбрал токсиком дня ❌@${ctx.message.reply_to_message.from.username}❌\n${ctx.message.reply_to_message.from.first_name}, да ты сегодня в ударе!`
    );
  } else {
    ctx.reply(`@${ctx.message.from.username}, отправлять команду нужно в ответ на сообщение одного из пользователей!`)
  }
});
bot.launch();
