"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Đã gửi thành công! Decharmix sẽ liên hệ bạn sớm.");
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "form_submission_success",
            userData: {
              name: data.fullName,
              phone: data.phone,
            },
          });
        }
        reset();
      } else {
        alert("❌ Lỗi hệ thống. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    // Nền Form dùng màu Hồng siêu nhạt
    <section id="booking-form" className="py-24 bg-bg-pink">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Cột trái */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-primary font-bold tracking-wider text-sm">
            LIÊN HỆ NGAY
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mt-2 mb-6">
            Bắt đầu hành trình <br />
            <span className="text-primary">Sáng tạo của bạn</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Đừng ngại chia sẻ ý tưởng điên rồ nhất. Decharmix sẽ giúp bạn biến
            nó thành món phụ kiện "độc bản".
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <div className="text-center">
              <div className="font-bold text-2xl text-primary">500+</div>
              <div className="text-sm text-gray-400">Khách hàng</div>
            </div>
            <div className="w-px bg-light-pink h-12"></div>
            <div className="text-center">
              <div className="font-bold text-2xl text-secondary">4.9/5</div>
              <div className="text-sm text-gray-400">Đánh giá</div>
            </div>
          </div>
        </div>

        {/* Cột phải: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border-2 border-light-pink relative overflow-hidden"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative z-10 space-y-5"
          >
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Họ và tên
              </label>
              <input
                {...register("fullName", { required: true })}
                className="w-full px-5 py-4 rounded-xl bg-bg-pink border border-light-pink focus:border-primary focus:ring-2 focus:ring-light-pink outline-none transition-all text-gray-800 placeholder-gray-400"
                placeholder="Vd: Trúc Xinh"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Số điện thoại (Zalo)
              </label>
              <input
                {...register("phone", { required: true })}
                className="w-full px-5 py-4 rounded-xl bg-bg-pink border border-light-pink focus:border-primary focus:ring-2 focus:ring-light-pink outline-none transition-all text-gray-800 placeholder-gray-400"
                placeholder="0912..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Bạn quan tâm...
              </label>
              <div className="relative">
                <select
                  {...register("interest")}
                  className="w-full px-5 py-4 rounded-xl bg-bg-pink border border-light-pink focus:border-primary focus:ring-2 focus:ring-light-pink outline-none cursor-pointer text-gray-800"
                >
                  <option value="Tu_van_Mix">🎨 Tư vấn Mix đồ riêng</option>
                  <option value="Blind_Box">🎁 Mua Blind Box (Hộp mù)</option>
                  <option value="DIY_Kit">🛠 Mua bộ Kit tự làm</option>
                </select>
              </div>
            </div>

            {/* Nút gửi: Gradient từ Primary sang Secondary */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-md transform transition hover:-translate-y-1 hover:shadow-lg"
            >
              {isSubmitting ? "Đang gửi..." : "🚀 NHẬN TƯ VẤN NGAY"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
