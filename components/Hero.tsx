"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Nền chuyển từ Kem sang Hồng siêu nhạt
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-bg-cream to-bg-pink overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge nhỏ */}
          <span className="inline-block py-2 px-4 rounded-full bg-white text-primary text-sm font-bold mb-6 shadow-sm border border-light-pink">
            ✨ HANDMADE WITH LOVE
          </span>

          {/* Tiêu đề chính */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-dark mb-6 tracking-tight">
            Mix your way. <br />
            {/* Chữ màu Hồng nhạt chủ đạo */}
            <span className="text-primary drop-shadow-sm">Slay all day.</span>
          </h1>

          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Phụ kiện đậm chất Gen Z. Bạn lên ý tưởng, Decharmix thực hiện. Mỗi
            hạt charm là một câu chuyện riêng.
          </p>

          {/* Nút bấm */}
          <div className="flex justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 TỰ TẠO CHẤT RIÊNG
            </button>
            <button className="bg-white text-text-dark border border-light-pink px-8 py-4 rounded-full text-lg font-bold hover:bg-bg-pink transition-all">
              Xem Bộ Sưu Tập
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hiệu ứng trang trí nền (Blobs) */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
}
