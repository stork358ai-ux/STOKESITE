# Xserver デプロイ手順

## 構成
- ホスティング: エックスサーバー スタンダードプラン
- サーバーID: xs919228
- サーバー: sv13418.xserver.jp
- ドメイン: stork.jp（お名前.com管理）
- ビルド: Next.js 静的エクスポート（`output: 'export'`）

## 初回セットアップ（済）

### お名前.com ネームサーバー変更
```
ns1.xserver.jp
ns2.xserver.jp
ns3.xserver.jp
ns4.xserver.jp
ns5.xserver.jp
```

### SSH鍵の設定
- 秘密鍵: `C:\Users\waraj\.ssh\xserver_key`
- エックスサーバー サーバーパネル → SSH設定 → 公開鍵登録済み

### next.config.js の設定
```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}
```

### .htaccess の内容（public_html直下）
```
Options -Indexes
DirectoryIndex index.html
```

## デプロイ手順（更新時）

### 1. ローカルでビルド
```powershell
cd C:\Users\waraj\OneDrive\デスクトップ\STOKESITE
npm run build
```

### 2. ZIPを作成
```powershell
Push-Location "C:\Users\waraj\OneDrive\デスクトップ\STOKESITE\out"
Compress-Archive -Path ".\*" -DestinationPath "C:\Users\waraj\OneDrive\デスクトップ\stork-deploy.zip" -Force
Pop-Location
```

### 3. SCPでアップロード
```powershell
scp -i C:\Users\waraj\.ssh\xserver_key -P 10022 C:\Users\waraj\OneDrive\デスクトップ\stork-deploy.zip xs919228@sv13418.xserver.jp:~/stork.jp/public_html/
```

### 4. SSHで接続
```powershell
ssh -i C:\Users\waraj\.ssh\xserver_key -p 10022 xs919228@sv13418.xserver.jp
```

### 5. サーバー上で展開・権限設定
```bash
cd ~/stork.jp/public_html
rm -rf _next services fonts contact 404
unzip -o stork-deploy.zip -d /home/xs919228/stork.jp/public_html/
rm stork-deploy.zip
find /home/xs919228/stork.jp/public_html -type d -exec chmod 755 {} \;
find /home/xs919228/stork.jp/public_html -type f -exec chmod 644 {} \;
```

## SSL設定（DNS反映後に実施）
サーバーパネル → SSL設定 → stork.jp を選択 → 独自SSL設定追加

## 注意事項
- お問い合わせフォームは非表示（共有サーバーのためNode.js非対応）
- ハンバーガーメニューはJavaScript必須（JS読み込み確認すること）
- DNS反映は24〜72時間かかる場合あり
