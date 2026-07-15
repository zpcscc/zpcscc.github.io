import { defineConfig, presetWind3, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
  ],
  shortcuts: {
    'animate-fade-in-up': 'animate-[fadeInUp_0.8s_ease-out_both]',
    'animate-blob': 'animate-[blob_8s_ease-in-out_infinite]',
    'animate-shift-bg': 'animate-[shiftBg_12s_ease_infinite]',
    'u-center': 'flex items-center justify-center',
    'u-center-start': 'flex items-center justify-start',
    'u-center-between': 'flex items-center justify-between',
    // chat shortcuts
    'chat-msg-content': 'leading-[1.7] text-15px color-[var(--ifm-font-color-base)] break-words',
    'chat-msg-img': 'max-w-400px max-h-300px rounded-lg mt-2 cursor-pointer object-contain',
  },
  theme: {
    colors: {
      primary: '#3b7ddd',
    },
    animation: {
      keyframes: {
        blink: '{0%,100%{opacity:1}50%{opacity:0}}',
      },
      durations: {
        blink: '1s',
      },
      timingFns: {
        blink: 'step-end',
      },
    },
  },
  content: {
    filesystem: [
      'src/**/*.{tsx,ts,jsx,js}',
      'docs/**/*.{md,mdx}',
      'docs-components/**/*.{md,mdx}',
      'docs-demo/**/*.{md,mdx}',
      'docs-thirdparty/**/*.{md,mdx}',
      'docs-utils/**/*.{md,mdx}',
      'blog/**/*.{md,mdx}',
    ],
  },
});
