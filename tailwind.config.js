export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0a0e27',
        'dark-secondary': '#0f1419',
        'neon-cyan': '#00f0ff',
        'neon-magenta': '#ff00ff',
        'neon-green': '#00ff41',
        'text-primary': '#e0e0e0',
        'text-muted': '#808080',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'holographic': 'holographic-rotate 3s ease infinite',
        'scanline': 'scanline 8s linear infinite',
        'fill-bar': 'fill-bar 1.5s ease-out forwards',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff',
        'neon-magenta': '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
        'neon-green': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
      },
    },
  },
  plugins: [],
}
