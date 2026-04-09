<template>
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
</template>

<script setup>
const features = [
  {
    title: "減法工藝",
    desc: "移除所有干擾開發者直覺的視覺噪音，讓介面像山水畫般呼吸。",
  },
  {
    title: "非對稱美",
    desc: "在佈局中引入靈活的非對稱元素，打破沉悶，注入動態流暢感。",
  },
  {
    title: "極致性能",
    desc: "如武士刀般精確的類型檢查與底層優化，確保每一次交互都清脆俐落。",
  },
];
</script>
