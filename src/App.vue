<script setup>
import { NConfigProvider, NLoadingBarProvider, NGlobalStyle } from "naive-ui";
import { themeOverrides } from "./styles/theme";
import "./all-in-one.css";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-global-style />
    <n-loading-bar-provider>
      <div class="jp-layout">
        <TheNavbar />
        <main class="router-content">
          <router-view v-slot="{ Component }">
            <transition
              name="fade-slide"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
        <TheFooter />
        <div class="bg-decorative-text">ジェミニ・テクノロジー</div>
      </div>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
