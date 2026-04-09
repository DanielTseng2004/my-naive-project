<template>
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-content">
        <n-text
          depth="3"
          class="hero-subtitle"
        >
          <span class="red-dash"></span> EASTERN MINIMALISM NEXT-GEN
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
          結合東方侘寂美學與現代開發效率。我們不只是提供工具，更在數位空間中建立一種平衡、安靜且充滿力量的視覺秩序。
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
          <p class="p-gray">... installing components</p>
          <p><span class="p-green">✓</span> Success. Experience the Zen.</p>
        </div>
      </div>
    </div>
  </section>
</template>
