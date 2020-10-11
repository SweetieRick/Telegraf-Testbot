import Telegraf from "telegraf";
const token = process.env.TOKEN

const TeleBot = new Telegraf('1304224773:AAF1d47HtH9oWgPBYi_ggu1VTtN1jUkpliQ')
TeleBot.start((ctx) => ctx.reply('Hey there, welcome to Ricks Playground!'))