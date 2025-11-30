// app/page.tsx
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Màn hình chính gây ấn tượng */}
      <Hero />

      {/* 2. Trưng bày sản phẩm (Bổ sung mới) */}
      <Showcase />

      {/* 3. Form đăng ký tư vấn */}
      <BookingForm />

      {/* 4. Feedback & Thông tin pháp lý (Bổ sung mới) */}
      <Footer />

      {/* 5. Nút Zalo nổi (Floating Button) - Code nhanh tại đây */}
      <a
        href="https://zalo.me/0384274089"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all animate-bounce"
      >
        <span className="font-bold text-sm">Chat Zalo</span>
      </a>
    </main>
  );
}
