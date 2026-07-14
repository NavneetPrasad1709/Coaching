import { chromium } from "playwright";

const outDir = process.argv[2] ?? "shots";
const url = "http://localhost:3178";

const browser = await chromium.launch();

async function capture(name, viewport) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle" });
  // Scroll through the page so whileInView reveals fire, then back to top.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.7;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 800));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 600));
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${outDir}/${name}-hero.png` });
  await page.screenshot({ path: `${outDir}/${name}-full.png`, fullPage: true });
  await page.close();
}

await capture("desktop", { width: 1440, height: 900 });
await capture("mobile", { width: 390, height: 844 });

await browser.close();
console.log("done");
