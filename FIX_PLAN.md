# STORK.jp 復旧手順書

作成日：2026-05-17
最終更新：2026-05-17 20:15

## 進捗ログ

| 時刻 | 状態 |
|------|------|
| 2026-05-17 02:14 | 初回デプロイ（ZIP展開） |
| 2026-05-17 19:20頃 | `_next` パーミッション問題発覚（CSS死亡）→ `chmod 755/644` で復旧 |
| 2026-05-17 19:48 | Phase 1ファイル配置完了（.htaccess + sitemap.xml + robots.txt） |
| 2026-05-17 19:50 | 旧PHP URL → 新URL の301リダイレクト動作確認OK |
| 2026-05-17 20:10 | Xserverサーバーパネルから無料独自SSL申請（Let's Encrypt） |
| 2026-05-17 20:15 | SSL反映確認 → **まだ反映されていない**（Xserverワイルドカード証明書のまま） |
| - | **次：SSL反映後 → Phase2 .htaccess（HTTPS強制）→ Google Search Console** |

## 現状把握（2026-05-17時点）

### ✅ 解決済み
- `_next` フォルダのパーミッション問題（CSS/JS 読み込み不可）→ `chmod 755/644` で解決
- **旧PHPサイトURL（`/sv_system.php`等）が404** → `.htaccess` で301リダイレクト配置済み
- **sitemap.xml / robots.txt が無い** → 配置済み

### ❌ 未解決の問題
| # | 問題 | 影響 | 担当 |
|---|------|------|------|
| 1 | **SSL証明書が未設定** | `https://stork.jp` でブラウザ警告 | あなた（Xserverパネル） |
| 2 | **HTTPS強制リダイレクトが未有効化** | SSL設定後に有効化必要 | このスクリプトで自動 |
| 3 | **Google Search Console 未送信** | 新サイト認識/旧URL削除 | あなた |
| 4 | **検索スニペットの説明文が旧サイトのまま** | 検索結果のクリック率低下 | Google再クロール待ち（1〜4週間） |

---

## 環境情報

- Xserver サーバーID: `xs919228`
- SSHホスト: `sv13418.xserver.jp`
- SSHポート: `10022`
- SSH鍵: `C:\Users\waraj\.ssh\xserver_key`
- 公開ディレクトリ: `~/stork.jp/public_html/`
- ローカルビルド出力: `C:\Users\waraj\OneDrive\デスクトップ\STOKESITE\out\`

---

## 復旧ロードマップ（全5ステップ）

```
[STEP 1] ✅ Phase1ファイル配置 ── 完了済み (2026-05-17 19:48)
   ├ .htaccess（旧PHP→新URLの301リダイレクト）✅
   ├ sitemap.xml ✅
   └ robots.txt ✅
   ↓
[STEP 2] SSL設定 ──────────── ★あなたが手動 (Xserverパネル)
   ↓ 反映待ち 15〜60分
[STEP 3] Phase2 .htaccess適用 ── コマンドで自動（HTTPS強制ON）
   ↓
[STEP 4] 動作確認 ──────────── コマンドで自動
   ↓
[STEP 5] Google Search Console ── ★あなたが手動
```

---

## STEP 2：SSL設定（最優先・手動）

### 手順

1. Xserver サーバーパネルにログイン
   - URL: https://www.xserver.ne.jp/login_server.php
   - サーバーID: `xs919228`

2. **「SSL設定」** をクリック

3. ドメイン選択で **stork.jp** を選択

4. **「独自SSL設定追加」** タブを開く

5. 設定対象ドメインに `stork.jp` が表示されていることを確認
   - CSR情報は **空欄のまま**
   - **「無料独自SSL（Let's Encrypt）」** を選択

6. **「確認画面へ進む」** → **「追加する」**

7. 完了画面に「SSL新規取得申請中です」と表示される

8. **15分〜60分待つ**（実際は10分程度で反映されることが多い）

### 反映確認コマンド

```powershell
# DNSとSSL状況を確認
curl -I https://stork.jp 2>&1 | Select-String "HTTP|cert"

# 詳細確認
openssl s_client -connect stork.jp:443 -servername stork.jp < $null 2>&1 | Select-String "subject|issuer|verify"
```

`subject=CN = stork.jp` が表示されればSSL設定完了。

---

## STEP 3：Phase2 .htaccess適用（SSL完了後）

SSL設定が反映されたら、HTTPS強制リダイレクトを有効化する。

### 編集：`out/.htaccess` のコメントアウト解除

```
# RewriteCond %{HTTPS} !=on
# RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
```
↓
```
RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
```

www→非www の2行も同様にコメント解除。

### Phase2デプロイコマンド

```powershell
cd C:\Users\waraj\OneDrive\デスクトップ\STOKESITE

# .htaccessだけ送信
scp -i C:\Users\waraj\.ssh\xserver_key -P 10022 `
  .\out\.htaccess `
  xs919228@sv13418.xserver.jp:~/stork.jp/public_html/.htaccess

# 権限設定
ssh -i C:\Users\waraj\.ssh\xserver_key -p 10022 xs919228@sv13418.xserver.jp `
  "chmod 644 ~/stork.jp/public_html/.htaccess && head -20 ~/stork.jp/public_html/.htaccess"
```

---

## STEP 4：動作確認（コマンド）

### 3-1. HTTPSアクセス

```powershell
# トップページがHTTPSで返るか
curl -I https://stork.jp/

# HTTPでアクセスしたら301でHTTPSへ
curl -I http://stork.jp/
# → Location: https://stork.jp/ が返ればOK
```

### 3-2. 旧PHP URL → 新URL リダイレクト

```powershell
# 各旧URLが正しい新URLに301されるか
curl -I https://stork.jp/sv_system.php
# → 301, Location: /services/system-development/

curl -I https://stork.jp/sv_hosting.php
# → 301, Location: /services/crm-hosting/

curl -I https://stork.jp/sv_crm.php
# → 301, Location: /services/crm-hosting/

curl -I https://stork.jp/contact.php
# → 301, Location: /contact/
```

### 3-3. sitemap.xml と robots.txt

```powershell
curl https://stork.jp/sitemap.xml
curl https://stork.jp/robots.txt
```

### 3-4. 一括チェックスクリプト

```powershell
$urls = @(
  "https://stork.jp/",
  "https://stork.jp/sitemap.xml",
  "https://stork.jp/robots.txt",
  "https://stork.jp/services/ai-consulting/",
  "https://stork.jp/services/crm-hosting/",
  "https://stork.jp/sv_system.php",
  "https://stork.jp/sv_hosting.php",
  "https://stork.jp/contact.php"
)
foreach ($url in $urls) {
  $r = curl -sI $url | Select-String "HTTP|Location"
  Write-Host "=== $url ===" -ForegroundColor Cyan
  $r
}
```

---

## STEP 5：Google Search Console（手動）

### 4-1. 所有権確認

1. https://search.google.com/search-console にアクセス
2. **「プロパティを追加」** → **「ドメイン」** → `stork.jp` 入力
3. DNS TXTレコード認証が必要なら、お名前.com or Xserver DNS にTXTレコードを追加
   - またはHTMLファイル認証を選択（こちらが楽：`out/` に置いて再デプロイ）

### 4-2. sitemap送信

1. 左メニュー **「サイトマップ」**
2. URLに `sitemap.xml` と入力 → **「送信」**
3. ステータスが「成功しました」になればOK

### 4-3. 新URLのインデックス登録リクエスト（8ページ）

各URLを左上の **「URL検査」** に貼って **「インデックス登録をリクエスト」**

```
https://stork.jp/
https://stork.jp/contact/
https://stork.jp/services/ai-consulting/
https://stork.jp/services/ai-development/
https://stork.jp/services/ai-improvement/
https://stork.jp/services/crm-hosting/
https://stork.jp/services/system-development/
https://stork.jp/services/web-marketing/
```

### 4-4. 旧URL削除リクエスト

1. 左メニュー **「削除」** → **「新しいリクエスト」**
2. 以下の旧URLを1個ずつ「このURLのみ削除」で送信

```
https://stork.jp/sv_system.php
https://stork.jp/sv_hosting.php
https://stork.jp/sv_crm.php
https://stork.jp/recruit.php
https://stork.jp/service.php
https://stork.jp/contact.php   ← 旧PHPの方
https://stork.jp/company.php
```

※ 実際にGoogleにインデックスされている旧URLは、**「カバレッジ」→「ページ」** で確認可能

### 4-5. 反映待ち

- インデックス登録：数時間〜数日
- 旧URL削除：6ヶ月の一時非表示（その間に301リダイレクトでGoogleが新URLを認識）
- 検索スニペットの説明文更新：1〜4週間

---

## 完了判定チェックリスト

- [ ] `https://stork.jp` がブラウザ警告なしで開く
- [ ] `http://stork.jp` が `https://` に301リダイレクト
- [ ] `https://stork.jp/sv_system.php` が `/services/system-development/` に301
- [ ] `https://stork.jp/sitemap.xml` が表示される
- [ ] `https://stork.jp/robots.txt` が表示される
- [ ] Google Search Console でサイトマップが「成功」
- [ ] 全8ページがインデックス登録リクエスト済み
- [ ] 旧PHP URL の削除リクエスト送信済み
- [ ] 数日後、Google検索結果のスニペットが新descriptionに更新されている

---

## 次回フルデプロイ時の注意

XSERVER_DEPLOY.md の手順に**この3つを必ず含める**：

1. `out/.htaccess` も忘れずZIPに含める（このファイルは git管理外）
2. `chmod 755 (dir) / 644 (file)` を必ず実行
3. `out/sitemap.xml` の `<lastmod>` を更新

---

## トラブルシューティング

### Q. SSL設定後もブラウザ警告が消えない
A. ブラウザキャッシュを完全クリア。または別ブラウザのシークレットモードで確認。15〜60分待つ。

### Q. 301リダイレクトが効かない
A. Xserverのキャッシュをサーバーパネルの「サーバーキャッシュ設定」からクリア。

### Q. sitemap.xml が404
A. パーミッション確認：`ssh ... "ls -la ~/stork.jp/public_html/sitemap.xml"` で `644` か確認。

### Q. Google検索結果がいつまで経っても古いまま
A. Search Consoleで個別URLの「インデックス登録をリクエスト」を再実行。Googleは1〜4週間でクロールサイクルが回る。
