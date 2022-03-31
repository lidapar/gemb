//
const userAgent = require('user-agents');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
 });

  const page = await browser.newPage();
  // await page.setUserAgent(userAgent.toString())
  await page.goto('https://codehs.com/sandbox/id/python-3-BGblv6')
  // await page.screenshot({'path': './codejs.png'})
  await page.waitForTimeout(2000)
//   # await page.screenshot({'path': './code.png'})
  await page.mouse.click(580,125,{'button': 'left'})
 for(x=0;x<10000;x++) {
   for(y=0;y<37;y++) { //37
    await page.waitForTimeout(500)
    // await page.screenshot({'path': "r1.png"})
    await page.waitForTimeout(10000)
    await page.keyboard.press('KeyH')
    await page.waitForTimeout(10000)
    await page.keyboard.press('KeyH')
    await page.waitForTimeout(10000)
    await page.keyboard.press('KeyH')
    console.log(`pimpo${x}`)
    await page.mouse.click(580,125,{'button': 'left'})
    // await page.screenshot({'path': `resjs${x}.png`})
   }
   // stop 
   await page.mouse.click(620,125,{'button': 'left'})
   await page.waitForTimeout(1000)
  //  await page.screenshot({'path': "stop.png"})
 }
  await browser.close();
})();
