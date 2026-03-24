import {
  defineConfig,
  presetWind3,
  presetAttributify,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
  ],
  shortcuts: {
    'animate-fade-in-up': 'animate-[fadeInUp_0.8s_ease-out_both]',
    'animate-blob': 'animate-[blob_8s_ease-in-out_infinite]',
    'animate-shift-bg': 'animate-[shiftBg_12s_ease_infinite]',
  },
  content: {
    filesystem: [
      'src/**/*.{tsx,ts,jsx,js}',
      'docs/**/*.{md,mdx}',
      'blog/**/*.{md,mdx}',
    ],
  },
});
