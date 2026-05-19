# STORK.jp 画像生成プロンプト一覧

作成日：2026-05-19
最終更新：2026-05-20（ceo-portrait をクライアント要望で削除）
対象：トップページ (`/`) の全 `<ImageSlot>` 計 **9枚**

> ⚠️ **`ceo-portrait` は使用禁止**（クライアント指示）。男性ポートレート画像は本サイトでは使用しない。

画像生成AI（Gemini / Imagen / Midjourney / DALL·E など）へそのまま渡せるプロンプト。

---

## 共通スタイルガイド

すべての画像で以下を守る：

- **ブランドカラー（アクセント）**：深緑 `#00A84F`（明るすぎない・彩度抑え）
- **基調色**：黒・濃紺（`#000`〜`#0f1115`）と白（`#ffffff`）のモノトーン基調＋ピンポイントの緑
- **トーン**：落ち着き／知的／コンサルティングファーム的（Accenture／McKinsey 風）
- **NG**：ロボット顔・派手な3Dガラスの脳・虹色グラデ・ChatGPT風アイコン
- **写真の場合**：自然光、シネマティック、わずかにフィルム調、シャープすぎない
- **イラストの場合**：細線ミニマル、グリッド／抽象幾何
- **テキスト埋め込み禁止**：画像内に文字・数字・ロゴは一切入れない（CSSで重ねる）
- **人物**：日本人を主とし、東京のオフィス／街並みを基調に
- **書き出し**：`public/images/` 直下に `xxxx.jpg`（高画質 JPG）または `.png`

---

## 画像スロット一覧（10枚）

| # | スロットID | 場所 | アスペクト比 | 推奨解像度 | 保存先ファイル名 |
|---|---|---|---|---|---|
| 1 | `hero-main` | Hero（最上部・右） | 4 : 5 | 1200 × 1500 px | `public/images/hero-main.jpg` |
| 2 | `industries-banner` | Industries（業界）バナー | 21 : 9 | 2400 × 1029 px | `public/images/industries-banner.jpg` |
| ~~3~~ | ~~`ceo-portrait`~~ | ~~削除済み（クライアント要望）~~ | — | — | — |
| 4 | `process-visual` | Process（導入プロセス）バナー | 21 : 9 | 2400 × 1029 px | `public/images/process-visual.jpg` |
| 5 | `insight-1` | Insights記事1（生成AIの落とし穴） | 16 : 9 | 1280 × 720 px | `public/images/insight-1.jpg` |
| 6 | `insight-2` | Insights記事2（RAGアーキ） | 16 : 9 | 1280 × 720 px | `public/images/insight-2.jpg` |
| 7 | `insight-3` | Insights記事3（飲食CRM事例） | 16 : 9 | 1280 × 720 px | `public/images/insight-3.jpg` |
| 8 | `insight-4` | Insights記事4（MLOps入門） | 16 : 9 | 1280 × 720 px | `public/images/insight-4.jpg` |
| 9 | `about-team` | MixedMedia（About） | 4 : 3 | 1600 × 1200 px | `public/images/about-team.jpg` |
| 10 | `company-office` | CompanySection（会社概要） | 16 : 7 | 2240 × 980 px | `public/images/company-office.jpg` |

---

## 各プロンプト詳細

### 1. `hero-main` — トップページ最上部のメインビジュアル

- アスペクト比：**4 : 5（縦長）**
- 役割：サイト第一印象。AI × ビジネスの融合を象徴。

**英語プロンプト**
```
A vertical 4:5 cinematic editorial photograph for an enterprise AI consulting firm.
Foreground: a focused Japanese business person in a dark navy suit looking at a translucent data visualization, no face visible or only side profile, neutral mood.
Background: minimalist modern Tokyo office with floor-to-ceiling windows, soft daylight, faint emerald green (#00A84F) accent reflections only.
Color palette: black, charcoal, off-white, single accent of deep emerald green.
Style: muted, sophisticated, Accenture/McKinsey corporate aesthetic, slight film grain, shallow depth of field, no text, no logos, no robotic imagery, no cliché AI brain.
```

**日本語プロンプト**
```
縦長 4:5、エンタープライズAIコンサルティング企業向けのシネマティック・エディトリアル写真。
手前：濃紺スーツの日本人ビジネスパーソンが半透明のデータビジュアライゼーションを見ている、顔は写らないか横顔のみ、ニュートラルな雰囲気。
背景：床から天井までの窓があるミニマルでモダンな東京のオフィス、柔らかな自然光、深緑 #00A84F のアクセント光の反射が控えめに。
カラーパレット：黒・チャコール・オフホワイト、深緑のアクセント1色のみ。
スタイル：抑えた色味、洗練されたAccenture/McKinsey系コーポレート、わずかなフィルムグレイン、浅い被写界深度。
文字・ロゴ・ロボット・AI脳のクリシェは禁止。
```

---

### 2. `industries-banner` — 業界別ソリューション ワイドバナー

- アスペクト比：**21 : 9（超ワイド）**
- 役割：金融・小売・製造・ヘルスケア・物流・教育を象徴

**英語プロンプト**
```
Ultra-wide 21:9 cinematic banner image symbolizing multiple industries (finance, retail, manufacturing, healthcare, logistics, education) connected by a subtle network.
A long horizontal composition with abstract architectural geometry: skyscrapers fading into a manufacturing line fading into a hospital corridor fading into a logistics warehouse, photographed in a single horizontal pan.
Monochrome black and dark slate base with thin emerald green (#00A84F) connecting lines, almost invisible, minimal.
No text, no humans facing camera, premium consulting firm aesthetic, soft studio lighting.
```

---

### 3. `ceo-portrait` — 代表メッセージ ビジュアル

- アスペクト比：**16 : 9**
- 配置：黒背景セクション
- トーン：暗め・モノクロ調

**英語プロンプト**
```
A 16:9 dark, moody editorial portrait of a Japanese male CEO in his 50s in a charcoal suit, three-quarter profile, looking thoughtfully off-frame.
Studio lighting from one side, deep black background, subtle rim light with a cold green tint (#00A84F).
Clean, dignified, confident, Forbes/Nikkei feature article style, no smile, slight contemplative expression.
Sharp on the eyes, soft falloff, no logos, no text.
```

---

### 4. `process-visual` — 導入プロセス ワイドバナー

- アスペクト比：**21 : 9（超ワイド）**
- 役割：チームコラボ／ホワイトボード

**英語プロンプト**
```
A 21:9 ultra-wide editorial photograph of a multi-disciplinary team in a bright modern Tokyo workshop.
Three to five Japanese professionals around a large white table covered with sticky notes, sketches, and a laptop showing abstract diagrams (no readable text).
Natural daylight, slightly overcast, minimal whites and warm woods, with one small accent of emerald green (#00A84F) on a notebook spine or cup.
Documentary, candid, no posed smiles, Accenture-style corporate documentary aesthetic.
No logos, no readable text on screens or paper.
```

---

### 5. `insight-1` — 記事「生成AIを企業導入する際の3つの落とし穴」

- アスペクト比：**16 : 9**

**英語プロンプト**
```
16:9 abstract editorial thumbnail symbolizing enterprise generative AI pitfalls.
Concept: a clean modern office desk shot from above, with three slightly tilted blank document cards, one of them folding/breaking subtly. Monochrome with a single emerald green (#00A84F) thread running across.
Minimal, conceptual, no text, no faces.
```

---

### 6. `insight-2` — 記事「社内ナレッジ × RAG: 失敗しないアーキテクチャ」

- アスペクト比：**16 : 9**

**英語プロンプト**
```
16:9 abstract conceptual thumbnail for a tech blog post about RAG architecture.
Concept: a wall of identical dark folders or document spines viewed straight on, with one folder pulled forward and slightly highlighted by a thin emerald green (#00A84F) light beam.
Minimalist, library-meets-data, no text, no logos.
```

---

### 7. `insight-3` — 記事「飲食チェーン向けCRM刷新で売上 +18%」

- アスペクト比：**16 : 9**

**英語プロンプト**
```
16:9 case study thumbnail of a modern Japanese restaurant interior, empty, photographed in soft late-afternoon light.
Wide composition, warm wood tones, with one tablet on a counter (no readable screen), tasteful, premium Tokyo bistro aesthetic.
Single small accent of emerald green (#00A84F) — perhaps a plant. No text, no logos.
```

---

### 8. `insight-4` — 記事「MLOps 入門: 運用で詰まらないための10の指標」

- アスペクト比：**16 : 9**

**英語プロンプト**
```
16:9 abstract conceptual thumbnail for a tech blog about MLOps monitoring.
Concept: an extreme close-up macro shot of a thin transparent layered diagram (like architectural acetate sheets), each layer showing a faint different abstract chart pattern, lit with cool light and one emerald green (#00A84F) glow.
Editorial, scientific, no readable numbers or text.
```

---

### 9. `about-team` — About セクション ビジュアル

- アスペクト比：**4 : 3**
- 役割：チーム／オフィスの様子

**英語プロンプト**
```
A 4:3 documentary-style photograph of a small Japanese consulting team (3-4 people, mixed gender, age 30-50) in a candid working moment inside a renovated mid-century Tokyo office.
They are looking at a wall covered with abstract sticky notes and printouts, having a discussion. No faces directly to camera, natural body language.
Soft natural daylight, muted palette, slightly desaturated, single emerald green (#00A84F) accent on a wall or chair somewhere subtle.
Editorial, real, not posed, no readable text on the wall, no logos.
```

---

### 10. `company-office` — 会社概要 ビジュアル

- アスペクト比：**16 : 7**
- 役割：本社オフィス（高田馬場）外観 or 内観

**英語プロンプト（外観）**
```
A 16:7 wide architectural photograph of a modern mid-rise Tokyo office building exterior in the Takadanobaba / Shinjuku area, evening blue hour, warm interior lights glowing through floor-to-ceiling windows.
Clean composition, slightly low angle, contextual urban Tokyo elements (a quiet street, traffic light) but not overwhelming.
Cinematic, editorial, single emerald green (#00A84F) reflection on glass somewhere subtle.
No visible signage or readable text.
```

**英語プロンプト（内観バリエーション）**
```
A 16:7 wide interior photograph of a modern Tokyo office reception area, minimalist, charcoal floor, white walls, a single low couch, soft daylight from large windows, a small green plant for emerald (#00A84F) accent.
Editorial architectural photography, no text, no logos, no people.
```

---

## 差し込み手順

1. 画像生成AIで上記プロンプトを実行
2. 出力画像を **指定の解像度／アスペクト比** にクロップ／リサイズ
3. `public/images/` に **指定のファイル名** で保存（例：`public/images/hero-main.jpg`）
4. 該当する `<ImageSlot>` の呼び出しに `src` 属性を追加：
   ```tsx
   <ImageSlot id="hero-main" alt="..." ratio="4 / 5" src="/images/hero-main.jpg" />
   ```
5. `npm run build` → デプロイ（XSERVER_DEPLOY.md 参照）

---

## チェックリスト

- [ ] `hero-main` (4:5, 1200×1500)
- [ ] `industries-banner` (21:9, 2400×1029)
- [ ] `process-visual` (21:9, 2400×1029)
- [ ] `insight-1` (16:9, 1280×720)
- [ ] `insight-2` (16:9, 1280×720)
- [ ] `insight-3` (16:9, 1280×720)
- [ ] `insight-4` (16:9, 1280×720)
- [ ] `about-team` (4:3, 1600×1200)
- [ ] `company-office` (16:7, 2240×980)

**合計 9 枚**

---

## 参考

- 旧版 `GEMINI_IMAGE_PROMPTS.md` には Testimonials用アバター3枚も記載されていたが、
  現行サイト構成では Testimonials セクションが削除済み（commit `229a18e`）のため不要。
- プロンプトは Gemini / Imagen / Midjourney / DALL·E いずれでも流用可能（細部の語彙は調整推奨）。
