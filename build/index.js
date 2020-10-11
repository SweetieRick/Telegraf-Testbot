"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = __importDefault(require("telegraf"));
var token = process.env.TOKEN;
var TeleBot = new telegraf_1.default('1304224773:AAF1d47HtH9oWgPBYi_ggu1VTtN1jUkpliQ');
TeleBot.start(function (ctx) { return ctx.reply('Hey there, welcome to Ricks Playground!'); });
