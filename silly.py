# https://codehs.com/sandbox/id/python-3-FJ9Q5s?filename=main.py

import asyncio
from pyppeteer import launch
import time

async def main():
    browser = await launch(options={'args': ['--no-sandbox'], 'devtools':True, 'headless':True})
    page = await browser.newPage()
    await page.goto('https://codehs.com/sandbox/id/python-3-jLlrsf')
    await page.screenshot({'path': './code.png'})
    time.sleep(2)
    # await page.screenshot({'path': './code.png'})
    for x in range(3000):
        await asyncio.sleep(0.5)
        await page.screenshot({'path': "r1.png"})
        await asyncio.sleep(10)
        await page.keyboard.press('KeyH')
        await asyncio.sleep(10)
        await page.keyboard.press('KeyH')
        await asyncio.sleep(10)
        await page.keyboard.press('KeyH')
        await asyncio.sleep(70)
        await page.mouse.click(580,125,{'button': 'left'})
        await page.screenshot({'path': "res.png"})

    await browser.close()
asyncio.get_event_loop().run_until_complete(main())
