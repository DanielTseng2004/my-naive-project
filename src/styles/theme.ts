/**
 * Naive UI 主題覆蓋設定
 * 貫徹侘寂美學：無圓角、高對比、朱紅點綴
 */
export const themeOverrides = {
  common: {
    primaryColor: "#8E1C19", // 朱紅
    primaryColorHover: "#A6211D",
    primaryColorPressed: "#6B1512",
    borderRadius: "0px", // 徹底去除圓角
    bodyColor: "#FCFCF8", // 和紙白
    textColorBase: "#1A1A1A", // 墨黑
  },
  Button: {
    borderRadiusMedium: "0px",
    fontWeight: "700",
  },
  Card: {
    borderRadius: "0px",
    borderColor: "rgba(0, 0, 0, 0.08)",
  },
  Input: {
    borderRadius: "0px",
  },
  Tabs: {
    panePaddingMedium: "24px 0",
    barColor: "#8E1C19",
  },
};
