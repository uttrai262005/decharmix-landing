export default function Footer() {
  return (
    <footer className="bg-bg-cream pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Phần Feedback (Social Proof) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-b border-light-pink pb-12">
          <div>
            <h3 className="text-2xl font-bold text-text-dark mb-6">
              Khách hàng nói gì? 💬
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-light-pink italic text-gray-600 mb-4">
              "Mình cực thích cảm giác tự tay xâu từng hạt charm. Shop đóng gói
              siêu xinh, hộp Blind box mở ra toàn charm đẹp!"
              <div className="mt-4 flex items-center gap-2 not-italic">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-bold text-sm text-primary">
                  Phương Ly - TP.HCM
                </span>
              </div>
            </div>
          </div>

          {/* Phần Cam kết */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <h4 className="font-bold text-text-dark">Bảo hành 1 đổi 1</h4>
                <p className="text-sm text-gray-500">
                  Nếu sản phẩm lỗi do vận chuyển
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                🚀
              </div>
              <div>
                <h4 className="font-bold text-text-dark">Freeship Xtra</h4>
                <p className="text-sm text-gray-500">Cho đơn hàng từ 199k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phần Footer Chính (Policy) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-500">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-lg text-primary mb-4">
              Decharmix Studio
            </h4>
            <p className="mb-2">
              Thương hiệu phụ kiện Handmade cá nhân hóa dành cho giới trẻ.
            </p>
            <p>🏠 Địa chỉ: KTX Khu B, ĐHQG TP.HCM</p>
            <p>☎️ Hotline: 0912.345.678</p>
            <p>📧 Email: support@decharmix.id.vn</p>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-4">Về chúng tôi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Câu chuyện thương hiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Hợp tác (Collab)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-4">
              Chính sách (Bắt buộc)
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Chính sách đổi trả
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 text-xs text-gray-400">
          © 2025 Decharmix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
