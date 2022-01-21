import puppeteer from 'puppeteer';
import { getHtmlTemplateForAnswer } from './helpers/get-html-template-for-answer.js'
import { getHtmlTemplateForWelcomeMessage } from './helpers/get-html-template-for-welcome-message.js'

export class TemplateService {
  constructor() { }

  createTemplateForAnswer = async (answer) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 360, height: 96, deviceScaleFactor: 3});
    await page.setContent(getHtmlTemplateForAnswer(answer));
    const picture = await page.screenshot({
      type: 'png',
      fullPage: true,
    });
    await browser.close();
    return picture;
  };

  createTemplateForWelcomeMessage = async (message) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 360, height: 96, deviceScaleFactor: 3});
    await page.setContent(getHtmlTemplateForWelcomeMessage(message));
    const picture = await page.screenshot({
      type: 'png',
      fullPage: true,
    });
    await browser.close();
    return picture;
  }
}