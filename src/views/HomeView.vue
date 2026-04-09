<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-inner">
        <div class="hero-content">
          <n-text
            depth="3"
            class="hero-subtitle"
          >
            <span class="red-dash"></span> EASTERN MINIMALISM × MULTIMODAL AI
          </n-text>
          <n-gradient-text
            type="primary"
            :size="96"
            weight="900"
            class="hero-title"
          >
            GEMINI TECH
          </n-gradient-text>
          <p class="hero-description">
            結合東方侘寂美學與次世代多模態 AI 能力。我們不只是提供 UI
            工具，更在數位空間中建立一種能同時優雅處理文本、圖像、音頻與影片的無縫視覺秩序。
          </p>

          <n-space
            :size="24"
            style="margin-top: 40px"
          >
            <n-button
              type="primary"
              size="large"
              style="padding: 0 48px"
            >
              即刻體驗
            </n-button>
            <n-button
              tertiary
              size="large"
            >
              專案文件
            </n-button>
          </n-space>
        </div>

        <div class="terminal-box">
          <div class="terminal-header">
            <div class="dots"><span></span><span></span><span></span></div>
          </div>
          <div class="terminal-body">
            <p><span class="p-red">❯</span> npm create vite@latest g-tech</p>
            <p class="p-gray">... integrating multimodal engine</p>
            <p>
              <span class="p-green">✓</span> Success. Experience the Zen &
              Intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-container">
      <div class="section-header">
        <span class="vertical-label">PHILOSOPHY</span>
        <h2 class="main-h2">設計哲學 / <small>意匠の哲学</small></h2>
      </div>

      <n-grid
        :cols="3"
        :x-gap="32"
        :y-gap="32"
        item-responsive
        responsive="screen"
      >
        <n-gi
          v-for="(item, idx) in features"
          :key="idx"
          span="m:1 s:3"
        >
          <n-card class="feature-card">
            <template #header-extra>
              <span class="card-index">0{{ idx + 1 }}</span>
            </template>
            <template #header>{{ item.title }}</template>
            {{ item.desc }}
            <div class="card-footer-line"></div>
          </n-card>
        </n-gi>
      </n-grid>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    title: "減法工藝",
    desc: "移除所有干擾開發者直覺的視覺噪音，讓介面像山水畫般呼吸，專注於內容本身。",
  },
  {
    title: "非對稱美",
    desc: "在佈局中引入靈活的非對稱元素，打破沉悶，為靜態頁面注入動態流暢感。",
  },
  {
    title: "多模態智慧",
    desc: "原生支援自然語言理解，無縫渲染跨資料類型（文本、圖像、音訊）的生成式 UI。",
  },
];
</script>
