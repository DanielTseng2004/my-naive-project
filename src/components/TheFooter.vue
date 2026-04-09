<template>
  <footer class="jp-footer">
    <div class="footer-container">
      <n-grid
        :cols="4"
        :x-gap="48"
        item-responsive
        responsive="screen"
      >
        <n-gi span="4 m:2">
          <div class="footer-brand">
            <div class="footer-logo">G-TECH</div>
            <div class="footer-seal">匠</div>
          </div>
          <p class="footer-slogan">
            打造最懂開發者的東方美學組件庫。<br />
            在程式碼的純粹中，透過 Gemini AI 尋求技術與藝術的共鳴。
          </p>
        </n-gi>

        <n-gi span="2 m:1">
          <h4 class="footer-h">資源</h4>
          <n-space
            vertical
            :size="12"
          >
            <n-button
              text
              class="f-link"
              >GitHub</n-button
            >
            <n-button
              text
              class="f-link"
              >NPM Registry</n-button
            >
            <n-button
              text
              class="f-link"
              >設計資源</n-button
            >
          </n-space>
        </n-gi>

        <n-gi span="2 m:1">
          <h4 class="footer-h">聯絡我們</h4>
          <div class="contact-info">
            <p>Tokyo / Taipei</p>
            <p>contact@g-tech.design</p>
          </div>
        </n-gi>
      </n-grid>

      <n-divider class="footer-divider" />

      <div class="footer-bottom">
        <span>© 2026 GEMINI TECH. ALL RIGHTS RESERVED.</span>
        <span>侘寂之美，智慧之源</span>
      </div>
    </div>
  </footer>
</template>
