const pptxgen = require('pptxgenjs');
const path = require('path');

// html2pptx.js path
const html2pptx = require('/Users/spring/.gemini/skills/pptx/scripts/html2pptx.js');

const SLIDES_DIR = path.join(__dirname, 'slides');

async function build() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Shenzhen STIB';
    pptx.title = '深圳国际科技信息中心 — 用户画像与用户旅程';

    const slideFiles = [
        'slide01-cover.html',
        'slide02-personas.html',
        'slide03-journey-u1.html',
        'slide04-journey-u2.html',
        'slide05-journey-u4.html',
        'slide06-journey-u5.html',
        'slide07-journey-u3.html',
        'slide08-value.html',
    ];

    for (const f of slideFiles) {
        const htmlPath = path.join(SLIDES_DIR, f);
        console.log(`Processing: ${f}`);
        try {
            await html2pptx(htmlPath, pptx);
            console.log(`  OK`);
        } catch (e) {
            console.error(`  ERROR: ${e.message}`);
            // Try to continue with remaining slides
        }
    }

    const outPath = path.join(__dirname, '..', '用户画像与旅程展示.pptx');
    await pptx.writeFile({ fileName: outPath });
    console.log(`\nPresentation saved to: ${outPath}`);
}

build().catch(e => { console.error(e); process.exit(1); });
