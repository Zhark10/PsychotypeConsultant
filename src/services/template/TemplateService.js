import puppeteer from 'puppeteer';
import { getHtmlTemplateForAnswer } from './helpers/get-html-template-for-answer.js'
import { getHtmlTemplateForStats } from './helpers/get-html-template-for-stats.js'
import { getHtmlTemplateForSimpleMessage } from './helpers/get-html-template-for-simple-message.js'

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

  createTemplateForSimpleMessage = async (message) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 360, height: 96, deviceScaleFactor: 3});
    await page.setContent(getHtmlTemplateForSimpleMessage(message));
    const picture = await page.screenshot({
      type: 'png',
      fullPage: true,
    });
    await browser.close();
    return picture;
  }

  createTemplateForStats = async (results) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const calculatedHeight = 48 + (results?.length * 18)
    await page.setViewport({width: 360, height: calculatedHeight, deviceScaleFactor: 3});
    await page.setContent(getHtmlTemplateForStats(results, calculatedHeight));
    const picture = await page.screenshot({
      type: 'png',
      fullPage: true,
    });
    await browser.close();
    return picture;
  };
}