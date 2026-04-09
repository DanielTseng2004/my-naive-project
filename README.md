# GEMINI TECH - 東方美學與 AI 整合組件庫

> **結合東方侘寂（Wabi-sabi）美學與次世代多模態 AI 介面展示的 Vue 3 專案。**

本專案是一個基於 **Vue 3** 與 **Naive UI** 的概念驗證展示站點，旨在探索如何將傳統東方視覺元素（如朱紅、墨黑、和紙質感）與現代 AI 互動介面（如打字機效果、呼吸感加載）相結合。

---

## 核心特色

### 🎨 東方侘寂美學 (Wabi-sabi Design)
- **經典配色**：深入運用朱紅 (`#8e1c19`)、墨黑 (`#1a1a1a`)、與和紙白 (`#fcfcf8`)。
- **質感背景**：全域套用 `natural-paper` 紋理背景，營造實體紙張的視覺深度。
- **排版藝術**：融合 `Hiragino Mincho` 與 `Noto Serif` 等襯線字體，展現優雅的文字韻律。
- **極簡結構**：強制移除 Naive UI 組件的圓角（`border-radius: 0`），強調俐落的直角與不對稱美。

### 🤖 AI 互動體驗展示
- **多模態模擬**：內建模擬 AI 輸入介面，支援語音與圖片操作圖示展示。
- **動態效果**：整合 CSS 動畫實現的「打字機效果」模擬 AI 回覆過程。
- **禪意加載**：獨創 `Zen Loading` 呼吸點動畫，減少使用者等待時的焦慮感。

### 🏗️ 純淨技術架構
- **單一入口樣式**：所有自定義 CSS 邏輯集中於 `src/all-in-one.css`，易於維護與調整。
- **強型別支持**：完全採用 TypeScript 撰寫，確保組件開發的穩定性。
- **極速建構**：基於 Vite 的開發環境，提供秒級的熱更新體驗。

---

## 技術棧

| 類別 | 技術 |
| :--- | :--- |
| **框架** | [Vue 3](https://vuejs.org/) (Composition API) |
| **UI 庫** | [Naive UI](https://www.naiveui.com/) |
| **建構工具** | [Vite](https://vitejs.dev/) |
| **路由** | [Vue Router 4](https://router.vuejs.org/) |
| **語言** | [TypeScript](https://www.typescriptlang.org/) |
| **樣式** | CSS 3 (自定義變數與動畫) |

---

## 快速開始

### 1. 安裝環境
確保您的系統已安裝 [Node.js](https://nodejs.org/)。

```bash
# 克隆專案後進入目錄
cd my-naive-project

# 安裝依賴
npm install
```

### 2. 本地開發
啟動開發伺服器：
```bash
npm run dev
```

### 3. 專案打包
編譯並優化生產環境版本：
```bash
npm run build
```

---

## 專案結構

```text
src/
├── assets/          # 靜態資源
├── components/      # 通用組件 (Navbar, Footer, Hero)
├── router/          # 路由配置
├── styles/          # Naive UI 主題覆寫 (theme.ts)
├── views/           # 頁面組件 (Home, Tech, Component, Design)
├── all-in-one.css   # 全域核心樣式表
├── App.vue          # 根組件
└── main.ts          # 專案入口
```

---

## 設計哲學

> 「不完全、不永恆、不完美。」

本專案在設計上遵循以下原則：
1. **減法工藝**：移除多餘的裝飾，只保留核心內容。
2. **非對稱美**：利用佈局的留白與錯位，創造視覺上的動態平衡。
3. **質感至上**：透過 CSS 變數與細微的紋理，打破數位介面的冰冷感。

---

## 授權說明
本專案僅供學習與展示用途。
