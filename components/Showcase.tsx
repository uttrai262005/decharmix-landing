"use client";
import { motion } from "framer-motion";

// Dữ liệu sản phẩm thật từ bạn cung cấp
const products = [
  {
    id: 1,
    title: "Gift Box Kit DIY",
    price: "49.000₫ - 59.000₫",
    desc: "Set quà tặng tự làm gồm Gương, Lược, Kẹp tóc, Charm... Thỏa sức sáng tạo món đồ 1-0-2.",
    tags: ["3-4 món", "Hồng/Xanh/Vàng/Tím"],
    color: "bg-purple-50", // Nền màu tím nhạt
    imagePlaceholder: "🎁",
  },
  {
    id: 2,
    title: "Set Decor Thẻ Tên",
    price: "23.000₫",
    desc: "Bao đựng thẻ học sinh/sinh viên Acrylic trong suốt kèm Charm và Keo. Tự tay trang trí cực xinh.",
    tags: ["Ngang/Dọc", "Acrylic cứng"],
    color: "bg-blue-50", // Nền màu xanh nhạt
    imagePlaceholder: "uD83C\uDFF7️",
  },
  {
    id: 3,
    title: "Túi Mù (Blind Bag)",
    price: "9.000₫ - 33.000₫",
    desc: "Thử thách nhân phẩm với túi charm bí mật. Hồi hộp bóc quà, sưu tập charm hiếm.",
    tags: ["Bất ngờ", "Hot Trend"],
    color: "bg-yellow-50", // Nền màu vàng nhạt
    imagePlaceholder: "❓",
  },
];

export default function Showcase() {
  // Hàm cuộn xuống Form khi bấm Mua
  const scrollToForm = (productName: string) => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      // Logic mở rộng: Tự động điền tên sản phẩm vào form (nếu muốn)
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider text-sm border border-light-pink px-3 py-1 rounded-full">
            BEST SELLER
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-dark mt-4">
            Bộ Sưu Tập <span className="text-primary">Decharmix</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Những món phụ kiện "keo lỳ" nhất đang chờ bạn rinh về.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${item.color} group rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-light-pink cursor-pointer flex flex-col`}
            >
              {/* Vùng Ảnh Sản Phẩm (Giả lập) */}
              <img
                src={
                  index === 0
                    ? "/gift-set.jpg"
                    : index === 1
                    ? "/the-ten.jpg"
                    : "/tui-mu.jpg"
                }
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Thông tin */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold px-2 py-1 bg-white rounded-md text-gray-500 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Giá & Nút Mua */}
              <div className="mt-4 pt-4 border-t border-black/5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-bold uppercase">
                    Giá chỉ từ
                  </span>
                  <span className="text-xl font-extrabold text-primary">
                    {item.price}
                  </span>
                </div>
                <button
                  onClick={() => scrollToForm(item.title)}
                  className="px-5 py-3 bg-white text-text-dark rounded-xl text-sm font-bold shadow-md hover:bg-primary hover:text-white transition-all transform active:scale-95"
                >
                  Chọn Mua ➜
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
