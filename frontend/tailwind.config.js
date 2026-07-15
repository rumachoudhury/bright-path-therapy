// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         paper: "#F7F4EC",
//         "paper-dim": "#F1ECE0",
//         ink: "#16332E",
//         "ink-soft": "#43594F",
//         sage: "#DCE7DA",
//         "sage-deep": "#B9CDB8",
//         coral: "#E86F4B",
//         "coral-deep": "#CC5A38",
//         sun: "#EEB43D",
//         line: "rgba(22,51,46,0.14)",
//       },
//       fontFamily: {
//         display: ["var(--font-fraunces)", "serif"],
//         sans: ["var(--font-inter)", "sans-serif"],
//       },
//       borderRadius: {
//         lg2: "28px",
//         md2: "18px",
//       },
//       boxShadow: {
//         soft: "0 18px 40px -22px rgba(22,51,46,0.35)",
//       },
//       keyframes: {
//         waveBeat: {
//           "0%, 100%": { transform: "scaleY(0.55)" },
//           "50%": { transform: "scaleY(1)" },
//         },
//       },
//       animation: {
//         waveBeat: "waveBeat 1.4s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#CC5A38",
        "coral-deep": "#B84B2D",
        sun: "#F4C95D",
        ink: "#1F2937",
        "ink-soft": "#6B7280",
        line: "#E5E7EB",
        "paper-dim": "#F8F5F2",
      },
    },
  },
  plugins: [],
};
