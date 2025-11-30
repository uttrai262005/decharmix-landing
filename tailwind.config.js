/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Khai báo bộ màu bạn yêu cầu
        primary: "#fe98bf" /* Hồng nhạt chủ đạo */,
        secondary: "#f6bcf1" /* Hồng tím nhạt (Hover) */,
        "light-pink": "#ffe2f2" /* Viền, nền nhẹ */,
        "bg-pink": "#fff5f9" /* Nền hồng siêu nhạt */,
        "bg-cream": "#ffffeb" /* Nền kem vàng */,
        "text-dark": "#4a4a4a" /* Màu chữ đậm (thay vì đen sì) cho dịu mắt */,
      },
    },
  },
  plugins: [],
};
