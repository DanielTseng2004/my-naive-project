<template>
  <div class="page-container">
    <div class="page-header">
      <span class="vertical-label">TECHNOLOGY</span>
      <n-h1>核心技術 / <small>コア技術</small></n-h1>
    </div>

    <n-p class="lead-text">
      G-TECH 採用最尖端的渲染引擎與 AI
      基礎設施，確保在極致簡約的視覺下，依然保有武士刀般的性能表現與深不可測的智慧。
    </n-p>

    <n-grid
      :cols="2"
      :x-gap="60"
      :y-gap="60"
      item-responsive
      responsive="screen"
      class="tech-grid"
    >
      <n-gi span="2 m:1">
        <n-h3 class="tech-h3">百萬級脈絡視窗</n-h3>
        <n-p>
          底層支援高達百萬 Token 的超大脈絡視窗（Context
          Window）。能夠在單次互動中分析龐大的程式碼庫、長篇影片或大型文件庫。不再受限於記憶碎片，讓開發與設計一氣呵成。
        </n-p>
      </n-gi>

      <n-gi span="2 m:1">
        <n-h3 class="tech-h3">全方位生成引擎</n-h3>
        <ul class="tech-list">
          <li>
            <strong>影像工坊：</strong
            >內建頂尖影像生成技術，支援多圖融合、對話式編輯，精準控制每一寸視覺。
          </li>
          <li>
            <strong>動態視覺：</strong
            >將文字或靈感瞬間轉化為高品質動態影片，讓靜態設計活現。
          </li>
          <li>
            <strong>專屬配樂：</strong
            >根據特定情緒或專案氛圍，生成專屬聲音軌道，打造沉浸式體驗。
          </li>
        </ul>
      </n-gi>

      <n-gi span="2 m:1">
        <n-h3 class="tech-h3">即時互動模式 (Live Mode)</n-h3>
        <n-p>
          猶如面對面般的實時對話功能。允許開發者在介面上大聲激盪靈感，中途打斷並修正思路，或是進行流暢的檔案與畫面討論，讓系統成為真正的協作夥伴。
        </n-p>
      </n-gi>

      <n-gi span="2 m:1">
        <n-h3 class="tech-h3">武士刀般的渲染速度</n-h3>
        <n-p>
          基於 Vue 3 的 Composition API 與 Naive UI，我們消除了冗餘的 CSS
          載入。結合 Wasm 模組處理複雜計算邏輯，確保每次多模態輸出都清脆俐落。
        </n-p>
        <n-statistic
          label="平均渲染延遲"
          value="1.2"
        >
          <template #suffix>ms</template>
        </n-statistic>
      </n-gi>
    </n-grid>
  </div>
</template>
