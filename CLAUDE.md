# CLAUDE.md

このリポジトリは、ClaudeCodeの学習をする目的です

## Project Status

TODOアプリが実装されています。

## Tech Stack

- HTML5 + CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage（データ永続化）

## Getting Started

### 起動方法

ブラウザで `index.html` を直接開くか、ローカルサーバーを起動してください：

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

その後 http://localhost:8000 にアクセス

## Architecture

```
claude-practice/
├── index.html   # メインHTML（CSSを含む）
├── app.js       # JavaScript（ロジック全般）
└── CLAUDE.md    # プロジェクト説明
```

## Features

- タスクの追加・削除・完了切り替え
- フィルタリング（すべて/未完了/完了）
- LocalStorageによるデータ永続化
- レスポンシブデザイン
