"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var telegraf_1 = __importDefault(require("telegraf"));
var TeleBot = new telegraf_1.default('1304224773:AAF1d47HtH9oWgPBYi_ggu1VTtN1jUkpliQ');
// ? Simple bot functions
TeleBot.start(function (ctx) { return ctx.reply('Hey there, welcome to Ricks Playground! Do /help for help!'); });
TeleBot.help(function (ctx) { return ctx.reply('I can do many things, but all my commands are: \n /communism ~ Only 4 true slav man'); });
TeleBot.on('sticker', function (ctx) { return ctx.reply('👍'); });
TeleBot.command('communism', function (ctx) { return ctx.reply('All hail stalin!'); });
// ? Launching bot application
console.log(chalk_1.default.redBright('APP LAUNCHED'), 'Application was launched');
TeleBot.launch();
