<template>
  <div class="page-container">
    <n-h1>設計指南 / <small>デザインガイド</small></n-h1>

    <n-blockquote style="margin-bottom: 60px">
      「侘寂（Wabi-sabi）」是我們設計的核心。不追求極致的對稱，而是追求真實、簡約，以及在多模態
      AI 時代下的功能平衡。
    </n-blockquote>

    <n-h2>色彩哲學</n-h2>
    <n-grid
      :cols="4"
      :x-gap="24"
      :y-gap="24"
      item-responsive
      responsive="screen"
      style="margin-bottom: 60px"
    >
      <n-gi
        v-for="color in colors"
        :key="color.name"
        span="2 m:1"
      >
        <div
          class="color-swatch"
          :style="{ backgroundColor: color.hex }"
        >
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-hex">{{ color.hex }}</span>
            <p class="color-desc">{{ color.desc }}</p>
          </div>
        </div>
      </n-gi>
    </n-grid>

    <n-divider />

    <n-grid
      :cols="2"
      :x-gap="60"
      item-responsive
      responsive="screen"
      style="margin-top: 60px"
    >
      <n-gi span="2 m:1">
        <n-h2>排版與易讀性 (Typography)</n-h2>
        <p class="guide-text">
          面對 AI
          系統生成的長篇幅文本與複雜程式碼，易讀性是首要考量。我們規範了嚴謹的行距（1.8）與字重對比，確保在吸收高密度知識時，使用者的眼睛依然能感到放鬆與專注。
        </p>
      </n-gi>

      <n-gi span="2 m:1">
        <n-h2>動態規範 (Motion)</n-h2>
        <p class="guide-text">
          拒絕浮誇的過渡特效。所有元件的互動必須如「流水」般自然，或如「武士刀」出鞘般乾脆俐落。當
          AI
          進行大量運算與推理時，我們使用緩慢的「呼吸」動態代替令人焦慮的旋轉圖示，維持介面的禪意。
        </p>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
const colors = [
  {
    name: "朱紅 (Shu)",
    hex: "#8E1C19",
    desc: "作為強烈的情感與重要的互動指引。",
  },
  {
    name: "墨黑 (Sumi)",
    hex: "#1A1A1A",
    desc: "代表深邃的 AI 知識庫與厚重的結構邊界。",
  },
  {
    name: "和紙白 (Washi)",
    hex: "#FCFCF8",
    desc: "提供大面積呼吸空間的溫潤底色。",
  },
  {
    name: "銀鼠 (Gin-nezu)",
    hex: "#AEAFAD",
    desc: "用於次要訊息與邊框，降低視覺噪音。",
  },
];
</script>
