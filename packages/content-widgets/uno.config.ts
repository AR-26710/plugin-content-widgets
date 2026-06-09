import { defineConfig, presetIcons, presetWind3 } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      warn: true,
    }),
  ],
  shortcuts: {
    "bg-card": "bg-[var(--cw-bg-card,#fff)]",
    "border-card": "border-[var(--cw-border,#e4e4e7)]",
    "border-hover-card": "hover:border-[var(--cw-primary,#3b82f6)]",
    "text-title": "text-[var(--cw-text-strong,#18181b)]",
    "text-description": "text-[var(--cw-text-muted,#71717a)]",
    "text-link": "text-[var(--cw-primary,#3b82f6)]",
    "bg-skeleton": "bg-[var(--cw-bg-soft,#e4e4e7)]",
  },
});
