<template>
  <div class="page-container">
    <n-h1>組件庫 / <small>コンポーネント</small></n-h1>

    <n-tabs
      type="line"
      animated
    >
      <n-tab-pane
        name="basic"
        tab="基礎組件"
      >
        <n-space
          vertical
          :size="32"
          style="margin-top: 20px"
        >
          <n-alert
            title="設計規範"
            type="info"
          >
            所有基礎組件均已默認去除圓角，並適配「朱紅」主題色。
          </n-alert>
          <n-space>
            <n-button type="primary">主要按鈕</n-button>
            <n-button
              strong
              secondary
              type="primary"
              >次要按鈕</n-button
            >
            <n-button tertiary>第三按鈕</n-button>
          </n-space>
          <n-input
            placeholder="請輸入搜尋內容..."
            style="max-width: 400px"
          />
        </n-space>
      </n-tab-pane>

      <n-tab-pane
        name="ai"
        tab="AI 專屬組件 (Native)"
      >
        <n-space
          vertical
          :size="32"
          style="margin-top: 20px"
        >
          <n-alert
            title="多模態支援"
            type="success"
          >
            專為生成式 AI 設計的互動元件，支援文本、語音與圖像的無縫輸入。
          </n-alert>

          <div class="mock-ai-input">
            <span class="icon-sparkle">✦</span>
            <input
              type="text"
              placeholder="輸入提示詞，或上傳圖片與音訊..."
              class="ai-input-field"
            />
            <div class="action-icons">
              <span>🖼️</span>
              <span>🎤</span>
            </div>
          </div>

          <div class="mock-ai-bubble">
            <p class="typewriter">
              正在分析您的設計脈絡，為您生成最佳排版與配色方案...
            </p>
          </div>
        </n-space>
      </n-tab-pane>

      <n-tab-pane
        name="feedback"
        tab="數據與狀態"
      >
        <div class="zen-loading-container">
          <div class="breathing-dot"></div>
          <p class="zen-text">AI 推理中，在侘寂中尋找平衡...</p>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
