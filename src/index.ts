import chalk from "chalk";
import Telegraf from "telegraf";
const token = ''

const TeleBot = new Telegraf(token)

// ? Simple bot functions
TeleBot.start((ctx) => ctx.reply('Hey there, welcome to Ricks Playground! Do /help for help!'))
TeleBot.help((ctx) => ctx.reply('I can do many things, but all my commands are: \n /communism ~ Only 4 true slav man'))
TeleBot.on('sticker', (ctx) => ctx.reply('👍'))
TeleBot.command('communism', (ctx) => ctx.reply('All hail stalin!'))

// ? Launching bot application
console.log(chalk.redBright('APP LAUNCHED'), 'Application was launched')
TeleBot.launch()