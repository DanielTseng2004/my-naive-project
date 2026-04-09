<template>
  <nav class="jp-nav">
    <div
      class="logo-box"
      @click="$router.push('/')"
      style="cursor: pointer"
    >
      <span class="logo-text">G-TECH</span>
      <span class="logo-sub">ジェミニ</span>
    </div>

    <n-space
      :size="32"
      align="center"
    >
      <n-button
        text
        @click="$router.push('/tech')"
        class="nav-link"
        >核心技術</n-button
      >
      <n-button
        text
        @click="$router.push('/components')"
        class="nav-link"
        >組件庫</n-button
      >
      <n-button
        text
        @click="$router.push('/design')"
        class="nav-link"
        >設計指南</n-button
      >

      <n-divider vertical />

      <n-button
        strong
        secondary
        type="primary"
        class="cta-button"
      >
        開始使用
      </n-button>
    </n-space>
  </nav>
</template>
