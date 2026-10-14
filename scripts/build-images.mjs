// 회사소개서 슬라이드 캡처(assets/source)에서 사진 영역만 잘라 public/images 에 WebP로 저장한다.
// 좌표는 원본 픽셀 기준 [x0, y0, x1, y1].
//   npm run images            전체 생성
//   npm run images -- process 이름이 process 로 시작하는 결과물만 생성
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "assets/source";
const OUT = "public/images";

// scale: 원본이 작아 화면에서 확대될 사진은 미리 Lanczos로 키워 두면 브라우저 확대보다 덜 뭉개진다.
const job = (src, out, box, opts = {}) => ({ src, out, box, ...opts });

// 회사소개서의 4x2 공정 슬라이드는 칸 위치가 같다.
const processCells = (src, prefix, start = 1) => {
  const cols = [[29, 195], [215, 383], [402, 571], [587, 755]];
  const rows = [[168, 283], [372, 486]];
  const cells = [];
  rows.forEach(([y0, y1], r) =>
    cols.forEach(([x0, x1], c) => {
      const n = String(start + r * 4 + c).padStart(2, "0");
      cells.push(job(src, `process/${prefix}-${n}`, [x0, y0, x1, y1], { scale: 2 }));
    }),
  );
  return cells;
};

const jobs = [
  // 회사 전경 — 메인 비주얼, OG 이미지
  job("illustrations/home.png", "company/building", [0, 0, 1440, 1080]),
  job("illustrations/home.png", "og", [0, 310, 1440, 1066], { width: 1200, format: "jpg", pad: true }),

  // 약도: 경로 그림만 남기고 슬라이드 제목·안내 박스·쪽번호는 지운다(본문에 텍스트로 싣는다).
  job("illustrations/sketch_map.png", "company/route-map", [55, 38, 600, 700], {
    redact: [
      [112, 450, 188, 535],
      [468, 160, 600, 246],
      [398, 340, 600, 620],
    ],
  }),

  // 대표이사 사진 (인사말 슬라이드의 원형 사진 안쪽)
  job("illustrations/salutation.png", "company/ceo", [1632, 1011, 1879, 1329], { scale: 2 }),

  // 제품 — 흰 배경 사진은 여백을 자르고 4:3 캔버스 가운데에 놓는다.
  job("team/product_1.png", "products/plain", [40, 170, 356, 373], { product: true }),
  job("team/product_1.png", "products/square", [402, 167, 740, 371], { product: true }),
  job("team/product_2.png", "products/spring", [36, 168, 364, 384], { product: true }),
  job("team/product_2.png", "products/wave", [398, 170, 744, 382], { product: true }),
  job("team/product_3.png", "products/special", [36, 158, 364, 390], { product: true }),
  job("team/product_3.png", "products/conical", [398, 156, 744, 387], { product: true }),
  job("team/product_4.png", "products/retaining", [36, 158, 364, 377], { product: true }),
  job("team/product_4.png", "products/toothed", [398, 156, 747, 370], { product: true }),
  job("team/product_5.png", "products/press-1", [38, 152, 375, 404], { scale: 2 }),
  job("team/product_5.png", "products/press-2", [410, 152, 745, 404], { scale: 2 }),

  // 공정 흐름
  ...processCells("about/process_1.png", "press", 1),
  ...processCells("about/process_2.png", "press", 9),
  ...processCells("about/process_3.png", "spring", 1),
  ...processCells("about/process_4.png", "wave", 1),

  // 제조 설비
  job("about/manufacturing.png", "equipment/press-1", [338, 180, 466, 311], { scale: 2 }),
  job("about/manufacturing.png", "equipment/press-2", [475, 180, 604, 311], { scale: 2 }),
  job("about/manufacturing.png", "equipment/press-3", [613, 180, 738, 311], { scale: 2 }),
  job("about/manufacturing.png", "equipment/barrel", [429, 380, 647, 503], { scale: 2 }),
  job("about/quality_4.png", "equipment/press-line", [96, 530, 690, 880]),

  // 시험·측정 장비
  job("about/inspection.png", "inspection/r1", [376, 181, 448, 318], { scale: 2 }),
  job("about/inspection.png", "inspection/r2", [458, 181, 556, 318], { scale: 2 }),
  job("about/inspection.png", "inspection/r3", [568, 181, 640, 242], { scale: 2 }),
  job("about/inspection.png", "inspection/r4", [653, 181, 736, 242], { scale: 2 }),
  job("about/inspection.png", "inspection/r5", [568, 250, 640, 318], { scale: 2 }),
  job("about/inspection.png", "inspection/r6", [653, 250, 733, 318], { scale: 2 }),
  job("about/inspection.png", "inspection/m1", [374, 380, 469, 504], { scale: 2 }),
  job("about/inspection.png", "inspection/m2", [480, 380, 564, 504], { scale: 2 }),
  job("about/inspection.png", "inspection/m3", [573, 380, 639, 504], { scale: 2 }),
  job("about/inspection.png", "inspection/m4", [648, 380, 739, 452], { scale: 2 }),
  job("about/inspection.png", "inspection/m5", [648, 460, 739, 504], { scale: 2 }),

  // 품질 활동
  job("about/quality_1.png", "quality/kpi", [17, 322, 261, 443], { scale: 2 }),
  job("about/quality_1.png", "quality/worst", [276, 322, 514, 443], { scale: 2 }),
  job("about/quality_1.png", "quality/weekly", [528, 322, 762, 443], { scale: 2 }),
  job("about/quality_2.png", "quality/complaint", [95, 322, 259, 438], { scale: 2 }),
  job("about/quality_2.png", "quality/hmc", [270, 322, 511, 438], { scale: 2 }),
  job("about/quality_2.png", "quality/training", [527, 322, 764, 438], { scale: 2 }),
  job("about/quality_4.png", "quality/foolproof", [96, 530, 690, 880]),
  job("about/quality_4.png", "quality/5s", [792, 528, 1326, 880]),
  job("about/quality_4.png", "quality/kaizen", [1386, 540, 2000, 880]),
  job("about/quality_4.png", "quality/die-spares", [56, 1064, 684, 1368]),
  job("about/quality_4.png", "quality/spare-parts", [792, 1072, 1334, 1372]),
  job("about/quality_4.png", "quality/notice-board", [1440, 1072, 1980, 1368]),

  // 인증서 (고해상도 슬라이드)
  job("team/certification_1.png", "certs/ks", [160, 268, 878, 1250], { width: 900 }),
  job("team/certification_1.png", "certs/sq", [1140, 280, 1812, 1242], { width: 900 }),
  job("team/certification_2.png", "certs/iso9001", [128, 274, 844, 1265], { width: 900 }),
  job("team/certification_2.png", "certs/iso45001", [1139, 275, 1857, 1267], { width: 900 }),
  // 대표자 생년월일 칸은 개인정보라 가린다.
  job("team/certification_3.png", "certs/root-industry", [121, 280, 870, 1291], { width: 900, redact: [[608, 447, 779, 489]] }),
  job("team/certification_3.png", "certs/clean", [1180, 284, 1931, 1295], { width: 900 }),
  job("team/certification_4.png", "certs/zero-accident", [45, 97, 322, 497], { scale: 2 }),
  job("team/certification_4.png", "certs/risk-assessment", [425, 101, 725, 493], { scale: 2 }),

  // 수상
  job("team/certification_5.png", "awards/productivity-2016", [18, 110, 156, 306], { scale: 2 }),
  job("team/certification_5.png", "awards/kosha-2016", [262, 110, 400, 306], { scale: 2 }),
  job("team/certification_5.png", "awards/steel-day-2014", [507, 110, 646, 306], { scale: 2 }),
  job("team/certification_5.png", "awards/sme-2006", [20, 322, 160, 516], { scale: 2 }),
  job("team/certification_5.png", "awards/gyeonggi-2005", [262, 325, 400, 518], { scale: 2 }),
  job("team/certification_5.png", "awards/gyeonggi-sme-2000", [507, 322, 646, 518], { scale: 2 }),

  // 언론 보도
  job("contact/interview_1.png", "press/business-journal", [10, 95, 396, 418], { scale: 2 }),
  job("contact/interview_2.png", "press/donga", [15, 125, 300, 452], { scale: 2 }),
  job("contact/interview_2.png", "press/weekly-journal", [318, 130, 566, 452], { scale: 2 }),
  job("contact/interview_2.png", "press/ne-asia-forum", [580, 130, 770, 452], { scale: 2 }),

  // 사업장 둘러보기 (사진 위 제목 띠·하단 캡션을 피해서 자른다)
  job("contact/in_house_1.png", "gallery/main-gate", [21, 177, 254, 284], { scale: 2 }),
  job("contact/in_house_1.png", "gallery/office-entrance", [274, 177, 493, 284], { scale: 2 }),
  job("contact/in_house_1.png", "gallery/coil-storage", [526, 177, 747, 284], { scale: 2 }),
  job("contact/in_house_1.png", "gallery/signboard", [19, 377, 249, 484], { scale: 2 }),
  job("contact/in_house_1.png", "gallery/building-entrance", [275, 377, 497, 484], { scale: 2 }),
  job("contact/in_house_1.png", "gallery/exhibition-hall", [528, 377, 747, 484], { scale: 2 }),
  job("contact/in_house_2.png", "gallery/press-floor", [24, 168, 254, 280], { scale: 2 }),
  job("contact/in_house_2.png", "gallery/barrel-room", [282, 168, 512, 280], { scale: 2 }),
  job("contact/in_house_2.png", "gallery/incoming-inspection", [533, 168, 752, 280], { scale: 2 }),
  job("contact/in_house_2.png", "gallery/sorting-room", [27, 370, 254, 484], { scale: 2 }),
  job("contact/in_house_2.png", "gallery/warehouse", [284, 370, 512, 484], { scale: 2 }),
  job("contact/in_house_2.png", "gallery/wave-shop", [534, 370, 756, 484], { scale: 2 }),
  job("contact/in_house_3.png", "gallery/die-shop", [14, 170, 254, 290], { scale: 2 }),
  job("contact/in_house_3.png", "gallery/test-lab", [277, 170, 509, 290], { scale: 2 }),
  job("contact/in_house_3.png", "gallery/rnd-room", [528, 170, 754, 290], { scale: 2 }),
  job("contact/in_house_3.png", "gallery/scrap-conveyor", [14, 385, 254, 494], { scale: 2 }),
  job("contact/in_house_3.png", "gallery/office", [272, 378, 512, 494], { scale: 2 }),
  job("contact/in_house_3.png", "gallery/meeting-room", [531, 378, 756, 494], { scale: 2 }),
  job("contact/in_house_4.png", "welfare/cafeteria", [21, 166, 249, 274], { scale: 2 }),
  job("contact/in_house_4.png", "welfare/fitness", [275, 166, 497, 274], { scale: 2 }),
  job("contact/in_house_4.png", "welfare/dormitory", [522, 166, 751, 274], { scale: 2 }),
  job("contact/in_house_4.png", "welfare/billiards", [20, 371, 246, 486], { scale: 2 }),
  job("contact/in_house_4.png", "welfare/shower", [277, 371, 497, 486], { scale: 2 }),
  job("contact/in_house_4.png", "welfare/lounge", [524, 371, 751, 486], { scale: 2 }),

  // 사내 활동 · 벤치마킹
  job("contact/in_house_5.png", "activity/benchmark-group", [26, 156, 382, 347], { scale: 2 }),
  job("contact/in_house_5.png", "activity/benchmark-briefing", [26, 366, 260, 490], { scale: 2 }),
  job("contact/in_house_5.png", "activity/benchmark-tour-1", [278, 366, 506, 490], { scale: 2 }),
  job("contact/in_house_5.png", "activity/benchmark-tour-2", [523, 366, 756, 490], { scale: 2 }),
  job("contact/in_house_6.png", "activity/praise", [95, 330, 267, 444], { scale: 2 }),
];

// 흰 배경 제품 사진: 여백 제거 → 4:3 흰 캔버스 중앙 배치 → 800x600
async function productImage(input) {
  const trimmed = await input.trim({ background: "#ffffff", threshold: 40 }).toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = trimmed.info;
  const fill = 0.86;
  let cw = Math.ceil(w / fill);
  let ch = Math.ceil((cw * 3) / 4);
  if (h / fill > ch) {
    ch = Math.ceil(h / fill);
    cw = Math.ceil((ch * 4) / 3);
  }
  const left = Math.floor((cw - w) / 2);
  const top = Math.floor((ch - h) / 2);
  // sharp는 호출 순서와 무관하게 resize를 extend보다 먼저 실행하므로 단계를 나눈다.
  const canvas = await sharp(trimmed.data)
    .extend({ left, right: cw - w - left, top, bottom: ch - h - top, background: "#ffffff" })
    .toBuffer();
  return sharp(canvas).resize(800, 600, { kernel: "lanczos3" }).sharpen({ sigma: 0.7 });
}

async function run(j) {
  const [x0, y0, x1, y1] = j.box;
  let source = path.join(SRC, j.src);
  if (j.redact) {
    // sharp는 composite를 extract 뒤에 실행하므로 원본 좌표로 먼저 덮어 둔다.
    const masks = j.redact.map(([rx0, ry0, rx1, ry1]) => ({
      input: { create: { width: rx1 - rx0, height: ry1 - ry0, channels: 3, background: "#ffffff" } },
      left: rx0,
      top: ry0,
    }));
    source = await sharp(source).composite(masks).png().toBuffer();
  }
  let img = sharp(source).extract({ left: x0, top: y0, width: x1 - x0, height: y1 - y0 });
  if (j.product) {
    img = await productImage(sharp(await img.png().toBuffer()));
  } else if (j.pad) {
    // OG 이미지: 1200x630 비율로 맞춘다
    img = sharp(await img.png().toBuffer()).resize(1200, 630, { fit: "cover", position: "centre" });
  } else if (j.scale) {
    // 슬라이드 레이아웃상 사진 가장자리에 붙은 흰 줄을 걷어낸 뒤 확대한다.
    const cropped = await sharp(await img.png().toBuffer())
      .trim({ background: "#ffffff", threshold: 14 })
      .toBuffer({ resolveWithObject: true });
    img = sharp(cropped.data)
      .resize(Math.round(cropped.info.width * j.scale), null, { kernel: "lanczos3" })
      .sharpen({ sigma: 0.6 });
  } else if (j.width) {
    img = img.resize(j.width, null, { kernel: "lanczos3", withoutEnlargement: true });
  }
  const ext = j.format ?? "webp";
  const file = path.join(OUT, `${j.out}.${ext}`);
  await mkdir(path.dirname(file), { recursive: true });
  const encoded = ext === "jpg" ? img.flatten({ background: "#ffffff" }).jpeg({ quality: 84, mozjpeg: true }) : img.webp({ quality: 82 });
  const info = await encoded.toFile(file);
  return `${file} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`;
}

// 로고(logo-mobile.png): 위쪽 원형 심볼(15,14)-(140,139)과 아래 "SJT" 글자로 되어 있다.
const LOGO = path.join(SRC, "logo/logo-mobile.png");
const EMBLEM = { left: 15, top: 14, width: 125, height: 125 };

// PNG를 그대로 담는 ICO 파일 (모든 최신 브라우저 지원)
function toIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entries = pngs.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

async function brandAssets() {
  const emblem = await sharp(LOGO).extract(EMBLEM).png().toBuffer();
  const icon = (size, pad, background) =>
    sharp(emblem)
      .resize(size - pad * 2, size - pad * 2, { kernel: "lanczos3" })
      .extend({ top: pad, bottom: pad, left: pad, right: pad, background })
      .png()
      .toBuffer();
  const clear = { r: 0, g: 0, b: 0, alpha: 0 };

  await mkdir(path.join(OUT, "brand"), { recursive: true });
  await sharp(emblem).resize(200, 200, { kernel: "lanczos3" }).webp({ quality: 92, alphaQuality: 100 }).toFile(path.join(OUT, "brand/emblem.webp"));
  await sharp(LOGO)
    .extract({ left: 15, top: 14, width: 125, height: 158 })
    .resize(250, null, { kernel: "lanczos3" })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(path.join(OUT, "brand/logo.webp"));
  await sharp(await icon(192, 6, clear)).toFile("app/icon.png");
  await sharp(await icon(180, 14, "#ffffff")).flatten({ background: "#ffffff" }).toFile("app/apple-icon.png");
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(sizes.map(async (size) => ({ size, data: await icon(size, 0, clear) })));
  const { writeFile } = await import("node:fs/promises");
  await writeFile("app/favicon.ico", toIco(pngs));
  return "brand: emblem.webp, logo.webp, app/icon.png, app/apple-icon.png, app/favicon.ico";
}

// 페이지에서 <img width height>를 채울 수 있도록 public/images 전체 크기를 기록한다.
async function writeManifest() {
  const { readdir, writeFile } = await import("node:fs/promises");
  const files = (await readdir(OUT, { recursive: true })).filter((f) => /\.(webp|jpg|png)$/.test(f)).sort();
  const sizes = {};
  for (const f of files) {
    const { width, height } = await sharp(path.join(OUT, f)).metadata();
    sizes[`/images/${f.split(path.sep).join("/")}`] = [width, height];
  }
  const lines = Object.entries(sizes).map(([k, v]) => `  ${JSON.stringify(k)}: [${v[0]}, ${v[1]}]`);
  await writeFile("lib/image-sizes.json", `{\n${lines.join(",\n")}\n}\n`);
  return `manifest: ${files.length} files → lib/image-sizes.json`;
}

const only = process.argv[2];
const selected = only ? jobs.filter((j) => j.out.startsWith(only)) : jobs;
for (const j of selected) console.log(await run(j));
if (!only || "brand".startsWith(only)) console.log(await brandAssets());
console.log(await writeManifest());
console.log(`${selected.length} images`);
